function evenSum(border) {
    let numSum = 0
    for (let i = 0; i <= border; i ++) {
        if (i % 2 === 0) {
            numSum = numSum + i
        }
        
    }
    document.write(numSum)
}