const prompt = require("prompt-sync")()
let code = 1234;
let pin = +prompt("Enter your PIN: ");

if (pin == code) {
    console.log("Successful, Your balance is: $1000");
}else {
	console.log("Incorrect PIN");
}

