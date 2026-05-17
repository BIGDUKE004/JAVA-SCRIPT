const prompt = require("prompt-sync")();
const side1 = Number(prompt("Enter first side: ") )
const side2 = Number(prompt("Enter second side: ") )
const side3 = Number(prompt("Enter third side: "))

const s = (side1 + side2 + side3) / 2
const square = Math.sqrt(s * (s - side1) * (s - side2) * (s - side3))
console.log(square)
