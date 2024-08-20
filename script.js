const choices =['rock','paper','scissors']

let userChoice=null;
let computerChoice=null;
let winner=null;
let userScore=3;
let computerScore=3;



//start game button
const startGame = document.querySelector('.roles button');
//play again button
const playAgain = document.querySelector('.winner button');


//Score Renderers
const userScoreRenderer =document.getElementById('user-score')
const computerScoreRenderer =document.getElementById('computer-score')




//Choice Renderers
const computerChoiceRenderer =document.getElementById('computer-choice')
const userChoiceRenderer =document.getElementById('user-choice')

//User Moves
const userRook=document.querySelector('.user-section .rock');
const userPaper=document.querySelector('.user-section .paper');
const userScissors=document.querySelector('.user-section .scissors');






//Event listeners
startGame.addEventListener('click',()=>{
    //remove roles and display game
    document.querySelector('.roles').style.display="none";
    document.querySelector('.container').style.display="flex";
})

playAgain.addEventListener('click',()=>{
    reset();
    document.querySelector('.winner').style.display="none";
    document.querySelector('.container').style.display="flex";
});




userRook.addEventListener('click',()=>{
     
    userChoice='rock'
    computerChoice=getComputerChoice();
    winner=getWinner();
    renderChoices();
    modifyScore();
    checkGameOver();
    
})

userPaper.addEventListener('click',()=>{
  
    userChoice='paper'
    computerChoice=getComputerChoice();
    winner=getWinner();
    renderChoices();
    modifyScore();
    checkGameOver();
    
})
userScissors.addEventListener('click',()=>{
   
    userChoice='scissors'
    computerChoice=getComputerChoice();
    winner=getWinner();
    renderChoices();
    modifyScore();
    checkGameOver();
    
})

//Game logic

function modifyScore(){
    if(winner==='user'){
        userScore++;
        computerScore--;
    }
    else if(winner==='computer'){
        userScore--;
        computerScore++;
    }
    setScore();
}

function renderUserChoice(){
    
    userChoiceRenderer.src="./assets/images/"+userChoice+".jpg"
    userChoiceRenderer.style.display="block"

}
function renderComputerChoice(){
    computerChoiceRenderer.src="./assets/images/"+computerChoice+".jpg"
    computerChoiceRenderer.style.display="block"
}

function renderChoices(){
    renderUserChoice()
    renderComputerChoice()
}

function setScore(){
    setUserScore();
    setComputerScore();
}




function setUserScore(){
    let score='';
    for(let i=0;i<userScore;i++){
        score+='⭐'
    }
    userScoreRenderer.textContent=score;
}
function setComputerScore(){
    let score='';
    for(let i=0;i<computerScore;i++){
        score+='⭐'
    }
    computerScoreRenderer.textContent=score;
}

function reset(){
    userChoice=null;
    computerChoice=null;
    winner=null;
    userScore=3;
    computerScore=3;
    setScore();
    userChoiceRenderer.style.display='none'
    computerChoiceRenderer.style.display='none'
}




function getComputerChoice(){
    return choices[Math.floor(Math.random()*3)]
   
}


function getWinner(){
    if(userChoice==='rock'){
        if(computerChoice==='paper'){
            return 'computer';
        }
        else if(computerChoice==='scissors'){
            return 'user'
        }
        else return 'tie'
    }
    else if(userChoice==='paper'){
        if(computerChoice==='scissors'){
            return 'computer'
        }
        else if(computerChoice==='rock'){
            return 'user'
        }
        else return 'tie'
    }
    else if(userChoice==='scissors'){
        if(computerChoice==='paper'){
            return 'user';
        }
        else if(computerChoice==='rock'){
            return 'computer'
        }
        else return 'tie'
    }
    
}
function checkGameOver(){
    if(userScore===0 || computerScore===0){
        gameOver = true;
        //remove game and display Winner
        document.querySelector('.container').style.display='none'
        const winnerMessage=document.querySelector('.winner h2');
        winnerMessage.textContent = "The Winner is : the " +winner;
        document.querySelector('.winner').style.display='flex'; 
    }
}