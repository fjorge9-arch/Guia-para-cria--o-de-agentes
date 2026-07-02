// Anti-FOUC: aplica o tema salvo antes do primeiro paint. Deve ser carregado
// de forma sincrona (sem defer/async) no <head>, antes dos <link> de CSS.
(function () {
  var t = localStorage.getItem('theme');
  if (t === 'dark' || (!t && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
  }
})();
