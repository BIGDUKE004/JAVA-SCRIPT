const prompt = require("prompt-sync")()
let length = +prompt("Enter a number: ")
let width = +prompt("Enter a number: ")

area = length * width
console.log(area)
