const prompt = require("prompt-sync")()

let number = +prompt("Enter a positive number: ");
const sum = number * (number + 1) / 2;
console.log("The result is %d", sum);

