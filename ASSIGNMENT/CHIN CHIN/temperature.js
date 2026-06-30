const prompt = require("prompt-sync")()

let temp = +prompt("Enter a temperature in celsius: ");

	if (temp < 0) {
	console.log("Freezing");
	}
	else if (temp > 0 && temp <= 15) {
	console.log("Cold");
	}
	else if (temp > 16 && temp <= 25) {
	console.log("Warm");
	}
	else {
	console.log("Hot");
	}

