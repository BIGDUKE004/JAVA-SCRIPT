const prompt = require("prompt-sync")()
let wage = +prompt("Enter your hourly wage: ")
let hours = +prompt("Enter your hours worked: ")
let payment;

	if (hours <= 40) {
	payment = wage * hours
	console.log(payment);
	}
	else {
	payment = wage * hours * 1.5;
	console.log(payment);
	}

