const moves = ['Rock', 'Paper', 'Scissors'];

function computerPlay() {
    let num = Math.floor(Math.random() * 3);
    return moves[num];
}

function playRound(playerSelection, computerSelection) {
    computerSelection = computerPlay();
    computerSelectionString = computerSelection.toString();
    playerSelection = prompt('Rock, paper, scissors?', '');

    if (playerSelection == null) {
        alert('you have to pick \'Rock\', \'Paper\' or \'Scissors\'');
        return playRound();
    }

    playerSelectionLC = playerSelection.toLowerCase();
    playerSelectionFinal = playerSelectionLC.charAt(0).toUpperCase() + playerSelectionLC.slice(1);
    

    if (moves.indexOf(playerSelectionFinal) < 0) {
        alert('You have to pick \'Rock\', \'Paper\' or \'Scissors\'');
        return playRound();
    }

    if (playerSelectionFinal == 'Rock' && computerSelection == 'Scissors') {
        return 'You win! Rock beats scissors.';
    } else if (playerSelectionFinal == 'Paper' && computerSelection == 'Rock') {
        return 'You win! Paper beats rock.';
    } else if (playerSelectionFinal == 'Scissors' && computerSelection == 'Paper') {
        return 'You win! Scissors beat paper.';
    } else if (playerSelectionFinal == computerSelection) {
        return 'Tie!';
    } else {
        return `You lose! ${computerSelection} beats ${playerSelectionFinal}`;
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