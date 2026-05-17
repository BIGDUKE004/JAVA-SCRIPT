const prompt = require("prompt-sync")()
let num = +prompt("Enter a number: ");

	if (num % 4 == 0 && num % 5 == 0) {
	console.log("Divisible by 4 and 5");
	}
	else if (num % 4 == 0 || num % 5 == 0) {
	console.log("Divisible by 4 or 5");
	}
	else if (num % 4 == 0 ^ num % 5 == 0) {
	console.log("Divisible by 4 or 5 but not both");
	}
	else {
	console.log("Invalid ");
	}

