// Carrega folhas de estilo de terceiros de forma nao-bloqueante (padrao "loadCSS"),
// sem inline scripts/handlers (compatível com CSP script-src 'self').
// Uso: <script src="/assets/js/preload-swap.js" data-css="url1,url2"></script>
// O link e' criado e o listener anexado ANTES do append, evitando a corrida em que
// o "load" dispara antes de qualquer handler existir (o que aconteceria se o
// <link rel="preload"> ja estivesse no HTML estatico ao carregar este script).
(function () {
  var urls = (document.currentScript.dataset.css || '').split(',').filter(Boolean);
  urls.forEach(function (href) {
    var link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'style';
    link.href = href;
    link.addEventListener('load', function () { this.rel = 'stylesheet'; }, { once: true });
    document.head.appendChild(link);
  });
})();
