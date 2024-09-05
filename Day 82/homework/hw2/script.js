function calculateAverage(list1) {
    let listLength = list1.length;
    let listSum = 0;

    for (let i = 0; i < listLength; i++) {
        listSum += list1[i];
    }

    let average = listSum / listLength;
    
    return average;
}