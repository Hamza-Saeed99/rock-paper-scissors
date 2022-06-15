

function computerPlay() {
    let arr = ["rock", "paper", "scissors"];
    return arr[Math.floor(Math.random() * arr.length)];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if(playerSelection === "rock") {
        if(computerSelection === "rock") {
            return "Draw!";
        }
        if(computerSelection === "scissors") {
            return "You Win! Rock beats Scissors!";
        }
        if(computerSelection === "paper") {
            return "You Lose! Paper beats Rock!";
        }
    }
    if(playerSelection === "paper") {
        if(computerSelection === "rock") {
            return "You Win! Paper beats Rock!";
        }
        if(computerSelection === "scissors") {
            return "You Lose! Scissors beat Paper!";
        }
        if(computerSelection === "paper") {
            return "Draw!";
        }
    }
    if(playerSelection === "scissors") {
        if(computerSelection === "rock") {
            return "You Lose! Rock beats Scissors!";
        }
        if(computerSelection === "scissors") {
            return "Draw!";
        }
        if(computerSelection === "paper") {
            return "You Win! Scissors beat Paper!";
        }
    }
}

function isValidInput(playerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if(playerSelection !== "rock" && playerSelection !== "scissors" && playerSelection !== "paper") {
        return false;
    }
    return true;
}

function game() {
    let playerPoints = 0;
    let computerPoints = 0;
    for(let i = 0; i < 5; i++) {
        let playerSelection = prompt("Rock, Paper or Scissors?");
        while(!isValidInput(playerSelection)) {
            playerSelection = prompt("You have to input rock, paper or scissors!");
        }
        let result = playRound(playerSelection, computerPlay());
        if(result.includes("Win")) {
            playerPoints++;
        }
        if(result.includes("Lose")) {
            computerPoints++;
        }
        console.log(result);
    }

    if(playerPoints > computerPoints) {
        console.log(`You win ${playerPoints} to ${computerPoints}!`)
    } else if(computerPoints > playerPoints) {
        console.log(`You lose ${playerPoints} to ${computerPoints}!`)
    } else {
        console.log(`Draw! You both have ${playerPoints}`);
    }

}