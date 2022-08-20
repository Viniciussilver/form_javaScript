const Name = document.getElementById("name")
const Email = document.getElementById("email")
const Senha = document.getElementById("password")
const ConfirmSenha = document.getElementById("password-confirmation")

const form = document.getElementById("form")

form.addEventListener("submit", (e)=>{
    e.preventDefault();

    checkInformations();
})

function checkInformations(){

    if(Name.value === ''){
        errorMessage(Name, "O Nome é obrigatório")
    } else{
        setSuccessFor(Name)
    }

    if(Email.value === ''){
        errorMessage(Email,"O email é obrigatório")
    } else if(!checkEmail(Email.value)){
        errorMessage(Email, "Email inválido ")
    } else{
        setSuccessFor(Email)
    }

    if(Senha.value === ''){
        errorMessage(Senha, "A senha é obrigatória")
    } else if(Senha.value.length < 7){
        errorMessage(Senha, "O mínimo é 7 caracteres")
    } else {
        setSuccessFor(Senha)
    }

    if(ConfirmSenha.value === ''){
        errorMessage(ConfirmSenha, "Confirme sua senha")
    } else if(ConfirmSenha.value !== Senha.value){
        errorMessage(ConfirmSenha, "A senha deve ser a mesma que a anterior")
    } else{
        setSuccessFor(ConfirmSenha)
    }

    const formControls = form.querySelectorAll(".form-control")
    const formValid = [...formControls].every((teste)=>{
        return teste.className === "form-control success"
    })
    
    if(formValid)
    {
        console.log("Cadastro realizado com sucesso")
    }
}

function errorMessage(input, message){
    const position = input.parentElement;
    const small = position.querySelector('small')

    small.innerHTML = message;

    position.className = 'form-control error'
   
}

function setSuccessFor(input){
    const position = input.parentElement;

    position.className = 'form-control success'
}

function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
  }