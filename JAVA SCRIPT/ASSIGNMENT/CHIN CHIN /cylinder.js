const prompt = require("prompt-sync")()
let radius = +prompt("Enter the radius of cylinder: ")
let height = +prompt("Enter the height of cylinder: ")

const surfaceArea = (2 * Math.PI * Math.pow(radius, 2)) + (2 * Math.PI * radius * height);
const volume = Math.PI * Math.pow(radius, 2) * height;
console.log("The surface area is: " + surfaceArea.toFixed(2));
console.log("The volume is: " + volume.toFixed(2));
