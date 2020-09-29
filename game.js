var secretNumber = 4;
var stringGuess = prompt("guess a Number");
var guess = Number(stringGuess);
alert(guess);

// check if guess is right

if (guess === secretNumber) {
	alert("you got it right");
}
//otherwese check if higher

else if (guess > secretNumber) {
	alert("Guess is to high")	
}

//otherwese check if lower
else {
	alert("to loww try again")
}