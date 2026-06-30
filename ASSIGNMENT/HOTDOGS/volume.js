const prompt = require("prompt-sync")();
const input = parseInt(prompt("enter length of side: "));
const inputone = parseInt(prompt("enter area of triangle: "));

const volume = inputone * input;

console.log(volume);
