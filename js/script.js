
let playerPoints = 0;
let computerPoints = 0;
clickButton();
showScore();

function computerPlay() {
    let arr = ["rock", "paper", "scissors"];
    return arr[Math.floor(Math.random() * arr.length)];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if(playerSelection === "rock") {
        if(computerSelection === "rock") {
            showResult("Draw!");
        }
        if(computerSelection === "scissors") {
            playerPoints++;
            showScore();
            showResult("You Win! Rock beats Scissors!");
        }
        if(computerSelection === "paper") {
            computerPoints++;
            showScore();
            showResult("You Lose! Paper beats Rock!");
        }
    }
    if(playerSelection === "paper") {
        if(computerSelection === "rock") {
            playerPoints++;
            showScore();
            showResult("You Win! Paper beats Rock!");
        }
        if(computerSelection === "scissors") {
            computerPoints++;
            showScore();
            showResult("You Lose! Scissors beat Paper!");
        }
        if(computerSelection === "paper") {
            showResult("Draw!");
        }
    }
    if(playerSelection === "scissors") {
        if(computerSelection === "rock") {
            computerPoints++;
            showScore();
            showResult("You Lose! Rock beats Scissors!");
        }
        if(computerSelection === "scissors") {
            showResult("Draw!");
        }
        if(computerSelection === "paper") {
            playerPoints++;
            showScore();
            showResult("You Win! Scissors beat Paper!");
        }
    }
    if(playerPoints == 5 || computerPoints == 5) {
        removeButtons();
        addResetButton();
        showFinalResult();
    }
}

function isValidInput(playerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if(playerSelection !== "rock" && playerSelection !== "scissors" && playerSelection !== "paper") {
        return false;
    }
    return true;
}

function clickButton() {
    const buttons = document.querySelectorAll('button');

    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            playRound(button.id, computerPlay());
        });
    });
}

function removeButtons() {
    const buttons = document.querySelector('.buttons');

    buttons.innerHTML = '';
}

function addResetButton() {
    const buttons = document.querySelector('.buttons');

    const button = document.createElement('button');
    button.classList.add('button');
    button.setAttribute('id', 'reset');
    button.textContent = 'Reset';
    button.addEventListener('click', () => {
        removeButtons();
        addRpsButtons();
        playerPoints = 0;
        computerPoints = 0;
        showScore();
        return;
    });
    buttons.appendChild(button);
}

function addRpsButtons() {
    const buttons = document.querySelector('.buttons');
    const rock = document.createElement('button');
    rock.classList.add('button');
    rock.setAttribute('id', 'rock');
    rock.textContent = 'Rock';
    const paper = document.createElement('button');
    paper.classList.add('button');
    paper.setAttribute('id', 'paper');
    paper.textContent = 'Paper';
    const scissors = document.createElement('button');
    scissors.classList.add('button');
    scissors.setAttribute('id', 'scissors');
    scissors.textContent = 'Scissors';
    buttons.appendChild(rock);
    buttons.append(paper);
    buttons.append(scissors);
    clickButton();
}

function showScore() {
    const div = document.querySelector('.score');
    div.innerHTML = `<p> Score: Player - ${playerPoints} : Computer - ${computerPoints}</p>`;
}

function showResult(string) {
    const div = document.querySelector('.result');
    div.innerHTML = `<p> ${string} </p>`;
}

function showFinalResult() {
    const div = document.querySelector('.result');
    if(playerPoints == 5) {
        div.innerHTML = `<p>You won the best of 5! Wanna play again?</p>`;
        return;
    }
    if(computerPoints == 5) {
        div.innerHTML = `<p>You lost the best of 5! Wanna try again?</p>`;
        return;
    }
}