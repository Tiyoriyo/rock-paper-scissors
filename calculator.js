const moves = ['Rock', 'Paper', 'Scissors'];

const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');

const buttons = document.querySelectorAll('.picture');

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

rock.style.cursor = 'pointer';
paper.style.cursor = 'pointer';
scissors.style.cursor = 'pointer';

function computerPlay() {
    let num = Math.floor(Math.random() * 3);
    return moves[num];
}

function playRound(playerSelection, computerSelection) {
    computerSelection = computerPlay();
    computerSelectionString = computerSelection.toString();
    
    if (playerSelection == 'Rock' && computerSelection == 'Scissors') {
        console.log('You win! Rock beats scissors.');
        return 'You win! Rock beats scissors.';
    } else if (playerSelection == 'Paper' && computerSelection == 'Rock') {
        console.log('You win! Paper beats rock.');
        return 'You win! Paper beats rock.';
    } else if (playerSelection == 'Scissors' && computerSelection == 'Paper') {
        console.log('You win! Scissors beat paper.');
        return 'You win! Scissors beat paper.';
    } else if (playerSelection == computerSelection) {
        console.log('Tie!');
        return 'Tie!';
    } else {
        console.log(`You lose! ${computerSelection} beats ${playerSelection}`)
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    }
}

function game() {
    const winRoundCount = parseInt(prompt('How many rounds are needed to win the game?', ''));
    let playerCount = 0;
    let computerCount = 0;


    if (isNaN(winRoundCount) == true) {
        alert('You need to type in a number');
        return game();
    } else {
        while (playerCount != winRoundCount && computerCount != winRoundCount) {
            switch (playRound()) {
                case 'You win! Rock beats scissors.': 
                    {
                        console.log('You win! Rock beats scissors');
                        ++playerCount;
                        console.log(playerCount);
                        console.log(computerCount);
                        break;
                    }
                case 'You win! Paper beats rock.':
                    {
                        console.log('You win! Paper beats rock');
                        ++playerCount;
                        console.log(playerCount);
                        console.log(computerCount);
                        break;
                    }
                case 'You win! Scissors beat paper.':
                    {
                        console.log('You win! Scissors beat paper');
                        ++playerCount;
                        console.log(playerCount);
                        console.log(computerCount);
                        break;
                    }
                case 'Tie!':
                        console.log('Tie!');
                        break;
                default:
                    {
                        console.log(`You lose! ${computerSelectionString} beats ${playerSelectionFinal}`);
                        ++computerCount;
                        console.log(playerCount);
                        console.log(computerCount);
                    }    
            }

            if (playerCount == winRoundCount) {
                return 'Congratulations, you have won the game!';
            }

            if (computerCount == winRoundCount) {
                return 'Sorry, you lost..';
            }
        }
    }
}