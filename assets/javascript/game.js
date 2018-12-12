var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    var wins = 0;
    var losses = 0;
    var guessesLeft = 9;
    var guessesSoFar = [];
    var computerGuess = [];

    var winsText = document.getElementById("wins-text");
    var lossesText = document.getElementById("losses-text");
    var guessesLeftText = document.getElementById("guessesLeft-text");
    var guessesSoFarText = document.getElementById("guessesSoFar-text");

    window.onload = function() {
        var compGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        computerGuess.push(compGuess);
        console.log(computerGuess[0]);
    };

    document.onkeyup = function(event) {
        var userGuess = event.key;
        guessesSoFar.push(userGuess);
        console.log(guessesSoFar);
        
        
        if ((userGuess === computerGuess[0]) && (guessesLeft >= 0))  {
            wins++;
            console.log(wins);
            guessesLeft = 9;
            guessesSoFar.length = 0;
            computerGuess.length = 0;
            var compGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
            computerGuess.push(compGuess);
            console.log(computerGuess[0]);
        } else if ((userGuess !== computerGuess[0]) && (guessesLeft > 0)) {
            guessesLeft = guessesLeft-1;
            console.log(guessesLeft);
        } else {
            losses++;
            guessesLeft = 9;
            guessesSoFar.length = 0;
            computerGuess.length = 0;
            var compGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
            computerGuess.push(compGuess);
            console.log(computerGuess[0]);
        };
    };

        winsText.textContent = "Wins: " + wins;
        lossesText.textContent = "Losses " + losses;
        guessesLeftText.textContent = "Guesses Left: " + guessesLeft;
        guessesSoFarText.textContent = "Guesses So Far: " + guessesSoFar;
    
