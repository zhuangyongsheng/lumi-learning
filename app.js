'use strict';

const STORAGE_KEY = 'lumi-learning-v1';
const lessonNames = { animals: '动物朋友', colors: '缤纷颜色', food: '美味时刻', numbers: '数字乐园', alphabet: '字母捉迷藏' };
const courseWords = window.LUMI_COURSE_WORDS;
const dailyWords = Object.entries(courseWords).flatMap(([topic, words]) => words.map(word => ({ ...word, topic })));
const colorSwatches = Object.fromEntries(courseWords.colors.map(word => [word.word, word.color]));
const lessons = Object.fromEntries(Object.entries(courseWords).map(([key, words]) => [key, words.map((word, index) => ({
  title: key === 'numbers' ? `数字 ${word.number} 的英语名字是？` : `哪个单词是“${word.meaning}”？`,
  prompt: key === 'numbers' ? 'Let’s count together.' : 'Listen, notice, and try.',
  stimulus: key === 'numbers' ? String(word.number) : word.meaning,
  choices: [word.word, words[(index + 1) % words.length].word, words[(index + 2) % words.length].word],
  correct: word.word,
  colors: key === 'colors' ? colorSwatches : null,
  study: word
}))]));
const letters = 'abcdefghijklmnopqrstuvwxyz'.split('');
lessons.alphabet = letters.map((letter, index) => ({
  title: `谁是大写 ${letter.toUpperCase()} 的小写朋友？`,
  prompt: 'Find the matching lowercase letter.',
  stimulus: letter.toUpperCase(),
  choices: [letter, letters[(index + 1) % letters.length], letters[(index + 3) % letters.length]],
  correct: letter
}));
const defaultModuleOrder = ['courses', 'alphabet', 'daily-word', 'life', 'phonetics', 'adventure', 'rewards'];
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];
const wordGroups = window.LUMI_WORD_GROUPS;
const vocabulary = wordGroups.flatMap(group => group.words.map(word => ({ ...word, topic: group.id })));
const wordsById = new Map(vocabulary.map(word => [word.word, word]));
const topicsById = new Map(wordGroups.map(group => [group.id, group]));
const phonemes = window.LUMI_PHONEMES;
const soundsById = new Map(phonemes.map(sound => [sound.id, sound]));
const emptyState = () => ({ solved: Object.fromEntries(Object.keys(lessons).map(key => [key, []])), learningDays: [], wordDays: [], learnedWords: [], learnedSounds: [], moduleOrder: [...defaultModuleOrder] });
let lifeTopic = 'all';
let lifePage = 1;
const pageSize = 12;
let soundGroup = 'short';
let wordSession = null;
let currentSound = null;
let wordOpener = null;
let soundOpener = null;
let soundAnswered = false;
let localVoices = [];
let speechGeneration = 0;
let activeSpeechHint = null;
let persistent = true;
let storageMessage = '';
let state = readState();
let quiz = null;
let quizOpener = null;
let toastTimer;
let dailyTimer;
let dailyWordDate = '';
let dailyWord = null;
let moduleDrag = null;
let dragScrollFrame = 0;

function validDays(value) {
  return Array.isArray(value) ? [...new Set(value.filter(day => typeof day === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(day)))] : [];
}

function normalizeModuleOrder(value) {
  const saved = Array.isArray(value) ? value.filter(id => defaultModuleOrder.includes(id)) : [];
  return [...new Set([...saved, ...defaultModuleOrder])];
}

function readState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return emptyState();
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== 'object') throw new Error('Invalid local progress');
    const clean = emptyState();
    for (const key of Object.keys(lessons)) {
      const solved = parsed.solved?.[key];
      clean.solved[key] = Array.isArray(solved) ? [...new Set(solved.filter(index => Number.isInteger(index) && index >= 0 && index < lessons[key].length))] : [];
    }
    clean.learningDays = validDays(parsed.learningDays);
    clean.wordDays = validDays(parsed.wordDays);
    clean.learnedWords = Array.isArray(parsed.learnedWords) ? [...new Set(parsed.learnedWords.filter(id => wordsById.has(id)))] : [];
    clean.learnedSounds = Array.isArray(parsed.learnedSounds) ? [...new Set(parsed.learnedSounds.filter(id => soundsById.has(id)))] : [];
    clean.moduleOrder = normalizeModuleOrder(parsed.moduleOrder);
    return clean;
  } catch (error) {
    storageMessage = error instanceof SyntaxError || error.message === 'Invalid local progress' ? '本地记录无法读取，已从新的冒险开始。' : '当前浏览器无法保存进度，记录只在本次页面中有效。';
    if (!(error instanceof SyntaxError) && error.message !== 'Invalid local progress') persistent = false;
    return emptyState();
  }
}

function dayKey(date = new Date()) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
}

function wordForDate(date = new Date()) {
  const calendarDay = Math.floor(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) / 86400000);
  return dailyWords[((calendarDay % dailyWords.length) + dailyWords.length) % dailyWords.length];
}

function updateDailyWord(date = new Date()) {
  const today = dayKey(date);
  if (today === dailyWordDate) return;
  if (activeSpeechHint === $('#pronunciation-hint')) stopSpeech();
  dailyWordDate = today;
  dailyWord = wordForDate(date);
  $('#daily-word-text').textContent = dailyWord.word;
  $('#daily-word-ipa').textContent = dailyWord.ipa;
  $('#daily-word-meaning').textContent = dailyWord.meaning;
  $('#daily-word-example').textContent = dailyWord.sentence[0];
  $('#daily-word-translation').textContent = dailyWord.sentence[1];
  $('#daily-word-topic').textContent = lessonNames[dailyWord.topic];
  $('#daily-word-date').textContent = today;
  $('#pronunciation-hint').hidden = true;
}

