const prompt = require("prompt-sync")();

const sum = Number(prompt("enter digit: "))


if (sum == 0 ){
console.log("Stationary");
} else if (sum <= 40){
console.log("Slow");
} else if (sum > 40 && sum <= 80){
console.log("Fast");
} else if (sum >  80 && sum <= 120 ){
console.log("Dangerously fast");
}
 

