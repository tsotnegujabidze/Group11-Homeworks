let correctPassword = "Goa_is_best"; 
let attempts = 3;

while (attempts > 0) {
    let password = prompt("Enter password:");

    if (password === correctPassword) {
        alert("Access granted!");
        break;
    } else {
        if (attempts === 1) {
            alert("Access denied. No attempts left.");
        } else {
            alert("Incorrect password. You have " + (attempts - 1) + " attempts left.");
        }
    }

    attempts = attempts - 1;
}
