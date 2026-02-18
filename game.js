let randomNumber = Math.floor(Math.random() * 10) + 1;
let userGuess;
let attempts = 1;

// Prompt user for a number between 1 and 10, or type 999 to exit.
userGuess = Number(prompt("Type a number between 1 and 10. Type 999 to exit."));

// Create while loop that continues for as long as the user guesses are incorrect.
while (userGuess != randomNumber) {
    attempts += 1; // Loop should count the number of guesses.
    if (userGuess == 999) {
        break; // Loop should exit if user enters 999 and not display "Too high!"
    } else if (userGuess < randomNumber) {
        userGuess = Number(prompt("Too low, guess again...")); // If the guess is too low, the user should be promped "Too low!" and be able to guess again.
    } else if (userGuess > randomNumber) {
        userGuess = Number(prompt("Too high, guess again...")); // If the guess is too high, the user should be promped 'Too high!" and be able to guess again.
    } else {
        userGuess = Number(prompt("Invalid input, guess again...")); // If anything else is entered, the user should be prompted that their input is invalid and  // to guess again.
    }
}
alert("Congrats, you guessed it in " + attempts + " tries.")
