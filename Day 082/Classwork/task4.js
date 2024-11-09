// შექმენით ფუნქცია რომელსაც დაარქმევთ generate even ამ ფუნქციას უნდა გადაეცემოდეს border, 
// ჩვენი დავალებაა რომ შევქმნათ ახალი მასივი შემდეგ მასივში დავამატოთ 0-იდან border-ის ჩათვლით 
// რიცხვები და დავაბრუნოთ მასივი, ხოლო დაბუნებული მასივი უნდა გადავცეთ შემდეგ ფუნქციას calculateSum, 
// თქვენი დავალებაა რომ for ციკლის საშვალებით გამოიანგარიშოთ ყველა რიცხვის ჯამი და დააბრუნოთ

function generateEven(border){
    let array = [];
    for(let i = 0;i <= border; i ++){
        array.push(i)
    }
    return array;
}

let array = generateEven(border)

function calculateSum(array){
    let sum = 0;
    for(let i = 0; i < array.length;i++){
        sum = sum + array[i];
    }
    return sum;
}