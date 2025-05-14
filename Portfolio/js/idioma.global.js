document.addEventListener("DOMContentLoaded", () => {
    Idioma.iniciar();
    Idioma.iniciarSeletor();

    const seletor = document.getElementById("seletor-idioma");
    if (seletor) seletor.classList.add("pronto");
});