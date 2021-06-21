(function () {

    function getRandomInt(max){
        return Math.floor( Math.random() * max) + 1;
    }

    const allPeople = 20;
    const secretNumber = getRandomInt(allPeople);

    document.getElementById("userGuessLabel").innerHTML = `Between 1 and ${allPeople}`;

    document.getElementById("run").addEventListener('click', 
    function(){
        const userGuess = document.getElementById("userGuess").value;

        if (userGuess == secretNumber) {
            document.getElementById("result").innerHTML = `Awesome! You number ${userGuess} was correct. You can be named many things, hungry not being one of them.`;
            
    
        }

        else {
            document.getElementById("result").innerHTML = `Bummer... You guessed ${userGuess} and the secret number was ${secretNumber}.`;
    
        }
   
    });

})();