function scheduleDailyRefresh() {
  clearTimeout(dailyTimer);
  const now = new Date();
  const tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
  dailyTimer = setTimeout(() => { updateDashboard(); scheduleDailyRefresh(); }, tomorrow - now + 50);
}

function rememberDailyWord() {
  const now = new Date();
  updateDailyWord(now);
  const today = dayKey(now);
  if (state.wordDays.includes(today)) return;
  state.wordDays.push(today);
  recordDay();
  saveState();
  showToast(`${dailyWord.word}，${dailyWord.meaning}！今日单词已记住，获得 1 颗星星。`);
}

function starCount() {
  return Object.values(state.solved).reduce((total, solved) => total + solved.length, 0) + state.wordDays.length + state.learnedWords.length + state.learnedSounds.length;
}

function streakCount() {
  const date = new Date();
  if (!state.learningDays.includes(dayKey(date))) date.setDate(date.getDate() - 1);
  let count = 0;
  while (state.learningDays.includes(dayKey(date))) {
    count++;
    date.setDate(date.getDate() - 1);
  }
  return count;
}

function recordDay() {
  const today = dayKey();
  if (!state.learningDays.includes(today)) state.learningDays.push(today);
}

function saveState() {
  if (persistent) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      persistent = false;
      storageMessage = '当前浏览器无法保存进度，记录只在本次页面中有效。';
      showToast(storageMessage);
    }
  }
  updateDashboard();
}

function updateDashboard() {
  const stars = starCount();
  $$('[data-stars]').forEach(element => { element.textContent = stars; });
  $('#streak-count').textContent = streakCount();
  for (const key of Object.keys(lessons)) {
    const progress = $(`[data-progress="${key}"]`);
    if (!progress) continue;
    const percent = Math.round(state.solved[key].length / lessons[key].length * 100);
    progress.style.width = `${percent}%`;
    $(`[data-percent="${key}"]`).textContent = `${percent}%`;
    const card = $(`.course-card[data-start="${key}"]`);
    card.setAttribute('aria-label', `${lessonNames[key]}，进度 ${percent}%，${percent === 100 ? '再次练习' : '开始学习'}`);
  }
  $('#reward-goal').textContent = `${Math.min(stars, 10)} / 10`;
  $('#reward-fill').style.width = `${Math.min(stars / 10, 1) * 100}%`;
  $('#reward-progress').setAttribute('aria-valuenow', Math.min(stars, 10));
  $('#reward-goal-label').textContent = stars >= 10 ? '已点亮：闪亮探索家' : '下一站：闪亮探索家';
  $$('[data-badge]').forEach(badge => {
    const unlocked = stars >= Number(badge.dataset.badge);
    badge.classList.toggle('unlocked', unlocked);
    badge.setAttribute('aria-label', `${badge.querySelector('strong').textContent}，${unlocked ? '已获得' : '尚未获得'}，需要 ${badge.dataset.badge} 颗星`);
  });
  $('#reward-note').textContent = stars === 0 ? '你的第一颗星星，正等着你！' : stars < 10 ? '看，每一颗星星都是你的进步。' : '你真棒！继续探索，收集更多小惊喜。';
  $('#alphabet-progress').textContent = `已找到 ${state.solved.alphabet.length} / ${letters.length} 对字母`;
  updateDailyWord();
  const learned = state.wordDays.includes(dayKey());
  $('#remember-word').disabled = learned;
  $('#remember-word').innerHTML = learned ? '<svg class="icon"><use href="#i-check"/></svg>今天已记住，星星已收好' : '我记住啦<svg class="icon"><use href="#i-star"/></svg><span>+1</span>';
  if (!persistent) $('.privacy-note p').innerHTML = '进度暂时无法保存<span>仅本次页面有效 · 未上传任何信息</span>';
  applyModuleOrder();
  updateLearningProgress();
}

function showToast(message) {
  clearTimeout(toastTimer);
  $('#toast').textContent = message;
  $('#toast').hidden = false;
  toastTimer = setTimeout(() => { $('#toast').hidden = true; }, 4200);
}

function openQuiz(key) {
  stopSpeech();
  quizOpener = document.activeElement;
  quiz = { key, index: 0, earned: 0, answered: false };
  renderQuestion();
  $('#learning-dialog').showModal();
  $('#quiz-title').focus();
}

function renderQuestion() {
  stopSpeech();
  const question = lessons[quiz.key][quiz.index];
  const isLetters = quiz.key === 'alphabet';
  const choices = [...question.choices];
  for (let i = choices.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [choices[i], choices[j]] = [choices[j], choices[i]];
  }
  const word = question.study;
  $('#quiz-content').innerHTML = `<div class="quiz-eyebrow">${lessonNames[quiz.key]} · ${quiz.index + 1} / ${lessons[quiz.key].length}</div>
    <h2 class="quiz-title" id="quiz-title" tabindex="-1">${escapeHtml(question.title)}</h2>
    <p class="quiz-subtitle" lang="en">${escapeHtml(question.prompt)}</p>
    <div class="quiz-progress" aria-hidden="true">${lessons[quiz.key].map((_, index) => `<span class="${index <= quiz.index ? 'done' : ''}"></span>`).join('')}</div>
    <div class="quiz-stimulus ${isLetters || quiz.key === 'numbers' ? '' : 'word-stimulus'}" ${isLetters ? 'lang="en"' : ''}>${escapeHtml(question.stimulus)}</div>
    <div class="quiz-options" role="group" aria-label="选择正确答案">${choices.map(choice => `<button class="quiz-option" data-answer="${escapeHtml(choice)}" lang="en">${question.colors ? `<span class="color-swatch" style="background:${question.colors[choice]}" aria-hidden="true"></span>` : ''}<span>${escapeHtml(choice)}</span></button>`).join('')}</div>
    <p class="quiz-feedback" id="quiz-feedback" role="status">勇敢试一试，选错了也没关系。</p>
    ${word ? `<div class="quiz-word-detail" id="quiz-word-detail" hidden><div class="quiz-word-heading"><strong lang="en">${escapeHtml(word.word)}</strong><span>${escapeHtml(word.ipa)}</span><span>${escapeHtml(word.meaning)}</span></div><p class="quiz-example-en" lang="en">${escapeHtml(word.sentence[0])}</p><p class="quiz-example-zh">${escapeHtml(word.sentence[1])}</p><div class="speech-controls"><button class="audio-button" data-quiz-say="word">听单词</button><button class="audio-button" data-quiz-say="sentence">听例句</button><button class="text-button" data-stop-speech>停止朗读</button></div><p id="quiz-audio-status" role="status">一起听一听，再在生活中说一句。</p></div>` : ''}
    <button class="button button-dark quiz-next" id="quiz-next" disabled>${quiz.index === lessons[quiz.key].length - 1 ? '看看我的收获' : '继续下一题'}<svg class="icon"><use href="#i-arrow"/></svg></button>
    <p class="quiz-bottom">每题首次答对获得 1 颗星 · 可随时关闭休息，已获星星保留</p>`;
  quiz.answered = false;
}

