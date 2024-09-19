let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const msgCointainer = document.querySelector(".msg-cointainer");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const compChoices = ['rock', 'paper', 'scissors'];
    const randomIdx = Math.floor(Math.random() * 3);
    return compChoices[randomIdx];
}

const drawGame = () =>{
    msg.innerText = "Game was draw. Play again!"
    msgCointainer.style.background = "#081b31";
}

const showWinner = (userWin) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = "You win!"
        msgCointainer.style.background = "green";
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = "You lose."
        msgCointainer.style.background = "red";
    }
}

const playgame = (userChoice) => {
    const compChoice = genCompChoice();
    if(userChoice === compChoice) {
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        }else if(userChoice === "paper"){
            userWin = compChoice === "scissors" ? false : true;
        }else{
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin);
    }
     
}

choices.forEach((choice)=>{
    choice.addEventListener("click", ()=>{
        const userChoice = choice.getAttribute("id");
        playgame(userChoice);
    })
})