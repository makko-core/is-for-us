/* =========================================================================
   IS FOR US — Оптимизированный движок приложения
   ========================================================================= */
const UI = {
  ru: {
    pill: "Офлайн-справочник для студентов",
    welcomeDesc: "Учебная база знаний без сложной теории: понятные конспекты, наглядные разборы и практические тесты для уверенной сдачи зачётов и проектов.",
    startBtn: "Начать обучение →",
    aboutBtn: "О нас",
    cmpBtn: "⚖️ Сравнения",
    faqBtn: "❓ FAQ",
    stat1: "<strong>Понятная теория</strong> без воды",
    stat2: "<strong>Наглядные</strong> разборы тем",
    stat3: "<strong>Трекер</strong> личного прогресса",
    backHome: "← На главную",
    backSubjects: "← Предметы",
    backTopics: "← К списку тем",
    backTheory: "← Вернуться к теории",
    darkTheme: "Тёмная тема",
    lightTheme: "Светлая тема",
    subjectsTitle: "Предметные области",
    subjectsSub: "Выберите дисциплину для изучения. Новые разделы легко добавлять в папку data/.",
    availableNow: "Дисциплина",
    openBtn: "Открыть →",
    passedOf: (d, t) => `Пройдено: ${d} из ${t}`,
    progressTitle: (d, t) => `Прогресс по разделу: ${d} из ${t} тем пройдено`,
    searchPlaceholder: "Фильтр по названию или элементу...",
    notFound: (q) => `Ничего не найдено по запросу «${q}».`,
    whereUsedTitle: "Где применяется и как устроен",
    elementsTitle: "Основные элементы, сравнение и синтаксис",
    colEl: "Конструкция / Критерий",
    colDesc: "Что означает / Разбор",
    examplesTitle: "Примеры и практические разборы",
    copyBtn: "Копировать код",
    copiedBtn: "Скопировано ✓",
    mistakesTitle: "Частые ошибки и ловушки на защите",
    quizPromptTitle: "Проверить себя на практике?",
    quizPromptDesc: (n) => `Тест на ${n} вопросов откроется на отдельном экране — без подсказок сверху.`,
    takeQuizBtn: "Пройти мини-тест →",
    quizBadge: "Проверка знаний",
    answered: (a, t) => `Отвечено: ${a} из ${t}`,
    retryBtn: "Пройти заново",
    toTopicsBtn: "К списку тем",
    resultText: (c, t, pass) => `Итог: ${c} из ${t} верно — ${pass ? "тема зачтена!" : "попробуйте ещё раз"}`,
    doneBadge: (b, t) => `✓ Пройдено (${b}/${t})`,
    bestBadge: (b, t) => `Лучший: ${b}/${t}`,
    cardMeta: (ex, q) => `${ex} прим. · тест (${q} вопр.)`,
    aboutTitle: "О проекте IS FOR US",
    aboutQuote: "Этот сайт для студентов поможет закрепить материал и получить базовые знания о ИС.",
    aboutIntro: "Мы создали IS FOR US как простой и понятный карманный справочник для тех, кто изучает информационные системы и программирование. Вместо перегруженных учебников здесь собрана только суть: таблицы основных элементов, живые примеры с нуля и честные тесты.",
    aboutCards: [
      { h: "Без лишней воды", p: "Каждая тема объясняется простым языком — чтобы вы понимали логику, а не зубрили определения." },
      { h: "Работает офлайн", p: "Проект разделён на аккуратные файлы и открывается в любом браузере даже без интернета." },
      { h: "Честная проверка", p: "Мини-тесты открываются на отдельном экране без подглядывания, а прогресс сохраняется автоматически." }
    ],
    aboutCta: "Перейти к предметам →",
    globalSearchBtn: "🔍 Поиск",
    globalSearchPlaceholder: "Поиск по всем предметам, сравнениям и FAQ (JOIN, OSI, chmod, 404)...",
    globalSearchHint: "Начните вводить запрос — найдём тему, сравнение или ответ на вопрос.",
    globalSearchEmpty: "Ничего не найдено. Попробуйте другой термин.",
    footerTagline: "Офлайн-справочник и база знаний для студентов ИС",
    footerHome: "Главная",
    footerSubjects: "Предметы",
    footerComparisons: "Сравнения",
    footerFaq: "FAQ",
    footerAbout: "О нас",
    footerSearch: "Поиск (Ctrl+K)",
    footerStats: (s, tp) => `Предметов: ${s} · Всего тем: ${tp}`
  },
  en: {
    pill: "Offline Student Handbook",
    welcomeDesc: "A clear knowledge base without dry academic fluff: concise notes, visual breakdowns, and practical quizzes to ace your labs and exams.",
    startBtn: "Start Learning →",
    aboutBtn: "About Us",
    cmpBtn: "⚖️ Comparisons",
    faqBtn: "❓ FAQ",
    stat1: "<strong>Clear theory</strong> without fluff",
    stat2: "<strong>Visual</strong> topic breakdowns",
    stat3: "<strong>Personal</strong> progress tracker",
    backHome: "← Home",
    backSubjects: "← Subjects",
    backTopics: "← Topics",
    backTheory: "← Back to Theory",
    darkTheme: "Dark Theme",
    lightTheme: "Light Theme",
    subjectsTitle: "Subject Areas",
    subjectsSub: "Choose a discipline to explore. New subjects can be added to the data/ folder.",
    availableNow: "Subject",
    openBtn: "Open →",
    passedOf: (d, t) => `Completed: ${d} of ${t}`,
    progressTitle: (d, t) => `Section progress: ${d} of ${t} topics completed`,
    searchPlaceholder: "Filter by title or element...",
    notFound: (q) => `Nothing found for "${q}".`,
    whereUsedTitle: "Where It's Used & How It Works",
    elementsTitle: "Core Elements, Comparison & Syntax",
    colEl: "Construct / Criterion",
    colDesc: "Meaning / Breakdown",
    examplesTitle: "Step-by-Step Examples & Cases",
    copyBtn: "Copy code",
    copiedBtn: "Copied ✓",
    mistakesTitle: "Common Mistakes & Exam Traps",
    quizPromptTitle: "Ready to test yourself?",
    quizPromptDesc: (n) => `A ${n}-question quiz opens on a separate screen — no peeking at the theory.`,
    takeQuizBtn: "Take Mini-Quiz →",
    quizBadge: "Knowledge Check",
    answered: (a, t) => `Answered: ${a} of ${t}`,
    retryBtn: "Try Again",
    toTopicsBtn: "Back to Topics",
    resultText: (c, t, pass) => `Score: ${c} of ${t} correct — ${pass ? "topic passed!" : "try again"}`,
    doneBadge: (b, t) => `✓ Passed (${b}/${t})`,
    bestBadge: (b, t) => `Best: ${b}/${t}`,
    cardMeta: (ex, q) => `${ex} ex. · quiz (${q} Qs)`,
    aboutTitle: "About IS FOR US",
    aboutQuote: "This website for students helps reinforce course material and build foundational knowledge of Information Systems (IS).",
    aboutIntro: "IS FOR US was built as a clean, pocket-friendly handbook for students studying Information Systems and programming. Instead of dense textbooks, you get only the essentials: cheat-sheet tables, real examples from scratch, and honest self-check quizzes.",
    aboutCards: [
      { h: "No Fluff", p: "Every topic is explained in plain language so you grasp the logic instead of memorizing definitions." },
      { h: "100% Offline", p: "Clean modular files that run in any browser with a double-click — no server required." },
      { h: "Honest Testing", p: "Quizzes open on a dedicated screen with theory hidden, and your best scores are saved locally." }
    ],
    aboutCta: "Explore Subjects →",
    globalSearchBtn: "🔍 Search",
    globalSearchPlaceholder: "Search across all subjects, comparisons & FAQ (JOIN, OSI, chmod, 404)...",
    globalSearchHint: "Start typing to jump to any topic, comparison, or Q&A.",
    globalSearchEmpty: "Nothing found. Try another keyword.",
    footerTagline: "Offline handbook & knowledge base for IS students",
    footerHome: "Home",
    footerSubjects: "Subjects",
    footerComparisons: "Comparisons",
    footerFaq: "FAQ",
    footerAbout: "About Us",
    footerSearch: "Search (Ctrl+K)",
    footerStats: (s, tp) => `Subjects: ${s} · Total topics: ${tp}`
  }
};

