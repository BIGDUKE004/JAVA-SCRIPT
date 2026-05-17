const prompt = require("prompt-sync")();
const input = prompt("enter subtottal: ")
const inputone = prompt("enter gratuity rate: ")

const gratuity = input * (inputone / 100)
const subtotal = gratuity 

console.log(gratuity)
console.log(subtotal + input)
