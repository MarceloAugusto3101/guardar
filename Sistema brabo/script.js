function Entrar(){
    let usuario = document.getElementById ("Usuario").value;
    let Ola = document.getElementById ("Olá");
    let mostrar = document.getElementById ("Hide");
    let name = document.getElementById ("Name");
    Ola.textContent = "Olá " + usuario;
    mostrar.style.display = "block";
    name.style.display = "none";
}

function Verificar(){
    let idade = document.getElementById ("idade").value;
    let qualclassificação = document.getElementById ("Indicador");
    let usuario = document.getElementById ("Usuario").value;
    let Olá = document.getElementById ("Olá");
    if (idade > 0 && idade < 12){
        qualclassificação.textContent = "Criança"
        Olá.textContent = usuario + ", Você é uma criança"     
    }
    else if (idade >= 12 && idade <= 17){
        qualclassificação.textContent = "Adolescente"
        Olá.textContent = usuario + ", Você é uma Adolescente!"

    }
    else if (idade >= 18 && idade <= 59 ){
        qualclassificação.textContent = "Adulto"
        Olá.textContent = usuario + ", Você é um Adulto!"
    }
    else if (idade >= 60 && idade <= 100 ){
        qualclassificação.textContent = "Idoso"
        Olá.textContent = usuario + ", Você é um Idoso"
    }
    else if (idade >= 101){
        qualclassificação.textContent = "Karai ta velhão em"
        Olá.textContent = usuario + ", Você é um velhãoKKK"
    }
    else {
        alert("Erro! Idade invalida!");
    }
}

function Logar(){
    let Username = document.getElementById ("Usuario2").value;
    let logou = false;
    let Passoword = document.getElementById ("password").value;
    let login = document.getElementById ("login2");
    let Caixalogin = document.getElementById ("Caixalogin");
    let Entrar = document.getElementById ("Entrar");
    let Incorreta = document.getElementById ("Incorreta");
    if (Username == 1234 && Passoword == 1234){
        login.textContent = "Você entrou, bem vindo " + Username;
        Incorreta.textContent = " ";
        Entrar.style.display = "none";
        Caixalogin.style.display = "none";
        Username.style.display = "none";
        Passoword.style.display = "none";
        Incorreta.textContent = " ";
    } 

    if(Username == ("professor") && Passoword == ("senac")){
                login.textContent = " Bem-vindo, " + Username;
        Incorreta.textContent = " ";
        Entrar.style.display = "none";
        Caixalogin.style.display = "none";
        Username.style.display = "none";
        Passoword.style.display = "none";
        Incorreta.textContent = " ";
    }

    if (Username == ("") && Passoword == ("")){
        Incorreta.textContent = "Preencha todos os campos!"
    } 
    else{
        Incorreta.textContent = "Incorreta";
        Caixalogin.style.color = "black";
    }
}