function answerQuestion(button) {
  if (!quiz || quiz.answered || button.disabled) return;
  const question = lessons[quiz.key][quiz.index];
  const feedback = $('#quiz-feedback');
  if (button.dataset.answer !== question.correct) {
    button.classList.add('wrong');
    button.disabled = true;
    feedback.className = 'quiz-feedback retry';
    feedback.textContent = '差一点点，再试一次！慢慢来，你可以的。';
    const remaining = $$('.quiz-option:not(:disabled)');
    remaining[0]?.focus();
    return;
  }
  quiz.answered = true;
  button.classList.add('correct');
  $$('.quiz-option').forEach(option => { option.disabled = true; });
  const isNew = !state.solved[quiz.key].includes(quiz.index);
  if (isNew) {
    state.solved[quiz.key].push(quiz.index);
    quiz.earned++;
  }
  recordDay();
  saveState();
  feedback.className = 'quiz-feedback success';
  feedback.textContent = isNew ? `答对啦！${question.correct}，送你 1 颗小星星。` : `答对啦！你还记得 ${question.correct}。这题的星星已经收好啦。`;
  if (question.study) $('#quiz-word-detail').hidden = false;
  $('#quiz-next').disabled = false;
  $('#quiz-next').focus();
}

function nextQuestion() {
  if (!quiz?.answered) return;
  stopSpeech();
  if (quiz.index < lessons[quiz.key].length - 1) {
    quiz.index++;
    renderQuestion();
    $('#quiz-title').focus();
  } else {
    $('#quiz-content').innerHTML = `<div class="quiz-complete"><div class="complete-star" aria-hidden="true"><svg class="icon"><use href="#i-star"/></svg></div><div class="quiz-eyebrow">LITTLE STEPS, BIG PROGRESS</div><h2 id="quiz-title" tabindex="-1">冒险完成，你真棒！</h2><p>你完成了「${lessonNames[quiz.key]}」的 ${lessons[quiz.key].length} 道小挑战。</p><span class="quiz-earned">+${quiz.earned} <span style="font-size:18px">颗星星</span></span><p>${quiz.earned ? '每一次认真尝试，都让你闪闪发光。' : '温故知新也很棒！已获得的星星不会重复发放。'}</p><button class="button button-dark" id="quiz-finish">回到学习乐园<svg class="icon"><use href="#i-arrow"/></svg></button></div>`;
    $('#quiz-title').focus();
  }
}

$$('[data-start]').forEach(button => button.addEventListener('click', () => openQuiz(button.dataset.start)));
$('#quiz-close').addEventListener('click', () => $('#learning-dialog').close());
$('#learning-dialog').addEventListener('close', () => {
  stopSpeech();
  quiz = null;
  if (quizOpener?.isConnected) quizOpener.focus({ preventScroll: true });
  quizOpener = null;
});
$('#quiz-content').addEventListener('click', event => {
  if (!quiz) return;
  const answer = event.target.closest('[data-answer]');
  if (answer) answerQuestion(answer);
  const play = event.target.closest('[data-quiz-say]');
  if (play && quiz.answered) {
    const word = lessons[quiz.key][quiz.index].study;
    speakEnglish([play.dataset.quizSay === 'word' ? word.word : word.sentence[0]], $('#quiz-audio-status'));
  }
  if (event.target.closest('[data-stop-speech]')) stopSpeech();
  if (event.target.closest('#quiz-next')) nextQuestion();
  if (event.target.closest('#quiz-finish')) $('#learning-dialog').close();
});

function filterCourses() {
  const query = $('#course-search').value.trim().toLocaleLowerCase();
  let count = 0;
  $$('.course-card').forEach(card => {
    const vocabularyText = courseWords[card.dataset.start].map(word => `${word.word} ${word.meaning}`).join(' ');
    const match = !query || `${card.dataset.search} ${card.textContent} ${vocabularyText}`.toLocaleLowerCase().includes(query);
    card.hidden = !match;
    if (match) count++;
  });
  $('#course-count').textContent = `${count} 个主题`;
  $('#search-empty').hidden = count !== 0;
  $('#search-status').textContent = query ? `找到 ${count} 个主题课程。` : '显示全部 4 个主题课程。';
}
$('#course-search').addEventListener('input', filterCourses);
$('#search-form').addEventListener('submit', event => {
  event.preventDefault();
  filterCourses();
  $('#courses').scrollIntoView({ behavior: 'smooth', block: 'start' });
});
$('#clear-search').addEventListener('click', () => {
  $('#course-search').value = '';
  filterCourses();
  $('#course-search').focus({ preventScroll: true });
});

