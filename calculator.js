const moves = ['rock', 'paper', 'scissors'];

const instruction = document.querySelector('#instruction');

const playMove = document.querySelectorAll('.picture')
const ROCK = document.getElementById('rock');
const PAPER = document.getElementById('paper');
const SCISSORS = document.getElementById('scissors');

const playerCountHTML = document.querySelector('#p-count');
const computerCountHTML = document.querySelector('#c-count');
const replayContainer = document.querySelector('#play-again');


let playerCount = 0;
let computerCount = 0;
let winCount = 5;

playerCountHTML.textContent = playerCount;
computerCountHTML.textContent = computerCount;

let playHandler = function(e) {
    if (e.target.id == 'rock') {
        playRound('rock');
    } else if (e.target.id == 'paper') {
        playRound('paper');
    } else if (e.target.id == 'scissors') {
        playRound('scissors')
    }
}

playMove.forEach(playMove => {
    playMove.addEventListener('click', playHandler);
});

function computerPlay() {
    let index = Math.floor(Math.random() * 3);
    return moves[index];
}

function updateScore() {
    playerCountHTML.textContent = playerCount;
    computerCountHTML.textContent = computerCount;
}

function createReplayButton() {
    if(playerCount == winCount || computerCount == winCount) {
        const button = document.createElement('button');
        button.textContent = 'Play Again';
        button.setAttribute('id', 'pButton');
        replayContainer.appendChild(button);
    }
}

function playRound(playerSelection, computerSelection) {
    computerSelection = computerPlay();
    
    if (playerSelection == 'rock' && computerSelection == 'scissors') {
        instruction.textContent = 'You win the round, rock beats scissors';
        playerCount++;
        updateScore();
        createReplayButton();

    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        instruction.textContent = 'You win the round, paper beats rock';
        playerCount++;
        updateScore();
        createReplayButton();

    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        instruction.textContent = 'You win the round, scissors beats paper';
        playerCount++;
        updateScore();
        createReplayButton();

    } else if (playerSelection == computerSelection) {
        instruction.textContent = 'It\'s a tie!';
        updateScore();

    } else {
        instruction.textContent = `You lost the round, ${computerSelection} beats ${playerSelection}`;
        computerCount++;
        updateScore();
        createReplayButton();
    }
}





