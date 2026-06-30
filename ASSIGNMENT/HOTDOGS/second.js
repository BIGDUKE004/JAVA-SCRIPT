const prompt = require("prompt-sync")();
const input = prompt("enter number of seconds: ")

const hour = input / 3600
let remainder = input % 3600

const minute = remainder / 60
const remaining = remainder % 60

console.log(hour)
console.log(minute)
console.log(remaining)

