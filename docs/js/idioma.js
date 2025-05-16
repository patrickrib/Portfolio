const Idioma = {
    chaveStorage: 'idiomaSelecionado',
    atual: 'pt-br',

    iniciar() {
        const salvo = localStorage.getItem(this.chaveStorage);
        if (salvo) this.atual = salvo;
    },

    definir(novoIdioma) {
        this.atual = novoIdioma;
        localStorage.setItem(this.chaveStorage, novoIdioma);
        document.dispatchEvent(new CustomEvent('idiomaAlterado', { detail: novoIdioma }));
    },

    obter() {
        return this.atual;
    },

    iniciarSeletor(recarregar = true) {
        const seletor = document.getElementById("seletor-idioma");
        if (!seletor) return;

        seletor.value = this.obter();

        seletor.addEventListener("change", (e) => {
            this.definir(e.target.value);
            if (recarregar) {
                location.reload();
            } else {
                document.dispatchEvent(new CustomEvent("idiomaAlterado", { detail: this.atual }));
            }
        });
    }
};
