const prompt = require("prompt-sync")()
let a = +prompt("Enter number for a: ");
let b = +prompt("Enter number for b: ");
let c = +prompt("Enter number for c: ");

	if (a == 0) {
	console.log("The equation has no unique solution");
	}
	else {
	const x = (c - b) / a;
	console.log("The solution is: ", x.toFixed(2));
	}

