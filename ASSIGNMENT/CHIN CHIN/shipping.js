const prompt = require("prompt-sync")()

	let weight = +prompt("Enter the weight of the package: ");

	let cost;

	if (weight > 0 && weight <= 2) {
	cost = 2.5;
	console.log("shipping cost is: " + "$" + cost);
	}
	else if (weight > 2 && weight <= 4) {
	cost = 4.5;
	console.log("shipping cost is: " + "$" + cost);
	}
	else if (weight > 4 && weight <= 10) {
	cost = 7.5;
	console.log("shipping cost is: " + "$" + cost);
	}
	else if (weight > 10 && weight <= 20) {
	cost = 10.5;
	console.log("shipping cost is: " + "$" + cost);
	}
	else if (weight > 20) {
	console.log("The package cannot be shipped: ");
	}
	else {
	console.log("Invalid wpackage weight");
	}
