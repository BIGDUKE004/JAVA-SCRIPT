const prompt = require("prompt-sync")();
const input = prompt("Enter a number: ")

if(input % 2 == 0){
console.log("it can be divisible by 2")
} else {
console.log("it cannot be divisible by 2")
}

if(input % 3 == 0){
console.log("it can be divisible by 3")
} else {
console.log("it cannot be divisible by 3")
}

if(input % 5 == 0){
console.log("it can be divisible by 5")
} else {
console.log("it cannot be divisible by 5")
}

if(input % 7 == 0){
console.log("it can be divisible by 7")
} else {
console.log("it cannot be divisible by 7")
}
