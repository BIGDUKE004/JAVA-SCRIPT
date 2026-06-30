const prompt = require("prompt-sync")();
const input = parseInt(prompt("enter length of side: "));

const area = 0.886 * (input * input);

console.log(area);
