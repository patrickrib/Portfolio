document.addEventListener("DOMContentLoaded", () => {
    Idioma.iniciar();

    const idiomaAtual = Idioma.obter();
    const dados = dadosSobre[idiomaAtual];
    if (!dados) return;

    document.title = dados.tituloPagina;

    preencherTopo(dados);
    preencherTituloSecao(dados);
    preencherParagrafos(dados);
    preencherContato(dados);
    preencherFormacao(dados);
    preencherIdiomas(dados);
});

function preencherTopo(dados) {
    const topo = document.querySelector(".titulo-menu");
    if (topo) topo.textContent = dados.tituloTopo;
}

function preencherTituloSecao(dados) {
    const titulo = document.getElementById("sobre-titulo");
    if (titulo) titulo.textContent = dados.tituloSecao;
}

function preencherParagrafos(dados) {
    for (let i = 1; i <= 12; i++) {
        const p = document.getElementById(`sobre-p${i}`);
        if (p && dados[`paragrafo${i}`]) {
            p.textContent = dados[`paragrafo${i}`];
        }
    }
}

function preencherContato(dados) {
    if (!dados.contato) return;
    const campos = ["telefone", "email", "site", "localizacao"];
    campos.forEach(campo => {
        const titulo = document.getElementById(`contato-${campo}-titulo`);
        const texto = document.getElementById(`contato-${campo}-texto`);

        if (titulo) titulo.textContent = dados.contato[campo]?.titulo;
        if (texto) texto.textContent = dados.contato[campo]?.texto;
    });
}

function preencherFormacao(dados) {
    const blocos = document.querySelectorAll(".bloco-info-formacao");
    if (!blocos.length || !dados.formacao) return;

    dados.formacao.forEach((item, index) => {
        const bloco = blocos[index];
        const titulo = bloco?.querySelector("h4");
        const descricao = bloco?.querySelector("p");

        if (titulo) titulo.textContent = item.instituicao;
        if (descricao) descricao.textContent = item.curso;
    });
}

function preencherIdiomas(dados) {
    const blocos = document.querySelectorAll(".bloco-info-idioma");
    if (!blocos.length || !dados.idiomas) return;

    dados.idiomas.forEach((idioma, index) => {
        const bloco = blocos[index];
        const titulo = bloco?.querySelector(".idioma-titulo");
        const barra = bloco?.querySelector(".nivel");

        if (titulo) titulo.textContent = idioma.idioma;
        if (barra) {
            barra.className = `nivel ${idioma.classe}`;
            barra.setAttribute("title", idioma.nivel);
        }
    });
}
