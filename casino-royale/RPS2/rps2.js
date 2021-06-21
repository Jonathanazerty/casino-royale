
// TODO: make play game button and disappears when you start
document.querySelector(".btn-playGame").addEventListener("click", function(){

    let enterScreen = document.querySelector(".playGame");

    enterScreen.style.opacity = "0.9";
    setTimeout(() =>{ enterScreen.style.opacity = "0.7";}, 200);
    setTimeout(() =>{ enterScreen.style.opacity = "0.6";}, 300);
    setTimeout(() =>{ enterScreen.style.opacity = "0.5";}, 400);
    setTimeout(() =>{ enterScreen.style.opacity = "0.4";}, 500);
    setTimeout(() =>{ enterScreen.style.opacity = "0.2";}, 600);
    setTimeout(() =>{ enterScreen.style.opacity = "0.1";}, 700);
    setTimeout(() =>{ enterScreen.style.opacity = "0";}, 800);
    setTimeout(() =>{ enterScreen.remove()}, 1000);

});  

const SELECTIONS = [
    {
        name:'rock',
        emoji:'✊🏾',
    },
    {
        name:'paper',
        emoji:'✋🏾',
    },
    {
        name:'scissors',
        emoji:'✌🏾 ',
    }
];



// TODO: make randow selection for computer
function randomSelection () {
    const randomIndex = Math.floor(Math.random() * SELECTIONS.length)
    return SELECTIONS[randomIndex]
};

// TODO: make function for comparing 
let yourPick;
let computersPick; 

function playingGame(){
 
    if (yourPick === "rock" && computersPick === "paper"){
        return result = "you lose this time 🤦🏾⛔";
    }else if (yourPick === "rock" && computersPick === "scissors"){
        result = "You won this time 👏🏾🏆";
    }else if (yourPick === "paper" && computersPick === "scissors"){
        result = "you lose this time 🤦🏾⛔";
    }else if (yourPick === "paper" && computersPick === "rock"){
        result = "You won this time 👏🏾🏆";
    }else if (yourPick === "scissors" && computersPick === "rock"){
        result = "you lose this time 🤦🏾⛔";
    }else if (yourPick === "scissors" && computersPick === "paper"){
        result = "You won this time 👏🏾🏆";
    } else {
        result = "it's a draw ! 👔 👯 🤝";
    }
}; 

const computerScore = document.querySelector('[data-computer-score]');
const yourScore = document.querySelector('[data-your-score]');

//Function to display result
function displayResult(){
    setTimeout(() =>{ 
        
        let displayResult = document.querySelector("h3");
        displayResult.innerHTML = result;
    
        }, 2000);
    };

    // TODO restart game
const playAgain = document.getElementById("reset");
function restartGame(){
    selection = 0;
    computerSelection = 0;
    yourScore.innerHTML = selection;
    computerScore.innerHTML = computerSelection;

};

playAgain.addEventListener('click', restartGame);