function getComputerChoice() {
        // function that returns a random number 1-3
        // Math.random returns a floating point between 0 and 1
        // Multiplying this by n gives a floating point number between 0 (inclusive) and n (exclusive).
        // (Math.random() * 3) => random number multiplied by the no. of outcomes (3)
        // + 1 because 1 is the start number; just in case it gives 0

    let randomNum = Math.floor((Math.random() * 3) + 1);
    
    // assigning the random number to it's abilities

    if (randomNum === 1) {
        return "ROCK";
    } else if (randomNum === 2) {
        return "PAPER";
    } else {
        return "SCISSORS";
    }
}

let playerScore = 0;
let computerScore = 0;



function playRound(playerSelection, computerSelection) {
    // this function oversees the game
    // also states the winner and the loser of the round

    let playerChoice = playerSelection;
    let computerChoice = computerSelection;
    
    function winText() {
        console.log(`You win! ${playerChoice} beats ${computerChoice}`);
        playerScore++;
    }

    function loseText() {
        console.log(`You lose! ${computerChoice} beats ${playerChoice}`)
        computerScore++;
    }

    if (playerChoice === "ROCK" && computerChoice == "ROCK") {
        console.log("tie!");
    } else if (playerChoice === "ROCK" && computerChoice === "PAPER") {
        loseText();
    } else if (playerChoice === "ROCK" && computerChoice === "SCISSORS") {
        winText();
    } else if (playerChoice === "PAPER" && computerChoice === "ROCK") {
        winText();
    } else if (playerChoice === "PAPER" && computerChoice === "PAPER") {
        console.log("Tie!");
    } else if (playerChoice === "PAPER" && computerChoice === "SCISSORS") {
        loseText();
    } else if (playerChoice === "SCISSORS" && computerChoice === "ROCK") {
        loseText();
    } else if (playerChoice === "SCISSORS" && computerChoice === "PAPER") {
        winText();
    } else if (playerChoice === "SCISSORS" && computerChoice === "SCISSORS") {
        console.log("Tie!");
    } else {
        console.log("You entered an invalid choice.");
    }
}

// ----- assigning buttons to playerSelection ------

const rockAttack = document.querySelector('#rock-attack');
rockAttack.addEventListener('click', () => {
    playRound('ROCK', getComputerChoice());
})

const paperAttack = document.querySelector('#paper-attack');
paperAttack.addEventListener('click', () => {
    playRound('PAPER', getComputerChoice());
})

const scissorAttack = document.querySelector('#scissor-attack');
scissorAttack.addEventListener('click', () => {
    playRound('SCISSORS', getComputerChoice());
})


function game() {
    // play a first to 5 game using loops. keep score. winner/loser. player input through prompt.
    
    // for (let i = 0; i < 5; i++) {
    //     const computerSelection = getComputerChoice();
    //     let playerSelection = prompt("Enter you choice").toUpperCase();
    //     console.log(computerSelection);
    //     console.log(playRound(playerSelection, computerSelection));
    //     console.log(`Your score: ${playerScore}`);
    //     console.log(`Computer score: ${computerScore}`);

    // }

    while (playerScore < 5 && computerScore < 5) {
        const computerSelection = getComputerChoice();
        let playerSelection = prompt("Enter you choice").toUpperCase();
        console.log(computerSelection);
        console.log(playRound(playerSelection, computerSelection));
        console.log(`Your score: ${playerScore}`);
        console.log(`Computer score: ${computerScore}`);
    }
}


// const computerSelection = getComputerChoice();
// let playerSelection = prompt("Enter you choice").toUpperCase();
// console.log(computerSelection);
// console.log(playRound(playerSelection, computerSelection));

//console.log(game());