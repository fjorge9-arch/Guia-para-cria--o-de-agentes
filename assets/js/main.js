// Utilitários compartilhados entre Guia e Plataforma.
// Cada bloco usa null-guards para tolerar a ausência dos elementos da outra seção.

// ── Dark mode (compartilhado) ───────────────────────
(function () {
  const root = document.documentElement;
  const saved = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (saved === 'dark' || (!saved && prefersDark)) root.classList.add('dark');

  function syncIcon() {
    // A Plataforma usa Font Awesome 6 (<i class="fa-solid fa-moon">) e troca para sol no dark.
    // O Guia não tem ícone — neste caso syncIcon é no-op.
    const icon = document.querySelector('#darkToggle i');
    if (icon) icon.className = root.classList.contains('dark') ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
  }
  syncIcon();

  const toggle = document.getElementById('darkToggle');
  if (toggle) {
    toggle.addEventListener('click', () => {
      root.classList.toggle('dark');
      localStorage.setItem('theme', root.classList.contains('dark') ? 'dark' : 'light');
      syncIcon();
    });
  }
})();

// ── Copy buttons (usado pelo Guia) ──────────────────
document.querySelectorAll('.copy-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const parent = btn.parentElement;
    const clone = parent.cloneNode(true);
    clone.querySelectorAll('.copy-btn').forEach(b => b.remove());
    const text = clone.innerText.trim();
    navigator.clipboard.writeText(text).then(() => {
      const original = btn.textContent;
      btn.textContent = window.t ? window.t('ui.copied') : 'Copiado!';
      btn.classList.add('copied');
      setTimeout(() => { btn.textContent = original; btn.classList.remove('copied'); }, 1500);
    });
  });
});

// ── Back to top (usado pelo Guia) ───────────────────
(function () {
  const backToTop = document.getElementById('backToTop');
  if (!backToTop) return;
  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) backToTop.classList.add('visible');
    else backToTop.classList.remove('visible');
  });
  backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
})();

// ── TOC ativo via IntersectionObserver (Guia) ───────
(function () {
  const tocLinks = document.querySelectorAll('.toc-link');
  if (!tocLinks.length) return;
  const sections = Array.from(tocLinks)
    .map(l => document.querySelector(l.getAttribute('href')))
    .filter(Boolean);
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        tocLinks.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + id));
      }
    });
  }, { rootMargin: '-30% 0px -60% 0px' });
  sections.forEach(s => observer.observe(s));
})();

// ── Mobile TOC drawer (Guia) ────────────────────────
(function () {
  const tocMobile = document.getElementById('tocMobile');
  const tocToggle = document.getElementById('tocToggleMobile');
  const tocClose  = document.getElementById('tocCloseMobile');
  if (!tocMobile || !tocToggle || !tocClose) return;
  tocToggle.addEventListener('click', () => tocMobile.classList.remove('hidden'));
  tocClose.addEventListener('click', () => tocMobile.classList.add('hidden'));
  tocMobile.addEventListener('click', e => { if (e.target === tocMobile) tocMobile.classList.add('hidden'); });
  tocMobile.querySelectorAll('a').forEach(a => a.addEventListener('click', () => tocMobile.classList.add('hidden')));
})();
