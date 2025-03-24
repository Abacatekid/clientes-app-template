class AlissonAnderson {
    constructor(nome) {
        this.nome = nome;
    }

    exibirPopup() {
        alert(`Meu nome é ${this.nome}!`);
    }
}

// Exibir o popup
document.addEventListener("DOMContentLoaded", () => {
    const pessoa = new AlissonAnderson("Alisson Anderson");
    pessoa.exibirPopup();
});