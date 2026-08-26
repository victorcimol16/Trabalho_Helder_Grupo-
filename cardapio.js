document.addEventListener("DOMContentLoaded", () => {
  const filtros = document.querySelectorAll(".filtro");
  const produtos = document.querySelectorAll(".card-produto");
  const resultadoFiltro = document.getElementById("resultado-filtro");
  const botoesAdicionar = document.querySelectorAll(".adicionar");
  const quantidadeItens = document.getElementById("quantidade-itens");
  const rotuloItens = document.getElementById("rotulo-itens");
  const contador = document.querySelector(".contador-pedido");
  const aviso = document.getElementById("aviso");
  const botaoMenu = document.querySelector(".botao-menu");
  const navegacao = document.querySelector(".navegacao");
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

      filtros.forEach((item) => item.classList.remove("ativo"));
      filtro.classList.add("ativo");

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

  const fecharMenu = () => {
    navegacao.classList.remove("aberta");
    botaoMenu.setAttribute("aria-expanded", "false");
    botaoMenu.setAttribute("aria-label", "Abrir menu");
    document.body.classList.remove("menu-aberto");
  };

  botaoMenu.addEventListener("click", () => {
    const estaAberto = botaoMenu.getAttribute("aria-expanded") === "true";

    if (estaAberto) {
      fecharMenu();
      return;
    }

    navegacao.classList.add("aberta");
    botaoMenu.setAttribute("aria-expanded", "true");
    botaoMenu.setAttribute("aria-label", "Fechar menu");
    document.body.classList.add("menu-aberto");
  });

  navegacao.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", fecharMenu);
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 860) fecharMenu();
  });
});
