//Canvas variables
const CANVAS = document.getElementById("playground");
const CONTEXT = CANVAS.getContext("2d");

let x = CANVAS.width / 3.4;
let y = CANVAS.height - 30;


//Ball radius
const BALL_RADIUS = 10; 

//Ball movement variables
let dx = 3;
let dy = -3;


//Paddle variables
const PADDLE_HEIGHT = 15;
let PADDLE_WIDTH = 180;

let PADDLE_COLOR = "#94FFD8";  // default paddle color
let PADDLE_START_X = (CANVAS.width - PADDLE_WIDTH) / 2;


//Variables for buttons
let BTN_PRESSED_RIGHT = false;
let BTN_PRESSED_LEFT = false;


//Interval variable
let INTERVAL = 0;


//Bricks variables
const BRICK_ROW_COUNT = 3;
const BRICK_COL_COUNT = 5;
const BRICK_WIDTH = 75;
const BRICK_HEIGHT = 20;
const BRICK_PADDING = 10;
const BRICK_OFFSET_TOP = 30;
const BRICK_OFFSET_LEFT = 30;

let BRICK_COLOR = "#A3D8FF";   // default brick color


//Variable for level
let LEVEL = 1;
let levelWin = false;
let winTimer = 0;


//Loop for bricks creation
let BRICKS = [];

for (let c = 0; c < BRICK_COL_COUNT; c++) {
    BRICKS[c] = [];
    for (let r = 0; r < BRICK_ROW_COUNT; r++) {
        BRICKS[c][r] = { x: 0, y: 0, status: 1 };
    }
}


//Variable for player's score 
let PLAYER_SCORE = 0;


//Variable for player's lives
let PLAYER_LIVES = 5;

/////////EXPLANATION////////////////////// 
//Function for random paddle & brick colors
function fetchColors() {
    //For generating random base colors for bricks & paddle
    const RANDOM_HEX_BRICK = Math.floor(Math.random() * 16777215).toString(16);
    const RANDOM_HEX_PADDLE = Math.floor(Math.random() * 16777215).toString(16);

    const BRICK_COLOR_URL = `https://www.thecolorapi.com/scheme?hex=${RANDOM_HEX_BRICK}&mode=analogic&count=6`;
    const PADDLE_URL = `https://www.thecolorapi.com/scheme?hex=${RANDOM_HEX_PADDLE}&mode=analogic&count=6`;

    //Fetch brick color first
    return fetch(BRICK_COLOR_URL)
        .then(response => response.json())  
        .then(brickData => {
            const BRICK_INDEX = Math.floor(Math.random() * brickData.colors.length);
            BRICK_COLOR = brickData.colors[BRICK_INDEX].hex.value;

            //Then fetch paddle color
            return fetch(PADDLE_URL);
        })
        .then(response => response.json())
        .then(paddleData => {
            const PADDLE_INDEX = Math.floor(Math.random() * paddleData.colors.length);
            PADDLE_COLOR = paddleData.colors[PADDLE_INDEX].hex.value;
        })
        //If there is an error
        .catch(error => {
            console.error("Error fetching colors:", error);
        });
}

/////////EXPLANATION////////////////////// 
//Function for drawing the bricks
function drawBricks() {
  for (let c = 0; c < BRICK_COL_COUNT; c++) { //c = column index | r = row index
    for (let r = 0; r < BRICK_ROW_COUNT; r++) {
      if (BRICKS[c][r].status === 1) {
        const BRICK_POS_X = c * (BRICK_WIDTH + BRICK_PADDING) + BRICK_OFFSET_LEFT;
        const BRICK_POS_Y = r * (BRICK_HEIGHT + BRICK_PADDING) + BRICK_OFFSET_TOP;

        BRICKS[c][r].x = BRICK_POS_X ;
        BRICKS[c][r].y = BRICK_POS_Y;

        CONTEXT.beginPath();
        CONTEXT.rect(BRICK_POS_X, BRICK_POS_Y, BRICK_WIDTH, BRICK_HEIGHT);
        CONTEXT.fillStyle = BRICK_COLOR;
        CONTEXT.fill();
        CONTEXT.closePath();
      }
    }
  }
}

