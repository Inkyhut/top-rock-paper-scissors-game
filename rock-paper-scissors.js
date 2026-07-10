// Return one of string values "rock", "paper", "scissors" value in console 

        function getComputerChoice(){
            const choice = Math.floor(Math.random()*3);

            if(choice === 0){
                return "Rock";
            } else if (choice === 1){
                return "Paper";
            } else {
                return "Scissors";
            }

        }
        
        console.log("Computer chose " + getComputerChoice());

// Return one of string values "rock", "paper", "scissors" value in console after prompt



/*
       function getHumanChoice(){

            humanChoice = prompt("Choose Rock, Paper or Scissors");

            if(humanChoice.toLowerCase() === "rock"){
                return "Rock";
            } else if (humanChoice.toLowerCase() === "paper"){
                return "Paper";
            } else if (humanChoice.toLowerCase() === "scissors"){
                return "Scissors";
            }
        }
*/
const sect = document.querySelector('section');

const btnRock = document.createElement('button');
const btnPaper = document.createElement('button');
const btnScissors = document.createElement('button');

btnRock.textContent = 'Rock';
btnPaper.textContent = 'Paper';
btnScissors.textContent = 'Scissors';

sect.appendChild(btnRock);
sect.appendChild(btnPaper);
sect.appendChild(btnScissors);



function getHumanChoice(e){
console.log("You chose Rock")
        return "Rock";

}

btnRock.addEventListener('click', getHumanChoice);

btnPaper.addEventListener('click', (event) =>{
        event.preventDefault();
        console.log("You chose Paper")
        return "Paper";     
 });

btnScissors.addEventListener('click', (event) =>{
        event.preventDefault();
        console.log("You chose scissors")
        return "Scissors";     
 });




/* PLAY ROUND
 Define rules of Rock, Paper, Scissors
 If humanChoice = Paper and computerChoice = Rock = Human wins
 Else if humanChoice = Rock and computerChoice = Scissors = Human wins
 Else if humanChoice = Scissors computerChoice = and Paper = Human wins

 Else if computerChoice = Rock and humanChoice = Scissors = Computer wins
 Else if computerChoice = Scissors humanChoice = and Paper = Computer wins
 Else if computerChoice = Rock and humanChoice = Scissors = Computer wins

*/ 


// PLAY GAME"
// If round is over increment(++) humanScore or computerScore by 1

            let humanScore = 0
            let computerScore = 0

        function playRound(humanChoice, computerChoice){

            const humanWins = "You won!"
            const computerWins = "You lose!" 
            const ties = "Draw! Play again!"


            if(humanChoice  === "Paper" && computerChoice === "Rock"){

// Variable humanScore gets incremented ++ first when condition is met

                humanScore++;
                console.log(humanWins, `Your Score: ${humanScore}`);

            } else if (humanChoice  === "Rock" && computerChoice === "Scissors"){
                humanScore++;
                console.log(humanWins, `Your Score: ${humanScore}`);

            } else if (humanChoice  === "Scissors" && computerChoice === "Paper"){
                humanScore++;
                console.log(humanWins, `Your Score: ${humanScore}`);

            } else if (computerChoice  === "Paper" && humanChoice === "Rock"){
                computerScore++;
                console.log(computerWins, `Computer's Score: ${computerScore}`);

            } else if (computerChoice  === "Rock" && humanChoice === "Scissors"){
                computerScore++;
                console.log(computerWins, `Computer's Score: ${computerScore}`);

            } else if (computerChoice  === "Scissors" && humanChoice === "Paper"){
                computerScore++;
                console.log(computerWins, `Computer's Score: ${computerScore}`);

            } else if (computerChoice  === humanChoice){
                
                console.log(ties); 

            } else{
                console.log("ERROR");

            }

        }
           
/* CALL Play Round
  FOR Loop iteration for (initialization: score(i) = 0; condition: until both(either or) humanScore <=4 and computerScore <= 4 are met 
  (<=4 because increment starts at 1); 
  afterthought: score goes up by 1 after each loop)


for (let i = 0; humanScore <= 4 && computerScore <= 4; i++){
    
    let computerSelection = getComputerChoice();
    let humanSelection = getHumanChoice(); 

    playRound(humanSelection, computerSelection);

    }

const sect = document.querySelector('section');

const btnRock = document.createElement('button');
const btnPaper = document.createElement('button');
const btnScissors = document.createElement('button');

btnRock.textContent = 'Rock';
btnPaper.textContent = 'Paper';
btnScissors.textContent = 'Scissors';

sect.appendChild(btnRock);
sect.appendChild(btnPaper);
sect.appendChild(btnScissors);

btnRock.addEventListener('click', (event) =>{
        event.preventDefault();
        console.log("Human chose Rock")
        return "Rock";     
 });

btnPaper.addEventListener('click', (event) =>{
        event.preventDefault();
        console.log("Human chose Paper")
        return "Paper";     
 });

btnScissors.addEventListener('click', (event) =>{
        event.preventDefault();
        console.log("Human chose scissors")
        return "Scissors";     
 });

*/