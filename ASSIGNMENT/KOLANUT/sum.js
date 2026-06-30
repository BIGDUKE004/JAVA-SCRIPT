const prompt = require("prompt-sync")();
const input = Number(prompt("enter a five digit integer: "))
    const lastdigit = input % 10
    const num = Math.floor(input / 10000) 
const sum = lastdigit + num
console.log(sum)
