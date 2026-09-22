'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const dataFiles = ['words-home.js', 'words-world.js', 'words-play.js', 'phonetics-data.js', 'course-data.js'];
const read = name => fs.readFileSync(path.join(__dirname, name), 'utf8');

function loadData() {
  const context = vm.createContext({ window: {} });
  for (const file of dataFiles) vm.runInContext(read(file), context, { filename: file });
  return context;
}

function eventTarget(target) {
  const listeners = new Map();
  target.addEventListener = (type, callback) => {
    if (!listeners.has(type)) listeners.set(type, []);
    listeners.get(type).push(callback);
  };
  target.dispatchEvent = function (event) {
    event.target ||= this;
    event.currentTarget = this;
    event.preventDefault ||= () => { event.defaultPrevented = true; };
    for (const callback of listeners.get(event.type) || []) callback.call(this, event);
    if (event.bubbles && this.parentNode) this.parentNode.dispatchEvent(event);
    return !event.defaultPrevented;
  };
  return target;
}

// Only the markup, selectors and events used here are modeled. No layout,
// hit-testing, native dragging or pointer capture: those require a browser.
function mockDocument(html) {
  let document;
  const decode = text => text.replace(/&(amp|lt|gt|quot|#39);/g, (_, entity) => ({ amp: '&', lt: '<', gt: '>', quot: '"', '#39': "'" })[entity]);
  function simpleMatch(node, selector) {
    if (selector.includes(':not(:disabled)')) {
      if (node.disabled) return false;
      selector = selector.replace(':not(:disabled)', '');
    }
    const tokens = [...selector.matchAll(/(^[\w-]+)|#([\w-]+)|\.([\w-]+)|\[([\w-]+)(?:="([^"]*)")?\]/g)];
    assert.equal(tokens.map(token => token[0]).join(''), selector, `Unsupported mock selector: ${selector}`);
    return tokens.every(([, tag, id, className, attribute, value]) => tag ? node.tagName === tag.toLowerCase()
      : id ? node.getAttribute('id') === id
        : className ? node.classList.contains(className)
          : value === undefined ? node.getAttribute(attribute) !== null : node.getAttribute(attribute) === value);
  }
  function matches(node, selector) {
    return selector.split(',').some(part => {
      const parts = part.trim().split(/\s+/);
      if (!simpleMatch(node, parts.pop())) return false;
      let ancestor = node.parentNode;
      while (parts.length) {
        const next = parts.pop();
        while (ancestor && !simpleMatch(ancestor, next)) ancestor = ancestor.parentNode;
        if (!ancestor) return false;
        ancestor = ancestor.parentNode;
      }
      return true;
    });
  }
  function makeNode(tagName) {
    const attributes = new Map();
    const node = eventTarget({
      tagName, parentNode: null, childNodes: [], style: {}, dataset: {}, value: '', checked: false,
      hidden: false, disabled: false, open: false, _html: '',
      get children() { return this.childNodes.filter(child => typeof child !== 'string'); },
      get isConnected() { return this === document || Boolean(this.parentNode?.isConnected); },
      get className() { return attributes.get('class') || ''; },
      set className(value) { attributes.set('class', String(value)); },
      get textContent() { return this.childNodes.map(child => typeof child === 'string' ? child : child.textContent).join(''); },
      set textContent(value) { this.replaceChildren(); this.childNodes = [String(value)]; },
      get innerHTML() { return this._html; },
      set innerHTML(value) {
        this.replaceChildren();
        this._html = String(value);
        const stack = [this];
        for (const token of this._html.match(/<!--[\s\S]*?-->|<![^>]*>|<\/?[\w:-]+\b[^>]*>|[^<]+/g) || []) {
          if (token.startsWith('<!')) continue;
          if (token.startsWith('</')) { stack.pop(); continue; }
          const parent = stack[stack.length - 1];
          if (!token.startsWith('<')) { parent.childNodes.push(decode(token)); continue; }
          const tag = token.match(/^<([\w:-]+)/)[1].toLowerCase();
          const child = makeNode(tag);
          const attributeText = token.slice(tag.length + 1).replace(/\/?\s*>$/, '');
          for (const [, name, double, single, bare] of attributeText.matchAll(/([^\s=/>]+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+)))?/g)) {
            child.setAttribute(name, decode(double ?? single ?? bare ?? ''));
          }
          parent.insertBefore(child, null);
          if (tag === 'option' && parent.tagName === 'select') parent.value ||= child.value;
          if (!token.endsWith('/>') && !['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'param', 'source', 'track', 'wbr'].includes(tag)) stack.push(child);
        }
      },
      setAttribute(name, value) {
        attributes.set(name, String(value));
        if (name.startsWith('data-')) this.dataset[name.slice(5).replace(/-([a-z])/g, (_, letter) => letter.toUpperCase())] = String(value);
        if (['hidden', 'disabled', 'checked'].includes(name)) this[name] = true;
        if (name === 'value') this.value = String(value);
      },
      getAttribute(name) { return attributes.get(name) ?? null; },
      removeAttribute(name) {
        attributes.delete(name);
        if (['hidden', 'disabled', 'checked'].includes(name)) this[name] = false;
      },
      matches(selector) { return matches(this, selector); },
      closest(selector) { return this.matches(selector) ? this : this.parentNode?.closest(selector) || null; },
      querySelectorAll(selector) {
        const descendants = child => child.children.flatMap(item => [item, ...descendants(item)]);
        return descendants(this).filter(child => child.matches(selector));
      },
      querySelector(selector) { return this.querySelectorAll(selector)[0] || null; },
      insertBefore(child, reference) {
        if (child === reference) return child;
        if (reference !== null) assert.ok(this.childNodes.includes(reference), 'insertBefore reference must belong to parent');
        if (child.parentNode) child.parentNode.childNodes.splice(child.parentNode.childNodes.indexOf(child), 1);
        this.childNodes.splice(reference === null ? this.childNodes.length : this.childNodes.indexOf(reference), 0, child);
        child.parentNode = this;
        return child;
      },
      replaceChildren() { this.children.forEach(child => { child.parentNode = null; }); this.childNodes = []; this.value = ''; this._html = ''; },
      add(option) { const child = makeNode('option'); child.textContent = option.text; child.value = option.value; this.insertBefore(child, null); this.value ||= option.value; },
      focus() { document.activeElement = this; },
      scrollIntoView() {},
      click() { if (!this.disabled) this.dispatchEvent({ type: 'click', bubbles: true }); },
      showModal() { this.open = true; },
      close() { if (this.open) { this.open = false; this.dispatchEvent({ type: 'close' }); } }
    });
    node.classList = {
      contains: name => node.className.split(/\s+/).includes(name),
      add(...names) { node.className = [...new Set([...node.className.split(/\s+/).filter(Boolean), ...names])].join(' '); },
      remove(...names) { node.className = node.className.split(/\s+/).filter(name => !names.includes(name)).join(' '); },
      toggle(name, force) { const add = force ?? !this.contains(name); this[add ? 'add' : 'remove'](name); return add; }
    };
    return node;
  }
  document = makeNode('document');
  document.innerHTML = html;
  document.body = document.querySelector('body');
  document.activeElement = document.body;
  document.hidden = false;
  return document;
}

function loadApp(saved, storageFails = false, { now = new Date(2026, 8, 21, 12) } = {}) {
  const context = loadData();
  const document = mockDocument(read('index.html'));
  const elements = { get: selector => document.querySelector(selector) };
  const storage = new Map(saved ? [['lumi-learning-v1', JSON.stringify(saved)]] : []);
  const timers = new Map();
  let timerId = 0;
  let clock = now.getTime();
  class ClockDate extends Date {
    constructor(...args) { super(...(args.length ? args : [clock])); }
    static now() { return clock; }
  }
  Object.assign(context, {
    document, Date: ClockDate,
    localStorage: {
      getItem: key => { if (storageFails) throw new Error('Storage unavailable'); return storage.get(key) ?? null; },
      setItem: (key, value) => { if (storageFails) throw new Error('Storage unavailable'); storage.set(key, value); }
    },
    Option: class { constructor(text, value) { this.text = text; this.value = value; } },
    setTimeout: (callback, delay) => { timers.set(++timerId, { callback, delay }); return timerId; },
    clearTimeout: id => timers.delete(id)
  });
  eventTarget(context.window);
  vm.runInContext(read('app.js'), context, { filename: 'app.js' });
  return {
    run: code => vm.runInContext(code, context), storage, elements, timers, document,
    setNow: date => { clock = date.getTime(); },
    fireTimer(id) { const timer = timers.get(id); assert.ok(timer, 'Timer must be scheduled'); timers.delete(id); timer.callback(); },
    fire(selector, type, properties = {}) {
      const target = selector === 'window' ? context.window : selector === 'document' ? document : elements.get(selector);
      assert.ok(target, `Event target must exist: ${selector}`);
      const event = { type, ...properties };
      target.dispatchEvent(event);
      return event;
    },
    click(selector) { const target = elements.get(selector); assert.ok(target, `Click target must exist: ${selector}`); target.click(); }
  };
}

const data = loadData().window;
const groups = data.LUMI_WORD_GROUPS;
const words = groups.flatMap(group => group.words);
const sounds = data.LUMI_PHONEMES;

function checkPair(pair, label) {
  assert.equal(pair.length, 2, label);
  assert.ok(pair.every(value => typeof value === 'string' && value.trim()), label);
  assert.match(pair[0], /[a-z]/i, label);
  assert.match(pair[1], /[\u3400-\u9fff]/, label);
}

test('12 life topics contain exactly 300 distinct words', () => {
  assert.equal(groups.length, 12);
  assert.equal(new Set(groups.map(group => group.id)).size, 12);
  for (const group of groups) {
    assert.equal(group.words.length, 25, group.id);
    assert.ok(group.title && group.description && group.tip, group.id);
  }
  assert.equal(words.length, 300);
  assert.equal(new Set(words.map(word => word.word.toLowerCase())).size, 300);
  for (const essential of ['milk', 'water', 'mum', 'dad', 'please', 'no']) assert.ok(words.some(word => word.word === essential));
});

test('every word has IPA and original bilingual phrase, example and two-turn dialogue', () => {
  for (const word of words) {
    assert.match(word.word, /^[a-z]+$/);
    assert.match(word.ipa, /^\/[^/]+\/$/, word.word);
    assert.match(word.meaning, /[\u3400-\u9fff]/, word.word);
    checkPair(word.phrase, `${word.word}: phrase`);
    checkPair(word.sentence, `${word.word}: sentence`);
    assert.equal(word.dialogue.length, 2, word.word);
    word.dialogue.forEach(line => checkPair(line, `${word.word}: dialogue`));
    assert.ok(word.phrase[0].toLowerCase().includes(word.word), `${word.word}: phrase keyword`);
    assert.ok([word.sentence[0], ...word.dialogue.map(line => line[0])].join(' ').toLowerCase().includes(word.word), `${word.word}: scene keyword`);
    assert.doesNotMatch(JSON.stringify(word), /\b(?:TODO|TBD|lorem ipsum)\b/i);
  }
  assert.equal(new Set(words.map(word => word.sentence[0])).size, 300);
});

test('44 distinct phonemes have the expected groups and usable highlighted examples', () => {
  assert.equal(sounds.length, 44);
  assert.equal(new Set(sounds.map(sound => sound.id)).size, 44);
  assert.equal(new Set(sounds.map(sound => sound.symbol)).size, 44);
  for (const [group, count] of Object.entries({ short: 7, long: 5, diphthong: 8, consonant: 24 })) {
    assert.equal(sounds.filter(sound => sound.group === group).length, count);
  }
  for (const sound of sounds) {
    assert.match(sound.symbol, /^\/[^/]+\/$/);
    assert.ok(sound.name && sound.tip, sound.id);
    assert.equal(sound.examples.length, 2);
    const example = sound.examples[0];
    assert.equal(example.before + example.focus + example.after, example.word, sound.id);
    assert.ok(example.focus.length > 0);
    for (const item of [...sound.examples, sound.contrast]) {
      assert.ok(item.word && item.meaning);
      assert.match(item.ipa, /^\/[^/]+\/$/);
    }
    assert.ok(example.ipa.replaceAll('ɡ', 'g').includes(sound.symbol.slice(1, -1)), sound.id);
    assert.notEqual(example.ipa, sound.contrast.ipa, sound.id);
  }
});

test('HTML loads all learning data before the application', () => {
  const html = read('index.html');
  assert.ok(html.includes('src="app.js"'));
  for (const file of dataFiles) {
    assert.ok(html.includes(`src="${file}"`), `${file} must actually be loaded`);
    assert.ok(html.indexOf(`src="${file}"`) < html.indexOf('src="app.js"'));
  }
  const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(match => match[1]);
  assert.equal(new Set(ids).size, ids.length, 'No duplicate static element IDs');
});

test('old local progress is preserved and new lists start empty', () => {
  const app = loadApp({ solved: { colors: [0, 2] }, learningDays: ['2026-09-21'], wordDays: ['2026-09-21'] });
  assert.equal(app.run('starCount()'), 3);
  assert.equal(app.run('state.solved.colors.join()'), '0,2');
  assert.equal(app.run('state.learnedWords.length + state.learnedSounds.length'), 0);
});

test('stored unknown IDs, duplicates and invalid indices are filtered', () => {
  const app = loadApp({ solved: { colors: [0, 0, 99, -1, '1'] }, learnedWords: ['milk', 'milk', '<script>', 2], learnedSounds: ['short-kit', 'short-kit', 'unknown'] });
  assert.equal(app.run('state.solved.colors.join()'), '0');
  assert.equal(app.run('state.learnedWords.join()'), 'milk');
  assert.equal(app.run('state.learnedSounds.join()'), 'short-kit');
  assert.equal(app.run('starCount()'), 3);
});

test('word and phoneme rewards are idempotent and saved in the existing storage key', () => {
  const app = loadApp();
  assert.equal(app.run("markPracticed('word', 'milk')"), true);
  assert.equal(app.run("markPracticed('word', 'milk')"), false);
  assert.equal(app.run("markPracticed('sound', 'short-kit')"), true);
  assert.equal(app.run("markPracticed('sound', 'short-kit')"), false);
  assert.equal(app.run('starCount()'), 2);
  assert.equal(app.run('state.learningDays.length'), 1);
  const stored = JSON.parse(app.storage.get('lumi-learning-v1'));
  assert.deepEqual(stored.learnedWords, ['milk']);
  assert.deepEqual(stored.learnedSounds, ['short-kit']);
});

test('reset clears new and legacy progress together', () => {
  const app = loadApp({ solved: { food: [0] }, learnedWords: ['milk'], learnedSounds: ['short-kit'], learningDays: ['2026-09-21'], wordDays: ['2026-09-21'] });
  app.run('state = emptyState(); saveState();');
  assert.equal(app.run('starCount()'), 0);
  assert.equal(app.run('state.learningDays.length'), 0);
  assert.equal(app.run('state.learnedWords.length + state.learnedSounds.length'), 0);
});

test('unavailable storage still permits session-only learning', () => {
  const app = loadApp(null, true);
  assert.equal(app.run('persistent'), false);
  app.run("markPracticed('word', 'milk')");
  assert.equal(app.run('starCount()'), 1);
  assert.match(app.elements.get('.privacy-note p').innerHTML, /仅本次页面/);
});

test('a storage write failure keeps the current learning session usable', () => {
  const app = loadApp();
  app.run("localStorage.setItem = () => { throw new Error('Quota exceeded'); }; markPracticed('word', 'milk');");
  assert.equal(app.run('persistent'), false);
  assert.equal(app.run('starCount()'), 1);
  assert.match(app.elements.get('#toast').textContent, /无法保存/);
});

test('corrupt stored JSON is discarded without breaking the application', () => {
  const app = loadApp();
  app.run("localStorage.getItem = () => '{bad json'; state = readState(); updateDashboard();");
  assert.equal(app.run('starCount()'), 0);
  assert.match(app.run('storageMessage'), /无法读取/);
});

function installMockSpeech(app) {
  app.run(`
    globalThis.spoken = [];
    globalThis.speechCancels = 0;
    globalThis.SpeechSynthesisUtterance = class { constructor(text) { this.text = text; } };
    window.SpeechSynthesisUtterance = globalThis.SpeechSynthesisUtterance;
    window.speechSynthesis = {
      getVoices: () => [
        { name: 'Remote', voiceURI: 'remote', lang: 'en-GB', localService: false },
        { name: 'US local', voiceURI: 'us', lang: 'en-US', localService: true },
        { name: 'UK local', voiceURI: 'uk', lang: 'en-GB', localService: true }
      ],
      cancel() { speechCancels++; }, speak(utterance) { spoken.push(utterance); }
    };
  `);
}

test('speech selects a local British voice and sequences the dialogue', () => {
  const app = loadApp();
  installMockSpeech(app);
  app.run("speakEnglish(['Would you like milk?', 'Yes, please.'], $('#speech-status'));");
  assert.equal(app.run('localVoices.length'), 2);
  assert.equal(app.run('spoken[0].voice.voiceURI'), 'uk');
  assert.equal(app.run('spoken[0].rate'), 0.75);
  app.run('spoken[0].onstart(); spoken[0].onend();');
  assert.equal(app.run('spoken.length'), 2);
  assert.equal(app.run('spoken[1].text'), 'Yes, please.');
  app.run('spoken[1].onend();');
  assert.match(app.elements.get('#speech-status').textContent, /读完/);
});

test('stopping speech prevents old callbacks from starting another line', () => {
  const app = loadApp();
  installMockSpeech(app);
  app.run("speakEnglish(['First line.', 'Second line.'], $('#speech-status')); stopSpeech(); spoken[0].onend();");
  assert.equal(app.run('spoken.length'), 1);
  assert.match(app.elements.get('#speech-status').textContent, /停止/);
});

test('speech errors and unavailable voices have understandable messages', () => {
  const app = loadApp();
  app.run("speakEnglish(['apple'], $('#speech-status'));");
  assert.match(app.elements.get('#speech-status').textContent, /暂无可用英语语音/);
  installMockSpeech(app);
  app.run("speakEnglish(['apple'], $('#speech-status')); spoken[0].onerror();");
  assert.match(app.elements.get('#speech-status').textContent, /暂时无法播放/);
});

const courseCounts = { animals: 20, colors: 10, food: 20, numbers: 20 };
const expectedModuleOrder = ['courses', 'alphabet', 'daily-word', 'life', 'phonetics', 'adventure', 'rewards'];
const snapshot = (app, expression) => JSON.parse(app.run(`JSON.stringify(${expression})`));
const plain = value => JSON.parse(JSON.stringify(value));
const dailyId = word => `${word.topic}:${word.word}`;
const dailyFor = (app, date) => snapshot(app, `wordForDate(new Date(${date.getTime()}))`);
const savedState = app => JSON.parse(app.storage.get('lumi-learning-v1'));

function assertModuleOrder(app, expected) {
  assert.deepEqual(snapshot(app, 'state.moduleOrder'), expected);
  for (const selector of ['#learning-modules', '.main-nav']) {
    assert.deepEqual(app.elements.get(selector).children.map(child => child.dataset.module), expected, selector);
  }
}

function assertDailyDisplay(app, date) {
  const word = dailyFor(app, date);
  const expected = {
    '#daily-word-text': word.word, '#daily-word-ipa': word.ipa, '#daily-word-meaning': word.meaning,
    '#daily-word-example': word.sentence[0], '#daily-word-translation': word.sentence[1],
    '#daily-word-topic': { animals: '动物朋友', colors: '缤纷颜色', food: '美味时刻', numbers: '数字乐园' }[word.topic],
    '#daily-word-date': `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`
  };
  for (const [selector, text] of Object.entries(expected)) assert.equal(app.elements.get(selector).textContent, text, selector);
  return word;
}

function assertQuizDetail(app, word) {
  const detail = app.elements.get('#quiz-word-detail');
  assert.ok(detail);
  assert.equal(detail.querySelector('strong').textContent, word.word);
  assert.deepEqual(detail.querySelector('.quiz-word-heading').querySelectorAll('span').map(span => span.textContent), [word.ipa, word.meaning]);
  assert.equal(detail.querySelector('.quiz-example-en').textContent, word.sentence[0]);
  assert.equal(detail.querySelector('.quiz-example-zh').textContent, word.sentence[1]);
  assert.deepEqual(detail.querySelectorAll('[data-quiz-say]').map(button => button.dataset.quizSay), ['word', 'sentence']);
  assert.ok(detail.querySelector('[data-stop-speech]'));
}

test('course data contains 20 animals, 10 colors, 20 fruits and 20 numbers with complete study fields', () => {
  const courses = data.LUMI_COURSE_WORDS;
  assert.deepEqual(Object.keys(courses).sort(), Object.keys(courseCounts).sort());
  for (const [topic, count] of Object.entries(courseCounts)) {
    assert.equal(courses[topic].length, count, topic);
    assert.equal(new Set(courses[topic].map(word => word.word)).size, count, topic);
    for (const word of courses[topic]) {
      assert.match(word.word, /^[a-z]+$/);
      assert.match(word.ipa, /^\/[^/\s][^/]*\/$/, word.word);
      assert.match(word.meaning, /[\u3400-\u9fff]/, word.word);
      assert.ok(Array.isArray(word.sentence), word.word);
      checkPair(word.sentence, `${topic}:${word.word}`);
      assert.match(word.sentence[0].toLowerCase(), new RegExp(`\\b${word.word}\\b`), word.word);
      assert.doesNotMatch(JSON.stringify(word), /\b(?:TODO|TBD|lorem ipsum)\b/i);
      if (topic === 'colors') assert.match(word.color, /^#[0-9a-f]{6}$/i, word.word);
    }
  }
});

test('number words and meanings follow the complete one-to-twenty sequence', () => {
  const numbers = data.LUMI_COURSE_WORDS.numbers;
  assert.deepEqual(Array.from(numbers, word => word.number), Array.from({ length: 20 }, (_, index) => index + 1));
  assert.deepEqual(Array.from(numbers, word => word.word), 'one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen twenty'.split(' '));
  assert.deepEqual(Array.from(numbers, word => word.meaning), '一 二 三 四 五 六 七 八 九 十 十一 十二 十三 十四 十五 十六 十七 十八 十九 二十'.split(' '));
});

test('daily pool retains all 70 entries including the two different meanings of orange', () => {
  const app = loadApp();
  const daily = snapshot(app, 'dailyWords');
  const expected = Object.entries(data.LUMI_COURSE_WORDS).flatMap(([topic, list]) => Array.from(list, word => ({ ...plain(word), topic })));
  assert.deepEqual(daily, expected);
  assert.equal(daily.length, 70);
  assert.equal(new Set(daily.map(dailyId)).size, 70);
  assert.equal(new Set(daily.map(word => word.word)).size, 69);
  const oranges = daily.filter(word => word.word === 'orange');
  assert.deepEqual(oranges.map(word => [word.topic, word.meaning]), [['colors', '橙色'], ['food', '橙子']]);
  assert.notDeepEqual(oranges[0].sentence, oranges[1].sentence);
});

test('all 96 generated questions have three unique valid choices and correct uppercase/lowercase matching', () => {
  const app = loadApp();
  const generated = snapshot(app, 'lessons');
  assert.equal(Object.values(generated).flat().length, 96);
  for (const [key, list] of Object.entries(generated)) {
    assert.equal(list.length, key === 'alphabet' ? 26 : courseCounts[key]);
    for (const [index, question] of list.entries()) {
      assert.equal(question.choices.length, 3, `${key}:${index}`);
      assert.equal(new Set(question.choices).size, 3, `${key}:${index}`);
      assert.ok(question.choices.includes(question.correct), `${key}:${index}`);
      assert.ok(question.title && question.prompt && question.stimulus);
      if (key === 'alphabet') {
        assert.equal(question.correct, String.fromCharCode(97 + index));
        assert.equal(question.stimulus, String.fromCharCode(65 + index));
        assert.ok(question.choices.every(choice => /^[a-z]$/.test(choice)));
        assert.equal(question.study, undefined);
      } else {
        const study = plain(data.LUMI_COURSE_WORDS[key][index]);
        assert.deepEqual(question.study, study);
        assert.equal(question.correct, study.word);
        assert.equal(question.stimulus, key === 'numbers' ? String(index + 1) : study.meaning);
        assert.ok(question.choices.every(choice => data.LUMI_COURSE_WORDS[key].some(word => word.word === choice)));
        if (key === 'colors') for (const choice of question.choices) assert.equal(question.colors[choice], data.LUMI_COURSE_WORDS.colors.find(word => word.word === choice).color);
      }
    }
  }
});

test('legacy first-three question indices keep their original words and earned progress', () => {
  const firstThree = { animals: ['rabbit', 'cat', 'dog'], colors: ['blue', 'red', 'yellow'], food: ['apple', 'banana', 'orange'], numbers: ['one', 'two', 'three'], alphabet: ['a', 'b', 'c'] };
  const solved = Object.fromEntries(Object.keys(firstThree).map(key => [key, [0, 1, 2]]));
  const app = loadApp({ solved });
  assert.deepEqual(snapshot(app, 'state.solved'), solved);
  assert.equal(app.run('starCount()'), 15);
  for (const [key, correct] of Object.entries(firstThree)) {
    assert.deepEqual(snapshot(app, `lessons.${key}.slice(0, 3).map(question => question.correct)`), correct);
    if (key !== 'alphabet') {
      const percent = `${Math.round(3 / courseCounts[key] * 100)}%`;
      assert.equal(app.elements.get(`[data-progress="${key}"]`).style.width, percent);
      assert.equal(app.elements.get(`[data-percent="${key}"]`).textContent, percent);
    }
  }
  assert.match(app.elements.get('#alphabet-progress').textContent, /3 \/ 26/);
  app.click('[data-start="animals"]');
  app.click('[data-answer="rabbit"]');
  assert.equal(app.run('quiz.earned'), 0);
  assert.equal(app.run('starCount()'), 15);
});

test('saved indices use expanded lesson bounds and preserve the new last question on reload', () => {
  const counts = { ...courseCounts, alphabet: 26 };
  const app = loadApp({ solved: Object.fromEntries(Object.entries(counts).map(([key, count]) => [key, [0, 3, count - 1, count - 1, count, -1, 1.5, '2', null]])) });
  for (const [key, count] of Object.entries(counts)) assert.deepEqual(snapshot(app, `state.solved.${key}`), [0, 3, count - 1]);
  app.run('saveState()');
  const reloaded = loadApp(savedState(app));
  assert.deepEqual(snapshot(reloaded, 'state.solved'), snapshot(app, 'state.solved'));
  assert.equal(reloaded.run('starCount()'), 15);
});

test('renderQuestion displays all 96 dynamic counters, valid options and initially hidden study details', () => {
  const app = loadApp();
  const generated = snapshot(app, 'lessons');
  for (const [key, list] of Object.entries(generated)) {
    for (const [index, question] of list.entries()) {
      app.run(`quiz = { key: ${JSON.stringify(key)}, index: ${index}, earned: 0, answered: false }; renderQuestion();`);
      assert.match(app.elements.get('.quiz-eyebrow').textContent, new RegExp(`${index + 1} / ${list.length}$`));
      const progress = app.elements.get('.quiz-progress').children;
      assert.equal(progress.length, list.length);
      assert.equal(progress.filter(step => step.classList.contains('done')).length, index + 1);
      const options = app.document.querySelectorAll('.quiz-option');
      assert.equal(options.length, 3);
      assert.deepEqual(options.map(option => option.dataset.answer).sort(), [...question.choices].sort());
      assert.ok(options.every(option => !option.disabled));
      assert.equal(app.elements.get('#quiz-next').disabled, true);
      assert.match(app.elements.get('#quiz-next').textContent, index === list.length - 1 ? /看看我的收获/ : /继续下一题/);
      if (question.study) {
        assertQuizDetail(app, question.study);
        assert.equal(app.elements.get('#quiz-word-detail').hidden, true);
      } else assert.equal(app.elements.get('#quiz-word-detail'), null);
    }
  }
  assert.equal(app.run('starCount()'), 0);
});

test('rendered options shuffle without mutating the lesson or losing the correct answer', () => {
  const app = loadApp();
  app.run("quiz = { key: 'animals', index: 0, earned: 0 }; Math.random = () => 0; renderQuestion();");
  const first = app.document.querySelectorAll('.quiz-option').map(option => option.dataset.answer);
  const original = snapshot(app, 'lessons.animals[0].choices');
  app.run('Math.random = () => 0.999999; renderQuestion();');
  const second = app.document.querySelectorAll('.quiz-option').map(option => option.dataset.answer);
  assert.notDeepEqual(first, second, 'Different random draws must produce different option orders');
  assert.deepEqual([...first].sort(), [...original].sort());
  assert.deepEqual([...second].sort(), [...original].sort());
  assert.deepEqual(snapshot(app, 'lessons.animals[0].choices'), original);
});

for (const [key, count] of Object.entries({ ...courseCounts, alphabet: 26 })) {
  test(`${key} completes all ${count} questions with dynamic progress and no repeated rewards after reload`, () => {
    let app = loadApp();
    const questions = snapshot(app, `lessons.${key}`);
    for (const replay of [false, true]) {
      if (replay) app = loadApp(savedState(app));
      app.click(`[data-start="${key}"]`);
      assert.equal(app.elements.get('#learning-dialog').open, true);
      for (const [index, question] of questions.entries()) {
        assert.equal(app.run('quiz.index'), index);
        assert.equal(app.run('quiz.answered'), false);
        app.run('nextQuestion()');
        assert.equal(app.run('quiz.index'), index, 'Cannot skip an unanswered question');
        const before = app.run('starCount()');
        const wrong = question.choices.find(choice => choice !== question.correct);
        app.click(`[data-answer="${wrong}"]`);
        assert.equal(app.run('starCount()'), before);
        assert.equal(app.elements.get(`[data-answer="${wrong}"]`).disabled, true);
        assert.equal(app.elements.get('#quiz-next').disabled, true);
        if (question.study) assert.equal(app.elements.get('#quiz-word-detail').hidden, true);
        app.click(`[data-answer="${question.correct}"]`);
        assert.equal(app.run('quiz.answered'), true);
        assert.equal(app.run('starCount()'), replay ? count : index + 1);
        assert.ok(app.document.querySelectorAll('.quiz-option').every(button => button.disabled));
        assert.equal(app.elements.get('#quiz-next').disabled, false);
        if (question.study) {
          assert.equal(app.elements.get('#quiz-word-detail').hidden, false);
          assertQuizDetail(app, question.study);
        }
        app.click(`[data-answer="${question.correct}"]`);
        app.run(`answerQuestion($('[data-answer="${question.correct}"]'))`);
        assert.equal(app.run('starCount()'), replay ? count : index + 1);
        if (key !== 'alphabet') {
          const percent = `${Math.round((replay ? count : index + 1) / count * 100)}%`;
          assert.equal(app.elements.get(`[data-progress="${key}"]`).style.width, percent);
          assert.equal(app.elements.get(`[data-percent="${key}"]`).textContent, percent);
          assert.ok(app.elements.get(`.course-card[data-start="${key}"]`).getAttribute('aria-label').includes(percent));
        } else assert.ok(app.elements.get('#alphabet-progress').textContent.includes(`${replay ? count : index + 1} / 26`));
        app.click('#quiz-next');
      }
      assert.match(app.elements.get('#quiz-content').textContent, new RegExp(`${count} 道小挑战`));
      assert.match(app.elements.get('.quiz-earned').textContent, new RegExp(`^\\+${replay ? 0 : count} `));
      if (replay) assert.match(app.elements.get('#quiz-content').textContent, /不会重复发放/);
      assert.equal(app.run('quiz.earned'), replay ? 0 : count);
      assert.deepEqual(savedState(app).solved[key], Array.from({ length: count }, (_, index) => index));
      assert.equal(app.run('state.learningDays.length'), 1);
      app.click('#quiz-finish');
      assert.equal(app.elements.get('#learning-dialog').open, false);
      assert.equal(app.run('quiz'), null);
    }
  });
}

test('correct quiz answers expose word and example speech; advancing and closing cancel stale speech', () => {
  const app = loadApp();
  installMockSpeech(app);
  app.click('[data-start="animals"]');
  app.click('[data-quiz-say="word"]');
  assert.equal(app.run('spoken.length'), 0, 'Speech must be gated on a correct answer');
  app.click('[data-answer="rabbit"]');
  app.click('[data-quiz-say="word"]');
  assert.equal(app.run('spoken[0].text'), 'rabbit');
  app.click('[data-quiz-say="sentence"]');
  assert.equal(app.run('spoken[1].text'), data.LUMI_COURSE_WORDS.animals[0].sentence[0]);
  assert.equal(app.run('spoken[1].voice.voiceURI'), 'uk');
  app.run('spoken[1].onstart()');
  assert.ok(app.elements.get('#quiz-audio-status').textContent.includes(data.LUMI_COURSE_WORDS.animals[0].sentence[0]));
  const cancels = app.run('speechCancels');
  app.click('#quiz-next');
  assert.ok(app.run('speechCancels') > cancels);
  const status = app.elements.get('#quiz-audio-status').textContent;
  app.run('spoken[1].onstart(); spoken[1].onend();');
  assert.equal(app.elements.get('#quiz-audio-status').textContent, status);
  assert.equal(app.run('spoken.length'), 2);
  app.click('[data-answer="cat"]');
  app.click('[data-quiz-say="word"]');
  assert.equal(app.run('spoken[2].text'), 'cat');
  app.click('[data-stop-speech]');
  assert.match(app.elements.get('#quiz-audio-status').textContent, /停止/);
  app.click('[data-quiz-say="sentence"]');
  const beforeClose = app.run('speechCancels');
  app.click('#quiz-close');
  assert.ok(app.run('speechCancels') > beforeClose);
  assert.equal(app.run('quiz'), null);
  assert.equal(app.elements.get('#learning-dialog').open, false);
});

test('70 consecutive local calendar days cover every daily entry and day 71 repeats day 1', () => {
  const app = loadApp();
  const expected = snapshot(app, 'dailyWords').map(dailyId);
  const entries = Array.from({ length: 71 }, (_, index) => dailyFor(app, new Date(2026, 11, 15 + index, 12)));
  assert.equal(new Set(entries.slice(0, 70).map(dailyId)).size, 70);
  assert.deepEqual(entries.slice(0, 70).map(dailyId).sort(), [...expected].sort());
  assert.deepEqual(entries[70], entries[0]);
  for (let index = 1; index < entries.length; index++) assert.equal(expected.indexOf(dailyId(entries[index])), (expected.indexOf(dailyId(entries[index - 1])) + 1) % 70);
});

test('daily selection is stable within a local day and advances across months, years, leap days and DST dates', () => {
  const app = loadApp();
  const pool = snapshot(app, 'dailyWords').map(dailyId);
  app.run("Math.random = () => { throw new Error('Daily selection must not be random'); }");
  for (const [year, month, day] of [[2026, 0, 31], [2026, 11, 31], [2028, 1, 28], [2028, 1, 29], [2026, 2, 8], [2026, 10, 1], [1969, 11, 31]]) {
    const start = new Date(year, month, day, 0, 0, 0, 0);
    const end = new Date(year, month, day, 23, 59, 59, 999);
    const tomorrow = new Date(year, month, day + 1);
    assert.deepEqual(dailyFor(app, end), dailyFor(app, start), start.toString());
    assert.equal(pool.indexOf(dailyId(dailyFor(app, tomorrow))), (pool.indexOf(dailyId(dailyFor(app, start))) + 1) % 70, tomorrow.toString());
  }
  const morning = loadApp(null, false, { now: new Date(2026, 11, 31, 1) });
  const evening = loadApp(null, false, { now: new Date(2026, 11, 31, 23) });
  assert.deepEqual(snapshot(morning, 'dailyWord'), snapshot(evening, 'dailyWord'), 'Reloading must not select another entry');
});

test('updateDailyWord refreshes every visible field and hides the previous pronunciation hint', () => {
  const now = new Date(2026, 11, 31, 23, 50);
  const app = loadApp(null, false, { now });
  const first = assertDailyDisplay(app, now);
  const hint = app.elements.get('#pronunciation-hint');
  hint.hidden = false;
  hint.textContent = 'Previous pronunciation';
  app.run('updateDailyWord()');
  assertDailyDisplay(app, now);
  assert.equal(hint.hidden, false, 'Same-day updates must not interrupt the current hint');
  const tomorrow = new Date(2027, 0, 1, 0, 1);
  app.setNow(tomorrow);
  app.run('updateDailyWord()');
  assert.notEqual(dailyId(assertDailyDisplay(app, tomorrow)), dailyId(first));
  assert.equal(hint.hidden, true);
  assert.equal(app.run('starCount()'), 0);
});

test('remembering the daily word rewards once per local day, survives reload and adds one star tomorrow', () => {
  const today = new Date(2026, 11, 31, 9);
  let app = loadApp(null, false, { now: today });
  app.click('#remember-word');
  assert.equal(app.run('starCount()'), 1);
  assert.equal(app.elements.get('#remember-word').disabled, true);
  assert.match(app.elements.get('#remember-word').textContent, /今天已记住/);
  app.click('#remember-word');
  app.run('rememberDailyWord(); rememberDailyWord();');
  app.setNow(new Date(2026, 11, 31, 23, 59));
  app.run('rememberDailyWord()');
  assert.equal(app.run('starCount()'), 1);
  assert.deepEqual(savedState(app).wordDays, ['2026-12-31']);
  app = loadApp(savedState(app), false, { now: new Date(2026, 11, 31, 23, 59) });
  assert.equal(app.elements.get('#remember-word').disabled, true);
  app.run('rememberDailyWord()');
  assert.equal(app.run('starCount()'), 1);
  const tomorrow = new Date(2027, 0, 1, 0, 1);
  app.setNow(tomorrow);
  app.run('updateDashboard()');
  assertDailyDisplay(app, tomorrow);
  assert.equal(app.elements.get('#remember-word').disabled, false);
  app.click('#remember-word');
  app.run('rememberDailyWord()');
  assert.equal(app.run('starCount()'), 2);
  assert.deepEqual(savedState(app).wordDays, ['2026-12-31', '2027-01-01']);
  assert.deepEqual(savedState(app).learningDays, ['2026-12-31', '2027-01-01']);
  assert.equal(app.run('state.learnedWords.length + state.learnedSounds.length'), 0);
  assert.equal(app.elements.get('#remember-word').disabled, true);
});

test('daily listening and remembering refresh a stale date before using the word and cancel old speech', () => {
  const app = loadApp(null, false, { now: new Date(2026, 8, 30, 23, 59) });
  installMockSpeech(app);
  app.click('#listen-word');
  assert.equal(app.run('spoken[0].text'), app.elements.get('#daily-word-text').textContent);
  app.run('spoken[0].onstart()');
  const before = app.run('speechCancels');
  const tomorrow = new Date(2026, 9, 1, 0, 1);
  app.setNow(tomorrow);
  app.run('updateDailyWord()');
  assertDailyDisplay(app, tomorrow);
  assert.ok(app.run('speechCancels') > before);
  assert.equal(app.elements.get('#pronunciation-hint').hidden, true);
  app.click('#listen-word');
  assert.equal(app.run('spoken[1].text'), dailyFor(app, tomorrow).word);
  assert.equal(app.run('spoken[1].voice.localService'), true);
  app.run('spoken[1].onstart()');
  const currentHint = app.elements.get('#pronunciation-hint').textContent;
  app.run('spoken[0].onstart(); spoken[0].onend();');
  assert.equal(app.elements.get('#pronunciation-hint').textContent, currentHint);
  assert.equal(app.run('starCount()'), 0);
  const following = new Date(2026, 9, 2, 12);
  app.setNow(following);
  app.click('#listen-word');
  assertDailyDisplay(app, following);
  assert.equal(app.run('spoken[2].text'), dailyFor(app, following).word);
  app.setNow(new Date(2026, 9, 3, 12));
  app.run('rememberDailyWord()');
  const remembered = assertDailyDisplay(app, new Date(2026, 9, 3, 12));
  assert.deepEqual(savedState(app).wordDays, ['2026-10-03']);
  assert.ok(app.elements.get('#toast').textContent.includes(remembered.word));
  assert.ok(app.elements.get('#toast').textContent.includes(remembered.meaning));
});

test('daily refresh schedules the next local midnight, replaces old timers and refreshes after visibility resumes', () => {
  const now = new Date(2026, 11, 31, 23, 59, 58, 500);
  const app = loadApp(null, false, { now });
  const firstId = app.run('dailyTimer');
  assert.equal(app.timers.get(firstId).delay, new Date(2027, 0, 1).getTime() - now.getTime() + 50);
  app.run('scheduleDailyRefresh()');
  assert.equal(app.timers.has(firstId), false);
  assert.equal(app.timers.size, 1);
  app.click('#remember-word');
  const tomorrow = new Date(2027, 0, 1, 0, 0, 0, 50);
  app.setNow(tomorrow);
  app.fireTimer(app.run('dailyTimer'));
  assertDailyDisplay(app, tomorrow);
  assert.equal(app.elements.get('#remember-word').disabled, false);
  assert.equal(app.timers.get(app.run('dailyTimer')).delay, new Date(2027, 0, 2).getTime() - tomorrow.getTime() + 50);
  installMockSpeech(app);
  app.click('#listen-word');
  app.document.hidden = true;
  const cancels = app.run('speechCancels');
  app.fire('document', 'visibilitychange');
  assert.ok(app.run('speechCancels') > cancels);
  const oldTimer = app.run('dailyTimer');
  const resumed = new Date(2027, 0, 3, 10);
  app.setNow(resumed);
  app.document.hidden = false;
  app.fire('document', 'visibilitychange');
  assertDailyDisplay(app, resumed);
  assert.equal(app.timers.has(oldTimer), false);
  assert.equal(app.timers.get(app.run('dailyTimer')).delay, new Date(2027, 0, 4).getTime() - resumed.getTime() + 50);
  assert.equal(app.run('starCount()'), 1, 'A timer or visibility refresh must not award stars');
  // Running this suite in a DST-observing TZ also checks 23/25-hour calendar days.
  for (const [month, day] of [[2, 8], [10, 1]]) {
    const start = new Date(2026, month, day);
    app.setNow(start);
    app.run('scheduleDailyRefresh()');
    assert.equal(app.timers.get(app.run('dailyTimer')).delay, new Date(2026, month, day + 1).getTime() - start.getTime() + 50);
  }
});

test('module defaults and normalization whitelist, deduplicate and append missing modules without mutation', () => {
  const app = loadApp();
  assert.deepEqual(snapshot(app, 'defaultModuleOrder'), expectedModuleOrder);
  assertModuleOrder(app, expectedModuleOrder);
  for (const input of [undefined, null, 'rewards', 3, {}, false, []]) {
    assert.deepEqual(snapshot(app, `normalizeModuleOrder(${input === undefined ? 'undefined' : JSON.stringify(input)})`), expectedModuleOrder);
  }
  const dirty = ['rewards', 'life', 'rewards', 'bogus', null, 0, {}, 'constructor', '__proto__', 'Courses', 'alphabet'];
  const expected = ['rewards', 'life', 'alphabet', 'courses', 'daily-word', 'phonetics', 'adventure'];
  app.run(`globalThis.dirtyOrder = ${JSON.stringify(dirty)}`);
  assert.deepEqual(snapshot(app, 'normalizeModuleOrder(dirtyOrder)'), expected);
  assert.deepEqual(snapshot(app, 'dirtyOrder'), dirty);
  assertModuleOrder(loadApp({ moduleOrder: dirty }), expected);
  app.run('globalThis.freshOrder = emptyState(); freshOrder.moduleOrder.reverse();');
  assert.deepEqual(snapshot(app, 'emptyState().moduleOrder'), expectedModuleOrder);
  assert.deepEqual(snapshot(app, 'defaultModuleOrder'), expectedModuleOrder);
});

test('moveModule moves forwards and backwards, clamps boundaries and leaves invalid requests untouched', () => {
  const app = loadApp();
  for (const [id, position, expected] of [
    ['courses', 3, ['alphabet', 'daily-word', 'life', 'courses', 'phonetics', 'adventure', 'rewards']],
    ['courses', 1, ['alphabet', 'courses', 'daily-word', 'life', 'phonetics', 'adventure', 'rewards']],
    ['rewards', -100, ['rewards', 'alphabet', 'courses', 'daily-word', 'life', 'phonetics', 'adventure']],
    ['rewards', 100, ['alphabet', 'courses', 'daily-word', 'life', 'phonetics', 'adventure', 'rewards']]
  ]) {
    assert.equal(app.run(`moveModule(${JSON.stringify(id)}, ${position})`), true);
    assertModuleOrder(app, expected);
    assert.deepEqual(savedState(app).moduleOrder, expected);
    assert.match(app.elements.get('#module-order-status').textContent, /顺序已保存/);
    assert.equal(app.run('starCount()'), 0);
  }
  const stateBefore = snapshot(app, 'state');
  const storedBefore = app.storage.get('lumi-learning-v1');
  const statusBefore = app.elements.get('#module-order-status').textContent;
  for (const expression of ["moveModule('unknown', 0)", "moveModule('__proto__', 0)", "moveModule(null, 0)", "moveModule('courses', 1.5)", "moveModule('courses', '2')", "moveModule('courses', NaN)", "moveModule('courses', Infinity)", "moveModule('courses', -Infinity)", "moveModule('courses', null)", "moveModule('courses', undefined)", "moveModule('courses', true)", "moveModule('courses', 1)", "moveModule('alphabet', -99)", "moveModule('rewards', 99)"]) {
    assert.equal(app.run(expression), false, expression);
    assert.deepEqual(snapshot(app, 'state'), stateBefore, expression);
    assert.equal(app.storage.get('lumi-learning-v1'), storedBefore, expression);
    assert.equal(app.elements.get('#module-order-status').textContent, statusBefore, expression);
    assertModuleOrder(app, stateBefore.moduleOrder);
  }
});

test('module ordering synchronizes real markup nav/main children, retains nodes and survives storage reload', () => {
  const app = loadApp();
  const containers = ['#learning-modules', '.main-nav'].map(selector => app.elements.get(selector));
  const originals = containers.map(container => new Map(container.children.map(child => [child.dataset.module, child])));
  const order = [...expectedModuleOrder].reverse();
  app.run(`state.moduleOrder = ${JSON.stringify(order)}; applyModuleOrder();`);
  assertModuleOrder(app, order);
  for (const [index, container] of containers.entries()) for (const child of container.children) assert.equal(child, originals[index].get(child.dataset.module));
  for (const container of containers) {
    const insert = container.insertBefore;
    container.insertBefore = () => assert.fail('Applying the same order should not move existing nodes');
    app.run('applyModuleOrder()');
    container.insertBefore = insert;
  }
  app.click('[data-start="animals"]');
  assert.equal(app.elements.get('#learning-dialog').open, true, 'Existing listeners survive reordering');
  app.click('#quiz-close');
  app.run('saveState()');
  assert.equal(app.storage.size, 1);
  assert.deepEqual(savedState(app).moduleOrder, order);
  const reloaded = loadApp(savedState(app));
  assertModuleOrder(reloaded, order);
  assert.equal(reloaded.run('starCount()'), 0);
});

test('native mouse dragging survives pointer cancellation while captured touch cancellation still cleans up', () => {
  const app = loadApp();
  const handle = '.module-nav-item[data-module="alphabet"] [data-module-handle]';
  app.run('globalThis.cancelAnimationFrame = () => {};');
  for (const type of ['pointercancel', 'lostpointercapture']) {
    app.run(`beginModuleDrag($('${handle}'));`);
    app.fire(handle, type, { pointerId: 1, pointerType: 'mouse' });
    assert.equal(app.run('moduleDrag.id'), 'alphabet');
    assert.equal(app.run('moduleDrag.pointerId'), null);
    app.run('finishModuleDrag(false)');
    app.run(`beginModuleDrag($('${handle}'), 7);`);
    app.fire(handle, type, { pointerId: 8, pointerType: 'touch' });
    assert.equal(app.run('moduleDrag.pointerId'), 7);
    app.fire(handle, type, { pointerId: 7, pointerType: 'touch' });
    assert.equal(app.run('moduleDrag'), null);
    assert.equal(app.document.body.classList.contains('module-sorting'), false);
    assert.equal(app.document.querySelectorAll('.module-dragging').length, 0);
    assertModuleOrder(app, expectedModuleOrder);
    assert.equal(app.run('starCount()'), 0);
  }
});

test('keyboard module handles move both containers and retain focus without simulating dragging', () => {
  const app = loadApp();
  const navHandle = '.module-nav-item[data-module="alphabet"] [data-module-handle]';
  const mainHandle = '.learning-module[data-module="alphabet"] [data-module-handle]';
  assert.equal(app.fire(navHandle, 'keydown', { key: 'ArrowUp' }).defaultPrevented, true);
  assertModuleOrder(app, ['alphabet', 'courses', 'daily-word', 'life', 'phonetics', 'adventure', 'rewards']);
  assert.equal(app.document.activeElement, app.elements.get(navHandle));
  assert.equal(app.fire(mainHandle, 'keydown', { key: 'ArrowRight' }).defaultPrevented, true);
  assertModuleOrder(app, expectedModuleOrder);
  assert.equal(app.document.activeElement, app.elements.get(mainHandle));
  app.fire(mainHandle, 'keydown', { key: 'ArrowDown' });
  assertModuleOrder(app, ['courses', 'daily-word', 'alphabet', 'life', 'phonetics', 'adventure', 'rewards']);
  app.fire(navHandle, 'keydown', { key: 'ArrowLeft' });
  assertModuleOrder(app, expectedModuleOrder);
  assert.equal(Boolean(app.fire(navHandle, 'keydown', { key: 'Enter' }).defaultPrevented), false);
  assertModuleOrder(app, expectedModuleOrder);
  assert.equal(app.run('starCount()'), 0);
});

test('module moves cannot modify any earned rewards or learning records', () => {
  const app = loadApp({ solved: { animals: [0, 19], colors: [9], alphabet: [25] }, wordDays: ['2026-09-20'], learningDays: ['2026-09-20'], learnedWords: ['milk'], learnedSounds: ['short-kit'] });
  const before = snapshot(app, 'state');
  const stars = app.run('starCount()');
  assert.equal(stars, 7);
  app.run("moveModule('rewards', 0); moveModule('life', 1); moveModule('rewards', 6);");
  const after = snapshot(app, 'state');
  delete before.moduleOrder;
  delete after.moduleOrder;
  assert.deepEqual(after, before);
  assert.equal(app.run('starCount()'), stars);
  assert.ok(app.document.querySelectorAll('[data-stars]').every(element => element.textContent === String(stars)));
  const reloaded = loadApp(savedState(app));
  assert.equal(reloaded.run('starCount()'), stars);
  reloaded.click('[data-start="animals"]');
  reloaded.click('[data-answer="rabbit"]');
  assert.equal(reloaded.run('starCount()'), stars, 'Reordering must not reset deduplication');
});

test('reset controls restore default module order and clear old and new learning records persistently', () => {
  const app = loadApp({ moduleOrder: [...expectedModuleOrder].reverse(), solved: { numbers: [19], alphabet: [25] }, learnedWords: ['milk'], learnedSounds: ['short-kit'], wordDays: ['2026-09-21'], learningDays: ['2026-09-21'] });
  const before = snapshot(app, 'state');
  app.click('#reset-open');
  assert.equal(app.elements.get('#reset-dialog').open, true);
  app.click('#reset-cancel');
  assert.equal(app.elements.get('#reset-dialog').open, false);
  assert.deepEqual(snapshot(app, 'state'), before);
  app.click('#reset-open');
  app.click('#reset-confirm');
  assert.equal(app.elements.get('#reset-dialog').open, false);
  assert.deepEqual(snapshot(app, 'state'), snapshot(app, 'emptyState()'));
  assertModuleOrder(app, expectedModuleOrder);
  assert.equal(app.run('starCount()'), 0);
  assert.equal(app.elements.get('#remember-word').disabled, false);
  const reloaded = loadApp(savedState(app));
  assertModuleOrder(reloaded, expectedModuleOrder);
  assert.equal(reloaded.run('starCount()'), 0);
});

test('unavailable storage permits module moves, learning and reset for the current session', () => {
  const app = loadApp(null, true);
  assert.equal(app.run("moveModule('rewards', 0)"), true);
  assertModuleOrder(app, ['rewards', 'courses', 'alphabet', 'daily-word', 'life', 'phonetics', 'adventure']);
  assert.match(app.elements.get('#module-order-status').textContent, /仅本次页面有效/);
  assert.equal(app.run('starCount()'), 0);
  app.run("markPracticed('word', 'milk'); rememberDailyWord();");
  assert.equal(app.run('starCount()'), 2);
  app.run("moveModule('rewards', 6)");
  assertModuleOrder(app, expectedModuleOrder);
  assert.equal(app.run('starCount()'), 2);
  assert.equal(app.storage.size, 0);
  app.click('#reset-open');
  app.click('#reset-confirm');
  assertModuleOrder(app, expectedModuleOrder);
  assert.equal(app.run('starCount()'), 0);
  assert.match(app.elements.get('#toast').textContent, /本次页面/);
});

test('a failed module-order write keeps the in-memory order and later learning usable without claiming persistence', () => {
  const app = loadApp({ learnedWords: ['milk'] });
  const storedBefore = app.storage.get('lumi-learning-v1');
  app.run("localStorage.setItem = () => { throw new Error('Quota exceeded'); };");
  assert.equal(app.run("moveModule('daily-word', 0)"), true);
  assertModuleOrder(app, ['daily-word', 'courses', 'alphabet', 'life', 'phonetics', 'adventure', 'rewards']);
  assert.equal(app.run('persistent'), false);
  assert.equal(app.run('starCount()'), 1);
  assert.equal(app.storage.get('lumi-learning-v1'), storedBefore);
  assert.match(app.elements.get('#module-order-status').textContent, /仅本次页面有效/);
  assert.match(app.elements.get('.privacy-note p').textContent, /仅本次页面/);
  assert.match(app.elements.get('#toast').textContent, /无法保存/);
  assert.equal(app.run("moveModule('daily-word', 6)"), true);
  assertModuleOrder(app, ['courses', 'alphabet', 'life', 'phonetics', 'adventure', 'rewards', 'daily-word']);
  app.run("markPracticed('sound', 'short-kit'); rememberDailyWord(); rememberDailyWord();");
  assert.equal(app.run('starCount()'), 3);
  assert.equal(app.storage.get('lumi-learning-v1'), storedBefore);
  const reloaded = loadApp(savedState(app));
  assertModuleOrder(reloaded, expectedModuleOrder);
  assert.equal(reloaded.run('starCount()'), 1, 'Failed writes cannot appear as persisted progress');
});
