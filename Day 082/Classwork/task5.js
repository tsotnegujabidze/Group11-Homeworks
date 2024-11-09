// შექმენით for ციკლი რომლითაც გაიგებთ რიცხვებს 0-იდან 10-ის ჩათვლით, თქვენი 
// დავალებაა მასივში დაამატოთ ობიექტი, ობიექტში უნდა გქონდეთ 2 კუთვნილება 
// პირველი value (რიცხვი), მეორე type (აქ გაუწერთ ლუწია თუ კენტი)


let array = []

for(let i = 0; i <= 10; i++){
    let numberInfo = {
        value: i,
        type: ''
    };
    
    if(i % 2 === 0){
        numberInfo.type = "Even"
    }
    else{
        numberInfo.type = "Odd"
    }

    array.push(numberInfo)
}

console.log(array)