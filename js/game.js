let playerScore = 0;
let computerScore = 0;
const winningScore = 5;
function computerPlays() {
    let randomNumber = Math.floor(Math.random() * 3 + 1);
    if(randomNumber === 1) return "rock";
    else if(randomNumber=== 2) return "paper";
    else return "scissors";
}
function playRound(e) {
    if(computerScore<5 && playerScore<5){
    let playerGuess = e.target.value;
    let computerGuess = computerPlays();
    console.log("Computer: " + computerGuess);
    console.log("Player: "+ playerGuess);
    if(playerGuess===computerGuess) {
        console.log("Draw");
    }
    else if(playerGuess==="rock" && computerGuess==="scissors" || playerGuess==="paper" && computerGuess==="rock" || 
    playerGuess==="scissors" && computerGuess==="paper") {
        playerScore++;
        console.log("You won");
    }
    else {
        computerScore++;
        console.log("Computer won");
    }
    checkWinner();
}

}
const resetButton = document.getElementById("startGameButton");
resetButton.addEventListener("click",()=> {
    playerScore = 0;
    computerScore = 0;
});
const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");
rockButton.addEventListener("click", playRound);
paperButton.addEventListener("click", playRound);
scissorsButton.addEventListener("click", playRound);
function checkWinner() {
    if(computerScore==winningScore) {
    console.log("Computer won the game");
}
else if (playerScore==winningScore) {
    console.log("Player won the game");
}
}