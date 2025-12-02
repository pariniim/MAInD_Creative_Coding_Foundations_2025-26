# Assignment 02

## Brief 
Upgrade the **Assignment 02** by adding the use of data coming from an external web API. For example, fetch contents (audio, images, video, text, metadata) from online archives, AI generated contents (chatGPT API), data (weather, realtime traffic data, environmental data).

Have a look at the lesson about the API:

[https://wind-submarine-3d4.notion.site/Lesson-5-200d516637bc811aba69e13b0ffe438f?pvs=74](https://www.notion.so/Lesson-5-200d516637bc811aba69e13b0ffe438f?pvs=21)

The application **must** have those requirements:

- The webpage is responsive
- Use a web API (you choose which one best fists for your project) to load the data and display them in the webpage
- At least one multimedia file (for user feedback interactions, or content itself)
- Develop a navigation system that allows the user to navigate different sections with related content and functionalities

## Screenshots
![first screenshot](./DOCS/Screenshot%202025-11-20%20160206.png)
![second screenshot](./DOCS/Screenshot%202025-11-20%20160247.png)

## Project Description
The goal of this short game is to destroy all the blue bricks with the pink ball by letting it bounce off the paddle and walls. 

The game keeps track of the score, which increases according to how many bricks have been destroyed. 

The user can control the green paddle using the left and right arrow keys to move the paddle to the left and to the right, respectively. 

Each time the ball touches the floor, the player loses one life. Once the lives are depleted, the game is over. 

## Block Diagram
![block diagram](./DOCS/Brick_destroyer_flowchart.jpg)

## List of Functions
//Function for drawing the ball
function drawBall() 

//Function for paddle drawing
function drawPaddle() 

//Function for drawing the bricks
function drawBricks()

//Function for creating the score
function createScore() 

//Function for creating the lives
function createLives() 

//Function for bricks collision detection 
function collisionDetection() 

//Main function
function draw() 

//Button handlers
function keyDownHandler(e) 
function keyUpHandler(e) 

//Function for starting the game
function startGame()     


### Function #01 - drawBall()
#### Expected Parameters
None.
#### Expression Logic (What it does)
Draws the ball on the canvas. 

### Function #02 - drawPaddle() 
None.
#### Expression Logic (What it does)
Draws the paddle on the canvas. 

### Function #03 - drawBricks()
None.
#### Expression Logic (What it does)
Draws a series of bricks on the canvas based on loops. 

### Function #04 - createScore() 
#### Expected Parameters
None.
#### Expression Logic (What it does)
Keeps track of the score and prints it on the top part of the game area (right hand side).
#### Return Values (What values it returns, if any)
Returns the status of theh player's score.

### Function #05 - createLives() 
#### Expected Parameters
#### Expression Logic (What it does)
Keeps track of the lives and prints them on the top part of the game area (left hand side).
#### Return Values (What values it returns, if any)
Retruns the status of the player's lives.

### Function #06 - collisionDetection() 
#### Expected Parameters
#### Expression Logic (What it does)
Detects whether collisions between ball and bricks happen. Calculates the score and checks whether the player has won the game. In that case, ends the game.
#### Return Values (What values it returns, if any)
Returns the player's score or victory. 

### Function #07 - draw() 
#### Expected Parameters
#### Expression Logic (What it does)
Main function of the game with calls all the functions that draw the elements on the canvas. It also checks the status of the player's lives and alerts "GAME OVER" once the pool of lives has been depleted. 
#### Return Values (What values it returns, if any)

### Function #08 - keyDownHandler(e) 
#### Expected Parameters
Click event.
#### Expression Logic (What it does)
Allows the player to move the paddle to the right and left using the right and left key arrows. Fires when pressed. 
#### Return Values (What values it returns, if any)

### Function #09 - keyUpHandler(e) 
#### Expected Parameters
Click event.
#### Expression Logic (What it does)
Fires when keys are released while the user moves the paddle with the right and left key arrows.  
#### Return Values (What values it returns, if any)

### Function #10 - startGame()     
#### Expected Parameters
#### Expression Logic (What it does)
Starts the game when the user clicks on the "Start Game" button.
#### Return Values (What values it returns, if any)

## Content & Data Sources
add link 
