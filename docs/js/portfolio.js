document.addEventListener("DOMContentLoaded", () => {
    Idioma.iniciar();
    Idioma.iniciarSeletor();

    const idiomaAtual = Idioma.obter();
    const dados = dadosPortfolio[idiomaAtual];
    if (!dados) return;

    document.title = dados.tituloPagina;

    const topo = document.querySelector(".titulo-menu");
    if (topo) topo.textContent = dados.tituloTopo;

    const modal = document.getElementById("modal");
    const titulo = modal.querySelector(".modal-titulo");
    const corpo = modal.querySelector(".modal-corpo");
    const tecnologias = modal.querySelector(".modal-tecnologias");

    function abrirModal(id) {
        const projeto = dados.projetos.find(p => p.id === id);
        if (!projeto) return;

        titulo.textContent = projeto.titulo;
        corpo.innerHTML = projeto.detalhes.map(linha => `<p>${linha}</p>`).join("");
        tecnologias.innerHTML = projeto.tecnologias.map(tec => `<span>${tec}</span>`).join(" ");

        modal.classList.add("aberto");
    }

    function criarCards() {
        const container = document.querySelector(".portfolio");
        container.innerHTML = "";
        const lista = dados.projetos;

        lista.forEach(projeto => {
            const card = document.createElement("div");
            card.classList.add("card");
            card.setAttribute("data-id", projeto.id);

            card.innerHTML = `
        <h3>${projeto.titulo}</h3>
        <p>${projeto.resumo}</p>
      `;

            card.addEventListener("click", () => abrirModal(projeto.id));
            container.appendChild(card);
        });
    }

    criarCards();

    document.addEventListener("idiomaAlterado", () => {
        location.reload();
    });

    document.querySelector(".modal-fechar").addEventListener("click", () => {
        modal.classList.add("fechando");
        setTimeout(() => {
            modal.classList.remove("aberto", "fechando");
        }, 400);
    });
});
