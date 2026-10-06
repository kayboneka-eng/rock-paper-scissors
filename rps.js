function gethumanchoice(){
    let humaninput= prompt("Rock,paper or scissor?: ");
    return humaninput.toUpperCase();
}

function getcomputerChoice(){
    let randomvalue= Math.floor(Math.random()*10);
    if (randomvalue <= 3){
       return"ROCK";
    }else if(randomvalue <= 7){
        return "PAPER";
    }else {
        return"SCISSOR";
    }
}


function playGame(){
    
    
    let computerScore= 0;
    let humanScore = 0;

    function playRound(humanChoice,computerChoice){

    console.log(`The human choice is : ${humanChoice}`)
    console.log(`The  computer choice is: ${computerChoice}`)
    if (humanChoice===computerChoice){
        console.log("It's a Tie");
        
    }else if(humanChoice==="PAPER" && computerChoice ==="ROCK"||
        humanChoice==="ROCK" && computerChoice ==="SCISSOR"||
        humanChoice==="SCISSOR" && computerChoice ==="PAPER"
    ){
        console.log("It's a human win");
        humanScore++;
    }else if(computerChoice==="PAPER" && humanChoice ==="ROCK"||
        computerChoice==="ROCK" && humanChoice ==="SCISSOR"||
        computerChoice==="SCISSOR" && humanChoice==="PAPER"
    ){
        console.log("The computer win");
        computerScore++;
    }
}

for (let i=0;i<5;i++){
    playRound(gethumanchoice(),getcomputerChoice())
}
 console.log(`The human score is: ${humanScore}`)
  console.log(`The computer score is: ${computerScore}`)

}
playGame()