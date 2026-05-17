const prompt = require("prompt-sync")();
const a = prompt("Enter a number: ")

const value1 = a  % 10

const b = a / a

const value2 =  b  % 10

const c = value2 / value2

const value3 = c % 10
 
console.log( value1, value2, value3)

