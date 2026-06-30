const prompt = require("prompt-sync")()

let num1 = prompt("Enter first Number")
let num2 = prompt("Enter Second Number")
let temp = num1
num1 = num2
num2 = temp


console.log(num1,num2)

