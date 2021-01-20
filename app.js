
let playerScore = 0;
let computerScore = 0;

let choices = ["Rock", "Paper", "Scissors"];

function computerPlay (){

    let choise = choices[Math.floor(Math.random() * choices.length)];
    return choise;
}

  



function playRound (playerSelect, computerSelect) {

    let computerSelection = computerPlay();
    let playerSelection = prompt("Choose one : Rock-Paper-Scissors",'').toLowerCase();  

    if(playerSelection === "Rock".toLowerCase()){
        if(computerSelection === "Scissors"){
            ++playerScore
           return "You win! Rock beats scissors" ;
        }
        else if(computerSelection === "Paper"){
            ++computerScore
           return "You lose! Paper beats Rock" ;
        }
        else {
            return "TIE!"
        }
    }else if(playerSelection === "Paper".toLowerCase()){
        if(computerSelection === "Scissors"){
            ++computerScore
           return "You lose! Scissors beats paper"; 
        }
        else if(computerSelection === "Rock"){
            ++playerScore
           return "You win! Paper beats Rock"; 
        }
        else{
            return "Tie";
        }
    }else if(playerSelection === "Scissors".toLowerCase()){
        if(computerSelection === "Paper"){
            ++playerScore
           return "You win! Scissors beats paper" ;
        }
        else if(computerSelection === "Rock"){
            ++computerScore
           return "You lose! Rock beats scissors" 
        }
        else{
            return "Tie";
        }
    } 
}

function game(){
    console.log(playRound());
    console.log(playRound());
    console.log(playRound());
    console.log(playRound());
    console.log(playRound());

    if(playerScore > computerScore){
        return console.log("You win!!");
    }
    else if(playerScore < computerScore){
        return console.log("Skynet WIN!!!");
    }
    else{
        return console.log("It is a Draw! Try again!");
    }

}



game();
