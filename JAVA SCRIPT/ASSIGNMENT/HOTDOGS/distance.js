const prompt = require("prompt-sync")();
const input = Number(prompt("enter first side: "))
const input1 = Number(prompt("enter second side: "))

const distance = Math.sqrt(((input1 - input) * (input1 - input) + ((input1 - input) * (input1 - input))))

console.log(distance)

