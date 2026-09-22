'use strict';

const STORAGE_KEY = 'lumi-learning-v1';
const lessonNames = { animals: '动物朋友', colors: '颜色小冒险', food: '美味时刻', numbers: '数字乐园', alphabet: '字母捉迷藏' };
const lessons = {
  colors: [
    { title: '找到蓝色，让天空亮起来！', prompt: 'Which one is blue?', choices: ['red', 'blue', 'yellow'], correct: 'blue', colors: { red: '#ec827b', blue: '#73b5de', yellow: '#f2cb62' } },
    { title: '找到红色，送给小小花朵。', prompt: 'Which one is red?', choices: ['yellow', 'red', 'blue'], correct: 'red', colors: { red: '#ec827b', blue: '#73b5de', yellow: '#f2cb62' } },
    { title: '找到黄色，点亮小太阳！', prompt: 'Which one is yellow?', choices: ['blue', 'red', 'yellow'], correct: 'yellow', colors: { red: '#ec827b', blue: '#73b5de', yellow: '#f2cb62' } }
  ],
  animals: [
    { title: '哪个单词是“兔子”？', prompt: 'Meet our animal friends.', stimulus: '兔子', choices: ['cat', 'rabbit', 'dog'], correct: 'rabbit' },
    { title: '小猫的英语名字是什么？', prompt: 'A little friend says meow.', stimulus: '小猫', choices: ['cat', 'dog', 'rabbit'], correct: 'cat' },
    { title: '哪个单词是“小狗”？', prompt: 'One more animal friend!', stimulus: '小狗', choices: ['rabbit', 'cat', 'dog'], correct: 'dog' }
  ],
  food: [
    { title: '找到“苹果”的英语名字。', prompt: 'A yummy word to learn.', stimulus: '苹果', choices: ['banana', 'orange', 'apple'], correct: 'apple' },
    { title: '弯弯的香蕉，英语怎么说？', prompt: 'Pick the right fruit.', stimulus: '香蕉', choices: ['banana', 'apple', 'orange'], correct: 'banana' },
    { title: '哪个单词是“橙子”？', prompt: 'Our last fruity friend.', stimulus: '橙子', choices: ['apple', 'orange', 'banana'], correct: 'orange' }
  ],
  numbers: [
    { title: '数字 1 的英语名字是？', prompt: 'Let’s count together.', stimulus: '1', choices: ['two', 'one', 'three'], correct: 'one' },
    { title: '数字 2 的英语名字是？', prompt: 'One, and one more!', stimulus: '2', choices: ['three', 'one', 'two'], correct: 'two' },
    { title: '数字 3 的英语名字是？', prompt: 'You can count to three!', stimulus: '3', choices: ['three', 'two', 'one'], correct: 'three' }
  ],
  alphabet: [
    { title: '谁是大写 A 的小写朋友？', prompt: 'Find the matching lowercase letter.', stimulus: 'A', choices: ['b', 'a', 'd'], correct: 'a' },
    { title: '大写 B 在找哪位朋友？', prompt: 'Find the matching lowercase letter.', stimulus: 'B', choices: ['d', 'p', 'b'], correct: 'b' },
    { title: '帮大写 C 找到小写朋友！', prompt: 'Find the matching lowercase letter.', stimulus: 'C', choices: ['c', 'e', 'a'], correct: 'c' }
  ]
};
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];
const emptyState = () => ({ solved: Object.fromEntries(Object.keys(lessons).map(key => [key, []])), learningDays: [], wordDays: [] });
let persistent = true;
let storageMessage = '';
let state = readState();
let quiz = null;
let toastTimer;

