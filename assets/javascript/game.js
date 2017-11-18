/*VARS*/
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var lettersGuessed = [];

/*User Guess*/
document.onkeyup = function(event) {
var userGuess = event.key;

var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

	alert("User Guess: " + userGuess);

if (userGuess === computerGuess){
	alert("You are Psychic, please pick my lotto numbers")
	winner();
	}

if (userGuess !== computerGuess){
	guessesLeft --;
	guessesLeft.textContent = "Guesses to go: " + guessesLeft
	lettersGuessed.textContent = "Letters Guessed " + lettersGuessed;
	}

if (guessesLeft === 0){
	alert("Game Over Loser!")
	loser();
	}
}

/*Functions*/

function winner(){
	wins ++;
	winsCount.textContent = "Wins: " + wins;
	guessesLeft = 10;
	lettersGuessed = [];
	computerGuessFunction();
	}
	
function loser(){
	losses ++;
	lossesCount.textContent = "Losses: " + losses;
	guessesLeft = 10;
	computerGuessFunction();
	}

function computerGuessFunction() {
	computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)]
}