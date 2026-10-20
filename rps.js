function gethumanchoice(){
    let humaninput= " ";
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
    const body0= document.querySelector('body')
    const btn1 = document.createElement('button')
    btn1.textContent= 'ROCK'
    const btn2 = document.createElement('button')
    btn2.textContent= 'PAPER'
    const btn3 = document.createElement('button')
    btn3.textContent= 'SCISSOR'

    body0.appendChild(btn1)
    body0.appendChild(btn2)
    body0.appendChild(btn3)
    const display = document.createElement('div')
    body0.appendChild(display)
function playGame(){
    
    
    let computerScore= 0;
    let humanScore = 0;
    let gameover= false
        const scorehum = document.createElement('p')
        const scorecomp=document.createElement('p')
    function playRound(humanChoice,computerChoice){
        
        const human= document.createElement('p')
        human.textContent= `The human choice is : ${humanChoice}`
        const comp = document.createElement('p')
        comp.textContent= `The  computer choice is: ${computerChoice}`
        display.appendChild(human)
        display.appendChild(comp)
        const tie = document.createElement('p')
        const winhum= document.createElement('p')
        const wincomp= document.createElement('p')

    if (humanChoice===computerChoice){
        tie.textContent= "It's a Tie";
        display.appendChild(tie)
        
    }else if(humanChoice==="PAPER" && computerChoice ==="ROCK"||
        humanChoice==="ROCK" && computerChoice ==="SCISSOR"||
        humanChoice==="SCISSOR" && computerChoice ==="PAPER"
    ){
        winhum.textContent="It's a human win";
        display.appendChild(winhum)
        humanScore++;
    }else if(computerChoice==="PAPER" && humanChoice ==="ROCK"||
        computerChoice==="ROCK" && humanChoice ==="SCISSOR"||
        computerChoice==="SCISSOR" && humanChoice==="PAPER"
    ){
        wincomp.textContent="The computer win";
        display.appendChild(wincomp)
        computerScore++;
    }
        if (humanScore ===5 || computerScore ===5){
        scorehum.textContent=`The human score is: ${humanScore}`
        display.appendChild(scorehum)
        scorecomp.textContent=`The computer score is: ${computerScore}`
        scorecomp.style.color='blue'
        display.appendChild(scorecomp)
    }
    if (gameover){
        return;
    }

}


    btn1.addEventListener('click',()=>{
        playRound('ROCK',getcomputerChoice());
        ;
    })
    btn2.addEventListener('click',()=>{
        playRound('PAPER',getcomputerChoice());
    })
    btn3.addEventListener('click',()=>{
        playRound('SCISSOR',getcomputerChoice());
    })

}
playGame()