const prompt = require("prompt-sync")();
const input = Number(prompt("enter weight: "))
const input1 = Number(prompt("enter height: "))

const sum1 = input * 0.45359237;
const sum2 = input1 * 0.0254;
const sum3 = input / ( input1 * input1);

console.log(sum3)
