const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let circlePos = height / 2;

const size = 200;

function draw() {

    ctx.clearRect(0, 0, width, height);

    circlePos += 2;

    if (circlePos > height + 80) {
        circlePos = -80;
    }

    ctx.beginPath();
    ctx.fillStyle = "seagreen";
    ctx.fillRect(width/2 - size/2, height/2 - size/2, size, size);

    ctx.beginPath();
    ctx.fillStyle = "darksalmon";
    ctx.arc(width/2, circlePos, 80, 0, Math.PI * 2);
    ctx.fill();


    requestAnimationFrame(draw);
}

draw();

/*
function draw() {
    console.log("Hello World!");

    circlePos += 0.5;

    ctx.fillStyle = "darkgrey";
    ctx.font = "40px Verdana"; //If you don't define the font, the same font will be applied to all the (text) elements below.
    ctx.fillText("Hello World!", 100, 100);

    ctx.save();
    ctx.translate(width/2, height/2);

        ctx.fillStyle = "seagreen";
        ctx.fillRect(0, 0, size, size); 
        //The canvas starts from the TOP LEFT CORNER, which means this will be 0,0. 
        //The same goes for the elements that are drawn (the top left corner is the first one drawn).

        ctx.fillStyle = "darksalmon";
        ctx.arc(size/2, circlePos, 50, 0, Math.PI * 2); //With circles, you have to define the center, not the top left corner (because there are no corners).
        ctx.fill();

    ctx.restore(); //Used to restore the starting coordinates.
    
    requestAnimationFrame(draw); //Used to animate the canvas and also to make it interactive. 
};

draw();
*/