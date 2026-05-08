const prompt = require("prompt-sync")()
let lengthOne = +prompt("Enter the first length: ")
let lengthTwo = +prompt("Enter the second length: ")
const hypotenuse = Math.sqrt((lengthOne * lengthOne) + (lengthTwo * lengthTwo));
console.log("The hypotenus is: ", hypotenuse.toFixed(2));

