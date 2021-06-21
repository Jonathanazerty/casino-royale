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



// TODO: make selections of buttons
const selectionButtons = document.querySelectorAll('[data-selection]');
const finalColumn = document.querySelector('[data-final-column]');
const computerScore = document.querySelector('[data-computer-score]');
const yourScore = document.querySelector('[data-your-score]');
const playAgain = document.getElementById("reset");
// TODO: make selections of the 3 options 
const SELECTIONS = [
    {
        name:'rock',
        emoji:'✊🏾',
        beats:'scissors'
    },
    {
        name:'paper',
        emoji:'✋🏾',
        beats:'rock'
    },
    {
        name:'scissors',
        emoji:'✌🏾 ',
        beats:'paper'
    }
];
// TODO: make selections of buttons
selectionButtons.forEach(selectionButton => {
    selectionButton.addEventListener('click', e => {
        const selectionName = selectionButton.dataset.selection
        const selection = SELECTIONS.find(selection => selection.name === selectionName) // looping through selection and searching for the same name
        makeSelection(selection)

    });
});

// TODO: make randow selection for computer
function randomSelection () {
    const randomIndex = Math.floor(Math.random() * SELECTIONS.length)
    return SELECTIONS[randomIndex]
};


// TODO: make a selection
function makeSelection(selection){
    const computerSelection = randomSelection();
    const yourWinner = isWinner(selection, computerSelection);
    const computerWinner = isWinner (computerSelection, selection);


// TODO: who beats who
function isWinner(selection, opponentSelection){
    return selection.beats === opponentSelection.name

};

    // TODO: increment score
    if (yourWinner){
        incrementScore(yourScore)
        //TODO: add message
        document.getElementById("message-win-you").innerHTML = `You won this time 👏🏾🏆`;
        setTimeout(function(yourScore) {
            document.getElementById("message-win-you").style = "display:none";
            }, 2000);
            return(yourWinner);
    }
    if (computerWinner){
        incrementScore(computerScore)
        //TODO: add message
        document.getElementById("message-win-computer").innerHTML = `Computer won this time 🤦🏾⛔`;
        setTimeout(function(computerScore) {
            document.getElementById("message-win-computer").style = "display:none";
            }, 2000);
            return (computerWinner);
    }
    if (yourWinner == computerWinner){
        //TODO: add message
        document.getElementById("message-draw").innerHTML = `it's a draw ! 👔 👯 🤝`;
        setTimeout(function() {
            document.getElementById("message-draw").style = "display:none";
            }, 2000);
            return(yourWinner);
            
    }

};
// TODO: increment the score on the page
function incrementScore(score) {
    score.innerText = parseInt(score.innerText) + 1

};

// TODO restart game
function restartGame(){
    selection = 0;
    computerSelection = 0;
    yourScore.innerHTML = selection;
    computerScore.innerHTML = computerSelection;

};

playAgain.addEventListener('click', restartGame);

});  