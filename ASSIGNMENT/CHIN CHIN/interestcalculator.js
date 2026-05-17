const prompt = require("prompt-sync")()
let amount = +prompt("Enter principal amount: ");
let rate = +prompt("Enter interest rate: ");
let time = +prompt("Enter time in years: ");

const simpleInterest = amount* rate / time;
const compoundInterest = simpleInterest - amount;

console.log("Simple Interest is: ", simpleInterest.toFixed(2))
console.log("Compound Interest is: ", compoundInterest.toFixed(2))
