// TODO: make selections of buttons
const selectionButtons = document.querySelectorAll('[data-selection]')
const finalColumn = document.querySelector('[data-final-column]')
const computerScore = document.querySelector('[data-computer-score]')
const yourScore = document.querySelector('[data-your-score]')
const playAgain = document.getElementById("reset")
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
]
// TODO: make selections of buttons
selectionButtons.forEach(selectionButton => {
    selectionButton.addEventListener('click', e => {
        const selectionName = selectionButton.dataset.selection
        const selection = SELECTIONS.find(selection => selection.name === selectionName) // looping through selection and searching for the same name
        makeSelection(selection)

    })
})

// TODO restart game
function restartGame(){
    selection = 0;
    computerSelection = 0;
    yourScore.innerHTML = selection;
    computerScore.innerHTML = computerSelection;

}

playAgain.addEventListener('click', restartGame);



// TODO: make a selection
function makeSelection(selection){
    const computerSelection = randomSelection()
    const yourWinner = isWinner(selection, computerSelection)
    const computerWinner = isWinner (computerSelection, selection)

    // TODO: increment score
    if (yourWinner) incrementScore(yourScore)
    if (computerWinner) incrementScore(computerScore)

}
// TODO: increment the score on the page (doesn't work anymore)
function incrementScore(score) {
    score.innerText = parseInt(score.innerText) + 1

}


// TODO: who beats who
function isWinner(selection, opponentSelection){
    return selection.beats === opponentSelection.name

}


// TODO: make randow selection for computer
function randomSelection () {
    const randomIndex = Math.floor(Math.random() * SELECTIONS.length)
    return SELECTIONS[randomIndex]
}

