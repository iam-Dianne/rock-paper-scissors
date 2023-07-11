function getComputerChoice() {
    function randomNumber() {
        // function that returns a random number 1-3

        // Math.random returns a floating point between 0 and 1
        // Multiplying this by n gives a floating point number between 0 (inclusive) and n (exclusive).
        // (Math.random() * 3) => random number multiplied by the no. of outcomes (3)
        // + 1 because 1 is the start number; just in case it gives 0

        let randomNum = Math.floor((Math.random() * 3) + 1);
        return randomNum;
    }

    // assigning the random number to it's abilities

    if (randomNumber() === 1) {
        return "ROCK";
    } else if (randomNumber() === 2) {
        return "PAPER";
    } else {
        return "SCISSORS";
    }
}


function playRound(playerSelection, computerSelection) {
    // this function oversees the game

    let outcome;
    let playerChoice = playerSelection;
    let computerChoice = computerSelection;

    if (playerChoice === "ROCK" && computerChoice == "ROCK") {
        console.log("tie!");
    } else if (playerChoice === "ROCK" && computerChoice === "PAPER") {
        console.log(`You lose! ${computerChoice} beats ${playerChoice}`);
    } else if (playerChoice === "ROCK" && computerChoice === "SCISSORS") {
        console.log(`You win! ${playerChoice} beats ${computerChoice}`);
    } else if (playerChoice === "PAPER" && computerChoice === "ROCK") {
        console.log(`You win! ${playerChoice} beats ${computerChoice}`);
    } else if (playerChoice === "PAPER" && computerChoice === "PAPER") {
        console.log("Tie!");
    } else if (playerChoice === "PAPER" && computerChoice === "SCISSORS") {
        console.log(`You lose! ${computerChoice} beats ${playerChoice}`);
    } else if (playerChoice === "SCISSORS" && computerChoice === "ROCK") {
        console.log(`You lose! ${computerChoice} beats ${playerChoice}`);
    } else if (playerChoice === "SCISSORS" && computerChoice === "PAPER") {
        console.log(`You win! ${playerChoice} beats ${computerChoice}`); 
    } else if (playerChoice === "SCISSORS" && computerChoice === "SCISSORS") {
        console.log("Tie!");
    } else {
        console.log("You entered an invalid choice.")
    }
 }

const playerSelection = "scissors".toUpperCase();
const computerSelection = getComputerChoice();
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));