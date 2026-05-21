const STORAGE_KEY = "estudos_progress_v1";

// Dark mode é tratado em ../assets/js/main.js (compartilhado com o Guia).

// ── State ────────────────────────────────────────
const state = {
  view: "inicio",
  lessonFilterText: "",
  lessonFilterTopic: "Todos",
  selectedLessonIndex: 0,
  currentSession: null,
  lastResult: null,
  progress: loadProgress()
};

// Markdown content cache: filePath → string | null (null = load failed)
const lessonCache = {};

// ── Persistence ──────────────────────────────────
function loadProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { completedLessons: {}, attempts: [] };
    const p = JSON.parse(raw);
    return { completedLessons: p.completedLessons || {}, attempts: p.attempts || [] };
  } catch (_) {
    return { completedLessons: {}, attempts: [] };
  }
}

function saveProgress() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.progress));
}

// ── Navigation ───────────────────────────────────
function setView(next) {
  state.view = next;
  document.querySelectorAll(".tab").forEach(btn =>
    btn.classList.toggle("active", btn.dataset.view === next)
  );
  render();
}

// ── Data helpers ─────────────────────────────────
function uniqueTopics() {
  return ["Todos", ...Array.from(new Set(LESSONS.map(l => l.topic))).sort()];
}

function filteredLessons() {
  return LESSONS.filter(lesson => {
    const topicOk = state.lessonFilterTopic === "Todos" || lesson.topic === state.lessonFilterTopic;
    const text = state.lessonFilterText.trim().toLowerCase();
    const textOk = !text || lesson.title.toLowerCase().includes(text) || lesson.summary.toLowerCase().includes(text);
    return topicOk && textOk;
  });
}

function dashboardMetrics() {
  const { attempts, completedLessons } = state.progress;
  const avgScore = attempts.length
    ? Math.round(attempts.reduce((acc, a) => acc + a.percent, 0) / attempts.length)
    : 0;
  return {
    totalLessons: LESSONS.length,
    doneLessons:  Object.keys(completedLessons).length,
    attempts:     attempts.length,
    avgScore
  };
}

function classify(percent) {
  if (percent >= 85) return { label: t('levels.ok'),   cls: "ok" };
  if (percent >= 60) return { label: t('levels.warn'), cls: "warn" };
  return              { label: t('levels.bad'),         cls: "bad" };
}

// ── Session ──────────────────────────────────────
function startSession(mode) {
  const count = mode === "simulado" ? 20 : 10;
  const questions = shuffleArray([...QUESTION_BANK]).slice(0, Math.min(count, QUESTION_BANK.length));
  state.currentSession = {
    mode, questions,
    index: 0,
    selected: Array(questions.length).fill(null),
    startedAt: Date.now(),
    durationSec: mode === "simulado" ? 25 * 60 : null,
    timerId: null
  };
  if (mode === "simulado") {
    state.currentSession.timerId = setInterval(() => {
      if (!state.currentSession) return;
      const elapsed = Math.floor((Date.now() - state.currentSession.startedAt) / 1000);
      if (elapsed >= state.currentSession.durationSec) finishSession(true);
      else render();
    }, 1000);
  }
  render();
}

function stopTimerIfAny() {
  if (state.currentSession?.timerId) {
    clearInterval(state.currentSession.timerId);
    state.currentSession.timerId = null;
  }
}

function answerQuestion(optionIndex) {
  if (!state.currentSession) return;
  state.currentSession.selected[state.currentSession.index] = optionIndex;
  render();
}

function nextQuestion() {
  if (!state.currentSession) return;
  if (state.currentSession.index < state.currentSession.questions.length - 1) {
    state.currentSession.index += 1;
    render();
  }
}

function prevQuestion() {
  if (!state.currentSession) return;
  if (state.currentSession.index > 0) {
    state.currentSession.index -= 1;
    render();
  }
}

