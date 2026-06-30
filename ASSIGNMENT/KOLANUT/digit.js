const prompt = require("prompt-sync")();

const input = Number(prompt("enter digit: "))
const input1 = Number(prompt("enter digit: "))

if(input > 0 && input1 > 0){
console.log(input + input1)
} else if(input < 0 && input1 < 0){
console.log(input * input1)
}else if( input < 0 || input > 0 && input1 < 0 || input1 > 0){
console.log(input - input1)
}
