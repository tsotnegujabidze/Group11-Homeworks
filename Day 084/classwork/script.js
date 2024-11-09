const form = document.getElementById('myForm');

const database = [];

function Account(firstname, lastname, email){
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
}

form.addEventListener("submit", function(e){
    e.preventDefault();

    const firstname = form.firstname.value;
    const lastname = form.lastname.value;
    const email = form.email.value;

    const acc = new Account(firstname, lastname, email);

    database.push(acc);

    console.log(database);
})