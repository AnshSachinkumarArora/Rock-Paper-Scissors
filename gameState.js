function getComputerChoice() {
    const randNum = Math.floor(Math.random()*100) + 1;
    let compChoice = null;

    if (randNum > 66){
        compChoice = 'rock';
    }
    else if (randNum > 33){
        compChoice = 'paper';
    }
    else {
        compChoice = 'scissors';
    }

    return compChoice;
}

//function updateScore()
var pscore = 0
var cscore = 0

function gameState(player, comp) {
    const div = document.getElementById('result')
    div.textContent = ''

    const play = document.getElementById('player')
    const c = document.getElementById('computer')

    if (player == 'rock'){
        if (comp == "paper"){
            div.textContent = "You lose! Paper beats rock";
            cscore += 1
            play.textContent = pscore
            c.textContent = cscore
        }
        else if (comp == "scissors")
        {
            div.textContent = "You win! Rock beats scissors";
            pscore += 1
            play.textContent = pscore
            c.textContent = cscore
        }
        else {
            div.textContent = "The game is a tie!";
        }
    }
    else if (player == 'paper'){
        if (comp == "scissors"){
            div.textContent = "You lose! Scissors beats paper";
            cscore += 1
            play.textContent = pscore
            c.textContent = cscore
        }
        else if (comp == "rock")
        {
            div.textContent = "You win! Paper beats rock";
            pscore += 1
            play.textContent = pscore
            c.textContent = cscore
        }
        else {
            div.textContent = "The game is a tie!";
        }
    }
    else if (player == 'scissors'){
        if (comp == "rock"){
            div.textContent = "You lose! Rock beats scissors";
            cscore += 1
            play.textContent = pscore
            c.textContent = cscore
        }
        else if (comp == "paper")
        {
            div.textContent = "You win! Scissors beats paper";
            pscore += 1
            play.textContent = pscore
            c.textContent = cscore
        }
        else {
            div.textContent = "The game is a tie!";
        }
    }
}

const button = document.querySelector('button')
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');

if(button) {
    rock.addEventListener('click', () => {
        const inputVal = 'rock'
        const compSelection = getComputerChoice();
    
        gameState(inputVal, compSelection);
    })
    paper.addEventListener('click', () => {
        const inputVal = 'paper'
        const compSelection = getComputerChoice();
    
        gameState(inputVal, compSelection);
    })
    scissors.addEventListener('click', () => {
        const inputVal = 'scissors'
        const compSelection = getComputerChoice();
    
        gameState(inputVal, compSelection);
    })
}
