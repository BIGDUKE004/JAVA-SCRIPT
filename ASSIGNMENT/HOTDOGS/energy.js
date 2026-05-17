const prompt = require("prompt-sync")();
const input = Number(prompt("enter amount of water in kilogram: "))
const input1 = Number(prompt("enter initial temperature: "))
const input2 = Number(prompt("enter final temperature: "))

const sum = input * (input2 - input1) * 4184

console.log(sum)
