const prompt = require("prompt-sync")();

const input = Number(prompt("enter digit: "))

if(input > 1000 && input < 9999){
console.log("valid pin")
} else{
console.log("invalid pin")
}
