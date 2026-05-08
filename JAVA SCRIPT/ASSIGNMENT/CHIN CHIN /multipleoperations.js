const prompt = require("prompt-sync")()

let numOne = +prompt("Enter the first number: ");
let numTwo = +prompt("Enter the second number: ");

	if (numOne > numTwo) {
	console.log("Larger number: ", numOne);
	}
	else {
	console.log("Larger number: ", numTwo);
	}

	if (numOne < numTwo) {
	console.log("Smaller number: ", numOne);
	}
	else {
	console.log("Smaller number: ", numTwo);
	}

	const sum = numOne +  numTwo;
	console.log("The sum: ", sum);
	const difference = numOne - numTwo;
	console.log("The difference: ", difference);
	const product = numOne * numTwo;
	console.log("The product is: ", product);

	if (numTwo == 0) {
	console.log("Cannot divide by zero");
	}
	else {
	const quotient = numOne / numTwo;
	console.log("The quotient: ", quotient);
	}
