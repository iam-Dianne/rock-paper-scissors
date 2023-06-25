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

    // assigning the random number to it's abilitiessss

    let choice;

    if (randomNumber() === 1) {
        return "Rock";
    } else if (randomNumber() === 2) {
        return "Paper";
    } else {
        return "Scissors";
    }
    
}
console.log(getComputerChoice());