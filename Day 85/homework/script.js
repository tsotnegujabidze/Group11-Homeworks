function manualFilter(filterfunction, arr) {
    let filteredArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (filterfunction(arr[i])) {
            filteredArr.push(arr[i])
        }
    }
    return filteredArr;
}
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function isOdd(number) {
    return number % 2 === 0;
}

console.log(manualFilter(isOdd, numbers));

