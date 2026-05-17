const prompt = require("prompt-sync")()
let number = +prompt("Enter a number: ")

	if (number >= 100 && <= 999 || number <= -100 && >= -999 ) {
	console.log("It is a three-digit number")
	}
	else {
	console.log("It is not a three-digit number ")
	}

