// 1) გამოიყენეთ forEach მეთოდი და გააკეთეთ 2 მაგალითი, 
// ამის შემდეგ თქვენი ხელით შექმენით forEach მეთოდის კლონი

const names = ["Luka","Ana","Tamo","Tazo","Lia"];

names.forEach((value,index) => {
    console.log(value + index);
})

names.forEach((value,index) => {
    console.log(value.toUpperCase());
})


function manualForEach(arr){
    for(let i = 0; i < arr.length; i++){
        return (arr[i],i);
    }
}
