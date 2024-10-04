let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const message = document.querySelector("#message");
const userScorepara =document.querySelector("#user-score");
const compScorepara =document.querySelector("#comp-score");


const genCompChoice = () => {
 let options =["rock","paper","scissors"];
  const randInx = Math.floor(Math.random() *3);
  return options[randInx];
}

const drawgame = () =>{
    console.log("game was draw!");
    message.innerText = "Game was draw play again!"
    message.style.backgroundColor = "#081b31";
};

const showWinner =(userWin,userChoice,compChoice) =>{
    if (userWin){
        userScore++;
        userScorepara.innerText = userScore;
        message.innerText = `you win! your ${userChoice} beats ${compChoice}`;
        message.style.backgroundColor = "green";
    }
    else{
        compScore++;
        compScorepara.innerText = compScore;
        message.innerText = `you lose ${compChoice} beats ${userChoice} `;
        message.style.backgroundColor = "red";
    }
}


const playGame = (userChoice) =>{
    console.log("user Choice =" , userChoice);
    // generate computer choice
    const compChoice = genCompChoice();
    console.log("computer choice = ",compChoice);
  

    if(userChoice === compChoice){
        // draw function
        drawgame();
    }
    else {
        let userWin = true;
        if(userChoice === "rock"){
            //paper , sissors
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper") {
            // rock scissors
            userWin = compChoice === "scissors" ? false : true; 
        }
        else{
            // rock paper
           userWin = compChoice === "rock" ? false :true;
        }
         showWinner (userWin,userChoice,compChoice);
    }
    
};


choices.forEach((choice) =>{
    choice.addEventListener("click",() =>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
});
});