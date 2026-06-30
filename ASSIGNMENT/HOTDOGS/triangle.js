const prompt = require("prompt-sync")();
const a = prompt("Enter side of triangle: ")
const b = prompt("Enter side of triangle: ")
const c = prompt("Enter side of triangle: ")

if (a == b && b == c ){
console.log("Equilateral")
}else if (a == b || b == c || a == c){
console.log("Isosceles")
} else {
console.log("Scalene")
}