/* ===== УТИЛИТЫ ===== */
const esc = (str) => String(str ?? "")
  .replace(/&/g, "&amp;")
  .replace(/</g, "&lt;")
  .replace(/>/g, "&gt;")
  .replace(/"/g, "&quot;");

function debounce(fn, delay = 120) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

function shuffleArray(arr) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

/* ===== ДАННЫЕ И СОСТОЯНИЕ ===== */
const SPECIAL_IDS = new Set(["comparisons", "faq-base"]);
const allSections = window.ISFORUS_SUBJECTS || [];
const academicSubjects = allSections.filter(s => !SPECIAL_IDS.has(s.id));

const PROGRESS_KEY = "isforus_progress_v5";
let progressCache = null;

let currentLang = localStorage.getItem("isforus_lang") || "ru";
let currentScreen = "screen-welcome";
let currentSectionId = academicSubjects[0]?.id || allSections[0]?.id || "";
let currentTopicId = "";
let currentExampleIndex = 0;
let quizAnswers = {};
let interactiveState = {};
let dragInfo = null;

const t = (key) => UI[currentLang][key];
const loc = (obj) => (typeof obj === "string" ? obj : obj?.[currentLang] || obj?.ru || "");

function loadProgress() {
  if (progressCache) return progressCache;
  try { progressCache = JSON.parse(localStorage.getItem(PROGRESS_KEY) || "{}"); }
  catch { progressCache = {}; }
  return progressCache;
}

function saveTopicResult(topicId, correct, total) {
  const data = loadProgress();
  const prevBest = data[topicId]?.best || 0;
  const best = Math.max(prevBest, correct);
  const passed = best >= Math.ceil(total * 0.6);
  data[topicId] = { best, total, passed };
  localStorage.setItem(PROGRESS_KEY, JSON.stringify(data));
}

function getSectionStats(section) {
  const data = loadProgress();
  const total = section.topics.length;
  const done = section.topics.filter(tp => data[tp.id]?.passed).length;
  return { done, total, pct: total ? Math.round((done / total) * 100) : 0 };
}

function getCurrentSection() {
  return allSections.find(s => s.id === currentSectionId) || academicSubjects[0] || allSections[0];
}

function getCurrentTopic() {
  const sec = getCurrentSection();
  return sec.topics.find(tp => tp.id === currentTopicId) || sec.topics[0];
}

/* ===== НАВИГАЦИЯ И UI ===== */
function injectGlobalSearchButtons() {
  document.querySelectorAll(".topbar-right").forEach(bar => {
    if (!bar.querySelector(".global-search-trigger")) {
      const btn = document.createElement("button");
      btn.className = "btn btn-sm global-search-trigger";
      btn.onclick = openGlobalSearch;
      bar.prepend(btn);
    }
  });
}

function renderFooter() {
  const footer = document.getElementById("siteFooter");
  if (!footer) return;
  const totalTopics = allSections.reduce((sum, s) => sum + s.topics.length, 0);

  footer.innerHTML = `
    <div class="footer-inner">
      <div>
        <div class="footer-brand">IS FOR US</div>
        <div class="footer-desc">${t("footerTagline")}</div>
      </div>
      <div class="footer-links">
        <button onclick="goToWelcome()">${t("footerHome")}</button>
        <button onclick="goToSubjects()">${t("footerSubjects")}</button>
        <button onclick="openSpecialSection('comparisons')">${t("footerComparisons")}</button>
        <button onclick="openSpecialSection('faq-base')">${t("footerFaq")}</button>
        <button onclick="goToAbout()">${t("footerAbout")}</button>
        <button onclick="openGlobalSearch()">${t("footerSearch")}</button>
      </div>
      <div class="footer-copy">
        <span>© 2026 IS FOR US</span>
        <span>${t("footerStats")(academicSubjects.length, totalTopics)}</span>
      </div>
    </div>
  `;
}

function applyLanguageUI() {
  document.documentElement.lang = currentLang;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (UI[currentLang][key]) el.innerHTML = UI[currentLang][key];
  });
  document.querySelectorAll(".lang-toggle-btn").forEach(btn => {
    btn.textContent = currentLang === "ru" ? "EN" : "RU";
  });
  document.querySelectorAll(".global-search-trigger").forEach(btn => {
    btn.textContent = t("globalSearchBtn");
  });
  const searchInp = document.getElementById("searchInput");
  if (searchInp) searchInp.placeholder = t("searchPlaceholder");
  const globalInp = document.getElementById("globalSearchInput");
  if (globalInp) globalInp.placeholder = t("globalSearchPlaceholder");

  updateThemeButtons();
  renderFooter();

  if (currentScreen === "screen-about") renderAbout();
  if (currentScreen === "screen-subjects") renderSubjects();
  if (currentScreen === "screen-select") { renderProgress(); renderCards(searchInp?.value || ""); }
  if (currentScreen === "screen-study") renderStudy();
}

window.toggleLang = function () {
  currentLang = currentLang === "ru" ? "en" : "ru";
  localStorage.setItem("isforus_lang", currentLang);
  applyLanguageUI();
};