function applyModuleOrder() {
  for (const [selector, itemSelector] of [['#learning-modules', '.learning-module'], ['.main-nav', '.module-nav-item']]) {
    const container = $(selector);
    const items = $$(itemSelector);
    state.moduleOrder.forEach((id, index) => {
      const item = items.find(element => element.dataset.module === id);
      if (item && container.children[index] !== item) container.insertBefore(item, container.children[index] || null);
    });
  }
}

function moveModule(id, position) {
  const from = state.moduleOrder.indexOf(id);
  if (from < 0 || !Number.isInteger(position)) return false;
  const to = Math.max(0, Math.min(position, state.moduleOrder.length - 1));
  if (from === to) return false;
  const order = [...state.moduleOrder];
  order.splice(from, 1);
  order.splice(to, 0, id);
  state.moduleOrder = order;
  saveState();
  const name = $(`.module-nav-item[data-module="${id}"] .nav-link`).getAttribute('aria-label');
  $('#module-order-status').textContent = `${name}已移至第 ${to + 1} 位，${persistent ? '顺序已保存' : '顺序仅本次页面有效'}。`;
  return true;
}

function clearModuleDropTarget() {
  $$('.module-drop-before, .module-drop-after').forEach(item => item.classList.remove('module-drop-before', 'module-drop-after'));
}

function setModuleDropTarget(x, y) {
  clearModuleDropTarget();
  moduleDrag.targetId = null;
  const target = document.elementFromPoint(x, y)?.closest(moduleDrag.selector);
  if (!target || target.dataset.module === moduleDrag.id) return;
  const rect = target.getBoundingClientRect();
  moduleDrag.targetId = target.dataset.module;
  const horizontal = moduleDrag.selector === '.module-nav-item' && window.innerWidth <= 580;
  moduleDrag.after = horizontal ? x > rect.left + rect.width / 2 : y > rect.top + rect.height / 2;
  target.classList.add(moduleDrag.after ? 'module-drop-after' : 'module-drop-before');
}

function finishModuleDrag(commit) {
  if (!moduleDrag) return;
  const drag = moduleDrag;
  moduleDrag = null;
  cancelAnimationFrame(dragScrollFrame);
  drag.source.classList.remove('module-dragging');
  document.body.classList.remove('module-sorting');
  clearModuleDropTarget();
  if (commit && drag.targetId) {
    const remaining = state.moduleOrder.filter(id => id !== drag.id);
    moveModule(drag.id, remaining.indexOf(drag.targetId) + Number(drag.after));
    drag.handle.focus({ preventScroll: true });
  }
}

function beginModuleDrag(handle, pointerId = null) {
  const nav = handle.closest('.module-nav-item');
  const source = nav || handle.closest('.learning-module');
  moduleDrag = { id: source.dataset.module, selector: nav ? '.module-nav-item' : '.learning-module', source, handle, pointerId, targetId: null, after: false };
  source.classList.add('module-dragging');
  document.body.classList.add('module-sorting');
}

function scrollTouchDrag() {
  if (!moduleDrag || moduleDrag.pointerId === null) return;
  const { x, y } = moduleDrag;
  const nav = moduleDrag.source.closest('.main-nav');
  if (nav && nav.scrollWidth > nav.clientWidth) {
    const bounds = nav.getBoundingClientRect();
    nav.scrollLeft += x < bounds.left + 35 ? -12 : x > bounds.right - 35 ? 12 : 0;
    setModuleDropTarget(x, y);
  }
  const sidebar = moduleDrag.source.closest('.sidebar');
  const scrollBox = sidebar && sidebar.scrollHeight > sidebar.clientHeight ? sidebar : document.scrollingElement;
  const rect = scrollBox === document.scrollingElement ? { top: 0, bottom: window.innerHeight } : scrollBox.getBoundingClientRect();
  const step = y < rect.top + 55 ? -12 : y > rect.bottom - 55 ? 12 : 0;
  if (step) {
    scrollBox.scrollTop += step;
    setModuleDropTarget(x, y);
  }
  dragScrollFrame = requestAnimationFrame(scrollTouchDrag);
}

$$('.module-nav-item').forEach(item => { item.draggable = true; });
$$('[data-module-handle]').forEach(handle => {
  handle.addEventListener('keydown', event => {
    const delta = { ArrowUp: -1, ArrowLeft: -1, ArrowDown: 1, ArrowRight: 1 }[event.key];
    if (!delta) return;
    event.preventDefault();
    finishModuleDrag(false);
    moveModule(handle.dataset.moduleHandle, state.moduleOrder.indexOf(handle.dataset.moduleHandle) + delta);
    handle.focus({ preventScroll: true });
  });
  handle.addEventListener('pointerdown', event => {
    if (event.pointerType === 'mouse' || !event.isPrimary || event.button !== 0) return;
    event.preventDefault();
    finishModuleDrag(false);
    beginModuleDrag(handle, event.pointerId);
    Object.assign(moduleDrag, { x: event.clientX, y: event.clientY });
    handle.setPointerCapture(event.pointerId);
    dragScrollFrame = requestAnimationFrame(scrollTouchDrag);
  });
  handle.addEventListener('pointermove', event => {
    if (!moduleDrag || moduleDrag.pointerId !== event.pointerId) return;
    Object.assign(moduleDrag, { x: event.clientX, y: event.clientY });
    setModuleDropTarget(event.clientX, event.clientY);
  });
  handle.addEventListener('pointerup', event => {
    if (moduleDrag?.pointerId === event.pointerId) finishModuleDrag(true);
  });
  for (const type of ['pointercancel', 'lostpointercapture']) {
    handle.addEventListener(type, event => {
      if (moduleDrag?.pointerId === event.pointerId) finishModuleDrag(false);
    });
  }
});
document.addEventListener('dragstart', event => {
  const handle = event.target.closest('[data-module-handle]') || event.target.closest('.module-nav-item')?.querySelector('[data-module-handle]');
  if (!handle) return;
  if (moduleDrag) { event.preventDefault(); return; }
  beginModuleDrag(handle);
  event.dataTransfer.effectAllowed = 'move';
  event.dataTransfer.setData('text/plain', moduleDrag.id);
});
document.addEventListener('dragover', event => {
  if (!moduleDrag || moduleDrag.pointerId !== null) return;
  event.preventDefault();
  event.dataTransfer.dropEffect = 'move';
  setModuleDropTarget(event.clientX, event.clientY);
});
document.addEventListener('drop', event => {
  if (!moduleDrag || moduleDrag.pointerId !== null) return;
  event.preventDefault();
  setModuleDropTarget(event.clientX, event.clientY);
  finishModuleDrag(true);
});
document.addEventListener('dragend', () => finishModuleDrag(false));
document.addEventListener('keydown', event => { if (event.key === 'Escape') finishModuleDrag(false); });
window.addEventListener('blur', () => finishModuleDrag(false));

