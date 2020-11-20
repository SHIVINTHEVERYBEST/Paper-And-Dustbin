
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var boxL, boxR, boxB;
var gound, paper;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);

	//paper = new Paper(width/2 - 200, 610);

	paper = Bodies.circle(width/2 - 300, 640, 20, 20);
	stroke("blue");
	fill("blue");

	rectMode(CENTER);
	 boxL = createSprite(width/2 + 100, 610, 20, 100);
	 boxL.shapeColor = color("white");
	 boxR = createSprite(width/2 + 300, 610, 20, 100);
	 boxR.shapeColor = color("white");
	 boxB = createSprite(width/2 + 200, 650, 200, 20);
	 boxB.shapeColor = color("white");

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  //keyPressed();
  
  Engine.update(engine)
  ellipseMode(RADIUS);
  ellipse(paper.position.x, paper.position.y, 20, 20);

  drawSprites();
  
  //paper.display();
 
}

function keyPressed(){
	if(keyCode === Up_Arrow){
		Matter.Body.applyForce(paper.Body, paper.Body.position, {x: 85, y: -85});
	}
}


