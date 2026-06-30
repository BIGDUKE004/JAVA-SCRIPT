const prompt = require("prompt-sync")();
let number = +prompt("Enter a number: ")
    if (number % 5 == 0) {
	console.log("HiFive")
	}

	else if (number % 2 == 0) {
	console.log("HiEven")
	}
	
	else {
	console.log("invalid number")
	}