$$('.nav-link').forEach(link => link.addEventListener('click', () => {
  $$('.nav-link').forEach(other => { other.classList.remove('active'); other.removeAttribute('aria-current'); });
  link.classList.add('active');
  link.setAttribute('aria-current', 'location');
}));

$('#remember-word').addEventListener('click', rememberDailyWord);

$('#listen-word').addEventListener('click', () => {
  updateDashboard();
  speakEnglish([dailyWord.word], $('#pronunciation-hint'));
});

$('#reset-open').addEventListener('click', () => {
  $('#reset-dialog').showModal();
  $('#reset-cancel').focus();
});
$('#reset-cancel').addEventListener('click', () => $('#reset-dialog').close());
$('#reset-confirm').addEventListener('click', () => {
  finishModuleDrag(false);
  state = emptyState();
  saveState();
  stopSpeech();
  $('#pronunciation-hint').hidden = true;
  $('#reset-dialog').close();
  showToast(persistent ? '已重置本机学习进度。新的冒险，从这里开始！' : '已重置本次页面的学习进度；浏览器仍无法保存记录。');
});
window.addEventListener('storage', event => {
  if (event.key === STORAGE_KEY || event.key === null) {
    finishModuleDrag(false);
    state = readState();
    updateDashboard();
  }
});
function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]);
}

function filteredWords() {
  const query = $('#life-search').value.trim().toLocaleLowerCase();
  const filter = $('#life-filter').value;
  return vocabulary.filter(word => {
    const learned = state.learnedWords.includes(word.word);
    const text = [word.word, word.meaning, ...word.phrase, ...word.sentence, topicsById.get(word.topic).title].join(' ').toLocaleLowerCase();
    return (lifeTopic === 'all' || lifeTopic === word.topic) && (!query || text.includes(query)) && (filter === 'all' || (filter === 'learned' ? learned : !learned));
  });
}

function renderWordBrowser() {
  const words = filteredWords();
  const pageCount = Math.ceil(words.length / pageSize);
  lifePage = Math.min(lifePage, Math.max(1, pageCount));
  $('#life-results').textContent = `${lifeTopic === 'all' ? '全部生活场景' : topicsById.get(lifeTopic).title} · 找到 ${words.length} 个词`;
  $('#life-word-grid').innerHTML = words.slice((lifePage - 1) * pageSize, lifePage * pageSize).map(word => {
    const learned = state.learnedWords.includes(word.word);
    return `<button class="life-word-card ${learned ? 'practiced' : ''}" data-word="${escapeHtml(word.word)}" aria-label="${escapeHtml(`${word.word}，${word.meaning}，${learned ? '已练习，打开复习' : '打开学习'}`)}"><span class="word-card-top">${escapeHtml(topicsById.get(word.topic).title)}<span>${learned ? '已练习' : '听 · 说'}</span></span><strong lang="en">${escapeHtml(word.word)}</strong><span class="word-card-ipa">${escapeHtml(word.ipa)}</span><span class="word-card-meaning">${escapeHtml(word.meaning)}</span></button>`;
  }).join('');
  $('#life-empty').hidden = words.length !== 0;
  $('#life-page').textContent = pageCount ? `${lifePage} / ${pageCount}` : '0 / 0';
  $('#life-prev').disabled = lifePage <= 1;
  $('#life-next').disabled = lifePage >= pageCount;
  $$('[data-topic]').forEach(button => {
    const active = button.dataset.topic === lifeTopic;
    button.classList.toggle('active', active);
    button.setAttribute('aria-pressed', String(active));
  });
}

function renderPhonemeGrid() {
  $('#phoneme-grid').innerHTML = phonemes.filter(sound => sound.group === soundGroup).map(sound => {
    const learned = state.learnedSounds.includes(sound.id);
    return `<button class="phoneme-card ${learned ? 'practiced' : ''}" data-sound="${escapeHtml(sound.id)}" aria-label="${escapeHtml(`${sound.symbol}，例词 ${sound.examples[0].word}，${learned ? '已练习' : '开始学习'}`)}"><strong>${escapeHtml(sound.symbol)}</strong><span lang="en">${escapeHtml(sound.examples[0].word)}</span><small>${learned ? '已练习' : escapeHtml(sound.name)}</small></button>`;
  }).join('');
}

