
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperObj;
var ground;
var Log1,Log2,Log3;
var dustbin;
function preload(){

	
}
function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   paperObj = new Paper(50,500,60);
   ground = new Ground(400,670,800,60);
   dustbin = new Dustbin(600,550)

 //  Log1 = createSprite(525,640,250,30);
	//Log1.shapColor =color ("red");
	//Log2 = createSprite(390,560,20,200);
	//Log2.shapColor = color("red");
	//Log3 = createSprite(638,560,20,200);
	//Log3.shapColor =color( "red");


  
}


function draw() {
  //rectMode(CENTER);
  background(255);
  Engine.update(engine);
  paperObj.display();
  ground.display();
  dustbin.display();
 // Log1.display();
 // Log2.display();
  //Log3.display();
  //drawSprites();
 
}

function keyPressed(){

	if(keyCode === UP_ARROW){
    Matter.Body.applyForce(paperObj.body,paperObj.body.position,{x:85,y:-85})

	}
}

