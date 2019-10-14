import computerThrow from './computerThrow.js';

const game = () => {
    let pScore = 0;
    let cScore = 0;

    // const startGame = () => {
    //     const playButton = document.querySelector('.game-play-button');
    //     const match = document.querySelector('.match');

    const playMatch = () => {
        const playerChoice = document.querySelector ('input:checked');
        const playerScore = document.querySelectorAll ('.player-score');
        const computerScore = document.querySelectorAll ('.computer-score');

        const computerOptions = ['rock', 'paper', 'scissors'];
        
    };
    const updateScore = () => {
        const playerScore = document.querySelector('.player-score p');
        const computerScore = document.querySelector('.computer-score p');
        playerScore.textContent = pScore;
        computerScore.textContent = cScore; 
    };

    //grab button, asign event listen, on event click call function create computer choice, grab value of user choice, compare hands

    const button.addEventListener
    const compareHands = (playerChoice, computerChoice) => {
        const winner = document.querySelector('.winner');
        if (playerChoice === computerChoice){
            winner.textContent = 'You Tied!';
            return;
        }
        if (playerChoice === 'rock'){
            if (computerChoice === 'scissors'){
                winner.textContent = 'You Win!';
                pScore++;
                return;
            } else {
                winner.textContent = 'Computer Wins!';
                cScore++;
                return;
            }    
        }
        if (playerChoice === 'paper'){
            if (computerChoice === 'scissors'){
                winner.textContent = 'Computer Wins!';
                cScore++;
                return;
            } else {
                winner.textContent = 'You Win!';
                pScore++;
                return;
            }  
        }
        if (playerChoice === 'scissors'){
            if (computerChoice === 'rock'){
                winner.textContent = 'Computer Wins!';
                cScore++;
                return;
            } else {
                winner.textContent = 'You Win!';
                pScore++;
                return;
            }  
        }
    };
};