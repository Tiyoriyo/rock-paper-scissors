const moves = ['Rock', 'Paper', 'Scissors'];

function computerPlay() {
    let random = Math.floor(Math.random() * moves.length);
    return moves[random];
}

function playRound(playerSelection, computerSelection) {
    computerSelection = computerPlay();
    playerSelection = prompt('Rock, paper, or scissors?', '');

    let playerSelectionLC = playerSelection.toLowerCase();
    let playerSelectionFinal = playerSelectionLC.charAt(0).toUpperCase() + playerSelectionLC.slice(1);
   
    if (moves.indexOf(playerSelectionFinal) < 0) {
        alert('You can only input \'Rock\', \'Paper\' or \'Scissors\'.');
        return playRound();
    } 
    
    if (playerSelectionFinal == 'Rock' && computerSelection == 'Scissors') {
        return 'You win! Rock beats scissors.';
    } else if (playerSelectionFinal == 'Paper' && computerSelection == 'Rock') {
        return 'You win! Paper beats rock.';
    } else if (playerSelectionFinal == 'Scissors' && computerSelection == 'Paper') {
        return 'You win! Scissors beats paper.';
    } else if (playerSelectionFinal == computerSelection) {
        return 'Tie!';
    } else if (playerSelection == null) {
        return 'No moves were made';
    } else {
        return `You lose! ${computerSelection} beats ${playerSelectionFinal}`;
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
        if (playRound() == 'You win! Rock beats scissors.') {
            playerPoints = playerPoints + 1;
            console.log(playerPoints);
            console.log(computerPoints);
        } else if (playRound() == 'You win! Paper beats rock.') {
            playerPoints = playerPoints + 1;
            console.log(playerPoints);
            console.log(computerPoints);
        } else if (playRound() == 'You win! Scissors beats paper.') {
            playerPoints = playerPoints + 1;
            console.log(playerPoints);
            console.log(computerPoints);
        } else if (playRound() == 'Tie!') {
            console.log(playerPoints);
            console.log(computerPoints);
        } else {
            computerPoints = computerPoints + 1;
            console.log(playerPoints);
            console.log(computerPoints);
        }
    }
}