function playRound () {
    let numberOfRounds = prompt("Enter how many rounds you want to play");
    for(let i = 0;i<numberOfRounds;i++) {
    console.log(computerPlays());
    }
}

function computerPlays() {
    let randomNumber = Math.floor(Math.random() * 3 + 1);
    if(randomNumber === 1) return "rock";
    else if(randomNumber=== 2) return "paper";
    else return "scissors";
}
const startButton = document.getElementById("startGameButton");
startButton.addEventListener("click", playRound);
