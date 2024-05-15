//efeito botão Voltar ao topo
function topo() {
    window.scrollTo(
        {
            top: 0,
            left: 0,
            behavior: 'smooth'
        }
    )
}

//validar login
function login(){
    var logado = 0;
    var usuario = document.getElementById("usuario").value;
    var senha = document.getElementById("senha").value;

    if(usuario == 'admin' && senha == '1479'){
        window.location = "index.html"
        logado = 1;
    }

    if(logado == 0){
        alert('[ERRO] Dados incorretos! Tente novamente')
    }

}

//ativa Alert no botão cadastrar

function cadastro(){
    alert("Cadastro realizado com sucesso!")
    window.location.href = "index.html"
}