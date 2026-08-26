# ☕🐾 Café Gatos Fofos

Um projeto de site acolhedor e charmoso dedicado a um café temático de felinos, onde amantes de gatos e de um bom café podem se encontrar e relaxar.

## 🚀 Visão Geral

Este projeto foi desenvolvido com foco em criar uma interface web limpa, acessível e bem estruturada. O site apresenta o cardápio de cafés e doces, uma galeria apresentando os gatinhos residentes para adoção/interação, e informações de contato e localização.

## 🛠️ Tecnologias Utilizadas

*   **HTML5 Semântico:** Estruturação avançada utilizando boas práticas e código limpo (clean code).
*   **CSS3:** Estilização responsiva, animações suaves e design focado na experiência do usuário.
*   **Git e GitHub:** Controle de versão e hospedagem do repositório.

## ⚙️ Como Executar o Projeto

Para rodar este projeto localmente na sua máquina, abra o seu terminal (como o Git Bash) e siga os passos abaixo:

1. Clone o repositório:
   ```bash
   git clone https://github.com/victorcimol16/Trabalho_Helder_Grupo-.git
   ```
2. Navegue até a pasta do projeto:
   ```bash
   cd Trabalho_Helder_Grupo-
   ```
3. Abra o arquivo principal no navegador:
   Dê um duplo clique no arquivo `index.html` ou abra-o diretamente no seu navegador de preferência.

## 📂 Estrutura do Projeto

O site tem **uma base compartilhada** e, para cada página, um par de arquivos próprios.
Essa divisão evita conflitos de merge: cada pessoa mexe no CSS/JS da sua página.

```
index.html      style.css  +  script.js                  (home: hero + sobre nós)
cardapio.html   style.css  +  cardapio.css | script.js + cardapio.js
gatos.html      style.css  +  gatos.css    | script.js + gatos.js
img/            todas as imagens do site
```

**Base compartilhada — mexa aqui só quando for algo de todas as páginas:**

* `style.css` — variáveis de cor (`--rosa`, `--navy`, `--turquesa`…), reset, header,
  botões (`.botao`), filtros (`.filtro`) e rodapé (`.rodape`).
* `script.js` — abre e fecha o menu no celular.

**Regras que o time combinou:**

1. Toda página carrega `style.css` **antes** do seu CSS próprio, e `script.js` **antes** do seu JS próprio.
2. Cores, sombras e medidas sempre pelas variáveis do `style.css` — nada de `#ff8ac0` solto nem de um `:root` novo em cada arquivo.
3. Header e rodapé são iguais nas três páginas (o rodapé leva `id="contato"`, que é para onde aponta o link Contato do menu).
4. Classes no padrão BEM: `bloco__elemento--modificador` (ex.: `nav__link--ativo`, `filtro--ativo`).
5. Imagens sempre dentro de `img/`.

## 🤝 Como Contribuir

Achou um bug ou quer adicionar um novo gatinho ao site? Contribuições são sempre bem-vindas!

1. Faça um Fork do projeto
2. Crie uma nova Branch para sua funcionalidade (`git checkout -b feature/NovoGatinho`)
3. Faça o Commit das suas alterações (`git commit -m 'feat: Adiciona seção do gato Frajola'`)
4. Faça o Push para a Branch (`git push origin feature/NovoGatinho`)
5. Abra um Pull Request
