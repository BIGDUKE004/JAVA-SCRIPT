const prompt = require("prompt-sync")();
const year = prompt("Enter a year: ")

if(year % 4 == 0 && year % 100 != 0 || year % 400 == 0){
console.log("it is a leap year")
} else {
console.log("it is not a leap year")
}
