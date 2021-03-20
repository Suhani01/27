
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint= Matter.Constraint
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	
	
	bob1= new Bob(320,350,30);
	bob2= new Bob(320,350,30);
	bob3= new Bob(320,350,30);
	bob4= new Bob(320,350,30);
	bob5= new Bob(320,350,30);
	ground = new Ground(400,50,400,40)
	rope1= new Rope(bob1.body,ground.body,-100,0) 
	rope2= new Rope(bob2.body,ground.body,-130,0) 
	rope3= new Rope(bob3.body,ground.body,-70,0) 
	rope4= new Rope(bob4.body,ground.body,-40,0) 
	rope5= new Rope(bob5.body,ground.body,-10,0) 
	
	Engine.run(engine);
  
}


function draw() {

  background(255);
  rectMode(CENTER)
  Engine.update(engine)
  
  
  

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display()
 ground.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display()
 
}



