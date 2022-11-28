function getComputerChoice(rand) {

    if (rand == 1) {
        return "Rock".toLowerCase(); 
    } else if (rand == 2) {
        return "Paper".toLowerCase(); 
    } else if (rand == 3) {
        return "Scissors".toLowerCase();
    }

}

let computerSelection = getComputerChoice();

let compWin = 0;
let playerWin = 0;

const playerSelect = prompt();

function playRound(playerSelect, computerSelection) {
     if (playerSelect == "Rock".toLowerCase() && computerSelection == "Paper".toLowerCase()) {
        console.log("You lose! Rock beats Paper!"); 
        compWin++;
    } else if (playerSelect == "Paper".toLowerCase() && computerSelection == "Rock".toLowerCase()) {
        console.log("You win! Paper beats Rock!"); 
        playerWin++;
    } else if (playerSelect == "Paper".toLowerCase() && computerSelection == "Scissors".toLowerCase()) {
        console.log("You lose! Scissors beats Paper!");
        compWin++;
    } else if (playerSelect == "Scissors".toLowerCase() && computerSelection == "Paper".toLowerCase()) {
        console.log("You win! Scissors beats Paper!"); 
        playerWin++;
    } else if (playerSelect == "Rock".toLowerCase() && computerSelection == "Scissors".toLowerCase()) {
        console.log("You win! Rock beats Scissors!"); 
        playerWin++;
    } else if (playerSelect == "Scissors".toLowerCase() && computerSelection == "Rock".toLowerCase()){
        console.log("You lose! Rock beats Scissors!");
        compWin++;
    } else {
        console.log("It's a tie!");
    }

}




function game() {
    for (let i = 0; i < 5; i++) {
        let rand = Math.floor(Math.random() * 3) + 1;

        console.log(playerSelect + " " + getComputerChoice(rand));
        return playRound(playerSelect, getComputerChoice(rand));
       
    }   
    
}

game();









