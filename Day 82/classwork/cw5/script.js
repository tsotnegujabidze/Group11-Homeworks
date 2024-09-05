const numbersArray = [];

for (let i = 0; i <= 10; i++) {
    const numberObject = {
        value: i,
        type: i % 2 === 0 ? 'even' : 'odd'
    };

// ? = if true type will be even if false type will be odd

    numbersArray.push(numberObject);
}

console.log(numbersArray);
