const choices = ['Rock', 'Paper', 'Scissors'];
let humanScore = 0;
let computerScore = 0;

function getComputerChoice(choices) {
    num = Math.floor(Math.random() * 3);
    computer_choice = choices[num];
    return computer_choice;
}

function getHumanChoice() {
    let humanChoice = prompt("Rock, Paper, or Scissors? ")
    humanChoice = humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1);
    return humanChoice
}

function playRound(human, computer, humanScore, computerScore) {
    if (human == 'Rock' && computer == 'Scissors') {
        humanScore++;
    } else if (human == 'Scissors' && computer == 'Paper') {
        humanScore++;
    } else if (human == 'Paper' && computer == 'Rock') {
        humanScore++;
    } else if (human == computer) {
        console.log("DRAW")
    } else {
        computerScore++;
    }

    console.log(`Player chose ${human} and Computer chose ${computer}`)
    console.log(`Player Score: ${humanScore}`)
    console.log(`Computer Score: ${computerScore}`)
    return humanScore, computerScore; 
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice(choices);

playRound(humanSelection,computerSelection, humanScore, computerScore);


