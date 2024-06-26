const randomNumber = Math.floor(Math.random() * 10) + 1;

let guessCount = 0;
const maxGuesses = 3;

function submitBtn() {
  const input = document.getElementById("guessInput").value;
  const userGuess = parseInt(input);

  const resultLabel = document.getElementById("result");

  guessCount++;

  if (guessCount >= maxGuesses) {
    resultLabel.textContent = `Game over! You've exceeded the maximum number of guesses. The correct number was ${randomNumber}.`;
    resultLabel.style.color = "#dc3545";
    document.getElementById("guessInput").disabled = true;
    document.getElementById("submitButton").disabled = true;
    resetButton.style.display = "block";
    return;
  }

  if (isNaN(userGuess) || userGuess < 1 || userGuess > 10) {
    resultLabel.textContent = `Please enter a valid number between 1 and 10. You have ${
      maxGuesses - guessCount
    } ${maxGuesses - guessCount === 1 ? "attempt" : "attempts"} left.`;
    resultLabel.style.color = "#dc3545";
    return;
  } else if (userGuess === randomNumber) {
    resultLabel.textContent = `Congratulations! You guessed the correct number in ${guessCount} ${
      guessCount === 1 ? "attempt" : "attempts"
    }!`;
    resultLabel.style.color = "#28a745";
    document.getElementById("guessInput").disabled = true;
    document.getElementById("submitButton").disabled = true;
    resetButton.style.display = "block";
    return;
  } else {
    resultLabel.textContent = `Incorrect! Try again. You have ${
      maxGuesses - guessCount
    } ${maxGuesses - guessCount === 1 ? "attempt" : "attempts"} left.`;
    resultLabel.style.color = "#dc3545";
    return;
  }
}

function resetBtn() {
  guessCount = 0;
  document.getElementById("guessInput").disabled = false;
  document.getElementById("submitButton").disabled = false;
  document.getElementById("guessInput").value = "";
  document.getElementById("result").textContent = "";
  document.getElementById("resetButton").style.display = "none";
}
