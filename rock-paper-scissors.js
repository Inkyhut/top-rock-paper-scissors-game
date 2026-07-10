
//Keeping score
const game = () => {

let playerScore = 0
let computerScore = 0

//Function to play Round
const playRound = () =>{
    const btnRock = document.querySelector('.rock');
    const btnPaper = document.querySelector('.paper');
    const btnScissors = document.querySelector('.scissors');
    const playerOptions = [btnRock, btnPaper, btnScissors];
    const computerOptions = ['rock', 'paper', 'scissors'];

    playerOptions.forEach(option =>{
        option.addEventListener('click', function(){

        const choice = Math.floor(Math.random()*3);

        const computerChoice = computerOptions[choice];

        console.log("Computer chose " + computerChoice);

        // Function to check who wins
        winner(this.innerText, computerChoice);
        
        })

    })

}

// Function to decide winner
    const winner = (player, computer) => {
        const result = document.querySelector('.result');
        const playerScoreBoard = document.querySelector('.p-count');
        const computerScoreBoard = document.querySelector('.c-count');

        const playerWins = "You won!"
        const computerWins = "Computer wins!" 

        player = player.toLowerCase();
        computer = computer.toLowerCase();
        if ( player === computer ){
            result.textContent = 'Tie'
        }

// Player wins conditions
        else if (player == 'paper' && computer == 'rock'){
            result.textContent = playerWins;
            playerScore++;
            playerScoreBoard.textContent = playerScore;
        }   else if (player == 'rock' && computer == 'scissors'){
            result.textContent = playerWins;
            playerScore++;
            playerScoreBoard.textContent = playerScore;
        } else if (player == 'scissors' && computer == 'paper'){
            result.textContent = playerWins;
            playerScore++;
            playerScoreBoard.textContent = playerScore;
        } 
        
// Computer wins conditions        
        else if (player == 'rock' && computer == 'paper'){
            result.textContent = computerWins;
            computerScore++;
            computerScoreBoard.textContent = computerScore;
        } else if (player == 'paper' && computer == 'scissors'){
            result.textContent = computerWins;
            computerScore++;
            computerScoreBoard.textContent = computerScore;
        } else if (player == 'scissors' && computer == 'rock'){
            result.textContent = computerWins;
            computerScore++;
            computerScoreBoard.textContent = computerScore;
        } 

//GameOver        
    const reloadBtn = document.querySelector('.reload');

    if(computerScore === 5 ){
        result.innerText = 'You lost the game'
        result.style.fontSize = '2rem';
        result.style.color = 'red';

    } else if(playerScore === 5){
        result.innerText = 'You won the game'
        result.style.fontSize = '2rem';
        result.style.color = 'red';

    }





    }

playRound();   
}

game();