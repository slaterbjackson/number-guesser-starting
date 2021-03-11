let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

// This function is called at the start of each round to generate the new secret number.
const generateTarget = target => {
    return Math.floor(Math.random() * 10);
};

// This function will be called each round to determine which guess is closest to the target number.
const compareGuesses = (currentHumanGuess, computerGuess, target) => {

// absolute value method

Math.abs(target - currentHumanGuess)
    if (Math.abs((target - currentHumanGuess)) > (Math.abs(target - computerGuess))) {
      return false;
    } else if (currentHumanGuess === computerGuess) {
        return true;
    } else {
        return false;
    }
};

// This function will be used to correctly increase the winner's score after each round.
const updateScore = winner => {
    if (winner === 'human') {
        humanScore += 1;
    } else if (winner === 'computer') {
        computerScore += 1;
    }
};

// This function will be used to update the round number after each round.
const advanceRound = currentRoundNumber => {
    currentRoundNumber += 1;
};

