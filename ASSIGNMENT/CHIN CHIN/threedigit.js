const prompt = require("prompt-sync")()

	let number = +prompt("Enter a three-digit number: ");

	let stepOne = number / 100;
	let stepTwo = (number / 10) % 10;
	let stepThree = number % 10;

	const sum = stepOne + stepTwo + stepThree;
	console.log(sum);
