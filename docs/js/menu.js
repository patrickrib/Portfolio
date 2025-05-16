document.addEventListener("DOMContentLoaded", () => {
    Idioma.iniciar();

    const idiomaAtual = Idioma.obter();
    const menu = dadosMenu[idiomaAtual];
    if (!menu) return;

    const linkInicio = document.getElementById("menu-inicio");
    const linkSobre = document.getElementById("menu-sobre");
    const linkPortfolio = document.getElementById("menu-portfolio");
    const linkContato = document.getElementById("menu-contato");

    if (linkInicio) linkInicio.textContent = menu.inicio;
    if (linkSobre) linkSobre.textContent = menu.sobre;
    if (linkPortfolio) linkPortfolio.textContent = menu.portfolio;
    if (linkContato) linkContato.textContent = menu.contato;
});