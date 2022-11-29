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
let rand = Math.floor(Math.random() * 3) + 1;

let select = "";


const rock = document.querySelector('#rock');
rock.addEventListener('click', () => {
    select = "rock";
    game(select);


});


const paper = document.querySelector('#paper');
paper.addEventListener('click', () => {
    select = "paper";
    game(select);
});

const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => {
    select = "scissors";
    game(select);
});





function playRound(playerSelect, computerSelection) {

    
    let result = "";

     if (playerSelect == "Rock".toLowerCase() && computerSelection == "Paper".toLowerCase()) {
        result = "You lose! Rock beats Paper!"; 
        compWin++;
    } else if (playerSelect == "Paper".toLowerCase() && computerSelection == "Rock".toLowerCase()) {
        result = "You win! Paper beats Rock!"; 
        playerWin++;
    } else if (playerSelect == "Paper".toLowerCase() && computerSelection == "Scissors".toLowerCase()) {
        result = "You lose! Scissors beats Paper!";
        compWin++;
    } else if (playerSelect == "Scissors".toLowerCase() && computerSelection == "Paper".toLowerCase()) {
        result = "You win! Scissors beats Paper!"; 
        playerWin++;
    } else if (playerSelect == "Rock".toLowerCase() && computerSelection == "Scissors".toLowerCase()) {
        result ="You win! Rock beats Scissors!"; 
        playerWin++;
    } else if (playerSelect == "Scissors".toLowerCase() && computerSelection == "Rock".toLowerCase()){
        result = "You lose! Rock beats Scissors!";
        compWin++;
    } else if (playerSelect == "Rock".toLowerCase() && computerSelection == "Rock".toLowerCase() ||
    (playerSelect == "Paper".toLowerCase() && computerSelection == "Paper".toLowerCase())
    || (playerSelect == "Scissors".toLowerCase() && computerSelection == "Scissors".toLowerCase())) {
        result = "It's a tie!";
    } else {
        result = "Pick one!";
    }

    return result;

}




function game(playerSelect) {

        let rand = Math.floor(Math.random() * 3) + 1;


        const choice = document.querySelector('h2');
        choice.textContent = "You chose " + playerSelect + ". Computer chose " + getComputerChoice(rand);


        const result = document.querySelector('h3');
        result.textContent = playRound(playerSelect, getComputerChoice(rand));

        const playerScore = document.querySelector('.playerScore');
        playerScore.classList.add('playerScore');
        playerScore.textContent = "Player Score: " + playerWin;

        const compScore = document.querySelector('.compScore');
        compScore.classList.add('compScore');
        compScore.textContent = "Computer Score: " + compWin;
    



        
}














