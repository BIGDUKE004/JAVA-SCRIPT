const prompt = require("prompt-sync")()

let number = +prompt("Enter a four-digit number: ");

	let stepOne = number % 10;
    number /= 10;
	let stepTwo = number % 10;
    number /= 10;
	let stepThree = number % 10;
    number /= 10;
	let stepFour = number % 10;

	console.log(stepFour.toFixed(0), stepThree.toFixed(0), stepTwo.toFixed(0), stepOne.toFixed(0));