function finishSession(isTimeout = false) {
  if (!state.currentSession) return;
  stopTimerIfAny();

  const { selected, questions, mode } = state.currentSession;
  let correct = 0;
  const topicStats = {};

  questions.forEach((q, i) => {
    const hit = selected[i] === q.answer;
    if (hit) correct += 1;
    if (!topicStats[q.topic]) topicStats[q.topic] = { total: 0, correct: 0 };
    topicStats[q.topic].total += 1;
    if (hit) topicStats[q.topic].correct += 1;
  });

  const percent = Math.round((correct / questions.length) * 100);
  const result = {
    id: Date.now(), mode,
    date: new Date().toISOString(),
    total: questions.length, correct, percent,
    timeout: isTimeout, topicStats
  };

  state.progress.attempts.unshift(result);
  saveProgress();
  state.currentSession = null;
  state.lastResult = result;
  render();
}

function toggleLessonDone(indexInAllLessons) {
  if (state.progress.completedLessons[indexInAllLessons]) {
    delete state.progress.completedLessons[indexInAllLessons];
  } else {
    state.progress.completedLessons[indexInAllLessons] = true;
  }
  saveProgress();
  render();
}

function resetProgress() {
  if (!window.confirm("Deseja realmente apagar todo o progresso?")) return;
  state.progress = { completedLessons: {}, attempts: [] };
  state.lastResult = null;
  saveProgress();
  render();
}

// ── Lesson content loader ─────────────────────────
async function loadLessonContent(filePath) {
  if (filePath in lessonCache) return; // already fetched (or failed)
  // Encode each path segment (handles spaces, accents, & etc.)
  const encoded = filePath.split('/').map(seg => seg === '..' ? '..' : encodeURIComponent(seg)).join('/');
  try {
    const res = await fetch(encoded);
    if (!res.ok) throw new Error('HTTP ' + res.status);
    lessonCache[filePath] = await res.text();
  } catch (e) {
    lessonCache[filePath] = null;
  }
  render();
}

// ── Helpers ──────────────────────────────────────
function debounce(fn, ms) {
  let timer;
  return (...args) => { clearTimeout(timer); timer = setTimeout(() => fn(...args), ms); };
}

function formatDuration(seconds) {
  const m = Math.floor(seconds / 60).toString().padStart(2, "0");
  const s = (seconds % 60).toString().padStart(2, "0");
  return `${m}:${s}`;
}

function sessionTimeLeft() {
  if (!state.currentSession?.durationSec) return null;
  const elapsed = Math.floor((Date.now() - state.currentSession.startedAt) / 1000);
  return Math.max(0, state.currentSession.durationSec - elapsed);
}

