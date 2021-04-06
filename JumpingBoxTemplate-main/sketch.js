var canvas;
var music;
var bar1,bar2,bar3,bar4;
var ball;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    bar1 = createSprite(700,570,150,20);
    bar1.shapeColor = "green";
    bar2 = createSprite(500,570,150,20);
    bar2.shapeColor = "red";
    bar3 = createSprite(300,570,150,20);
    bar3.shapeColor = "blue";
    bar4 = createSprite(100,570,150,20);
    bar4.shapeColor = "orange";
    //create box sprite and give velocity
    ball = createSprite(400,50,30,30);
    ball.shapeColor = "white";
    
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    ball.velocityY = 4;
    ball.velocityX = 5;
    
    

    drawSprites();
    //add condition to check if box touching surface and make it bo 
}