function Submit(firstname, lastname, email) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
}
function submit() {
    const firstname = document.getElementById("firstname").value;
    const lastname = document.getElementById("lastname").value;
    const email = document.getElementById("email").value;

    const person1 = new Submit(firstname, lastname, email);

    alert(person1.firstname + ' ' + person1.lastname + ' ' + person1.email)
}