function updateLearningProgress() {
  $('#life-progress-label').textContent = `已一起练习 ${state.learnedWords.length} / ${vocabulary.length} 词`;
  $('#life-progress').value = state.learnedWords.length;
  $('#life-progress').max = vocabulary.length;
  $('#phonetics-progress').textContent = `已练习 ${state.learnedSounds.length} / ${phonemes.length}`;
  for (const group of wordGroups) {
    const count = group.words.filter(word => state.learnedWords.includes(word.word)).length;
    $(`[data-topic-progress="${group.id}"]`).textContent = `${count}/${group.words.length}`;
  }
  renderWordBrowser();
  renderPhonemeGrid();
  if (wordSession) {
    const learned = state.learnedWords.includes(wordSession.ids[wordSession.index]);
    $('#word-learn').disabled = learned;
    $('#word-learn').textContent = learned ? '已经一起练过啦' : '一起练过了 · +1 星';
  }
  if (currentSound) {
    const learned = state.learnedSounds.includes(currentSound.id);
    $('#sound-learn').disabled = learned;
    $('#sound-learn').textContent = learned ? '已经练习过啦' : '跟着练过了 · +1 星';
  }
}

function markPracticed(kind, id) {
  const records = kind === 'word' ? state.learnedWords : state.learnedSounds;
  const isNew = !records.includes(id);
  if (isNew) records.push(id);
  recordDay();
  saveState();
  return isNew;
}

function openWordSession(words, start = 0) {
  stopSpeech();
  wordOpener = document.activeElement;
  wordSession = { ids: words.map(word => word.word), index: start };
  renderStudyWord();
  $('#word-dialog').showModal();
  $('#study-word-title').focus();
}

function renderStudyWord() {
  stopSpeech();
  const word = wordsById.get(wordSession.ids[wordSession.index]);
  const group = topicsById.get(word.topic);
  const learned = state.learnedWords.includes(word.word);
  $('#word-content').innerHTML = `<div class="quiz-eyebrow">${escapeHtml(group.title)} · ${wordSession.index + 1} / ${wordSession.ids.length}</div>
    <h2 class="study-word-title" id="study-word-title" lang="en" tabindex="-1">${escapeHtml(word.word)}</h2>
    <div class="study-word-meta"><span>${escapeHtml(word.ipa)}</span><strong>${escapeHtml(word.meaning)}</strong><button class="audio-button" data-say="word">听单词</button></div>
    <details class="parent-prompt"><summary>给家长的小提示</summary><p>${escapeHtml(group.tip)}</p></details>
    <div class="study-language-block"><div class="study-block-title"><h3>常用短语</h3><button class="audio-button" data-say="phrase">听短语</button></div><p lang="en">${escapeHtml(word.phrase[0])}</p><p class="translation">${escapeHtml(word.phrase[1])}</p></div>
    <div class="study-language-block"><div class="study-block-title"><h3>生活里这样说</h3><button class="audio-button" data-say="sentence">听例句</button></div><p lang="en">${escapeHtml(word.sentence[0])}</p><p class="translation">${escapeHtml(word.sentence[1])}</p></div>
    <div class="study-dialogue"><div class="study-block-title"><h3>你一句，我一句</h3><button class="audio-button" data-say="dialogue">听完整对话</button></div>${word.dialogue.map((line, index) => `<div class="dialogue-line"><span class="speaker-label">${index === 0 ? '家长' : '孩子'}</span><div><p lang="en">${escapeHtml(line[0])}</p><p class="translation">${escapeHtml(line[1])}</p></div><button class="audio-button" data-say="line-${index}" aria-label="听${index === 0 ? '家长' : '孩子'}这一句">听一句</button></div>`).join('')}</div>
    <div class="study-audio-footer"><p id="word-audio-status" role="status">点按朗读，用耳朵认识这个词。</p><button class="text-button" data-stop-speech>停止朗读</button></div>
    <button class="button button-dark practice-button" id="word-learn" ${learned ? 'disabled' : ''}>${learned ? '已经一起练过啦' : '一起练过了 · +1 星'}</button><p class="practice-status" id="word-practice-status" role="status">家长陪孩子说过后再标记；重复练习不会重复发星。</p>
    <div class="study-navigation"><button class="button button-light" id="word-back" ${wordSession.index === 0 ? 'disabled' : ''}>上一个词</button><button class="button button-light" id="word-forward">${wordSession.index === wordSession.ids.length - 1 ? '完成这次学习' : '下一个词'}</button></div>`;
}

