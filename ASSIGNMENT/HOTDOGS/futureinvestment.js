const prompt = require("prompt-sync")();
const investment = prompt("Enter your future investment amount: ")
const rate = prompt("Enter interest rate: ")
const year = prompt("Enter number of years: ")

const investmentvalue = investment * (1 + rate) ^ (year * 12)

console.log(investmentvalue)
