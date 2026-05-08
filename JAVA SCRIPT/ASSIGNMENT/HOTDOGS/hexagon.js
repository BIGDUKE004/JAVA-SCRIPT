const prompt = require("prompt-sync")();
const input = Number(prompt("enter the side of an hexagon: "))

const sum = (2 * input) / (3 * 1.732)
const sum1 = sum * 0.5

console.log(sum1)