function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function escapeHtml(text) {
  return String(text)
    .replaceAll("&", "&amp;").replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;").replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

// ── Renders ──────────────────────────────────────

function renderInicio() {
  const m = dashboardMetrics();
  const latest = state.progress.attempts[0];
  const latestLine = latest
    ? `<p><strong>${latest.mode}</strong> — ${latest.percent}% (${latest.correct}/${latest.total})</p>`
    : `<p style="color:var(--muted)">${t('inicio.noAttempts')}</p>`;

  return `
    <section class="grid cols-4">
      <article class="card metric" data-view="licoes">
        <div class="metric-icon metric-icon--indigo"><i class="fas fa-book-open"></i></div>
        <h3>${t('inicio.metrics.lessons')}</h3>
        <p>${m.doneLessons}<small>/${m.totalLessons}</small></p>
      </article>
      <article class="card metric" data-view="historico">
        <div class="metric-icon metric-icon--blue"><i class="fas fa-pen-to-square"></i></div>
        <h3>${t('inicio.metrics.attempts')}</h3>
        <p>${m.attempts}</p>
      </article>
      <article class="card metric" data-view="historico">
        <div class="metric-icon metric-icon--amber"><i class="fas fa-star"></i></div>
        <h3>${t('inicio.metrics.avg')}</h3>
        <p>${m.avgScore}<small>%</small></p>
      </article>
      <article class="card metric" data-view="quiz">
        <div class="metric-icon metric-icon--emerald"><i class="fas fa-database"></i></div>
        <h3>${t('inicio.metrics.questions')}</h3>
        <p>${QUESTION_BANK.length}</p>
      </article>
    </section>

    <section class="card" style="margin-top:16px">
      <h2 class="section-title"><i class="fas fa-gauge-high" style="color:var(--primary);margin-right:7px"></i>${t('inicio.title')}</h2>
      ${latestLine}
      <p style="color:var(--muted);font-size:.875rem;margin:8px 0 0">${t('inicio.hint')}</p>
    </section>
  `;
}

function renderLicoes() {
  const list = filteredLessons();
  const selected = list[state.selectedLessonIndex] || list[0] || null;
  const idxGlobal = selected ? LESSONS.findIndex(x => x.file === selected.file) : -1;
  const isDone = idxGlobal >= 0 && !!state.progress.completedLessons[idxGlobal];

  const items = list.map(lesson => {
    const idx = LESSONS.findIndex(x => x.file === lesson.file);
    const active = selected && selected.file === lesson.file;
    const done = !!state.progress.completedLessons[idx];
    return `
      <div class="lesson-item ${active ? 'active' : ''}" data-file="${escapeHtml(lesson.file)}">
        <div class="lesson-item-row">
          <strong>${escapeHtml(lesson.title)}</strong>
          ${done ? '<span class="badge-done"><i class="fas fa-check"></i></span>' : ''}
        </div>
        <div class="lesson-topic">${escapeHtml(lesson.topic)}</div>
      </div>`;
  }).join('');

  // Right panel: detail + markdown content
  let detail = '';
  if (selected) {
    const cached = lessonCache[selected.file];
    let contentHtml = '';

    if (cached === undefined) {
      // Not yet fetched — trigger load and show spinner
      loadLessonContent(selected.file);
      contentHtml = `<div class="lesson-loading"><i class="fas fa-circle-notch fa-spin"></i> ${t('licoes.loading')}</div>`;
    } else if (cached === null) {
      contentHtml = `<div class="lesson-load-error"><i class="fas fa-triangle-exclamation"></i> ${t('licoes.loadError')}</div>`;
    } else {
      const rendered = typeof marked !== 'undefined'
        ? marked.parse(cached)
        : `<pre>${escapeHtml(cached)}</pre>`;
      contentHtml = `<div class="lesson-prose">${rendered}</div>`;
    }

    detail = `
      <div class="lesson-detail-header">
        <span class="badge">${escapeHtml(selected.topic)}</span>
        <h3 class="lesson-detail-title">${escapeHtml(selected.title)}</h3>
        <p class="lesson-detail-summary">${escapeHtml(selected.summary)}</p>
        <div class="lesson-detail-actions">
          <button class="${isDone ? 'btn-done' : 'primary'}" id="markLessonBtn">
            ${isDone
              ? `<i class="fas fa-check"></i> ${t('licoes.alreadyDone')} <span style="opacity:.6;font-size:.75em">(${t('licoes.unmarkDone')})</span>`
              : `<i class="fas fa-circle-check"></i> ${t('licoes.markDone')}`}
          </button>
          <span class="lesson-source"><i class="fas fa-file-lines"></i> ${escapeHtml(selected.topic)}</span>
        </div>
      </div>
      ${contentHtml}`;
  } else {
    detail = `<div class="empty-state"><i class="fas fa-magnifying-glass"></i><p>${t('licoes.noResults')}</p></div>`;
  }

  return `
    <section class="lessons-layout">
      <article class="card lessons-sidebar">
        <h2 class="section-title">${t('licoes.title')}</h2>
        <div class="controls">
          <input type="text" id="lessonSearch" value="${escapeHtml(state.lessonFilterText)}"
            placeholder="${t('licoes.search')}" style="flex:1" />
          <select id="topicSelect">
            ${uniqueTopics().map(top => `<option value="${escapeHtml(top)}" ${top === state.lessonFilterTopic ? 'selected' : ''}>${top === 'Todos' ? t('licoes.allTopics') : escapeHtml(top)}</option>`).join('')}
          </select>
        </div>
        <div class="lesson-list">
          ${items || `<div class="lesson-item">${t('licoes.noResults')}</div>`}
        </div>
      </article>
      <article class="card lesson-content-panel" id="lessonDetail">
        ${detail}
      </article>
    </section>`;
}

function renderSessionView(mode) {
  const isSim = mode === "simulado";
  const tr = isSim
    ? { title: t('simulado.title'), desc: t('simulado.desc'), startId: 'startSimuladoBtn', startLabel: t('simulado.start') }
    : { title: t('quiz.title'),     desc: t('quiz.desc'),     startId: 'startQuizBtn',     startLabel: t('quiz.start') };

  if (!state.currentSession || state.currentSession.mode !== mode) {
    return `
      <section class="card session-start">
        <div class="session-start-icon">
          <i class="fas ${isSim ? 'fa-stopwatch' : 'fa-bolt'}"></i>
        </div>
        <h2 class="section-title">${tr.title}</h2>
        <p style="color:var(--muted);margin-bottom:20px">${tr.desc}</p>
        <button class="primary" id="${tr.startId}">
          <i class="fas fa-play"></i> ${tr.startLabel}
        </button>
      </section>
      ${renderLastResultBox()}`;
  }

  const s = state.currentSession;
  const q = s.questions[s.index];
  const selected = s.selected[s.index];
  const timeLeft = sessionTimeLeft();
  const answered = s.selected.filter(x => x !== null).length;
  const progressPct = Math.round(((s.index + 1) / s.questions.length) * 100);

  const dots = s.questions.map((_, i) => {
    const cls = i === s.index ? 'current' : s.selected[i] !== null ? 'answered' : '';
    return `<button class="answer-dot ${cls}" data-dot="${i}">${i + 1}</button>`;
  }).join('');

  return `
    <section class="card session-card">
      <!-- progress bar -->
      <div class="progress-bar-wrap">
        <div class="progress-bar-fill" style="width:${progressPct}%"></div>
      </div>
      <!-- answer map -->
      <div class="answer-map">${dots}</div>
      <!-- meta row -->
      <div class="question-meta">
        <span class="question-counter">
          ${t('session.question')} <strong>${s.index + 1}</strong> ${t('session.of')} ${s.questions.length}
          <span class="answered-count">(${answered} ${answered === 1 ? 'resp.' : 'resp.'})</span>
        </span>
        ${timeLeft !== null
          ? `<span class="timer ${timeLeft < 60 ? 'timer-urgent' : ''}">
               <i class="fas fa-clock"></i> ${formatDuration(timeLeft)}
             </span>`
          : ''}
      </div>
      <!-- question -->
      <span class="badge" style="margin-bottom:12px;display:inline-block">${escapeHtml(q.topic)}</span>
      <h3 class="question-text">${escapeHtml(q.q)}</h3>
      <!-- options -->
      <div class="options-list">
        ${q.options.map((opt, i) => `
          <button class="option ${selected === i ? 'active' : ''}" data-answer="${i}">
            <span class="option-letter">${String.fromCharCode(65 + i)}</span>
            <span class="option-text">${escapeHtml(opt)}</span>
          </button>`).join('')}
      </div>
      <!-- navigation -->
      <div class="question-nav">
        <button id="prevQBtn" ${s.index === 0 ? 'disabled' : ''}>
          <i class="fas fa-chevron-left"></i> ${t('session.prev')}
        </button>
        <button id="nextQBtn" ${s.index === s.questions.length - 1 ? 'disabled' : ''}>
          ${t('session.next')} <i class="fas fa-chevron-right"></i>
        </button>
        <button class="primary" id="finishBtn">
          <i class="fas fa-flag-checkered"></i> ${t('session.finish')}
        </button>
      </div>
    </section>`;
}

function renderLastResultBox() {
  const r = state.lastResult || state.progress.attempts[0];
  if (!r) return '';
  const level = classify(r.percent);
  const weakest = Object.entries(r.topicStats || {})
    .map(([topic, st]) => ({ topic, pct: Math.round((st.correct / st.total) * 100) }))
    .sort((a, b) => a.pct - b.pct)
    .slice(0, 3);

  return `
    <section class="card result-box ${level.cls}" style="margin-top:16px">
      <div class="result-header">
        <div>
          <h3 style="margin:0 0 3px">${t('session.lastResult')}</h3>
          <p style="margin:0;font-size:.8rem;color:var(--muted)">
            ${r.mode} · ${new Date(r.date).toLocaleString('pt-BR')}
          </p>
        </div>
        <div class="result-score-block">
          <span class="result-percent">${r.percent}%</span>
          <span class="level-badge level-${level.cls}">${level.label}</span>
        </div>
      </div>
      <p style="margin:8px 0;font-size:.875rem">
        ${r.correct}/${r.total}
        ${r.timeout ? `· <span style="color:var(--warn)">${t('session.timeout')}</span>` : ''}
      </p>
      ${weakest.length ? `
        <p style="margin:10px 0 6px;font-size:.75rem;font-weight:600;color:var(--muted);text-transform:uppercase;letter-spacing:.05em">${t('session.opportunities')}</p>
        <div style="display:flex;flex-wrap:wrap;gap:6px">
          ${weakest.map(w => `<span class="weakness-tag">${escapeHtml(w.topic)} <strong>${w.pct}%</strong></span>`).join('')}
        </div>` : ''}
      <div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:14px">
        <button class="primary" id="retryBtn">
          <i class="fas fa-rotate-right"></i> ${t('session.retry')}
        </button>
        <button id="viewHistoryBtn">
          <i class="fas fa-clock-rotate-left"></i> ${t('session.viewHistory')}
        </button>
      </div>
    </section>`;
}

function renderHistorico() {
  const { attempts } = state.progress;

  if (!attempts.length) {
    return `
      <section class="card">
        <div class="section-header" style="display:flex;justify-content:space-between;align-items:center;gap:12px;margin-bottom:12px">
          <h2 class="section-title" style="margin:0">${t('historico.title')}</h2>
          <button id="resetProgressBtn">
            <i class="fas fa-rotate-left"></i> ${t('topbar.reset')}
          </button>
        </div>
        <div class="empty-state">
          <i class="fas fa-chart-simple"></i>
          <p>${t('historico.noHistory')}</p>
          <p style="color:var(--muted);font-size:.875rem">${t('historico.noHistoryCta')}</p>
          <button class="primary" id="goQuizBtn" style="margin-top:8px">
            <i class="fas fa-bolt"></i> ${t('quiz.start')}
          </button>
        </div>
      </section>`;
  }

  const avg  = Math.round(attempts.reduce((a, x) => a + x.percent, 0) / attempts.length);
  const best = Math.max(...attempts.map(a => a.percent));

  const rows = attempts.map(a => {
    const lv = classify(a.percent);
    const date = new Date(a.date).toLocaleString('pt-BR');
    const weakest = Object.entries(a.topicStats || {})
      .map(([topic, st]) => ({ topic, pct: Math.round((st.correct / st.total) * 100) }))
      .sort((x, y) => x.pct - y.pct).slice(0, 3);

    return `
      <div class="history-item">
        <div class="history-item-header">
          <div>
            <strong class="history-mode">${escapeHtml(a.mode)}</strong>
            <span class="history-date"><i class="fas fa-calendar-days"></i> ${date}</span>
          </div>
          <div style="display:flex;align-items:center;gap:8px">
            <span class="history-percent">${a.percent}%</span>
            <span class="level-badge level-${lv.cls}">${lv.label}</span>
          </div>
        </div>
        <div class="history-fraction">
          ${a.correct}/${a.total}
          ${a.timeout ? `· <span style="color:var(--warn)">Tempo</span>` : ''}
        </div>
        ${weakest.length ? `
          <div style="display:flex;flex-wrap:wrap;gap:5px;margin-top:8px">
            ${weakest.map(w => `<span class="weakness-tag">${escapeHtml(w.topic)} <strong>${w.pct}%</strong></span>`).join('')}
          </div>` : ''}
      </div>`;
  }).join('');

  return `
    <section class="card stats-summary" style="margin-bottom:16px">
      <div class="stats-row">
        <div class="stat-item">
          <span class="stat-value">${attempts.length}</span>
          <span class="stat-label">${t('historico.total')}</span>
        </div>
        <div class="stat-divider"></div>
        <div class="stat-item">
          <span class="stat-value">${avg}%</span>
          <span class="stat-label">${t('historico.avg')}</span>
        </div>
        <div class="stat-divider"></div>
        <div class="stat-item">
          <span class="stat-value">${best}%</span>
          <span class="stat-label">${t('historico.best')}</span>
        </div>
      </div>
    </section>
    <section class="card">
      <div class="section-header" style="display:flex;justify-content:space-between;align-items:center;gap:12px;margin-bottom:12px">
        <h2 class="section-title" style="margin:0">${t('historico.title')}</h2>
        <button id="resetProgressBtn">
          <i class="fas fa-rotate-left"></i> ${t('topbar.reset')}
        </button>
      </div>
      ${rows}
    </section>`;
}

// ── Main render ───────────────────────────────────
function render() {
  const app = document.getElementById("app");
  if (state.view === "inicio")   app.innerHTML = renderInicio();
  if (state.view === "licoes")   app.innerHTML = renderLicoes();
  if (state.view === "quiz")     app.innerHTML = renderSessionView("quiz");
  if (state.view === "simulado") app.innerHTML = renderSessionView("simulado");
  if (state.view === "historico")app.innerHTML = renderHistorico();
  bindViewEvents();
}

// ── Event binding ─────────────────────────────────
function bindViewEvents() {
  if (state.view === "inicio") {
    document.querySelectorAll(".metric[data-view]").forEach(card => {
      card.addEventListener("click", () => setView(card.dataset.view));
    });
  }

  if (state.view === "licoes") {
    const searchEl = document.getElementById("lessonSearch");
    if (searchEl) {
      const debouncedSearch = debounce(val => {
        state.lessonFilterText = val;
        state.selectedLessonIndex = 0;
        render();
      }, 200);
      searchEl.addEventListener("input", e => debouncedSearch(e.target.value));
    }
    document.getElementById("topicSelect")?.addEventListener("change", e => {
      state.lessonFilterTopic = e.target.value;
      state.selectedLessonIndex = 0;
      render();
    });
    document.querySelectorAll(".lesson-item").forEach(item => {
      item.addEventListener("click", () => {
        const file = item.dataset.file;
        const list = filteredLessons();
        const idx = list.findIndex(x => x.file === file);
        if (idx >= 0) {
          state.selectedLessonIndex = idx;
          render();
          document.querySelector('.lesson-item.active')?.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
        }
      });
    });
    document.getElementById("markLessonBtn")?.addEventListener("click", () => {
      const list = filteredLessons();
      const sel = list[state.selectedLessonIndex] || list[0];
      if (!sel) return;
      const idx = LESSONS.findIndex(x => x.file === sel.file);
      if (idx >= 0) toggleLessonDone(idx);
    });
  }

  if (state.view === "quiz" || state.view === "simulado") {
    document.getElementById("startQuizBtn")?.addEventListener("click", () => startSession("quiz"));
    document.getElementById("startSimuladoBtn")?.addEventListener("click", () => startSession("simulado"));
    document.getElementById("retryBtn")?.addEventListener("click", () => {
      const mode = state.lastResult?.mode || state.progress.attempts[0]?.mode || "quiz";
      startSession(mode);
    });
    document.getElementById("viewHistoryBtn")?.addEventListener("click", () => setView("historico"));
    document.querySelectorAll(".option").forEach(btn =>
      btn.addEventListener("click", () => answerQuestion(Number(btn.dataset.answer)))
    );
    document.querySelectorAll(".answer-dot").forEach(dot =>
      dot.addEventListener("click", () => {
        if (!state.currentSession) return;
        state.currentSession.index = Number(dot.dataset.dot);
        render();
      })
    );
    document.getElementById("prevQBtn")?.addEventListener("click", prevQuestion);
    document.getElementById("nextQBtn")?.addEventListener("click", nextQuestion);
    document.getElementById("finishBtn")?.addEventListener("click", () => {
      const s = state.currentSession;
      if (!s) return;
      const unanswered = s.selected.filter(x => x === null).length;
      if (unanswered > 0 && !window.confirm(`${unanswered} ${t('session.confirmFinish')}`)) return;
      finishSession(false);
    });
  }

  if (state.view === "historico") {
    document.getElementById("goQuizBtn")?.addEventListener("click", () => setView("quiz"));
    document.getElementById("resetProgressBtn")?.addEventListener("click", resetProgress);
  }
}

// ── Init ──────────────────────────────────────────
document.querySelectorAll(".tab").forEach(btn =>
  btn.addEventListener("click", () => setView(btn.dataset.view))
);

render();
