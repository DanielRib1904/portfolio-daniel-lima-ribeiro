# 🎬 AT4 - Site Responsivo Multi-Páginas com Bootstrap 5

## 📝 Descrição do Projeto

Este projeto consiste no desenvolvimento e publicação de um site responsivo completo composto por 5 páginas interligadas (*Início*, *Sobre o Tema*, *Catálogo/Galeria*, *Dados e Curiosidades* e *Contato*), construído com HTML5, CSS3 e o framework Bootstrap 5. O objetivo principal é aplicar conceitos de web design responsivo, estruturação de grids, componentes visuais padronizados e navegação consistente, com publicação final na web via GitHub Pages.

Desenvolvido como parte das disciplinas de **Desenvolvimento Front-End Para Web (2026.2)**, o site utiliza um tema estruturado com componentes nativos do Bootstrap (como `Navbar` responsiva, `Carousel`, `Cards`, `Modais`, `Tabelas`, `Accordion` e formulários completos), complementado por um arquivo de estilos personalizado (`style.css`) para refinamentos visuais e organizados via caminhos relativos.

## 🚀 Tecnologias Utilizadas

* **Linguagem:** HTML5 e CSS3
* **Framework:** Bootstrap 5 (CDN)
* **Ferramentas:** VSCode e Git/GitHub
* **Modelo de IA:** Gemini (utilizado exclusivamente para suporte conceitual, geração de conteúdo textual/imagens e depuração pontual de código, conforme as diretrizes da atividade).

## 📊 Resultados e Aprendizados

O projeto permitiu consolidar competências essenciais no desenvolvimento front-end moderno, garantindo usabilidade e adaptabilidade multiplataforma.

* **Arquitetura Multi-Páginas:** Implementação de navegação fluida entre 5 páginas utilizando caminhos relativos consistentes.
* **Responsividade com Grid System:** Aplicação correta de pontos de quebra (`col-sm-*`, `col-md-*`, `col-lg-*`) para assegurar legibilidade e alinhamento em celulares, tablets e computadores.
* **Componentes Interativos:** Integração bem-sucedida de elementos dinâmicos do Bootstrap (como o carrossel, a sanfona de perguntas frequentes e cartões responsivos com modais).
* **Publicação Online:** Configuração de deploy contínuo através do GitHub Pages, garantindo acesso público e funcionalidade integral do site.

## 📊 O que deu certo e o que deu errado (Relato de Experiência)

* **O que deu certo:**
  * A estrutura de grid do Bootstrap facilitou a criação de layouts responsivos que se adaptam perfeitamente a telas de celulares e computadores.
  * A padronização da `Navbar` e do `Footer` em todas as 5 páginas garantiu uma navegação uniforme e intuitiva.
  * A implementação dos componentes interativos (como o `Accordion` e os `Cards` com `Modal`) enriqueceram a apresentação dos dados sem poluir visualmente a interface.

* **O que deu errado (e como foi resolvido):**
  * **Problema com caminhos relativos de recursos:** Ao publicar o projeto no GitHub Pages, algumas imagens e o arquivo `style.css` não carregavam devido a caminhos apontando para diretórios locais (`C:\...`) ou barras formatadas incorretamente.
  * **Solução:** Ajustei a estrutura de pastas do projeto e reescrevi todos os links usando caminhos relativos limpos (ex: `css/style.css` e `img/imagem.jpg`), restabelecendo a exibição no servidor.
  * **Ajuste na responsividade do menu:** A barra de navegação não recolhia corretamente no mobile por falta de inclusão do script JS do Bootstrap.
  * **Solução:** Adicionei a importação do pacote `bootstrap.bundle.min.js` logo antes do fechamento da tag `</body>` em todas as 5 páginas HTML.

## 🧠 Declaração de Uso Ético da IA

Este projeto utilizou inteligência artificial (Gemini) em estrita conformidade com as regras institucionais, servindo como ferramenta de suporte exclusivamente para auxílio na geração de conteúdo textual/imagens e na depuração de eventuais erros de sintaxe ou alinhamento. Todo o código estrutural em HTML e Bootstrap foi escrito, analisado, testado e compreendido por mim, garantindo a minha responsabilidade total sobre a autoria e a evolução do projeto através do histórico de commits no GitHub.

## 💻 Deploy e Acesso ao Projeto

* **Site Publicado (GitHub Pages):** [Clique para acessar](https://danielrib1904.github.io/Atividade-04-/)
* **Repositório do Código-Fonte:** [Acessar no GitHub](https://github.com/DanielRib1904/portfolio-daniel-lima)

---

[Voltar ao início](https://github.com/DanielRib1904/portfolio-daniel-lima)
