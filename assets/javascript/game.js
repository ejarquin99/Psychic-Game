var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    var wins = 0;
    var losses = 0;
    var guessesLeft = 9;
    var guessesSoFar = [];
    var computerGuess;

    var winsText = document.getElementById("wins-text");
    var lossesText = document.getElementById("losses-text");
    var guessesLeftText = document.getElementById("guessesLeft-text");
    var guessesSoFarText = document.getElementById("guessesSoFar-text");
    var computersChoice = document.getElementById("computer-choice");

    window.onload = function() {
        computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        console.log(computerGuess);
    };

    document.onkeyup = function(event) {
        var userGuess = event.key;
        guessesSoFar.push(userGuess);
        console.log(guessesSoFar);
        
        
        if ((userGuess === computerGuess) && (guessesLeft > 0))  {
            alert("Well Done! You guessed " + computerGuess + " correctly!")
            wins++;
            console.log(wins);
            guessesLeft = 9;
            computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
            guessesSoFar=[];
            console.log(computerGuess[0]);
        } else if ((userGuess !== computerGuess) && (guessesLeft > 0)) {
            guessesLeft = guessesLeft-1;
            console.log(guessesLeft);
        } else {
            alert("Too bad! The letter was: " + computerGuess + " !");
            losses++;
            guessesLeft = 9;
            computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
            guessesSoFar=[];
            console.log(computerGuess);
        }
        winsText.textContent = "Wins: " + wins;
        lossesText.textContent = "Losses " + losses;
        guessesLeftText.textContent = "Guesses Left: " + guessesLeft;
        guessesSoFarText.textContent = "Guesses So Far: " + guessesSoFar;
    };
    
        
        