function validDays(value) {
  return Array.isArray(value) ? [...new Set(value.filter(day => typeof day === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(day)))] : [];
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

function starCount() {
  return Object.values(state.solved).reduce((total, solved) => total + solved.length, 0) + state.wordDays.length;
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
  const learned = state.wordDays.includes(dayKey());
  $('#remember-word').disabled = learned;
  $('#remember-word').innerHTML = learned ? '<svg class="icon"><use href="#i-check"/></svg>今天已记住，星星已收好' : '我记住啦<svg class="icon"><use href="#i-star"/></svg><span>+1</span>';
  if (!persistent) $('.privacy-note p').innerHTML = '进度暂时无法保存<span>仅本次页面有效 · 未上传任何信息</span>';
}

function showToast(message) {
  clearTimeout(toastTimer);
  $('#toast').textContent = message;
  $('#toast').hidden = false;
  toastTimer = setTimeout(() => { $('#toast').hidden = true; }, 4200);
}

function openQuiz(key) {
  quiz = { key, index: 0, earned: 0, answered: false };
  renderQuestion();
  $('#learning-dialog').showModal();
  $('#quiz-title').focus();
}

function renderQuestion() {
  const question = lessons[quiz.key][quiz.index];
  const isLetters = quiz.key === 'alphabet';
  $('#quiz-content').innerHTML = `<div class="quiz-eyebrow">${lessonNames[quiz.key]} · ${quiz.index + 1} / 3</div>
    <h2 class="quiz-title" id="quiz-title" tabindex="-1">${question.title}</h2>
    <p class="quiz-subtitle" lang="en">${question.prompt}</p>
    <div class="quiz-progress" aria-hidden="true">${lessons[quiz.key].map((_, index) => `<span class="${index <= quiz.index ? 'done' : ''}"></span>`).join('')}</div>
    ${question.stimulus ? `<div class="quiz-stimulus ${isLetters || quiz.key === 'numbers' ? '' : 'word-stimulus'}" ${isLetters ? 'lang="en"' : ''}>${question.stimulus}</div>` : ''}
    <div class="quiz-options" role="group" aria-label="选择正确答案">${question.choices.map(choice => `<button class="quiz-option" data-answer="${choice}" lang="en">${question.colors ? `<span class="color-swatch" style="background:${question.colors[choice]}" aria-hidden="true"></span>` : ''}<span>${choice}</span></button>`).join('')}</div>
    <p class="quiz-feedback" id="quiz-feedback" role="status">勇敢试一试，选错了也没关系。</p>
    <button class="button button-dark quiz-next" id="quiz-next" disabled>${quiz.index === 2 ? '看看我的收获' : '继续下一题'}<svg class="icon"><use href="#i-arrow"/></svg></button>
    <p class="quiz-bottom">每题首次答对获得 1 颗星 · 进度自动保存在本机</p>`;
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
  $('#quiz-next').disabled = false;
  $('#quiz-next').focus();
}

function nextQuestion() {
  if (!quiz?.answered) return;
  if (quiz.index < lessons[quiz.key].length - 1) {
    quiz.index++;
    renderQuestion();
    $('#quiz-title').focus();
  } else {
    $('#quiz-content').innerHTML = `<div class="quiz-complete"><div class="complete-star" aria-hidden="true"><svg class="icon"><use href="#i-star"/></svg></div><div class="quiz-eyebrow">LITTLE STEPS, BIG PROGRESS</div><h2 id="quiz-title" tabindex="-1">冒险完成，你真棒！</h2><p>你完成了「${lessonNames[quiz.key]}」的 3 道小挑战。</p><span class="quiz-earned">+${quiz.earned} <span style="font-size:18px">颗星星</span></span><p>${quiz.earned ? '每一次认真尝试，都让你闪闪发光。' : '温故知新也很棒！已获得的星星不会重复发放。'}</p><button class="button button-dark" id="quiz-finish">回到学习乐园<svg class="icon"><use href="#i-arrow"/></svg></button></div>`;
    $('#quiz-title').focus();
  }
}

$$('[data-start]').forEach(button => button.addEventListener('click', () => openQuiz(button.dataset.start)));
$('#quiz-close').addEventListener('click', () => $('#learning-dialog').close());
$('#learning-dialog').addEventListener('close', () => { quiz = null; });
$('#quiz-content').addEventListener('click', event => {
  const answer = event.target.closest('[data-answer]');
  if (answer) answerQuestion(answer);
  if (event.target.closest('#quiz-next')) nextQuestion();
  if (event.target.closest('#quiz-finish')) $('#learning-dialog').close();
});

function filterCourses() {
  const query = $('#course-search').value.trim().toLocaleLowerCase();
  let count = 0;
  $$('.course-card').forEach(card => {
    const match = !query || `${card.dataset.search} ${card.textContent}`.toLocaleLowerCase().includes(query);
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

$$('.nav-link').forEach(link => link.addEventListener('click', () => {
  $$('.nav-link').forEach(other => { other.classList.remove('active'); other.removeAttribute('aria-current'); });
  link.classList.add('active');
  link.setAttribute('aria-current', 'location');
}));

$('#remember-word').addEventListener('click', () => {
  const today = dayKey();
  if (state.wordDays.includes(today)) return;
  state.wordDays.push(today);
  recordDay();
  saveState();
  showToast('Apple，苹果！今日单词已记住，获得 1 颗星星。');
});

$('#listen-word').addEventListener('click', () => {
  const hint = $('#pronunciation-hint');
  const tip = '发音提示：/ˈæp.əl/，先发短促的 /æ/，再轻读 /pəl/。';
  hint.hidden = false;
  const voice = window.speechSynthesis?.getVoices().find(item => item.localService && /^en[-_]/i.test(item.lang));
  if (!voice || !window.SpeechSynthesisUtterance) {
    hint.textContent = `本机暂无可用英语音频。${tip}`;
    return;
  }
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance('apple');
  utterance.voice = voice;
  utterance.lang = voice.lang;
  utterance.rate = 0.75;
  utterance.onstart = () => { hint.textContent = `正在播放本机英语语音。${tip}`; };
  utterance.onend = () => { hint.textContent = `再点一次可以重听。${tip}`; };
  utterance.onerror = () => { hint.textContent = `暂时无法播放音频。${tip}`; };
  hint.textContent = tip;
  window.speechSynthesis.speak(utterance);
});

$('#reset-open').addEventListener('click', () => {
  $('#reset-dialog').showModal();
  $('#reset-cancel').focus();
});
$('#reset-cancel').addEventListener('click', () => $('#reset-dialog').close());
$('#reset-confirm').addEventListener('click', () => {
  state = emptyState();
  saveState();
  if (window.speechSynthesis) window.speechSynthesis.cancel();
  $('#pronunciation-hint').hidden = true;
  $('#reset-dialog').close();
  showToast(persistent ? '已重置本机学习进度。新的冒险，从这里开始！' : '已重置本次页面的学习进度；浏览器仍无法保存记录。');
});
window.addEventListener('storage', event => {
  if (event.key === STORAGE_KEY || event.key === null) {
    state = readState();
    updateDashboard();
  }
});
document.addEventListener('visibilitychange', () => { if (!document.hidden) updateDashboard(); });
updateDashboard();
if (storageMessage) showToast(storageMessage);
