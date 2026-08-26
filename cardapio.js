/* ===================================================================
   ATOMIC CAT CAFE — cardapio.js
   Filtros e contador de pedido da pagina "Cardapio" — Cassio/Sergio
   O menu do header e do script.js, compartilhado pelas tres paginas.
   =================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  const filtros = document.querySelectorAll(".filtro");
  const produtos = document.querySelectorAll(".card-produto");
  const resultadoFiltro = document.getElementById("resultado-filtro");
  const botoesAdicionar = document.querySelectorAll(".adicionar");
  const quantidadeItens = document.getElementById("quantidade-itens");
  const rotuloItens = document.getElementById("rotulo-itens");
  const contador = document.querySelector(".contador-pedido");
  const aviso = document.getElementById("aviso");
  let quantidade = 0;
  let temporizadorAviso;

  const nomesCategorias = {
    todos: "delícias",
    cafes: "cafés",
    geladas: "bebidas geladas",
    doces: "doces",
    refeicoes: "refeições",
    especiais: "especiais da casa"
  };

  filtros.forEach((filtro) => {
    filtro.addEventListener("click", () => {
      const categoriaEscolhida = filtro.dataset.categoria;
      let visiveis = 0;

      filtros.forEach((item) => item.classList.remove("filtro--ativo"));
      filtro.classList.add("filtro--ativo");

      produtos.forEach((produto) => {
        const deveAparecer = categoriaEscolhida === "todos" || produto.dataset.categoria === categoriaEscolhida;
        produto.classList.toggle("oculto", !deveAparecer);
        if (deveAparecer) visiveis += 1;
      });

      resultadoFiltro.textContent = `${visiveis} ${nomesCategorias[categoriaEscolhida]} esperando por você`;
    });
  });

  botoesAdicionar.forEach((botao) => {
    const textoOriginal = botao.innerHTML;

    botao.addEventListener("click", () => {
      quantidade += 1;
      quantidadeItens.textContent = quantidade;
      rotuloItens.textContent = quantidade === 1 ? "item" : "itens";

      contador.classList.remove("animar");
      void contador.offsetWidth;
      contador.classList.add("animar");

      botao.classList.add("adicionado");
      botao.innerHTML = "✓ Adicionado";

      window.clearTimeout(temporizadorAviso);
      aviso.textContent = `${botao.dataset.produto} foi adicionado ao seu pedido ♡`;
      aviso.classList.add("visivel");

      window.setTimeout(() => {
        botao.classList.remove("adicionado");
        botao.innerHTML = textoOriginal;
      }, 950);

      temporizadorAviso = window.setTimeout(() => {
        aviso.classList.remove("visivel");
      }, 2400);
    });
  });
});
