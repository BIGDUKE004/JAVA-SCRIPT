const prompt = require("prompt-sync")()
let base = +prompt("Enter a number: ")
let height = +prompt("Enter a number: ")

area = 0.5 * base * height
console.log(area)
