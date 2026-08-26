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
