const prompt = require("prompt-sync")();
const distance = prompt("Enter your distance: ")
const miles = prompt("Enter miles per gallon: ")
const gallon = prompt("Enter price per gallon: ")

const cost = (distance / miles) * gallon;

console.log(cost)
