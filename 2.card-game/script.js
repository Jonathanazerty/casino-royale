// value cards
const cards = [
"2", "3", "4", "5", "6", "7", "8", "9", "10",
"2", "3", "4", "5", "6", "7", "8", "9", "10",
"2", "3", "4", "5", "6", "7", "8", "9", "10",
"2", "3", "4", "5", "6", "7", "8", "9", "10",
"J", "Q", "K", "A",
"J", "Q", "K", "A",
"J", "Q", "K", "A",
"J", "Q", "K", "A"
];
const deck = new Array();

// J, Q & K = 10 -- A = 11 or 1
function createDeck(){
    deck= new Array();

    for (let i = 0 ; i < cards.length; i++)
    {
        let cardValue = parseInt(cards[i]);
        if (cards[i] == "J" || cards[i] == "Q" || cards[i] == "K")
        cardValue = 10;

        if (cards[i] == "A")
        cardValue = 11;
    }
}

// draw a random card for user and house



function drawRandomCard(cards){
    let randomIndex = Math.floor(Math.random() * cards.length);
    return cards[randomIndex];
};
console.log(drawRandomCard(cards));

// start game
let drawYou = drawRandomCard(cards);
let drawHouse = drawRandomCard(cards);



// Hit me
function hit(){


}
console.log("Hit me");

// Stop and calculate winner
function stop(){
    
}
console.log("stop");

// score card

// New set of cards - restart (deal)