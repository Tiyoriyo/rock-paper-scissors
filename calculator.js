const moves = ['Rock', 'Paper', 'Scissors'];

function computerPlay() {
    let random = Math.floor(Math.random() * moves.length);
    return moves[random];
}

function playRound(playerSelection, computerSelection) {
    computerSelection = computerPlay();
    playerSelection = prompt('Rock, paper, or scissors?', '');

    let lose = `You lose! ${playerSelection} beats ${computerSelection}`;
    let win = `You win! ${playerSelection} beats ${computerSelection}`;

    let playerSelectionLC = playerSelection.toLowerCase();
    let playerSelectionFinal = playerSelectionLC.charAt(0).toUpperCase() + playerSelectionLC.slice(1);
   

    if (moves.indexOf(playerSelectionFinal) < 0) {
        alert('You can only input \'Rock\', \'Paper\' or \'Scissors\'.');
        return playRound();
    } 
    
    if (playerSelectionFinal == 'Rock' && computerSelection == 'Scissors') {
        console.log('You win! Rock beats scissors.');
        return true;
    } else if (playerSelectionFinal == 'Paper' && computerSelection == 'Rock') {
        console.log('You win! Paper beats rock.');
        return true;
    } else if (playerSelectionFinal == 'Scissors' && computerSelection == 'Paper') {
        console.log('You win! Rock beats scissors.');
        return true;
    } else {
        console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
        return false;
        
    }
}

function game() {
    const winRoundCount = parseInt(prompt('How many rounds do you need to win the game?', ''))
    let playerPoints = 0;
    let computerPoints = 0;

    if (playerPoints == winRoundCount) {
        return 'Congratulations! You have won the game of Rock, Paper, Scissors!';
    } else if (computerPoints == winRoundCount) {
        return 'Sorry.. You lost this game against the computer.';
    }

    while (playerPoints != winRoundCount || computerPoints != winRoundCount) {
        if (playRound() == true) {
            playerPoints = playerPoints + 1;
            console.log(playerPoints);
            console.log(computerPoints);
        } else if (playRound() == true) {
            playerPoints = playerPoints + 1;
            console.log(playerPoints);
            console.log(computerPoints);
        } else if (playRound() == true) {
            playerPoints = playerPoints + 1;
            console.log(playerPoints);
            console.log(computerPoints);
        } else {
            computerPoints = computerPoints + 1;
            console.log(playerPoints);
            console.log(computerPoints);
        }
    }
}