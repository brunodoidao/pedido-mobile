var login = document.getElementById("login");
var cadastro = document.getElementById("cadastro");

function remove_cadastro(){
    cadastro.style.display = "none";
}

function aparece_login(){
    remove_cadastro();
    if(login.style.display === "none"){
        login.style.display = "block"
    } else {
        login.style.display = "none"
    }
}

function aparece_cadastro(){
    aparece_login();
    if(cadastro.style.display === "none"){
        cadastro.style.display = "block"
    } else {
        cadastro.style.display = "none"
    }
}

