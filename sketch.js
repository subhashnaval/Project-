
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var bobobject1, rope1;


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  roof = new Roof(380,40,700,50);
  bobobject1 = new Bob(380,550);
  rope1 = new Rope(bobobject1.body, roof.body, -bobDiameter*2, 0);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightgrey");
  
  roof.display();
  bobobject1.display();
  rope1.display();
}



