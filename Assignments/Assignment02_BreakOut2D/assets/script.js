//Variables for canvas
const PLAYGROUND = document.getElementById("playground");
const CONTEXT = playground.getContext("2d");



let PLAYGROUND_WIDTH_ADDITION = 2;
let PLAYGROUND_HEIGHT_ADDITION = -2;

//Variables for moving ball
const BALL_RADIUS = 8;
let BALL_X = PLAYGROUND.width / 2;
let PLAYGROUND_HEIGHT = PLAYGROUND.height - 25;

//Variables for paddle
const PADDLE_HEIGHT = 8;
const PADDLE_WIDTH = 60;

let PADDLE_START_X = (PLAYGROUND.width - PADDLE_WIDTH) / 2;

//Variables for winning & losing mechanics
let interval = 0;

//Variables for bricks in the upper half
const BRICKS_ROWS_AMOUNT = 3;
const BRICKS_COLUMNS_AMOUNT = 4; 
const BRICK_WIDTH = 55;
const BRICK_HEIGHT = 12;
const BRICK_PADDING = 10;
const BRICK_OFFSET_TOP = 15;
const BRICK_OFFSET_LEFT = 25;


//Drawing the moving ball
function drawBall() {
    CONTEXT.beginPath();
    CONTEXT.arc(PLAYGROUND_WIDTH, PLAYGROUND_HEIGHT, BALL_RADIUS, 0, 2 * Math.PI);
    CONTEXT.fillStyle = "black";
    CONTEXT.fill();
    CONTEXT.closePath();
}

//Bricks creation & positioning  
const BRICKS = [];

for (let c = 0; c < BRICKS_COLUMNS_AMOUNT; c++) {
    BRICKS[c] = [];
    for (let r = 0; r < BRICKS_ROWS_AMOUNT; r++) {
        BRICKS[c][r] = {x: 0, y: 0}
    }
}

function drawBricks() {
    for (let c = 0; c < BRICKS_COLUMNS_AMOUNT; c++) {
        for (let r = 0; r < BRICKS_ROWS_AMOUNT; r++) {
            
            const BRICK_X_POSITION = c * (BRICK_WIDTH + BRICK_PADDING) + BRICK_OFFSET_LEFT;
            const BRICK_Y_POSITION = r *(BRICK_HEIGHT + BRICK_PADDING) + BRICK_OFFSET_TOP;
            BRICKS[c][r].x = BRICK_X_POSITION;
            BRICKS[c][r].y = BRICK_Y_POSITION;
            CONTEXT.beginPath();
            CONTEXT.rect(BRICK_X_POSITION, BRICK_Y_POSITION, BRICK_WIDTH, BRICK_HEIGHT); 
            CONTEXT.fillStyle = "lightgrey";
            CONTEXT.fill();
            CONTEXT.closePath();
        }
    }
}

//Collision detection for bricks 
function bricksCollisionDetection() {
    for (let c = 0; c < BRICKS_COLUMNS_AMOUNT; c++) {
        for (let r = 0; r < BRICKS_ROWS_AMOUNT; r++) {
            const b = BRICKS[c][r];
            // calculations
            if (x > b.x && xPLAYGROUND_WIDTH < b.x + BRICK_WIDTH && PLAYGROUND_HEIGHT > b.y && PLAYGROUND_HEIGHT < b.y + BRICK_HEIGHT) {
                PLAYGROUND_HEIGHT_ADDITION = -PLAYGROUND_HEIGHT_ADDITION;
            }
            
        }
    }
}


//Player's paddle
function drawPaddle() {
    CONTEXT.beginPath();
    CONTEXT.roundRect(PADDLE_START_X, PLAYGROUND.height - PADDLE_HEIGHT - 3, PADDLE_WIDTH, PADDLE_HEIGHT, 10);
    CONTEXT.fillStyle = "seagreen";
    CONTEXT.fill();
    CONTEXT.closePath();
}

//Player controls
let pressedRight = false; 
let pressedLeft = false; 

//Drawing elements  
function draw() {
    CONTEXT.clearRect(0, 0, PLAYGROUND.width , PLAYGROUND.height);
    drawBall();
    drawBricks();
    if (PLAYGROUND_HEIGHT + PLAYGROUND_HEIGHT_ADDITION < BALL_RADIUS) {
        PLAYGROUND_HEIGHT_ADDITION = -PLAYGROUND_HEIGHT_ADDITION;
    } else if (PLAYGROUND_HEIGHT + PLAYGROUND_HEIGHT_ADDITION > PLAYGROUND.height - BALL_RADIUS) {
        if (PLAYGROUND_WIDTH > PADDLE_START_X && PLAYGROUND_WIDTH < PADDLE_START_X + PADDLE_WIDTH) {
            PLAYGROUND_HEIGHT_ADDITION = -PLAYGROUND_HEIGHT_ADDITION;
        } else {
            alert("GAME OVER");
            document.location.reload();
            clearInterval(interval);
    }
}

    if (PLAYGROUND_WIDTH + PLAYGROUND_WIDTH_ADDITION < 0 || PLAYGROUND_WIDTH +  PLAYGROUND_WIDTH_ADDITION > PLAYGROUND.width) {
        PLAYGROUND_WIDTH_ADDITION = -PLAYGROUND_WIDTH_ADDITION;
    }

    PLAYGROUND_WIDTH += PLAYGROUND_WIDTH_ADDITION;
    PLAYGROUND_HEIGHT += PLAYGROUND_HEIGHT_ADDITION;

    drawPaddle();
    if (pressedRight) {
        PADDLE_START_X = Math.min(PADDLE_START_X + 8, PLAYGROUND.width - PADDLE_WIDTH);
    } else if (pressedLeft) {
        PADDLE_START_X = Math.max(PADDLE_START_X - 8, 0);
    }    
    bricksCollisionDetection();
}

//Starting the game
function startGame() {
    interval = setInterval(draw, 10);
}

const START_BUTTON = document.getElementById("start-game-btn");

START_BUTTON.addEventListener("click", () => {
    document.addEventListener("keydown", keyDownHandler);
    document.addEventListener("keyup", keyUpHandler);
    startGame();
    START_BUTTON.disabled = true;
})

//Keyboard control functions
function keyDownHandler(e) {
    if (e.key === "Right" || e.key === "ArrowRight") {
        pressedRight = true; 
    } else if (e.key === "Left" || e.key === "ArrowLeft") {
        pressedLeft = true; 
    }
}

function keyUpHandler(e) {
  if (e.key === "Right" || e.key === "ArrowRight") {
    pressedRight = false;
  } else if (e.key === "Left" || e.key === "ArrowLeft") {
    pressedLeft = false;
  }
}

