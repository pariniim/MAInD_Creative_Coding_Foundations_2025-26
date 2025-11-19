//const SECRET_SEQUENCE_CONTAINER = document.getElementById("secret-sequence-container");
//const START_NEW_GAME = document.getElementById("start-new-game");



//let USER_NUMBER = 0;

let SECRET_NUMBER = Number(Math.floor(Math.random() * 10));

/*
function createSecretSequence() {    
    alert(SECRET_NUMBER);  
}
*/

let SECRET_SEQUENCE = [];
let RANDOM_NUMBER = 0;

    for (i = 0; i < 5; i++) {
        RANDOM_NUMBER = Math.floor(Math.random() * 10);
        SECRET_SEQUENCE.push(RANDOM_NUMBER);
    }



function createSecretSequence() {
    alert(SECRET_SEQUENCE);
}

const CHECK_BUTTON = document.getElementById("check-player-number");

/*
function checkPlayerNumber() {
    let PLAYER_SEQUENCE = Number(document.getElementById("player-sequence").value);
    let FEEDBACK;
 
    if (PLAYER_SEQUENCE == SECRET_NUMBER) {
        FEEDBACK = "Correct";
    } else {
        FEEDBACK = "Wrong";
    }
    alert(FEEDBACK);
}
    */

function checkPlayerNumber() {
    let PLAYER_SEQUENCE = Number(document.getElementById("player-sequence").value);

    let PLAYER_GUESS = PLAYER_SEQUENCE.toString().split('').map(Number);

    alert(PLAYER_GUESS);
}
    



/*
function startNewGame() {
    for (i = 0; i<= 5; i++) {
        SECRET_SEQUENCE.push(Math.floor(Math.random() * 10));
    }
    alert(SECRET_SEQUENCE);
} */



