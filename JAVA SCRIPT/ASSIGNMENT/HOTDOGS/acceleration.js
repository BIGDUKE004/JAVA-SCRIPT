const prompt = require("prompt-sync")();
const input = Number(prompt("enter meters per second: "))
const input1 = Number(prompt("enter time: "))
const input2 = Number(prompt("enter acceleration: "))

const distance = (input * input2) + (1 / 2) * input1 * (input2 * input2);
console.log(distance)
