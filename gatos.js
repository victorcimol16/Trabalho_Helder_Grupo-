/* ===================================================================
   ATOMIC CAT CAFE — gatos.js
   Filtros da pagina "Nossos gatos" (gatos.html) — Victor
   =================================================================== */

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
