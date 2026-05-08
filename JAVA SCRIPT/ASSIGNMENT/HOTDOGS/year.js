const prompt = require("prompt-sync")();
const input = Number(prompt("enter number of minutes: "))

const minute = 60;
const hour = 60;
const day = 1440;
const month = 43800;
const year = 525600;

const sum1 = input / minute;
const sum2 = input / hour;
const sum3 =  input / day;
const sum4 =  input / month;
const sum5 =  input / year;


console.log("minute is " + sum1)
console.log("hour is "sum2)
console.log("day is "sum3)
console.log("month is "sum4)
console.log("year is "sum5)