function showScreen(screenId) {
  currentScreen = screenId;
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  document.getElementById(screenId).classList.add("active");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

window.goToWelcome = () => showScreen("screen-welcome");
window.goToAbout = () => { renderAbout(); showScreen("screen-about"); };
window.goToSubjects = () => { renderSubjects(); showScreen("screen-subjects"); };

window.openSubject = (sectionId) => {
  currentSectionId = sectionId;
  const inp = document.getElementById("searchInput");
  if (inp) inp.value = "";
  goToSelect();
};

window.openSpecialSection = (sectionId) => {
  if (!allSections.some(s => s.id === sectionId)) return;
  currentSectionId = sectionId;
  const inp = document.getElementById("searchInput");
  if (inp) inp.value = "";
  goToSelect();
};

window.goToSelect = () => {
  const sec = getCurrentSection();
  document.getElementById("subjectHeaderTitle").textContent = loc(sec.title);
  document.getElementById("subjectHeaderSub").textContent = loc(sec.desc);
  renderProgress();
  renderCards(document.getElementById("searchInput")?.value || "");
  showScreen("screen-select");
};

window.openTopic = (topicId) => {
  currentTopicId = topicId;
  currentExampleIndex = 0;
  renderStudy();
  showScreen("screen-study");
};

window.returnToStudy = () => showScreen("screen-study");

/* ===== РЕНДЕР ЭКРАНОВ ===== */
function renderAbout() {
  const cards = t("aboutCards").map((c, i) => `
    <div class="about-card stagger" style="animation-delay:${0.1 + i * 0.08}s">
      <h3>${esc(c.h)}</h3>
      <p>${esc(c.p)}</p>
    </div>
  `).join("");

  document.getElementById("aboutContent").innerHTML = `
    <span class="badge stagger stagger-1">IS FOR US</span>
    <h1 style="font-size:2rem; margin-top:8px;" class="stagger stagger-1">${esc(t("aboutTitle"))}</h1>
    <blockquote class="about-quote stagger stagger-2">${esc(t("aboutQuote"))}</blockquote>
    <p class="lead stagger stagger-2" style="margin-bottom:26px;">${esc(t("aboutIntro"))}</p>
    <div class="about-grid">${cards}</div>
    <button class="btn btn-primary stagger stagger-4" onclick="goToSubjects()">${esc(t("aboutCta"))}</button>
  `;
}

function renderSubjects() {
  document.getElementById("subjectsGrid").innerHTML = academicSubjects.map((subj, idx) => {
    const { done, total, pct } = getSectionStats(subj);
    const badgeLabel = subj.badge ? loc(subj.badge) : t("availableNow");
    return `
      <article class="topic-card stagger" style="animation-delay:${idx * 0.04}s" onclick="openSubject('${subj.id}')">
        <div>
          <div class="card-badges">
            <span class="badge">${esc(badgeLabel)}</span>
            ${done === total && total > 0 ? `<span class="badge badge-done">100%</span>` : ""}
          </div>
          <h3>${esc(loc(subj.title))}</h3>
          <p>${esc(loc(subj.desc))}</p>
        </div>
        <div>
          <div class="progress-track" style="height:6px; margin-bottom:10px;">
            <div class="progress-fill" style="width:${pct}%;"></div>
          </div>
          <div class="card-footer" style="padding-top:10px;">
            <span>${esc(t("passedOf")(done, total))}</span>
            <span>${esc(t("openBtn"))}</span>
          </div>
        </div>
      </article>
    `;
  }).join("");
}

function renderProgress() {
  const sec = getCurrentSection();
  const isSpecial = SPECIAL_IDS.has(sec.id);
  const box = document.getElementById("progressFill")?.parentElement?.parentElement;
  if (box) box.style.display = isSpecial ? "none" : "";
  if (isSpecial) return;

  const { done, total, pct } = getSectionStats(sec);
  document.getElementById("progressLabel").textContent = t("progressTitle")(done, total);
  document.getElementById("progressPercent").textContent = `${pct}%`;
  document.getElementById("progressFill").style.width = `${pct}%`;
}

function renderCards(filter = "") {
  const q = filter.trim().toLowerCase();
  const grid = document.getElementById("cardsGrid");
  const progress = loadProgress();
  const sec = getCurrentSection();
  const isSpecial = SPECIAL_IDS.has(sec.id);
  grid.classList.toggle("list-layout", isSpecial);

  const filtered = sec.topics.filter(tp => {
    if (!q) return true;
    return loc(tp.title).toLowerCase().includes(q)
      || loc(tp.shortTag).toLowerCase().includes(q)
      || tp.elements.some(e => e.name.toLowerCase().includes(q) || e.desc.toLowerCase().includes(q));
  });

  if (!filtered.length) {
    grid.innerHTML = `<p style="color:var(--text-muted);">${esc(t("notFound")(filter))}</p>`;
    return;
  }

  grid.innerHTML = filtered.map((tp, idx) => {
    const stat = progress[tp.id];
    const statusBadge = (!isSpecial && stat?.passed)
      ? `<span class="badge badge-done">${esc(t("doneBadge")(stat.best, stat.total))}</span>`
      : (!isSpecial && stat ? `<span class="badge">${esc(t("bestBadge")(stat.best, stat.total))}</span>` : "");

    const metaText = isSpecial
      ? ""
      : t("cardMeta")(tp.examples.length, tp.quiz.length);
    return `
      <article class="topic-card stagger" style="animation-delay:${idx * 0.04}s" onclick="openTopic('${tp.id}')">
        <div>
          <div class="card-badges">
            <span class="badge">${esc(loc(tp.shortTag))}</span>
            ${statusBadge}
          </div>
          <h3>${esc(loc(tp.title))}</h3>
          <p>${esc(loc(tp.summary))}</p>
        </div>
        <div class="card-footer">
          <span>${esc(metaText)}</span>
          <span>${esc(t("openBtn"))}</span>
        </div>
      </article>
    `;
  }).join("");
}

function renderExampleBody(ex) {
  const copyButton = ex.code
    ? `<button class="btn btn-sm" id="copyCodeBtn" onclick="copyCurrentCode()">${esc(t("copyBtn"))}</button>`
    : "";
  const visual = ex.svg
    ? `<div class="svg-box">${ex.svg}</div>`
    : `<pre class="code-block"><code>${esc(ex.code)}</code></pre>`;
  return `
    <div class="example-head">
      <div>
        <div class="example-title">${esc(ex.title)}</div>
        <p class="example-desc">${esc(ex.desc)}</p>
      </div>
      ${copyButton}
    </div>
    ${visual}
  `;
}

window.copyCurrentCode = function () {
  const ex = getCurrentTopic().examples[currentExampleIndex];
  if (!ex?.code) return;
  navigator.clipboard?.writeText(ex.code).then(() => {
    const btn = document.getElementById("copyCodeBtn");
    if (btn) {
      btn.textContent = t("copiedBtn");
      setTimeout(() => { btn.textContent = t("copyBtn"); }, 1800);
    }
  });
};

function renderStudy() {
  const sec = getCurrentSection();
  const topic = getCurrentTopic();
  const isSpecial = SPECIAL_IDS.has(sec.id);
  document.getElementById("studyTopTitle").textContent = loc(topic.title);

  const idx = sec.topics.findIndex(tp => tp.id === topic.id);
  const prevTopic = sec.topics[(idx - 1 + sec.topics.length) % sec.topics.length];
  const nextTopic = sec.topics[(idx + 1) % sec.topics.length];

  const whereUsedHtml = topic.whereUsed ? `
    <div class="info-callout stagger stagger-1">
      <strong>${esc(t("whereUsedTitle"))}</strong>
      ${esc(topic.whereUsed)}
    </div>` : "";

  const rows = topic.elements.map(e => `
    <tr><td class="el-name">${esc(e.name)}</td><td>${esc(e.desc)}</td></tr>
  `).join("");

  const tabs = topic.examples.map((ex, i) => `
    <button class="ex-tab ${i === currentExampleIndex ? "active" : ""}" onclick="selectExample(${i})">
      ${esc(ex.label)}
    </button>
  `).join("");

  const ex = topic.examples[currentExampleIndex];
  const mistakes = topic.mistakes.map(m => `<li>${esc(m)}</li>`).join("");

  const quizBlock = (!isSpecial && topic.quiz?.length) ? `
    <section class="section stagger stagger-5">
      <div class="quiz-trigger-box">
        <div>
          <strong>${esc(t("quizPromptTitle"))}</strong>
          <p>${esc(t("quizPromptDesc")(topic.quiz.length))}</p>
        </div>
        <button class="btn btn-primary btn-sm" style="padding:10px 18px;" onclick="openQuiz()">${esc(t("takeQuizBtn"))}</button>
      </div>
    </section>` : "";

  document.getElementById("studyContent").innerHTML = `
    <header class="topic-header stagger stagger-1">
      <span class="badge">${esc(loc(topic.shortTag))}</span>
      <h1>${esc(loc(topic.title))}</h1>
      <p class="lead">${esc(loc(topic.summary))}</p>
    </header>

    ${whereUsedHtml}

    <section class="section stagger stagger-2">
      <h2>${esc(t("elementsTitle"))}</h2>
      <div class="table-wrap">
        <table>
          <thead><tr><th>${esc(t("colEl"))}</th><th>${esc(t("colDesc"))}</th></tr></thead>
          <tbody>${rows}</tbody>
        </table>
      </div>
    </section>

    <section class="section stagger stagger-3">
      <h2>${esc(t("examplesTitle"))}</h2>
      <div class="example-tabs">${tabs}</div>
      <div class="example-stage" id="exampleStage">${renderExampleBody(ex)}</div>
    </section>

    <section class="section stagger stagger-4">
      <h2>${esc(t("mistakesTitle"))}</h2>
      <ul class="mistakes-list">${mistakes}</ul>
    </section>

    ${quizBlock}

    <div class="study-nav-bottom stagger stagger-5">
      <button class="btn btn-sm" onclick="openTopic('${prevTopic.id}')">← ${esc(loc(prevTopic.title))}</button>
      <button class="btn btn-sm" onclick="openTopic('${nextTopic.id}')">${esc(loc(nextTopic.title))} →</button>
    </div>
  `;
}

window.selectExample = function (index) {
  currentExampleIndex = index;
  const ex = getCurrentTopic().examples[index];
  document.querySelectorAll(".ex-tab").forEach((btn, i) => btn.classList.toggle("active", i === index));
  const stage = document.getElementById("exampleStage");
  stage.style.animation = "none";
  stage.offsetHeight;
  stage.style.animation = "popIn 0.28s ease both";
  stage.innerHTML = renderExampleBody(ex);
};

/* ===== ЕДИНЫЙ ДВИЖОК ТЕСТОВ (ВЫБОР + ПОРЯДОК + ПАРЫ С UNDO) ===== */
function finalizeQuizIfDone() {
  const topic = getCurrentTopic();
  const answeredCount = Object.keys(quizAnswers).length;
  document.getElementById("quizProgress").textContent = t("answered")(answeredCount, topic.quiz.length);

  if (answeredCount === topic.quiz.length) {
    let correctCount = 0;
    topic.quiz.forEach((item, i) => {
      if (item.type === "order" || item.type === "match") {
        if (quizAnswers[i] === true) correctCount++;
      } else if (quizAnswers[i] === item.answer) {
        correctCount++;
      }
    });

    saveTopicResult(topic.id, correctCount, topic.quiz.length);
    const passed = correctCount >= Math.ceil(topic.quiz.length * 0.6);
    document.getElementById("quizScoreText").textContent = t("resultText")(correctCount, topic.quiz.length, passed);
    const res = document.getElementById("quizResult");
    res.classList.add("show");
    res.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }
}

window.openQuiz = function () {
  const topic = getCurrentTopic();
  quizAnswers = {};
  interactiveState = {};
  document.getElementById("quizTopTitle").textContent = loc(topic.shortTag);

  const quizHtml = topic.quiz.map((qItem, qIdx) => {
    if (qItem.type === "order") {
      let shuffled = shuffleArray(qItem.items);
      if (shuffled.every((v, idx) => v === qItem.items[idx]) && shuffled.length > 1) {
        [shuffled[0], shuffled[1]] = [shuffled[1], shuffled[0]];
      }
      interactiveState[qIdx] = { list: shuffled, locked: false };
      return `
        <div class="quiz-card stagger" style="animation-delay:${qIdx * 0.05}s" id="q-card-${qIdx}">
          <div class="quiz-q">${qIdx + 1}. ${esc(qItem.q)}</div>
          <div class="order-list" id="order-list-${qIdx}"></div>
          <button class="btn btn-sm btn-primary" id="order-check-${qIdx}" onclick="checkOrderQuiz(${qIdx})">Проверить порядок</button>
          <div class="quiz-explain" id="q-exp-${qIdx}">${esc(qItem.explain)}</div>
        </div>`;
    }

    if (qItem.type === "match") {
      const rightShuffled = shuffleArray(qItem.pairs.map((p, idx) => ({ text: p.right, origIdx: idx })));
      interactiveState[qIdx] = {
        rightItems: rightShuffled,
        selectedLeft: null,
        selectedRight: null,
        pairsMap: {},
        history: [],
        locked: false
      };
      return `
        <div class="quiz-card stagger" style="animation-delay:${qIdx * 0.05}s" id="q-card-${qIdx}">
          <div class="quiz-q">${qIdx + 1}. ${esc(qItem.q)}</div>
          <div class="match-grid" id="match-grid-${qIdx}"></div>
          <div style="display:flex; gap:8px; flex-wrap:wrap; align-items:center;">
            <button class="btn btn-sm btn-primary" id="match-check-${qIdx}" onclick="checkMatchQuiz(${qIdx})">Проверить пары</button>
            <button class="btn btn-sm" id="match-undo-${qIdx}" onclick="undoMatchStep(${qIdx})" disabled>↩ Отменить действие</button>
          </div>
          <div class="quiz-explain" id="q-exp-${qIdx}">${esc(qItem.explain)}</div>
        </div>`;
    }

    return `
      <div class="quiz-card stagger" style="animation-delay:${qIdx * 0.05}s" id="q-card-${qIdx}">
        <div class="quiz-q">${qIdx + 1}. ${esc(qItem.q)}</div>
        <div class="quiz-options">
          ${qItem.options.map((opt, oIdx) => `
            <button class="quiz-opt" onclick="answerQuiz(${qIdx}, ${oIdx})">${esc(opt)}</button>
          `).join("")}
        </div>
        <div class="quiz-explain" id="q-exp-${qIdx}">${esc(qItem.explain)}</div>
      </div>`;
  }).join("");

  document.getElementById("quizContent").innerHTML = `
    <header class="quiz-header">
      <div>
        <span class="badge">${esc(t("quizBadge"))}</span>
        <h1>${esc(loc(topic.title))}</h1>
      </div>
      <span class="quiz-progress" id="quizProgress">${esc(t("answered")(0, topic.quiz.length))}</span>
    </header>
    ${quizHtml}
    <div class="quiz-result" id="quizResult">
      <span id="quizScoreText"></span>
      <div style="display:flex; gap:10px; flex-wrap:wrap;">
        <button class="btn btn-sm" onclick="openQuiz()">${esc(t("retryBtn"))}</button>
        <button class="btn btn-sm" onclick="goToSelect()">${esc(t("toTopicsBtn"))}</button>
      </div>
    </div>`;

  topic.quiz.forEach((qItem, qIdx) => {
    if (qItem.type === "order") renderOrderList(qIdx);
    if (qItem.type === "match") renderMatchGrid(qIdx);
  });

  showScreen("screen-quiz");
};

window.answerQuiz = function (qIdx, oIdx) {
  const qItem = getCurrentTopic().quiz[qIdx];
  if (quizAnswers[qIdx] !== undefined) return;
  quizAnswers[qIdx] = oIdx;
  const card = document.getElementById(`q-card-${qIdx}`);
  card.querySelectorAll(".quiz-opt").forEach((btn, i) => {
    btn.disabled = true;
    if (i === qItem.answer) btn.classList.add("correct");
    else if (i === oIdx) btn.classList.add("wrong");
  });
  document.getElementById(`q-exp-${qIdx}`).classList.add("show");
  finalizeQuizIfDone();
};

function renderOrderList(qIdx) {
  const st = interactiveState[qIdx];
  const qItem = getCurrentTopic().quiz[qIdx];
  const el = document.getElementById(`order-list-${qIdx}`);
  if (!el) return;

  el.innerHTML = st.list.map((text, idx) => {
    let cls = "order-item";
    if (st.locked) cls += (text === qItem.items[idx] ? " correct" : " wrong");
    return `
      <div class="${cls}" draggable="${!st.locked}"
           ondragstart="orderDragStart(event, ${qIdx}, ${idx})"
           ondragover="event.preventDefault()"
           ondrop="orderDrop(event, ${qIdx}, ${idx})">
        <span><strong>${idx + 1}.</strong> ${esc(text)}</span>
        <div class="order-controls">
          <button class="order-btn" ${st.locked || idx === 0 ? "disabled" : ""} onclick="moveOrderItem(${qIdx}, ${idx}, -1)">↑</button>
          <button class="order-btn" ${st.locked || idx === st.list.length - 1 ? "disabled" : ""} onclick="moveOrderItem(${qIdx}, ${idx}, 1)">↓</button>
        </div>
      </div>`;
  }).join("");
}

window.orderDragStart = (e, qIdx, idx) => { dragInfo = { qIdx, idx }; };
window.orderDrop = (e, qIdx, targetIdx) => {
  e.preventDefault();
  if (!dragInfo || dragInfo.qIdx !== qIdx) return;
  const st = interactiveState[qIdx];
  if (st.locked) return;
  const [moved] = st.list.splice(dragInfo.idx, 1);
  st.list.splice(targetIdx, 0, moved);
  dragInfo = null;
  renderOrderList(qIdx);
};

window.moveOrderItem = (qIdx, idx, dir) => {
  const st = interactiveState[qIdx];
  if (st.locked) return;
  const target = idx + dir;
  if (target < 0 || target >= st.list.length) return;
  [st.list[idx], st.list[target]] = [st.list[target], st.list[idx]];
  renderOrderList(qIdx);
};

window.checkOrderQuiz = (qIdx) => {
  const st = interactiveState[qIdx];
  if (st.locked) return;
  const qItem = getCurrentTopic().quiz[qIdx];
  st.locked = true;
  quizAnswers[qIdx] = st.list.every((v, idx) => v === qItem.items[idx]);
  renderOrderList(qIdx);
  document.getElementById(`order-check-${qIdx}`).disabled = true;
  document.getElementById(`q-exp-${qIdx}`).classList.add("show");
  finalizeQuizIfDone();
};

function renderMatchGrid(qIdx) {
  const st = interactiveState[qIdx];
  const qItem = getCurrentTopic().quiz[qIdx];
  const el = document.getElementById(`match-grid-${qIdx}`);
  if (!el) return;

  const leftHtml = qItem.pairs.map((p, lIdx) => {
    const pairedRight = st.pairsMap[lIdx];
    let cls = "match-item";
    if (st.selectedLeft === lIdx) cls += " selected";
    if (pairedRight !== undefined) cls += " paired";
    if (st.locked) {
      const rightObj = st.rightItems[pairedRight];
      cls += (rightObj && rightObj.origIdx === lIdx ? " correct" : " wrong");
    }
    const badge = pairedRight !== undefined ? `<span class="match-num">${lIdx + 1}</span>` : "";
    return `<button class="${cls}" ${st.locked ? "disabled" : ""} onclick="selectMatchLeft(${qIdx}, ${lIdx})"><span>${esc(p.left)}</span>${badge}</button>`;
  }).join("");

  const rightHtml = st.rightItems.map((rObj, rIdx) => {
    const pairedLeftKey = Object.keys(st.pairsMap).find(k => st.pairsMap[k] === rIdx);
    let cls = "match-item";
    if (st.selectedRight === rIdx) cls += " selected";
    if (pairedLeftKey !== undefined) cls += " paired";
    if (st.locked) {
      cls += (pairedLeftKey !== undefined && Number(pairedLeftKey) === rObj.origIdx ? " correct" : " wrong");
    }
    const badge = pairedLeftKey !== undefined ? `<span class="match-num">${Number(pairedLeftKey) + 1}</span>` : "";
    return `<button class="${cls}" ${st.locked ? "disabled" : ""} onclick="selectMatchRight(${qIdx}, ${rIdx})"><span>${esc(rObj.text)}</span>${badge}</button>`;
  }).join("");

  el.innerHTML = `<div class="match-col">${leftHtml}</div><div class="match-col">${rightHtml}</div>`;
  const undoBtn = document.getElementById(`match-undo-${qIdx}`);
  if (undoBtn) undoBtn.disabled = st.locked || st.history.length === 0;
}

window.selectMatchLeft = (qIdx, lIdx) => {
  const st = interactiveState[qIdx];
  if (st.locked) return;
  if (st.selectedRight !== null) {
    st.history.push({ ...st.pairsMap });
    Object.keys(st.pairsMap).forEach(k => { if (st.pairsMap[k] === st.selectedRight) delete st.pairsMap[k]; });
    st.pairsMap[lIdx] = st.selectedRight;
    st.selectedRight = null;
    st.selectedLeft = null;
  } else {
    st.selectedLeft = (st.selectedLeft === lIdx) ? null : lIdx;
  }
  renderMatchGrid(qIdx);
};

window.selectMatchRight = (qIdx, rIdx) => {
  const st = interactiveState[qIdx];
  if (st.locked) return;
  if (st.selectedLeft !== null) {
    st.history.push({ ...st.pairsMap });
    Object.keys(st.pairsMap).forEach(k => { if (st.pairsMap[k] === rIdx) delete st.pairsMap[k]; });
    st.pairsMap[st.selectedLeft] = rIdx;
    st.selectedLeft = null;
    st.selectedRight = null;
  } else {
    st.selectedRight = (st.selectedRight === rIdx) ? null : rIdx;
  }
  renderMatchGrid(qIdx);
};

window.undoMatchStep = (qIdx) => {
  const st = interactiveState[qIdx];
  if (st.locked || st.history.length === 0) return;
  st.pairsMap = st.history.pop();
  st.selectedLeft = null;
  st.selectedRight = null;
  renderMatchGrid(qIdx);
};

window.checkMatchQuiz = (qIdx) => {
  const st = interactiveState[qIdx];
  const qItem = getCurrentTopic().quiz[qIdx];
  if (st.locked || Object.keys(st.pairsMap).length < qItem.pairs.length) return;
  st.locked = true;
  quizAnswers[qIdx] = qItem.pairs.every((_, lIdx) => st.rightItems[st.pairsMap[lIdx]]?.origIdx === lIdx);
  renderMatchGrid(qIdx);
  document.getElementById(`match-check-${qIdx}`).disabled = true;
  document.getElementById(`q-exp-${qIdx}`).classList.add("show");
  finalizeQuizIfDone();
};

/* ===== ПОИСК (С DEBOUNCE) ===== */
document.getElementById("searchInput")?.addEventListener("input", debounce((e) => {
  renderCards(e.target.value);
}, 120));

window.openGlobalSearch = function () {
  const modal = document.getElementById("globalSearchModal");
  const input = document.getElementById("globalSearchInput");
  if (!modal || !input) return;
  modal.classList.add("open");
  input.value = "";
  renderGlobalSearchResults("");
  setTimeout(() => input.focus(), 50);
};

window.closeGlobalSearch = function () {
  document.getElementById("globalSearchModal")?.classList.remove("open");
};

function renderGlobalSearchResults(query) {
  const container = document.getElementById("globalSearchResults");
  if (!container) return;
  const q = query.trim().toLowerCase();

  if (!q) {
    container.innerHTML = `<div class="search-empty">${esc(t("globalSearchHint"))}</div>`;
    return;
  }

  const matches = [];
  allSections.forEach(sec => {
    sec.topics.forEach(tp => {
      const hit = loc(tp.title).toLowerCase().includes(q)
        || loc(tp.shortTag).toLowerCase().includes(q)
        || loc(tp.summary).toLowerCase().includes(q)
        || (tp.whereUsed || "").toLowerCase().includes(q)
        || tp.elements.some(e => e.name.toLowerCase().includes(q) || e.desc.toLowerCase().includes(q))
        || tp.examples.some(ex => ex.title.toLowerCase().includes(q) || ex.desc.toLowerCase().includes(q));
      if (hit) matches.push({ sec, tp });
    });
  });

  if (!matches.length) {
    container.innerHTML = `<div class="search-empty">${esc(t("globalSearchEmpty"))}</div>`;
    return;
  }

  container.innerHTML = matches.map(({ sec, tp }) => `
    <button class="search-res-item" onclick="jumpToSearchResult('${sec.id}', '${tp.id}')">
      <div class="search-res-top">
        <span class="search-res-title">${esc(loc(tp.title))}</span>
        <span class="search-res-subj">${esc(loc(sec.title))}</span>
      </div>
      <span class="search-res-desc">${esc(loc(tp.summary))}</span>
    </button>
  `).join("");
}

window.jumpToSearchResult = function (sectionId, topicId) {
  closeGlobalSearch();
  currentSectionId = sectionId;
  openTopic(topicId);
};

document.getElementById("globalSearchInput")?.addEventListener("input", debounce((e) => {
  renderGlobalSearchResults(e.target.value);
}, 120));

document.addEventListener("keydown", (e) => {
  if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
    e.preventDefault();
    openGlobalSearch();
  } else if (e.key === "Escape") {
    closeGlobalSearch();
  }
});

