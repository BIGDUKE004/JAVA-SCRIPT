const prompt = require("prompt-sync")()
let status = prompt("Enter the filing status: ");
let income = +prompt("Enter the taxable income: ");

	if (status == "single") {
	console.log("10% Tax rate");
	}
	else if (status == "married") {
	console.log("15% Tax rate");
	}
	else if (status == "Seperate") {
	console.log("25% Tax rate");
	}
	else if (status == "Household head") {
	console.log("28% Tax rate");
	}
	else {
	console.log("35% Tax rate");
	}

