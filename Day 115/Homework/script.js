async function fetchData() {
    const data = await new Promise((resolve) => {
        setTimeout(() => resolve("Fetched data"), 2000);
    });
    console.log(data);
}

fetchData();


console.log("Starting delay...");
setTimeout(() => {
    console.log("This message is delayed by 1 second.");
}, 1000);

let count = 0;
const interval = setInterval(() => {
    console.log("Interval count:", count);
    count++;
    if (count === 5) {
        clearInterval(interval);
        console.log("Interval cleared!");
    }
}, 500);