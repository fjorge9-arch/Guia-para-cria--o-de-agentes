// Dark mode
(function() {
    const root = document.documentElement;
    const saved = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (saved === 'dark' || (!saved && prefersDark)) root.classList.add('dark');
    document.getElementById('darkToggle').addEventListener('click', () => {
        root.classList.toggle('dark');
        localStorage.setItem('theme', root.classList.contains('dark') ? 'dark' : 'light');
    });
})();

// Copy buttons
document.querySelectorAll('.copy-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const parent = btn.parentElement;
        const clone = parent.cloneNode(true);
        clone.querySelectorAll('.copy-btn').forEach(b => b.remove());
        const text = clone.innerText.trim();
        navigator.clipboard.writeText(text).then(() => {
            const original = btn.textContent;
            btn.textContent = 'Copiado!';
            btn.classList.add('copied');
            setTimeout(() => { btn.textContent = original; btn.classList.remove('copied'); }, 1500);
        });
    });
});

// Back to top
const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
    if (window.scrollY > 400) backToTop.classList.add('visible');
    else backToTop.classList.remove('visible');
});
backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// TOC active link
const tocLinks = document.querySelectorAll('.toc-link');
const sections = Array.from(tocLinks).map(l => document.querySelector(l.getAttribute('href'))).filter(Boolean);
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const id = entry.target.id;
            tocLinks.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + id));
        }
    });
}, { rootMargin: '-30% 0px -60% 0px' });
sections.forEach(s => observer.observe(s));

// Mobile TOC
const tocMobile = document.getElementById('tocMobile');
document.getElementById('tocToggleMobile').addEventListener('click', () => tocMobile.classList.remove('hidden'));
document.getElementById('tocCloseMobile').addEventListener('click', () => tocMobile.classList.add('hidden'));
tocMobile.addEventListener('click', e => { if (e.target === tocMobile) tocMobile.classList.add('hidden'); });
tocMobile.querySelectorAll('a').forEach(a => a.addEventListener('click', () => tocMobile.classList.add('hidden')));
