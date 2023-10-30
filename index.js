let score = 0;
let comScore = 0;

function getComputerChoice() {
    const choices = ['Rock','Paper','Scissors'];

    return choices[Math.floor(Math.random()*(3 - 0) + 0)];
}

function playRound(playerSelection,computerSelection) {
    if(playerSelection === computerSelection){
        print('Tie');
    }else if(playerSelection === 'Rock' && computerSelection === 'Scissors' || 
    playerSelection === 'Paper' && computerSelection === 'Rock' ||
    playerSelection === 'Scissors' && computerSelection === 'Paper'){
        print('Win');
    }else if(computerSelection === 'Rock' && playerSelection === 'Scissors'||
    computerSelection === 'Paper' && playerSelection === 'Rock'||
    computerSelection === 'Scissors' && playerSelection === 'Paper') {
        print('Lose');
    }
}

function print(val, winner){
    const line = document.querySelector('.line');
    const scoreCount = document.querySelector('.scorecardcount');
    const comScoreCount = document.querySelector('.comscorecard');
    
    
    if(val === 'Tie'){
        line.textContent = 'Tie game try again!';
        getWinner(score,comScore);
    }else if(val === 'Win'){
        line.textContent = 'You won lets go!';
        score++;
        scoreCount.textContent = `Score: ${score}`;
        getWinner(score,comScore);
    }else if(val === 'Lose'){
        line.textContent = 'You lost try again!';
        comScore++;
        comScoreCount.textContent = `ComputerScore: ${comScore}`;
        getWinner(score,comScore);
    }else if(val === 'Winner' && winner === 'Player') {
        score = 0;
        comScore = 0;
        line.textContent = 'You won three rounds first you are the Champion!';
        scoreCount.textContent = `Score: ${score}`;
        comScoreCount.textContent = `ComputerScore: ${comScore}`;
    }else if(val === 'Winner' && winner === 'Computer'){
        score = 0;
        comScore = 0;
        line.textContent = 'You lost three rounds first you are the loser!';
        scoreCount.textContent = `Score: ${score}`;
        comScoreCount.textContent = `ComputerScore: ${comScore}`;
    }
}

function getWinner(playerScore,computerScore){
    if(playerScore === 3){ 
        print('Winner','Player');
    }else if(computerScore === 3){
        print('Winner','Computer');
    }
}

(function getPlayerChoice(){
    const rock = document.querySelector('.rock');
    const paper = document.querySelector('.paper');
    const scissors = document.querySelector('.scissors');

    rock.addEventListener('click',() => {
        playRound('Rock',getComputerChoice());
    })

    paper.addEventListener('click',() => {
        playRound('Paper',getComputerChoice());
    })

    scissors.addEventListener('click',() => {
        playRound('Scissors',getComputerChoice());
    })
})();

