const prompt = require("prompt-sync")()
import random


let coin = random.randint(0, 1) 
let guess = +prompt("Enter 0 for head or 1 for tail: ");

    if (coin == 0) {
	result = "Heads";
	}
	else {
	result ="Tails";
	}

	if(guess == 0 && coin == 0) {
	System.out.println("Correct, its Heads");
	}
	else if (guess == 1 && coin == 1) {
	System.out.println("its Tails");
	}
	else if (guess != 0 && guess != 1) {
	System.out.println("Invalid input!");
	}
	else {
	System.out.println("Wrong Choice");
	}


