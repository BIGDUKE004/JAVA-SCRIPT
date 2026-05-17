const prompt = require("prompt-sync")();

const input = Number(prompt("enter weight: "))
const input1 = Number(prompt("enter meters: "))

const sum = input / (input1 * input1)

if (sum < 18.5){
console.log("underweight");
} else if (sum >= 18.5 && sum <= 24.9){
console.log("normal");
} else if (sum <= 24.9 && sum <= 29.9){
console.log("overweight");
} else {
console.log("obese");
}