//Function for creating the score
function createScore() {
    CONTEXT.font = "16px Arial";
    CONTEXT.fillStyle = "#282828ff";
    CONTEXT.textAlign = "left";      
    CONTEXT.textBaseline = "top";   
    CONTEXT.fillText(`Score: ${PLAYER_SCORE}`, 12, 20);
}

//Function for creating the lives
function createLives() {
    CONTEXT.font = "16px Arial";
    CONTEXT.fillStyle = "#282828ff";
    CONTEXT.textAlign = "right";     
    CONTEXT.textBaseline = "top"    
    CONTEXT.fillText(`Lives: ${PLAYER_LIVES}`, CANVAS.width - 65, 20);
}

//Function for creating the level(s)
function createLevel() {
    CONTEXT.font = "16px Arial";
    CONTEXT.fillStyle = "#282828ff";
    CONTEXT.textAlign = "center";    
    CONTEXT.textBaseline = "top";
    CONTEXT.fillText(`Level: ${LEVEL}`, CANVAS.width / 2 - 20, 20);
}

/////////EXPLANATION////////////////////// 
//Function for bricks collision detection 
function collisionDetection() {
    for (let c = 0; c < BRICK_COL_COUNT; c++) {
        for (let r = 0; r < BRICK_ROW_COUNT; r++) {
            const b = BRICKS[c][r];
            if (b.status === 1) {
                if (x > b.x && x < b.x + BRICK_WIDTH && y > b.y && y < b.y + BRICK_HEIGHT) {
                    dy = -dy;
                    b.status = 0;
                    PLAYER_SCORE++;
                    if (PLAYER_SCORE === BRICK_ROW_COUNT * BRICK_COL_COUNT) {
                        levelWin = true;
                        winTimer = Date.now();
                    }
                }
            }
        }
    }
}

//Function for drawing the ball
function drawBall() {
    CONTEXT.beginPath();
    CONTEXT.arc(x, y, BALL_RADIUS, 0, Math.PI * 2);
    CONTEXT.fillStyle = "#E9B3FB";
    CONTEXT.fill();
    CONTEXT.closePath();
}

//Function for drawing the paddle 
function drawPaddle() {
    CONTEXT.beginPath();
    CONTEXT.roundRect(PADDLE_START_X, CANVAS.height - PADDLE_HEIGHT, PADDLE_WIDTH, PADDLE_HEIGHT, 60);
    CONTEXT.fillStyle = PADDLE_COLOR;  
    CONTEXT.fill();
    CONTEXT.closePath();
}

//Function for creating new levels 
function nextLevel() {
    LEVEL++;
    PLAYER_SCORE = 0;

    PADDLE_WIDTH = Math.max(PADDLE_WIDTH - 10, 30);

    // Reset ball position above paddle
    x = CANVAS.width / 2;
    y = CANVAS.height - 50;
    dx = 3 + LEVEL;
    dy = -3 - LEVEL;

    PADDLE_START_X = (CANVAS.width - PADDLE_WIDTH) / 2;

    // Reset bricks
    for (let c = 0; c < BRICK_COL_COUNT; c++) {
        for (let r = 0; r < BRICK_ROW_COUNT; r++) {
            BRICKS[c][r].status = 1;
        }
    }

    fetchColors(); // optional: refresh colors each level
}


//Function for drawing the "LEVEL WIN" message on the canvas
function drawLevelWin() {
    CONTEXT.clearRect(0, 0, CANVAS.width, CANVAS.height);
    CONTEXT.font = "40px Slackey";
    CONTEXT.fillStyle = "green";
    CONTEXT.textAlign = "center";
    CONTEXT.fillText(`YOU WIN LEVEL ${LEVEL}!`, CANVAS.width / 2, CANVAS.height / 2);
}


