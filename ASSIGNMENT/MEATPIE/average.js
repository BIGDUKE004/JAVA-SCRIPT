const prompt = require("prompt-sync")()

let num1 = +prompt("Enter first number: ")

let num2 = +prompt("Enter second number: ")

let num3 = +prompt("Enter Third number: ")

let sum = num1 + num2 + num3

let average = sum/3

console.log(average)
