const moves = ['Rock', 'Paper', 'Scissors'];


function computerPlay() {
    let random = Math.floor(Math.random() * moves.length);
    return moves[random];
}

function playRound(playerSelection, computerSelection) {
    computerSelection = computerPlay();
}