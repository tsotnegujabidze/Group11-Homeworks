const signForm = document.getElementById("SignForm");
const dataBase = [];

function validateData(){
    let userName = signForm.elements.Name.value;
    let emailValue = signForm.elements.Email.value;
    let pass = signForm.elements.Password.value;

    for(let i = 0; i < dataBase.length; i ++){
        if(emailValue === dataBase[i].email){
            alert("Account with same email already exists!")
            return;
        }
    }
    
    alert("Account successfully created!")

    let account = {
        username: userName,
        email: emailValue,
        password: pass
    };
    
    dataBase.push(account)
}
function logData(){
    console.log(dataBase)
}
