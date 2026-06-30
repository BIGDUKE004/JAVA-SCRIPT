const prompt = require("prompt-sync")();

const day = prompt("enter a day: ")

switch(day){
    case "monday":
    case "tuesday":
    case "wednesday":
    case "thursday":
    case "friday":
        console.log("it is a week day")
        break;

    case "saturday":
    case "sunday":
        console.log("it is a weekend")
        break;
    default :
        console.log("invalid input")
}
