const fs = require('fs');

fs.writeFileSync('test.txt', 'Hello, Node.js File System!');
console.log("File written!");

const data = fs.readFileSync('test.txt', 'utf8');
console.log("File content:", data);


console.log("Node environment:", process.env.NODE_ENV || "development");
process.env.MY_VAR = "Custom Value";
console.log("Custom environment variable:", process.env.MY_VAR);