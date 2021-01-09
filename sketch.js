
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	boyImg = loadImage("Plucking mangoes/boy.png")
}

function setup() {
	createCanvas(950, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(500,680,1000,10);
	tree = new Tree(700,435,470,500);
	mango1 = new Mango(590,385,50,50);
	mango2 = new Mango(540,355,35,35);
	mango3 = new Mango(620,305,45,50);
	mango4 = new Mango(695,370,55,55);
	mango5 = new Mango(750,335,35,40);
	mango6 = new Mango(810,315,50,55);
	mango7 = new Mango(700,285,55,50);
	mango8 = new Mango(870,325,50,45);
	mango9 = new Mango(720,235,45,40);
	mango10 = new Mango(655,335,45,40);	
	mango11 = new Mango(845,400,55,50);
	mango12 = new Mango(640,395,40,35);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  ground.display();
  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();
  detectCollison(stone,mango1);
  detectCollison(stone,mango2);
  detectCollison(stone,mango3);
  detectCollison(stone,mango4);
  detectCollison(stone,mango5);
  detectCollison(stone,mango6);
  detectCollison(stone,mango7);
  detectCollison(stone,mango8);
  detectCollison(stone,mango9);
  detectCollison(stone,mango10);
  detectCollison(stone,mango11);
  detectCollison(stone,mango12);
  push();
	imageMode(CENTER);
	image(boyImg, 200, 0, 100,200);
	pop();

}

function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x: mouseX, y: mouseY})
}

function mouseReleased(){
    launcher.fly();
}

function detectCollison(lstone,lmango){

	var distance=dist(lstone.body.position.x,lstone.body.Position.y,lmango.body.position.x,lmango.body.position.y)

	if(distance<-lmango.r+lstone.r){
		Matter.Body.setStatic(lmango,false)
	}
}