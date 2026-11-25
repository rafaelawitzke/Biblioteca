const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const dias = Number(document.getElementById("dias").value);
    const resultado = document.getElementById("resultado");

    try {
        if (nome === "" || document.getElementById("dias").value === "") {
            throw new Error("Preencha todos os campos!");
        }

        if (dias < 1 || dias > 30 || !Number.isInteger(dias)) {
            throw new Error("Digite um número entre 1 e 30.");
        }

        let data = new Date();
        data.setDate(data.getDate() + dias);

        resultado.style.color = "green";
        resultado.innerHTML = "Olá, " + nome + "! Devolva o livro até " + data.toLocaleDateString("pt-BR");

    } catch (erro) {
        resultado.style.color = "red";
        resultado.innerHTML = erro.message;
    }
});