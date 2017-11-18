/*VARS*/
var alphabetLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var guessesLeft = 9;
/* guessesSoFar: array holds user's guesses each round*/
var guessesSoFar = [];
/* userGuess is user pick by pressing key*/
var userGuess = null;
/* computer picks a letter and store it in letterToBeGuessed*/
var letterToBeGuessed = alphabetLetters[Math.floor(Math.random() * alphabetLetters.length)];
console.log("Wins: " + wins + " Losses: " + losses + " GuessesLeft: " + guessesLeft + " Guesses so far: " + guessesSoFar + " Computer picked: " + letterToBeGuessed);

/*Listens for events*/
document.onkeyup = function(event) {
	/*When user presses key, records and saves to userGuess*/
var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
	/*Add userGuess to guessesSoFar Array if letter hasn't been picked*/
	/*This code ensures only alphabetical keys can be used*/
if (guessesSoFar.indexOf(userGuess) < 0 && alphabetLetters.indexOf(userGuess) >= 0) {
		guessesSoFar[guessesSoFar.length]=userGuess;
	/*decrease remaining guesses by 1 if new letter*/
	guessesLeft--;
	}
	/*If letterToBeGuessed and userGuess is same, record as win and reset 
	lived to 10. Empty lettersGuessed array. new computerGuess*/
if (letterToBeGuessed == userGuess) {
		alert("You are Psychic, please pick my lotto numbers!");
		wins++;
		console.log("You won!");
		guessesLeft = 9;
		guessesSoFar = [];
		letterToBeGuessed = alphabetLetters[Math.floor(Math.random() * alphabetLetters.length)];
		console.log("Wins: " + wins + " Losses: " + losses + " GuessesLeft: " + guessesLeft + " Guesses so far: " + guessesSoFar + " Computer picked: " + letterToBeGuessed);
	}
	/*if guessesLeft gets to 0, record loss and reset guessesLeft to 10.
	empty guessesSoFar array. Make computer make new guess*/
if (guessesLeft == 0) {
		alert("Game Over Ms. Cleo!");
		losses++;
		console.log("You lost!");
		guessesLeft = 9;
		guessesSoFar = [];
		letterToBeGuessed = alphabetLetters[Math.floor(Math.random() * alphabetLetters.length)];
		console.log("Wins: " + wins + " Losses: " + losses + " GuessesLeft: " + guessesLeft + " Guesses so far: " + guessesSoFar + " Computer picked: " + letterToBeGuessed);
	}
	/*To display in html*/
	var html = "<p><h1>The Psychic Game</h1></p>" + "<p><h4>Guess what letter I\'m thinking of</h4></p>" + "<p><h4>Wins: " + wins + "</h4></p>" + "<p><h4>Losses: " + losses + "</h4></p>" + "<p><h4>Guesses Left: " + guessesLeft + "</h4></p>" + "<p><h4>Your guesses so far: " + guessesSoFar + "</h4></p>";
	/*html into game id*/
	document.querySelector("#game").innerHTML = html;
}





