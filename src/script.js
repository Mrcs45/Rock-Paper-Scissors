/* Make a rock paper scissors game */

/* Create a function named getcomputerChoice */
function getcomputerChoice() {
    /* getcomputerChoice function should select and return Rock, Paper or Scissors randomly */
    const options = "rock paper scissors";
    /* Transform string into array */
    const selector = options.split(' ');
    /* Math.random to random a number */
    const random = Math.floor(Math.random() * 3);
    /* return the result */
    return selector[random];


}

/* Write the logic to get a human choice */

/* Create a function named getHumanChoice */
function getHumanChoice() {
    /* Ask for human to pick a choice */
    let human = prompt("Pick a choice: Rock, Paper or Scissors ");
    /* Return human choice */
    return human;
}
/* console.log(getHumanChoice()); */

/* Declare the player score */
let humanScore = 0;
let computerScore = 0;

/* Write the logic to play a entire game */

/* Create the function named playGame */
function playGame() {
    /* Move playRoound function inside the playGame */

    /* Play 5 round by calling playRound 5 times */
        while (humanScore < 5 && computerScore < 5) {
            playRound(getHumanChoice(), getcomputerChoice());
        }
    /* Write the logic to play a single round */
    
    /* Create a function named playRound with two parameters humanChoice and computerChoice */
    function playRound(humanChoice, computerChoice) {
    /* Make humanchoice case-insensitive */
        let lower = humanChoice.toLowerCase();
        /* Write the code for the round winner such as: "You lose! Paper beats Rock" */
        if (lower === computerChoice) {
            return "It's a tie!"
        } 
        if (
            (lower === 'rock' && computerChoice === 'scissors') ||
            (lower === 'paper' && computerChoice === 'rock') ||
            (lower === 'scissors' && computerChoice === 'paper')
        ) {
            humanScore++
            return `You win the round! ${lower} beats ${computerChoice}.`;
        } else {
            computerScore++
            return `You Lose the round! ${computerChoice} beats ${lower}`;
        }
        
    }
        /* Checks who win the game */
        if (humanScore = 5) {
            return `Congratulations! You won the game! your score: ${humanScore} computer score: ${computerScore}`;
        } 
        if (computerScore = 5) {
            return `You lose! The computer won the game! your score: ${humanScore} computer score: ${computerScore}`;
            
        };
};

    /* Call the game function */
    console.log(playGame());
    