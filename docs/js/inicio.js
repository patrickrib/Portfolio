document.addEventListener("DOMContentLoaded", () => {
    Idioma.iniciar();

    const idiomaAtual = Idioma.obter();
    const dados = dadosInicio[idiomaAtual];

    if (!dados) return;

    document.title = dados.tituloPagina;

    const topo = document.querySelector(".titulo-menu");
    if (topo) topo.textContent = dados.tituloPagina;

    const h1 = document.getElementById("intro-titulo");
    const intro = document.getElementById("intro-p1");
    const texto = document.getElementById("intro-p2");

    if (h1) h1.textContent = dados.titulo;
    if (intro) intro.textContent = dados.intro;
    if (texto) texto.textContent = dados.texto;

    const botaoSobre = document.getElementById("botao-sobre");
    const botaoPortfolio = document.getElementById("botao-portfolio");
    const botaoContato = document.getElementById("botao-contato");

    if (botaoSobre) botaoSobre.textContent = dados.botoes.sobre;
    if (botaoPortfolio) botaoPortfolio.textContent = dados.botoes.portfolio;
    if (botaoContato) botaoContato.textContent = dados.botoes.contato;
});
