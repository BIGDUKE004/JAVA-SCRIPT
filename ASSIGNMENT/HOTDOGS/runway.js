const prompt = require("prompt-sync")();
const input = Number(prompt("enter speed: "))
const input1 = Number(prompt("enter acceleration: "))

const sum = (input * input) / (2 * input1)

console.log(sum)
