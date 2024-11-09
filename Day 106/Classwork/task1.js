const promise = new Promise((resolve, reject) => {
    const bookRetrived = false;
    if(bookRetrived) {
        resolve("Book received successfully")
    } else {
        reject("Book not received")
    }
});