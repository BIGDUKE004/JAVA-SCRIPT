const prompt = require("prompt-sync")();

const user = prompt("enter a traffic light color: ")

if (user == "red"){
console.log("red")
} else if(user == "yellow"){
console.log("ready")
} else if(user == "green"){
console.log("go")
}
