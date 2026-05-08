const prompt = require("prompt-sync")();

const input = Number(prompt("enter price: "))
const input1 = Number(prompt("enter discount: "))

const discount = input1 / 100 * input
const price = input - discount

console.log(price)
