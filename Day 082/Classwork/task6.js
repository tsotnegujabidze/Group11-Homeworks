// შექმენით ლოგიკა რომლის მიხედვითაც მომხმარებელს უნდა შემოატანინოთ პაროლი თუ პაროლი სწორია 
// alert-ის საშვალებით გამოიტანეთ რომ მას მიეცა წვდომა, ხოლო თუ არასწორია თავიდან შეეკითხეთ პაროლი 
// და მოაკელით პაროლის მცდელობა, თავიდან მცდელობები არის 3 თუ მცდელობები ამოიწურა ითიშება while 
// ციკლი, ყოველ ცდაზე უნდა გამოუტანოთ მცდელობების რაოდენობა (დაგჭირდებათ while ციკლი და if 
// პირობითი განცხადება)

let attempts = 3;

let password = "luka1234";
let pass;

while(pass !== password){
    if(attempts === 0){
        alert("Access blocked")
        break;
    }

    pass = prompt("Please enter password")
    if(pass === password){
        alert("Access granted")
        break;
    }
    else {
        attempts = attempts - 1
        alert("You have " + attempts + " left")
    }
}