//Function for drawing the "GAME OVER" message on the canvas
function drawGameOver() {
    //Game Over text
    CONTEXT.clearRect(0, 0, CANVAS.width, CANVAS.height);
    CONTEXT.font = "60px Slackey";
    CONTEXT.fillStyle = "red";
    CONTEXT.textAlign = "center";
    CONTEXT.fillText("GAME OVER!", CANVAS.width / 2, CANVAS.height / 2);

    //Game Over sound
    const SOUND = document.getElementById("gameover-sound");
    SOUND.currentTime = 0; //Rewind to start
    SOUND.play();
}


//Main function
function draw() {
    CONTEXT.clearRect(0, 0, CANVAS.width, CANVAS.height);

    if (levelWin) {
        if (Date.now() - winTimer > 1500) {
            levelWin = false;
            nextLevel();
        } else {
            drawLevelWin();
            return; 
        }
    }

    drawBricks();
    drawBall();
    drawPaddle();
    collisionDetection();

    if (x + dx > CANVAS.width - BALL_RADIUS || x + dx < BALL_RADIUS) {
        dx = -dx;
    } 

    if (y + dy < BALL_RADIUS) {
        dy = -dy;
    } else if (y + dy > CANVAS.height - BALL_RADIUS) {
        if (x > PADDLE_START_X && x < PADDLE_START_X + PADDLE_WIDTH) {
            dy = -dy;
            } else {
                PLAYER_LIVES--;
                if (!PLAYER_LIVES) {
                    //alert("GAME OVER");
                    clearInterval(INTERVAL); //For Chrome browsers
                    drawGameOver();  
                    START_BUTTON.disabled = false;   
                    START_BUTTON.style.backgroundColor = "#6F00FF";
                } else {
                        x = CANVAS.width / 3;
                        y = CANVAS.height - 30;
                        dx = 3;
                        dy = -3;
                        PADDLE_START_X = (CANVAS.width - PADDLE_WIDTH) / 2;
                    }
            } 
    }

    if (BTN_PRESSED_RIGHT) {
        PADDLE_START_X = Math.min(PADDLE_START_X + 7, CANVAS.width - PADDLE_WIDTH);
    } else if (BTN_PRESSED_LEFT) {
        PADDLE_START_X = Math.max(PADDLE_START_X - 7, 0);
    }

    x += dx;
    y += dy;

    createScore();       
    createLives();
    createLevel();
}


//Button handlers
function keyDownHandler(e) {
    if (e.key === "Right" || e.key === "ArrowRight") {
        BTN_PRESSED_RIGHT = true;
    } else if (e.key === "Left" || e.key === "ArrowLeft") {
        BTN_PRESSED_LEFT = true;
    }
}

function keyUpHandler(e) {
    if (e.key === "Right" || e.key === "ArrowRight") {
        BTN_PRESSED_RIGHT = false;
    } else if (e.key === "Left" || e.key === "ArrowLeft") {
        BTN_PRESSED_LEFT = false;
    }
}

//Function for starting the game
function startGame() {
    PLAYER_LIVES = 5;
    LEVEL = 1; 

    // Fetch new colors before starting
    fetchColors().then(() => {
        document.addEventListener("keydown", keyDownHandler);
        document.addEventListener("keyup", keyUpHandler);

        clearInterval(INTERVAL); // make sure no old loop is running
        INTERVAL = setInterval(draw, 10);
    });
}



//Button constants
const START_BUTTON = document.getElementById("start-btn");

//Start game button
START_BUTTON.addEventListener("click", () => {
    startGame(); 
    START_BUTTON.disabled = true;   // Start button is disabled while the game is running
    START_BUTTON.style.backgroundColor = "grey";
});