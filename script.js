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


function alterComputerIcon(computerSelection) {
    if (computerSelection === "ROCK") {
        computerChoiceBg.setAttribute("style", "background-color: #ffffff; border: 20px solid #9D0191");
        computerChoiceIcon.setAttribute("src", "icons/rock-icon.png");
        computerChoiceIcon.setAttribute("style", "height: 70%; width: 70%");
    } else if (computerSelection === "PAPER") {
        computerChoiceBg.setAttribute("style", "background-color: #ffffff; border: 20px solid #FAA300");
        computerChoiceIcon.setAttribute("src", "icons/paper-icon.png");
        computerChoiceIcon.setAttribute("style", "height: 70%; width: 70%");
    } else {
        computerChoiceBg.setAttribute("style", "background-color: #ffffff; border: 20px solid #FF1E1E");
        computerChoiceIcon.setAttribute("src", "icons/scissors-icon.png");
        computerChoiceIcon.setAttribute("style", "height: 70%; width: 70%");
    }
}


// ------ adding query selectors for icons -------

const playerChoiceBg = document.querySelector('.player-choice-f-icon');
const playerChoiceIcon = document.querySelector('#player-icon');

const computerChoiceBg = document.querySelector('.computer-choice-f-icon');
const computerChoiceIcon = document.querySelector('#computer-icon');




// ----- event listeners for buttons ------

const rockAttack = document.querySelector('#rock-attack');
rockAttack.addEventListener('click', () => {

    let computerChoice = getComputerChoice()

    playerChoiceBg.setAttribute("style", "background-color: #ffffff; border: 20px solid #9D0191");
    playerChoiceIcon.setAttribute("src", "icons/rock-icon.png");
    playerChoiceIcon.setAttribute("style", "height: 70%; width: 70%");

    alterComputerIcon(computerChoice);
    playRound('ROCK', computerChoice);
})

const paperAttack = document.querySelector('#paper-attack');
paperAttack.addEventListener('click', () => {
    let computerChoice = getComputerChoice()

    playerChoiceBg.setAttribute("style", "background-color: #ffffff; border: 20px solid #FAA300");
    playerChoiceIcon.setAttribute("src", "icons/paper-icon.png");
    playerChoiceIcon.setAttribute("style", "height: 70%; width: 70%");

    alterComputerIcon(computerChoice);
    playRound('PAPER', computerChoice);
})

const scissorAttack = document.querySelector('#scissor-attack');
scissorAttack.addEventListener('click', () => {

    let computerChoice = getComputerChoice();

    playerChoiceBg.setAttribute("style", "background-color: #ffffff; border: 20px solid #FF1E1E");
    playerChoiceIcon.setAttribute("src", "icons/scissors-icon.png");
    playerChoiceIcon.setAttribute("style", "height: 70%; width: 70%");

    alterComputerIcon(computerChoice);
    playRound('SCISSORS', computerChoice);
})


let playerScore = 0;
let computerScore = 0;

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