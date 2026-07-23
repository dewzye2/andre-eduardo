// Menu
function toggleMenu() {
    document.querySelector(".menu").classList.toggle("active");
}

// Forms da pagina contato

const formulario = document.getElementById("formContato");

formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let mensagem = document.getElementById("mensagem").value;

    if (nome == "" || email == "" || mensagem == "") {
        alert("Preencha todos os campos");
    } else {
        alert("Mensagem enviada com sucesso");
        formulario.reset();
    }
});
