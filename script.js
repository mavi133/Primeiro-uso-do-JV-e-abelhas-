const nome = document.getElementById("nome");
const senha = document.getElementById("senha");
const botaoEntrar = document.getElementById("cadastrar");

botaoEntrar.addEventListener("click", function() {
    const nomeUsuario = nome.value;
    const senhaDigitada = senha.value;
    
    if (nomeUsuario === "" || senhaDigitada === "") {
        alert("Preencha todos os campos.");
    }
    
    else if ( nomeUsuario === "aluno" && senhaDigitada === "2026") {
        alert("Bem-vindo ao sistema!");
    }
    
    else {
        alert("Acesso negado");
    }
});