document.addEventListener("DOMContentLoaded", () => {
    Idioma.iniciar();

    const idiomaAtual = Idioma.obter();
    const dados = dadosContato[idiomaAtual];
    if (!dados) return;

    document.title = dados.tituloPagina;

    const topo = document.querySelector(".titulo-menu");
    if (topo) topo.textContent = dados.tituloTopo;

    const titulo = document.getElementById("contato-titulo");
    if (titulo) titulo.textContent = dados.tituloSecao;

    const labelNome = document.querySelector("label[for='nome']");
    const labelEmail = document.querySelector("label[for='email']");
    const labelMensagem = document.querySelector("label[for='mensagem']");

    if (labelNome) labelNome.textContent = dados.nome;
    if (labelEmail) labelEmail.textContent = dados.email;
    if (labelMensagem) labelMensagem.textContent = dados.mensagem;

    const inputNome = document.getElementById("nome");
    const inputEmail = document.getElementById("email");
    const inputMensagem = document.getElementById("mensagem");

    if (inputNome) inputNome.placeholder = dados.placeholderNome || "";
    if (inputEmail) inputEmail.placeholder = dados.placeholderEmail || "";
    if (inputMensagem) inputMensagem.placeholder = dados.placeholderMensagem || "";

    const botao = document.getElementById("botao-enviar");
    if (botao) botao.textContent = dados.botao;

    const form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", e => {
            e.preventDefault();
            alert(dados.enviado);
            form.reset();
        });
    }
});