function renderStudySound() {
  stopSpeech();
  soundAnswered = false;
  const sound = currentSound;
  const group = phonemes.filter(item => item.group === sound.group);
  const index = group.findIndex(item => item.id === sound.id);
  const options = [sound, group[(index + 1) % group.length], group[(index + 2) % group.length]];
  for (let i = options.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [options[i], options[j]] = [options[j], options[i]];
  }
  const example = sound.examples[0];
  const learned = state.learnedSounds.includes(sound.id);
  $('#phoneme-content').innerHTML = `<div class="quiz-eyebrow">音标课堂 · ${index + 1} / ${group.length}</div><h2 class="study-sound-title" id="study-sound-title" tabindex="-1">${escapeHtml(sound.symbol)}</h2><p class="sound-name">${escapeHtml(sound.name)}</p><p class="parent-prompt">${escapeHtml(sound.tip)}</p>
    <div class="sound-examples">${sound.examples.map((item, i) => `<button class="sound-example" data-sound-say="${i}" aria-label="听例词 ${escapeHtml(item.word)}"><strong lang="en">${escapeHtml(item.word)}</strong><span>${escapeHtml(item.ipa)}</span><span>${escapeHtml(item.meaning)}</span><small>听例词</small></button>`).join('')}</div>
    <div class="sound-contrast"><h3>留意另一个声音</h3><p>听一听，对比 <span lang="en">${escapeHtml(example.word)}</span> 和 <span lang="en">${escapeHtml(sound.contrast.word)}</span>。</p><button class="audio-button" data-sound-say="contrast">听 ${escapeHtml(sound.contrast.word)} ${escapeHtml(sound.contrast.ipa)}</button><span>${escapeHtml(sound.contrast.meaning)}</span></div>
    <div class="sound-exercise"><h3>认一认</h3><p>下面单词中标出的部分，对应哪个音标？</p><p class="focus-word" lang="en">${escapeHtml(example.before)}<mark>${escapeHtml(example.focus)}</mark>${escapeHtml(example.after)}</p><div class="sound-options" role="group" aria-label="选择音标">${options.map(option => `<button class="sound-option" data-sound-answer="${escapeHtml(option.id)}">${escapeHtml(option.symbol)}</button>`).join('')}</div><p class="practice-status" id="sound-feedback" role="status">先听例词，再试着选一选。答对或标记练过，共享这一音素的 1 颗星。</p></div>
    <div class="study-audio-footer"><p id="sound-audio-status" role="status">播放的是完整例词，不是单独音素录音。</p><button class="text-button" data-stop-speech>停止朗读</button></div>
    <button class="button button-dark practice-button" id="sound-learn" ${learned ? 'disabled' : ''}>${learned ? '已经练习过啦' : '跟着练过了 · +1 星'}</button><p class="practice-status" id="sound-practice-status" role="status">能注意到一点不同，就是进步。</p><div class="study-navigation"><button class="button button-light" id="sound-back" ${index === 0 ? 'disabled' : ''}>上一个音标</button><button class="button button-light" id="sound-forward">${index === group.length - 1 ? '完成这一组' : '下一个音标'}</button></div>`;
}

function stopSpeech() {
  speechGeneration++;
  if (window.speechSynthesis) window.speechSynthesis.cancel();
  if (activeSpeechHint?.isConnected) activeSpeechHint.textContent = '朗读已停止，可以随时重听。';
  activeSpeechHint = null;
}

function refreshVoices() {
  const select = $('#voice-select');
  const selected = select.value;
  localVoices = (window.speechSynthesis?.getVoices() || []).filter(voice => voice.localService && /^en[-_]/i.test(voice.lang));
  localVoices.sort((a, b) => Number(/^en[-_]GB$/i.test(b.lang)) - Number(/^en[-_]GB$/i.test(a.lang)));
  select.replaceChildren();
  if (!localVoices.length) {
    select.add(new Option('没有可用的本机英语语音', ''));
    select.disabled = true;
  } else {
    select.disabled = false;
    localVoices.forEach(voice => select.add(new Option(`${voice.name} · ${voice.lang}`, voice.voiceURI)));
    if (localVoices.some(voice => voice.voiceURI === selected)) select.value = selected;
  }
}

function speakEnglish(lines, hint) {
  stopSpeech();
  refreshVoices();
  hint.hidden = false;
  const voice = localVoices.find(item => item.voiceURI === $('#voice-select').value);
  if (!voice || !window.SpeechSynthesisUtterance) {
    hint.textContent = '本机暂无可用英语语音，请在系统中安装英语语音包后重试；也可以由家长读给孩子听。';
    return;
  }
  activeSpeechHint = hint;
  const generation = speechGeneration;
  const readLine = index => {
    if (generation !== speechGeneration) return;
    const utterance = new SpeechSynthesisUtterance(lines[index]);
    utterance.voice = voice;
    utterance.lang = voice.lang;
    utterance.rate = $('#slow-speech').checked ? 0.75 : 0.95;
    hint.textContent = `准备播放本机语音 · ${voice.lang}…`;
    utterance.onstart = () => { if (generation === speechGeneration) hint.textContent = `正在读：${lines[index]}`; };
    utterance.onend = () => {
      if (generation !== speechGeneration) return;
      if (index + 1 < lines.length) readLine(index + 1);
      else { hint.textContent = '读完啦，再点一次可以重听。'; activeSpeechHint = null; }
    };
    utterance.onerror = () => {
      if (generation !== speechGeneration) return;
      hint.textContent = '语音暂时无法播放，请检查系统英语语音包，或换一种本机语音。';
      activeSpeechHint = null;
    };
    window.speechSynthesis.speak(utterance);
  };
  readLine(0);
}

