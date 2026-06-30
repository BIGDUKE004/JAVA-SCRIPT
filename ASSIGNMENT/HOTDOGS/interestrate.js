const prompt = require("prompt-sync")();
const balance = prompt("Enter balance: ") 
const percentage = prompt("Enter annual interest rate: ") 

const interest = balance * (percentage / 1200)
console.log(interest)