/* ===== ТЕМА ===== */
function updateThemeButtons() {
  const current = document.documentElement.getAttribute("data-theme") || "light";
  document.querySelectorAll(".theme-toggle-btn").forEach(btn => {
    btn.textContent = current === "dark" ? t("lightTheme") : t("darkTheme");
  });
}

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  updateThemeButtons();
  localStorage.setItem("isforus_theme", theme);
}

window.toggleTheme = function () {
  const current = document.documentElement.getAttribute("data-theme") || "light";
  applyTheme(current === "dark" ? "light" : "dark");
};

injectGlobalSearchButtons();
applyTheme(localStorage.getItem("isforus_theme") || "light");
applyLanguageUI();

/* ===== ОПТИМИЗИРОВАННЫЙ ФОН (СПИТ В ПРОСТОЕ — 0% CPU) ===== */
(function initInteractiveBackground() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const canvas = document.createElement("canvas");
  canvas.id = "bgDotsCanvas";
  document.body.prepend(canvas);

  const cursor = document.createElement("div");
  cursor.id = "cursorCircle";
  document.body.appendChild(cursor);

  const ctx = canvas.getContext("2d");
  const isTouch = window.matchMedia("(pointer: coarse)").matches;

  let width = 0, height = 0, rafId = null;
  let dpr = Math.min(window.devicePixelRatio || 1, 2);
  let mouseX = -9999, mouseY = -9999, curX = -9999, curY = -9999;
  let activeAlpha = 0, isInside = false;
  let baseDotColor = "#cbd5e1", accentColor = "#0f766e";

  function wake() {
    if (!rafId && !document.hidden) rafId = requestAnimationFrame(draw);
  }

  function syncThemeColors() {
    const styles = getComputedStyle(document.documentElement);
    baseDotColor = styles.getPropertyValue("--border").trim() || "#cbd5e1";
    accentColor = styles.getPropertyValue("--accent").trim() || "#0f766e";
    wake();
  }

  function resize() {
    width = window.innerWidth;
    height = window.innerHeight;
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    wake();
  }

  window.addEventListener("resize", debounce(resize, 150));
  document.addEventListener("visibilitychange", () => { if (!document.hidden) wake(); });
  new MutationObserver(syncThemeColors).observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });

  if (!isTouch) {
    document.addEventListener("mousemove", (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!isInside) {
        curX = mouseX; curY = mouseY;
        isInside = true;
        cursor.classList.add("visible");
      }
      cursor.classList.toggle("hovering", Boolean(e.target.closest("button, a, .topic-card, .brand")));
      wake();
    }, { passive: true });

    document.addEventListener("mouseleave", () => {
      isInside = false;
      cursor.classList.remove("visible", "hovering");
      wake();
    });
  }

  const SPACING = 28, BASE_RADIUS = 1.2, MAX_RADIUS = 4.0, INFLUENCE = 135;

  function draw() {
    rafId = null;
    ctx.clearRect(0, 0, width, height);

    if (isInside) {
      curX += (mouseX - curX) * 0.18;
      curY += (mouseY - curY) * 0.18;
      activeAlpha += (1 - activeAlpha) * 0.12;
      cursor.style.left = curX + "px";
      cursor.style.top = curY + "px";
    } else {
      activeAlpha += (0 - activeAlpha) * 0.12;
    }

    for (let y = SPACING / 2; y < height; y += SPACING) {
      for (let x = SPACING / 2; x < width; x += SPACING) {
        let radius = BASE_RADIUS, influence = 0;
        if (activeAlpha > 0.01) {
          const dist = Math.hypot(x - curX, y - curY);
          if (dist < INFLUENCE) {
            const k = 1 - dist / INFLUENCE;
            influence = k * k * activeAlpha;
            radius = BASE_RADIUS + (MAX_RADIUS - BASE_RADIUS) * influence;
          }
        }
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        if (influence > 0.08) {
          ctx.fillStyle = accentColor;
          ctx.globalAlpha = 0.25 + influence * 0.65;
        } else {
          ctx.fillStyle = baseDotColor;
          ctx.globalAlpha = 0.7;
        }
        ctx.fill();
      }
    }
    ctx.globalAlpha = 1;

    const moving = isInside && (Math.abs(mouseX - curX) > 0.4 || Math.abs(mouseY - curY) > 0.4 || activeAlpha < 0.99);
    const fading = !isInside && activeAlpha > 0.01;
    if ((moving || fading) && !document.hidden) {
      rafId = requestAnimationFrame(draw);
    }
  }

  syncThemeColors();
  resize();
})();

