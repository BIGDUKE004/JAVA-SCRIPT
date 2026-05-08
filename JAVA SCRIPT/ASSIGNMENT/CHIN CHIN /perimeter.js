const prompt = require("prompt-sync")()

let edgeOne = +prompt("Enter the first edge of rectangle: ");
let edgeTwo = +prompt("Enter the second edge of rectangle: ");

	if (edgeOne != edgeTwo) {
	const perimeter = 2 * (edgeOne + edgeTwo);
	console.log("The perimeter is: " + perimeter);
	}
	else {
	console.log("Invalid input, the edges must be different");
	}
