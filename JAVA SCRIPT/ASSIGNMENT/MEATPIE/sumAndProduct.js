const prompt = require("prompt-sync")()

let firstNumber = +prompt("Enter first number: ")
let secondNumber = +prompt("Enter second number: ")

let product = firstNumber * secondNumber
let sum = firstNumber + secondNumber

console.log(product)
console.log(sum)
