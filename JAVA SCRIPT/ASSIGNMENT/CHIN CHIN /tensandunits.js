const prompt = require("prompt-sync")()

let number = +prompt("Enter a two-digit number: ");

	let tens = number / 10;
	let units = number % 10;

	if (tens > units) {
	console.log("The tens digit is greater than the units digit");
	} 
	else if (tens < units) {
	console.log("The tens digit is lesser than the units digit");
	} 
	else{
	console.log("The tens digit is equal to the units digit");
	} 
