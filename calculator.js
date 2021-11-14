const moves = ['Rock', 'Paper', 'Scissors'];

let playerCount = 0;
let computerCount = 0;

let result = '';

const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const buttons = document.querySelectorAll('.picture');
const playerCountP = document.querySelector('#p-count');
const computerCountC = document.querySelector('#c-count')

playerCountP.textContent = playerCount;
computerCountC.textContent = computerCount;

rock.style.cursor = 'pointer';
paper.style.cursor = 'pointer';
scissors.style.cursor = 'pointer';

buttons.forEach((buttons) => {
    buttons.addEventListener('click', (e) => {
        if (e.target.id=="rock") {
            playRound('Rock');
        } else if (e.target.id=='paper') {
            playRound('Paper');
        } else if (e.target.id=='scissors') {
            playRound('Scissors');
        }
    });
});

function computerPlay() {
    let num = Math.floor(Math.random() * 3);
    return moves[num];
}


function playRound(playerSelection, computerSelection) {
    const instruction = document.querySelector('.instruction');
    computerSelection = computerPlay();
    computerSelectionString = computerSelection.toString();


    if (playerSelection == 'Rock' && computerSelection == 'Scissors') {
        instruction.textContent = 'You win! Rock beats scissors.';
        playerCount++;
        playerCountP.textContent = playerCount;
        computerCountC.textContent = computerCount;

        return;

    } else if (playerSelection == 'Paper' && computerSelection == 'Rock') {
        instruction.textContent = 'You win! Paper beats rock.';
        playerCount++;
        playerCountP.textContent = playerCount;
        computerCountC.textContent = computerCount;

        return;

    } else if (playerSelection == 'Scissors' && computerSelection == 'Paper') {
        instruction.textContent = 'You win! Scissors beat paper.';
        playerCount++;
        playerCountP.textContent = playerCount;
        computerCountC.textContent = computerCount;
        return;

    } else if (playerSelection == computerSelection) {
        instruction.textContent = 'Tie!';
        return;

    } else {
        instruction.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
        computerCount++;
        playerCountP.textContent = playerCount;
        computerCountC.textContent = computerCount;
        return;
    }

    playerCountP.textContent = playerCount;
    computerCountC.textContent = computerCount;

}



/*
Buttons call playRound function and return win/loss/tie 


*/