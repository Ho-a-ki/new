
//create secret Number.

var secretNumber = 4;

var guess = Number(prompt("Guess a number?"));

if (guess === secretNumber) {
    alert("You got it right!")
}

else if (guess < secretNumber) {
    alert("Too low")
}

else {
    alert("Too high");
}