$('#life-topics').innerHTML = `<button class="topic-chip active" data-topic="all" aria-pressed="true">全部场景 <span>${vocabulary.length}</span></button>${wordGroups.map(group => `<button class="topic-chip" data-topic="${group.id}" aria-pressed="false">${escapeHtml(group.title)} <span data-topic-progress="${group.id}">0/${group.words.length}</span></button>`).join('')}`;
$('#life-topics').addEventListener('click', event => {
  const button = event.target.closest('[data-topic]');
  if (!button) return;
  lifeTopic = button.dataset.topic;
  lifePage = 1;
  renderWordBrowser();
});
$('#life-search').addEventListener('input', () => { lifePage = 1; renderWordBrowser(); });
$('#life-filter').addEventListener('change', () => { lifePage = 1; renderWordBrowser(); });
$('#life-clear').addEventListener('click', () => {
  lifeTopic = 'all';
  lifePage = 1;
  $('#life-search').value = '';
  $('#life-filter').value = 'all';
  renderWordBrowser();
  $('#life-search').focus({ preventScroll: true });
});
$('#life-prev').addEventListener('click', () => { lifePage--; renderWordBrowser(); $('#life-results').scrollIntoView({ block: 'nearest' }); });
$('#life-next').addEventListener('click', () => { lifePage++; renderWordBrowser(); $('#life-results').scrollIntoView({ block: 'nearest' }); });
$('#life-word-grid').addEventListener('click', event => {
  const button = event.target.closest('[data-word]');
  if (!button) return;
  const words = filteredWords();
  openWordSession(words, words.findIndex(word => word.word === button.dataset.word));
});
$('#start-five').addEventListener('click', () => {
  const unlearned = vocabulary.filter(word => !state.learnedWords.includes(word.word));
  openWordSession((unlearned.length ? unlearned : vocabulary).slice(0, 5));
});
$('#word-close').addEventListener('click', () => $('#word-dialog').close());
$('#word-dialog').addEventListener('close', () => {
  stopSpeech();
  wordSession = null;
  const target = wordOpener?.isConnected && wordOpener.matches('button, input, select, a[href]') ? wordOpener : $('#life-search');
  target.focus({ preventScroll: true });
  wordOpener = null;
});
$('#word-content').addEventListener('click', event => {
  if (!wordSession) return;
  const word = wordsById.get(wordSession.ids[wordSession.index]);
  const play = event.target.closest('[data-say]');
  if (play) {
    const key = play.dataset.say;
    const lines = key === 'dialogue' ? word.dialogue.map(line => line[0]) : [key === 'word' ? word.word : key.startsWith('line-') ? word.dialogue[Number(key.slice(5))][0] : word[key][0]];
    speakEnglish(lines, $('#word-audio-status'));
  }
  if (event.target.closest('[data-stop-speech]')) stopSpeech();
  if (event.target.closest('#word-learn')) {
    const earned = markPracticed('word', word.word);
    $('#word-practice-status').textContent = earned ? '又认识了一个生活里的词，收好 1 颗星！' : '这颗星已经收好啦，复习也很棒。';
    $('#word-forward').focus();
  }
  if (event.target.closest('#word-back') && wordSession.index > 0) {
    wordSession.index--;
    renderStudyWord();
    $('#study-word-title').focus();
  }
  if (event.target.closest('#word-forward')) {
    if (wordSession.index === wordSession.ids.length - 1) {
      $('#word-dialog').close();
      showToast('今天先到这里，试着在生活中说一说吧。');
    } else {
      wordSession.index++;
      renderStudyWord();
      $('#study-word-title').focus();
    }
  }
});
$$('[data-phoneme-group]').forEach(button => button.addEventListener('click', () => {
  soundGroup = button.dataset.phonemeGroup;
  $$('[data-phoneme-group]').forEach(item => {
    const active = item === button;
    item.classList.toggle('active', active);
    item.setAttribute('aria-pressed', String(active));
  });
  renderPhonemeGrid();
}));
$('#phoneme-grid').addEventListener('click', event => {
  const button = event.target.closest('[data-sound]');
  if (!button) return;
  soundOpener = button;
  currentSound = soundsById.get(button.dataset.sound);
  renderStudySound();
  $('#phoneme-dialog').showModal();
  $('#study-sound-title').focus();
});
$('#phoneme-close').addEventListener('click', () => $('#phoneme-dialog').close());
$('#phoneme-dialog').addEventListener('close', () => {
  stopSpeech();
  currentSound = null;
  const target = soundOpener?.isConnected ? soundOpener : $(`[data-phoneme-group="${soundGroup}"]`);
  target.focus({ preventScroll: true });
  soundOpener = null;
});
$('#phoneme-content').addEventListener('click', event => {
  if (!currentSound) return;
  const play = event.target.closest('[data-sound-say]');
  if (play) {
    const item = play.dataset.soundSay === 'contrast' ? currentSound.contrast : currentSound.examples[Number(play.dataset.soundSay)];
    speakEnglish([item.word], $('#sound-audio-status'));
  }
  if (event.target.closest('[data-stop-speech]')) stopSpeech();
  const answer = event.target.closest('[data-sound-answer]');
  if (answer && !answer.disabled && !soundAnswered) {
    if (answer.dataset.soundAnswer === currentSound.id) {
      soundAnswered = true;
      answer.classList.add('correct');
      $$('.sound-option').forEach(button => { button.disabled = true; });
      const earned = markPracticed('sound', currentSound.id);
      $('#sound-feedback').textContent = `选对啦！这里读 ${currentSound.symbol}。${earned ? '获得 1 颗星。' : '这颗星已收好，不重复发放。'}`;
      $('#sound-forward').focus();
    } else {
      answer.classList.add('wrong');
      answer.disabled = true;
      $('#sound-feedback').textContent = '再听听例词，看看口型提示，慢慢试一次。';
      $('.sound-option:not(:disabled)')?.focus();
    }
  }
  if (event.target.closest('#sound-learn')) {
    const earned = markPracticed('sound', currentSound.id);
    $('#sound-practice-status').textContent = earned ? '一起练习过这个声音，获得 1 颗星！' : '这颗星已经收好，欢迎继续练习。';
    $('#sound-forward').focus();
  }
  const back = event.target.closest('#sound-back');
  const forward = event.target.closest('#sound-forward');
  if (back || forward) {
    const group = phonemes.filter(sound => sound.group === currentSound.group);
    const index = group.findIndex(sound => sound.id === currentSound.id) + (back ? -1 : 1);
    if (index === group.length) $('#phoneme-dialog').close();
    else if (index >= 0) {
      currentSound = group[index];
      renderStudySound();
      $('#study-sound-title').focus();
    }
  }
});
$('#stop-speech').addEventListener('click', stopSpeech);
$('#voice-select').addEventListener('change', stopSpeech);
$('#slow-speech').addEventListener('change', stopSpeech);
window.speechSynthesis?.addEventListener('voiceschanged', refreshVoices);
refreshVoices();
document.addEventListener('visibilitychange', () => {
  if (!document.hidden) { updateDashboard(); scheduleDailyRefresh(); }
  else { stopSpeech(); finishModuleDrag(false); }
});
updateDashboard();
scheduleDailyRefresh();
if (storageMessage) showToast(storageMessage);
