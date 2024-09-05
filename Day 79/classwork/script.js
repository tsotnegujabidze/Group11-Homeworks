const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const resultElement = document.getElementById("result");

document.getElementById("calcForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission and page reload
    sumOfNum();
});

function sumOfNum() {
    const sum = parseFloat(num1.value) + parseFloat(num2.value);
    console.log(sum); // Log the sum to the console

    // Display the result in the "result" element
    resultElement.textContent = `${sum}.`;
}



