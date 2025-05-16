document.addEventListener("DOMContentLoaded", () => {
    Idioma.iniciar();

    const idiomaAtual = Idioma.obter();
    const dados = dadosSobre[idiomaAtual];
    if (!dados) return;

    document.title = dados.tituloPagina;

    const topo = document.querySelector(".titulo-menu");
    if (topo) topo.textContent = dados.tituloTopo;

    const tituloSecao = document.getElementById("sobre-titulo");
    if (tituloSecao) tituloSecao.textContent = dados.tituloSecao;

    for (let i = 1; i <= 12; i++) {
        const paragrafo = document.getElementById(`sobre-p${i}`);
        if (paragrafo && dados[`paragrafo${i}`]) {
            paragrafo.textContent = dados[`paragrafo${i}`];
        }
    }

    if (dados.contato) {
        const campos = ["telefone", "email", "site", "localizacao"];
        campos.forEach(campo => {
            const titulo = document.getElementById(`contato-${campo}-titulo`);
            const texto = document.getElementById(`contato-${campo}-texto`);

            if (titulo && dados.contato[campo]) titulo.textContent = dados.contato[campo].titulo;
            if (texto && dados.contato[campo]) texto.textContent = dados.contato[campo].texto;
        });
    }
});
