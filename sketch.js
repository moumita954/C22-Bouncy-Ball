const Engine = Matter.Engine;  //namespacing
const World= Matter.World;
const Bodies = Matter.Bodies;

var myEngine, myWorld;
var ground, ball;

function setup(){
    var canvas = createCanvas(400,400);
    myEngine = Engine.create();
    myWorld = myEngine.world;

    var ground_options ={           //additional options for the ground
        isStatic: true
    }

    ground = Bodies.rectangle(200,390,200,20,ground_options);//ground getting created only
    World.add(myWorld,ground);   //ground added to the World

    var ball_options ={           //additional options for the ball
        restitution: 1.0
    }

    ball = Bodies.circle(200,100,20, ball_options);//ball getting created only

    World.add(myWorld,ball);   //ball added to the World

    console.log(ground);    //to see the additional properties in the console window
}

function draw(){
    background(0);
    Engine.update(myEngine);  //to update the engine continuously so that laws of physics are followed
    rectMode(CENTER);  //to consider the center of the rectangle as by default the top left corner is considered
    fill("brown");   //to give color to the ground
    rect(ground.position.x,ground.position.y,400,20);//ground getting displayed on the screen

    ellipseMode(RADIUS); //to consider the radius of the ball
    fill("red");  // to give color to the ball
    ellipse(ball.position.x, ball.position.y, 20, 20);//ball gets displayed on the screen
}