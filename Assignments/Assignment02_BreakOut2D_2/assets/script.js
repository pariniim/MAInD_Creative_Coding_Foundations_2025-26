//Canvas variables
const CANVAS = document.getElementById("playground");
const CONTEXT = CANVAS.getContext("2d");

let x = CANVAS.width / 2;
let y = CANVAS.height - 30;

//Ball radius
const BALL_RADIUS = 10; 

//Ball movement variables
let dx = 3;
let dy = -3;

//Paddle variables
const PADDLE_HEIGHT = 15;
const PADDLE_WIDTH = Math.floor(Math.random() * 150);

if (PADDLE_WIDTH < 50) {
    PADDLE_WIDTH = 50;
} 

let PADDLE_START_X = (CANVAS.width - PADDLE_WIDTH) / 2;

//Variables for buttons
let BTN_PRESSED_RIGHT = false;
let BTN_PRESSED_LEFT = false;

//Interval variable
let interval = 0;

//Bricks variables
const BRICK_ROW_COUNT = 3;
const BRICK_COL_COUNT = 5;
const BRICK_WIDTH = 75;
const BRICK_HEIGHT = 20;
const BRICK_PADDING = 10;
const BRICK_OFFSET_TOP = 30;
const BRICK_OFFSET_LEFT = 30;

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

//Function for drawing the bricks
function drawBricks() {
  for (let c = 0; c < BRICK_COL_COUNT; c++) {
    for (let r = 0; r < BRICK_ROW_COUNT; r++) {
      if (BRICKS[c][r].status === 1) {
        const BRICK_POS_X = c * (BRICK_WIDTH + BRICK_PADDING) + BRICK_OFFSET_LEFT;
        const BRICK_POS_Y = r * (BRICK_HEIGHT + BRICK_PADDING) + BRICK_OFFSET_TOP;
        BRICKS[c][r].x = BRICK_POS_X ;
        BRICKS[c][r].y = BRICK_POS_Y;
        CONTEXT.beginPath();
        CONTEXT.rect(BRICK_POS_X, BRICK_POS_Y, BRICK_WIDTH, BRICK_HEIGHT);
        CONTEXT.fillStyle = "#A3D8FF";
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
    CONTEXT.fillText(`Score: ${PLAYER_SCORE}`, 8, 20);
}

function createLives() {
    CONTEXT.font = "16px Arial";
    CONTEXT.fillStyle = "#282828ff";
    CONTEXT.fillText(`Lives: ${PLAYER_LIVES}`, CANVAS.width - 65, 20);
}

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
                    alert("YOU WIN, CONGRATULATIONS!");
                    document.location.reload();
                    clearInterval(interval); // For Chrome browsers
                }
            }
        }
        }
    }
}


function drawBall() {
    //Drawing the ball
    CONTEXT.beginPath();
    CONTEXT.arc(x, y, BALL_RADIUS, 0, Math.PI * 2);
    CONTEXT.fillStyle = "#FF76CE";
    CONTEXT.fill();
    CONTEXT.closePath();
}

function drawPaddle() {
    //Drawing the paddle
    CONTEXT.beginPath();
    CONTEXT.roundRect(PADDLE_START_X, CANVAS.height - PADDLE_HEIGHT, PADDLE_WIDTH, PADDLE_HEIGHT, 60);
    CONTEXT.fillStyle = "#94FFD8";
    CONTEXT.fill();
    CONTEXT.closePath();
}

function draw() {
    CONTEXT.clearRect(0, 0, CANVAS.width, CANVAS.height);
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
                    alert("GAME OVER");
                    document.location.reload();
                    clearInterval(interval); // for Chrome browsers
                } else {
                        x = CANVAS.width / 2;
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
}


//Button handlers
function KEY_DOWN_HANDLER(e) {
    if (e.key === "Right" || e.key === "ArrowRight") {
        BTN_PRESSED_RIGHT = true;
    } else if (e.key === "Left" || e.key === "ArrowLeft") {
        BTN_PRESSED_LEFT = true;
    }
}

function KEY_UP_HANDLER(e) {
    if (e.key === "Right" || e.key === "ArrowRight") {
        BTN_PRESSED_RIGHT = false;
    } else if (e.key === "Left" || e.key === "ArrowLeft") {
        BTN_PRESSED_LEFT = false;
    }
}

//Function for starting the game
function startGame() {
    document.addEventListener("keydown", KEY_DOWN_HANDLER);
    document.addEventListener("keyup", KEY_UP_HANDLER);
    interval = setInterval(draw, 10);
}

//Start button
const START_BUTTON = document.getElementById("start-btn");
START_BUTTON .addEventListener("click", () => {
  startGame();
  START_BUTTON.disabled = true;
});
