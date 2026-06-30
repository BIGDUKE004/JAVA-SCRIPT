const prompt = require("prompt-sync")();

const input = Number(prompt("enter digit: "))

if( input % 5 === 0  &&  input % 3 === 0){
console.log("FizzBuzz")
}else if( input % 3 === 0){
console.log("Fizz")
} else if(input % 5 === 0){
console.log("Buzz")
}  
