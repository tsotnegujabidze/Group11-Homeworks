const manualMap = (arr, func) => {
    const result = [];

    for(let i = 0; i < arr.length; i++){
        result.push(func(arr[i]));
    }

    return result;
}
