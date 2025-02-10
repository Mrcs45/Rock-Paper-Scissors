/* Make a rock paper scissors game */

/* Create a function named getcomputerChoice */
function getcomputerChoice() {
    /* getcomputerChoice function should select and return Rock, Paper or Scissors randomly */
    const options = "Rock Paper Scissors";
    /* Transform string into array */
    const selector = options.split(' ');
    /* Math.random to random a number */
    const random = Math.floor(Math.random() * 3);
    /* return the result */
    return selector[random];


}
