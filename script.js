/*
Global variable storing scores.
*/
let playerScore = 0;
let computerScore = 0;

/*
Global variables getting values from the index.html file.
*/
const playerButtons = document.querySelector(".playerButtons");
const results = document.querySelector(".results");
const buttons = document.querySelectorAll("button");
const bgmusic = document.querySelector(".audiobg");

/*
Functions starting when the player chooses from one of the options.
playerChoice variable stores the option player chose.
*/
let playerChoice = 0
function playerRock() {
    document.querySelector(".winnerText").style.display = "none";
    document.querySelector("#computerChoiceImage").src = "Assets/draw.gif";
    document.querySelector("#choiceImage").src = "Assets/rock.png"
    results.style.display = "flex";
    playerButtons.style.display = "none";
    playerChoice = 0;
    setTimeout(computerChoiceResult, 3000);
};
function playerPaper() {
    document.querySelector(".winnerText").style.display = "none";
    document.querySelector("#computerChoiceImage").src = "Assets/draw.gif";
    playerButtons.style.display = "none";
    results.style.display = "flex";
    document.querySelector("#choiceImage").src = "Assets/paper.png"
    playerChoice = 1;
    setTimeout(computerChoiceResult, 3000);
};
function playerScissors() {
    document.querySelector(".winnerText").style.display = "none";
    document.querySelector("#computerChoiceImage").src = "Assets/draw.gif";
    playerButtons.style.display = "none";
    results.style.display = "flex";
    document.querySelector("#choiceImage").src = "Assets/scissors.png"
    playerChoice = 2;
    setTimeout(computerChoiceResult, 3000);
};
/*
This function generates computer choice and compares it to the player.
*/
function computerChoiceResult() {
    document.querySelector(".playAgain").style.visibility = "visible";

    //Genrates computer choice here.
    let computerChoice = Math.floor(Math.random() * 2);

    //Assings a matching image to the computer choice.
    if(computerChoice === 0) {
        document.querySelector("#computerChoiceImage").src = "Assets/rock.png"
    } else if(computerChoice === 1) {
        document.querySelector("#computerChoiceImage").src = "Assets/paper.png"
    } else if(computerChoice === 2) {
        document.querySelector("#computerChoiceImage").src = "Assets/scissors.png"        
    }

    //Compares the player to the computer. Chooses the winner.
    if(playerChoice === computerChoice) {
        document.querySelector(".winnerText").style.display = "inline";
        document.querySelector(".winnerText").innerHTML = "Draw!";  
    } else if(playerChoice === 0 && computerChoice === 1) {
        document.querySelector(".winnerText").innerHTML = "You lost!"
        document.querySelector(".winnerText").style.display = "inline";
        computerScore += 1;
    }
    else if(playerChoice === 0 && computerChoice === 2) {
        document.querySelector(".winnerText").innerHTML = "You win!";
        document.querySelector(".winnerText").style.display = "inline";
        playerScore += 1;
    }
    else if(playerChoice === 1 && computerChoice === 0) {
        document.querySelector(".winnerText").innerHTML = "You win!";
        document.querySelector(".winnerText").style.display = "inline";
        playerScore += 1;
    }
    else if(playerChoice === 1 && computerChoice === 2) {
        document.querySelector(".winnerText").innerHTML = "You lose!";
        document.querySelector(".winnerText").style.display = "inline";
        computerScore += 1;
    }
    else if(playerChoice === 2 && computerChoice === 0) {
        document.querySelector(".winnerText").innerHTML = "You lose!";
        document.querySelector(".winnerText").style.display = "inline";
        computerScore += 1;
    }
    else if(playerChoice === 2 && computerChoice === 1) {
        document.querySelector(".winnerText").innerHTML = "You win!";
        document.querySelector(".winnerText").style.display = "inline";
        playerScore += 1;
    }

    //Adds scores to the leaderboard.
    document.getElementById("playerScorePanel").innerHTML = playerScore;
    document.getElementById("computerScorePanel").innerHTML = computerScore;
};

/*
Restarts the game.
*/
function restart() {
    document.querySelector(".playAgain").style.visibility = "hidden";
    let playerChoice = 0;
    results.style.display = "none";
    playerButtons.style.display = "flex"; 
};

/*
Adds button click sound.
*/
const audio = new Audio("Assets/clicksound.wav");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    audio.play();
  });
});

/*
Mutes or plays sound.
*/
function soundSettings() {
    if(bgmusic.muted === false) {
        document.querySelector(".audiobg").muted = true;
        document.querySelector(".soundImage").src = "Assets/soundoff.png";
    }else if(bgmusic.muted === true) {
        document.querySelector(".audiobg").muted = false;
        document.querySelector(".soundImage").src = "Assets/soundon.png";
    }
};

/*
Lowers the sound sound.
*/
function lowerSound() {
    bgmusic.volume = 0.4;
};
lowerSound();



