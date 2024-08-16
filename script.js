const choices =['rock','paper','scissors']

let userChoice=null;
let computerChoice=null;
let winner;
let gameOver=false;
let newRound=true
let userScore=5;
let computerScore=5;



//try again
// const tryAgain =document.getElementById('try-again')

//Score Renderers
const userScoreRenderer =document.getElementById('user-score')
const computerScoreRenderer =document.getElementById('computer-score')




//Choice Renderers
const computerChoiceRenderer =document.getElementById('computer-choice')
const userChoiceRenderer =document.getElementById('user-choice')

//User oves
const userRook=document.querySelector('.user-section .rock');
const userPaper=document.querySelector('.user-section .paper');
const userScissors=document.querySelector('.user-section .scissors');


// tryAgain.addEventListener('click',()=>{
//     newRound =true;
//     computerChoiceRenderer.style.display="none";
//     userChoiceRenderer.style.display="none";

// })



//Event listeners
userRook.addEventListener('click',()=>{
    // if(!newRound)return 
    userChoice='rock'
    computerChoice=getComputerChoice();
    winner=getWinner();
    renderChoices();
    modifyScore();
    // newRound=false;
})

userPaper.addEventListener('click',()=>{
    // if(!newRound)return 
    userChoice='paper'
    computerChoice=getComputerChoice();
    winner=getWinner();
    renderChoices();
    modifyScore();
    // newRound=false;
})
userScissors.addEventListener('click',()=>{
    // if(!newRound)return 
    userChoice='scissors'
    computerChoice=getComputerChoice();
    winner=getWinner();
    renderChoices();
    modifyScore();
    // newRound=false;
})



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