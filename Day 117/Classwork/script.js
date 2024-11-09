function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

module.exports = { add, multiply };

const path = require('path');
const filePath = path.join(__dirname, 'test.txt');
console.log("Full path:", filePath);
console.log("Directory name:", path.dirname(filePath));
console.log("Base name:", path.basename(filePath));
console.log("File extension:", path.extname(filePath));