/* =========================================================================
   UX-МОДУЛЬ: HASH-РОУТИНГ, «НАВЕРХ», ИЗБРАННОЕ, СБРОС ПРОГРЕССА И PWA
   ========================================================================= */
(function initUxUpgrades() {
  /* 1. Кнопка «↑ Наверх» */
  const topBtn = document.createElement("button");
  topBtn.id = "scrollTopBtn";
  topBtn.type = "button";
  topBtn.title = "Наверх";
  topBtn.setAttribute("aria-label", "Наверх");
  topBtn.textContent = "↑";
  topBtn.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });
  document.body.appendChild(topBtn);

  window.addEventListener("scroll", () => {
    topBtn.classList.toggle("show", window.scrollY > 320);
  }, { passive: true });

  /* 2. Избранное (Закладки) */
  const FAV_KEY = "isforus_favs_v1";
  function loadFavs() {
    try { return JSON.parse(localStorage.getItem(FAV_KEY) || "[]"); }
    catch { return []; }
  }
  function saveFavs(list) {
    localStorage.setItem(FAV_KEY, JSON.stringify(list));
  }
  function isFav(secId, topicId) {
    return loadFavs().some(f => f.secId === secId && f.topicId === topicId);
  }

  window.toggleFavoriteTopic = function (secId, topicId) {
    let favs = loadFavs();
    if (isFav(secId, topicId)) {
      favs = favs.filter(f => !(f.secId === secId && f.topicId === topicId));
    } else {
      favs.push({ secId, topicId });
    }
    saveFavs(favs);
    injectStudyFavButton();
  };

  function injectStudyFavButton() {
    const header = document.querySelector("#studyContent .topic-header");
    if (!header) return;
    let btn = header.querySelector(".fav-toggle-btn");
    const active = isFav(currentSectionId, currentTopicId);
    if (!btn) {
      btn = document.createElement("button");
      btn.type = "button";
      btn.className = "btn btn-sm fav-toggle-btn";
      const badge = header.querySelector(".badge");
      if (badge) badge.after(btn);
      else header.prepend(btn);
    }
    btn.classList.toggle("active", active);
    btn.textContent = active ? "★ В избранном" : "☆ В избранное";
    btn.onclick = () => window.toggleFavoriteTopic(currentSectionId, currentTopicId);
  }

  function renderFavoritesBar() {
    const grid = document.getElementById("subjectsGrid");
    if (!grid) return;
    let bar = document.getElementById("favoritesBar");
    const favs = loadFavs();
    if (!favs.length) {
      if (bar) bar.remove();
      return;
    }

    const chips = favs.map(f => {
      const sec = allSections.find(s => s.id === f.secId);
      const tp = sec?.topics.find(t => t.id === f.topicId);
      if (!sec || !tp) return "";
      return `<button class="fav-chip" onclick="jumpToSearchResult('${sec.id}', '${tp.id}')">★ ${esc(loc(tp.shortTag))}: ${esc(loc(tp.title))}</button>`;
    }).filter(Boolean).join("");

    if (!chips) {
      if (bar) bar.remove();
      return;
    }

    if (!bar) {
      bar = document.createElement("div");
      bar.id = "favoritesBar";
      bar.className = "fav-bar";
      grid.parentElement.insertBefore(bar, grid);
    }
    bar.innerHTML = `<div class="fav-bar-title">★ Избранные темы (${favs.length})</div><div class="fav-chips">${chips}</div>`;
  }

  /* 3. Кнопка «Сбросить прогресс» в подвале */
  window.resetAllProgress = function () {
    if (!confirm("Сбросить весь прогресс по пройденным тестам?")) return;
    localStorage.removeItem(PROGRESS_KEY);
    progressCache = {};
    if (currentScreen === "screen-subjects") renderSubjects();
    if (currentScreen === "screen-select") { renderProgress(); renderCards(document.getElementById("searchInput")?.value || ""); }
  };

  function injectResetButtonInFooter() {
    const links = document.querySelector("#siteFooter .footer-links");
    if (!links || links.querySelector(".reset-progress-btn")) return;
    const btn = document.createElement("button");
    btn.className = "reset-progress-btn";
    btn.textContent = "Сбросить прогресс";
    btn.onclick = window.resetAllProgress;
    links.appendChild(btn);
  }

  /* 4. Hash-роутинг (прямые ссылки + кнопка «Назад» + F5) */
  let applyingHash = false;
  function setHash(h) {
    if (applyingHash) return;
    if (window.location.hash !== h) {
      history.pushState(null, "", h);
    }
  }

  const origWelcome = window.goToWelcome;
  const origAbout = window.goToAbout;
  const origSubjects = window.goToSubjects;
  const origOpenSubject = window.openSubject;
  const origOpenSpecial = window.openSpecialSection;
  const origOpenTopic = window.openTopic;

  window.goToWelcome = () => { origWelcome(); setHash("#welcome"); };
  window.goToAbout = () => { origAbout(); setHash("#about"); };
  window.goToSubjects = () => { origSubjects(); renderFavoritesBar(); setHash("#subjects"); };
  window.openSubject = (id) => { origOpenSubject(id); setHash(`#sec/${id}`); };
  window.openSpecialSection = (id) => { origOpenSpecial(id); setHash(`#sec/${id}`); };
  window.openTopic = (id) => {
    origOpenTopic(id);
    injectStudyFavButton();
    setHash(`#topic/${currentSectionId}/${id}`);
  };

  function applyHashRoute() {
    const raw = (window.location.hash || "").replace(/^#/, "");
    if (!raw || raw === "welcome") return;
    applyingHash = true;
    try {
      if (raw === "about") origAbout();
      else if (raw === "subjects") { origSubjects(); renderFavoritesBar(); }
      else if (raw.startsWith("sec/")) {
        const secId = raw.slice(4);
        if (allSections.some(s => s.id === secId)) origOpenSubject(secId);
      } else if (raw.startsWith("topic/")) {
        const [, secId, topicId] = raw.split("/");
        const sec = allSections.find(s => s.id === secId);
        if (sec && sec.topics.some(tp => tp.id === topicId)) {
          currentSectionId = secId;
          origOpenTopic(topicId);
          injectStudyFavButton();
        }
      }
    } finally {
      applyingHash = false;
    }
  }

  window.addEventListener("popstate", applyHashRoute);
  new MutationObserver(injectResetButtonInFooter).observe(document.getElementById("siteFooter"), { childList: true });
  injectResetButtonInFooter();
  applyHashRoute();

  /* 5. Регистрация Service Worker (PWA, работает на HTTPS / GitHub Pages) */
  if ("serviceWorker" in navigator && location.protocol.startsWith("http")) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("./sw.js").catch(() => {});
    });
  }
})();

