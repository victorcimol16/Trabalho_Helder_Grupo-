/* Camada 1 — Header / menu mobile — Cassio */

document.addEventListener('DOMContentLoaded', function () {
  var btnMenu = document.getElementById('btnMenu');
  var menu = document.getElementById('menu');

  btnMenu.addEventListener('click', function () {
    var aberto = menu.classList.toggle('nav--aberto');
    btnMenu.classList.toggle('hamburguer--aberto', aberto);
    btnMenu.setAttribute('aria-expanded', aberto);
  });

  var linksDoMenu = menu.querySelectorAll('.nav__link, .nav__botao');
  linksDoMenu.forEach(function (link) {
    link.addEventListener('click', function () {
      menu.classList.remove('nav--aberto');
      btnMenu.classList.remove('hamburguer--aberto');
      btnMenu.setAttribute('aria-expanded', 'false');
    });
  });
});


/* Camada 3 — Seção "Nossos gatos" (filtros) — Victor */

document.addEventListener('DOMContentLoaded', function () {
  var filtros = document.querySelectorAll('.filtro');
  var cartoes = document.querySelectorAll('.gato');
  var vazio = document.getElementById('gatosVazio');

  if (filtros.length === 0) return;

  filtros.forEach(function (botao) {
    botao.addEventListener('click', function () {
      var alvo = botao.getAttribute('data-filtro');

      filtros.forEach(function (outro) {
        var ativo = outro === botao;
        outro.classList.toggle('filtro--ativo', ativo);
        outro.setAttribute('aria-pressed', ativo);
      });

      var visiveis = 0;
      cartoes.forEach(function (cartao) {
        var mostrar = alvo === 'todos' || cartao.getAttribute('data-status') === alvo;
        cartao.classList.toggle('gato--oculto', !mostrar);
        if (mostrar) visiveis++;
      });

      vazio.classList.toggle('gatos__vazio--visivel', visiveis === 0);
    });
  });
});
