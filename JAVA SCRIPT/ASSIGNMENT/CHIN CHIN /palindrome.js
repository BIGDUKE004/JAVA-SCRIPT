const prompt = require("prompt-sync")()

let number = +prompt("Enter a three-digit number: ");

    if (number < 100 || number > 999) {
    	console.log("Invalid! Enter a three-digit number: ");
        return;
    }

	let units = number % 10;
    number /= 10;
    let tens = number % 10;
    number /= 10;
    let hundreds =  number % 10;
    

	if (units == hundreds) {
	console.log("The number is a palindrome");
	}
	else {
	console.log("The number is not a palindrome");
	}