/* =========================================================================
   ПЕРЕНОС ПРОГРЕССА МЕЖДУ УСТРОЙСТВАМИ (ЭКСПОРТ / ИМПОРТ КОДА)
   ========================================================================= */
(function initProgressSync() {
  const FAV_KEY = "isforus_favs_v1";
  const PREFIX = "ISFORUS1:";

  function encodePayload(obj) {
    const json = JSON.stringify(obj);
    const bytes = new TextEncoder().encode(json);
    let bin = "";
    bytes.forEach((b) => { bin += String.fromCharCode(b); });
    return PREFIX + btoa(bin);
  }

  function decodePayload(raw) {
    const clean = raw.trim();
    if (!clean.startsWith(PREFIX)) throw new Error("Неверный формат кода");
    const bin = atob(clean.slice(PREFIX.length));
    const bytes = Uint8Array.from(bin, (c) => c.charCodeAt(0));
    const json = new TextDecoder().decode(bytes);
    const data = JSON.parse(json);
    if (!data || typeof data.p !== "object" || !Array.isArray(data.f)) {
      throw new Error("Повреждённые данные");
    }
    return data;
  }

  const modal = document.createElement("div");
  modal.id = "progressSyncModal";
  modal.className = "sync-modal";
  modal.innerHTML = `
    <div class="sync-box" role="dialog" aria-modal="true" aria-labelledby="syncModalTitle">
      <div class="sync-head">
        <h3 id="syncModalTitle">Перенос прогресса между устройствами</h3>
        <button type="button" class="btn btn-sm" id="syncCloseBtn" aria-label="Закрыть">✕</button>
      </div>

      <ol class="sync-steps">
        <li><strong>На старом устройстве:</strong> нажмите «Скопировать код» ниже — в нём зашифрованы все ваши пройденные тесты и избранные темы.</li>
        <li><strong>Передайте код себе:</strong> отправьте его в «Избранное» в Telegram, на почту или в заметки.</li>
        <li><strong>На новом устройстве:</strong> откройте этот же раздел, вставьте код в нижнее поле и нажмите «Загрузить прогресс».</li>
      </ol>

      <div class="sync-block">
        <label for="syncExportArea">1. Ваш текущий код прогресса (Экспорт)</label>
        <textarea id="syncExportArea" class="sync-area" readonly></textarea>
        <div class="sync-actions">
          <button type="button" class="btn btn-sm btn-primary" id="syncCopyBtn">Скопировать код</button>
          <span class="sync-status" id="syncCopyStatus"></span>
        </div>
      </div>

      <div class="sync-block" style="margin-bottom:0;">
        <label for="syncImportArea">2. Вставьте код с другого устройства (Импорт)</label>
        <textarea id="syncImportArea" class="sync-area" placeholder="Вставьте код, начинающийся с ISFORUS1:..."></textarea>
        <div class="sync-actions">
          <button type="button" class="btn btn-sm btn-primary" id="syncImportBtn">Загрузить прогресс</button>
          <span class="sync-status" id="syncImportStatus"></span>
        </div>
      </div>
    </div>
  `;
  document.body.appendChild(modal);

  const exportArea = modal.querySelector("#syncExportArea");
  const importArea = modal.querySelector("#syncImportArea");
  const copyStatus = modal.querySelector("#syncCopyStatus");
  const importStatus = modal.querySelector("#syncImportStatus");

  window.openProgressSync = function () {
    const favs = (() => {
      try { return JSON.parse(localStorage.getItem(FAV_KEY) || "[]"); }
      catch { return []; }
    })();
    exportArea.value = encodePayload({ p: loadProgress(), f: favs });
    importArea.value = "";
    copyStatus.textContent = "";
    importStatus.textContent = "";
    modal.classList.add("open");
  };

  window.closeProgressSync = function () {
    modal.classList.remove("open");
  };

  modal.querySelector("#syncCloseBtn").onclick = window.closeProgressSync;
  modal.addEventListener("click", (e) => {
    if (e.target === modal) window.closeProgressSync();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") window.closeProgressSync();
  });

  modal.querySelector("#syncCopyBtn").onclick = () => {
    navigator.clipboard?.writeText(exportArea.value).then(() => {
      copyStatus.className = "sync-status ok";
      copyStatus.textContent = "Код скопирован ✓";
      setTimeout(() => { copyStatus.textContent = ""; }, 2500);
    }).catch(() => {
      exportArea.select();
      document.execCommand("copy");
      copyStatus.className = "sync-status ok";
      copyStatus.textContent = "Код скопирован ✓";
    });
  };

  modal.querySelector("#syncImportBtn").onclick = () => {
    try {
      const data = decodePayload(importArea.value);
      localStorage.setItem(PROGRESS_KEY, JSON.stringify(data.p));
      localStorage.setItem(FAV_KEY, JSON.stringify(data.f));
      progressCache = data.p;

      if (currentScreen === "screen-subjects") window.goToSubjects();
      if (currentScreen === "screen-select") {
        renderProgress();
        renderCards(document.getElementById("searchInput")?.value || "");
      }

      importStatus.className = "sync-status ok";
      importStatus.textContent = "Прогресс успешно восстановлен ✓";
      exportArea.value = encodePayload(data);
    } catch {
      importStatus.className = "sync-status err";
      importStatus.textContent = "Ошибка: проверьте, что код скопирован полностью.";
    }
  };

  function injectSyncButtonInFooter() {
    const links = document.querySelector("#siteFooter .footer-links");
    if (!links || links.querySelector(".sync-progress-btn")) return;
    const btn = document.createElement("button");
    btn.className = "sync-progress-btn";
    btn.textContent = "Перенос прогресса";
    btn.onclick = window.openProgressSync;
    const resetBtn = links.querySelector(".reset-progress-btn");
    if (resetBtn) links.insertBefore(btn, resetBtn);
    else links.appendChild(btn);
  }

  new MutationObserver(injectSyncButtonInFooter).observe(
    document.getElementById("siteFooter"),
    { childList: true }
  );
  injectSyncButtonInFooter();
})();