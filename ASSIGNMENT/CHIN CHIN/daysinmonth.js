const prompt = require("prompt-sync")();
let month = +prompt("Enter the month: ")
let year = +prompt("Enter the year: ")

const daysInMonth = year / month
console.log(daysInMonth)

