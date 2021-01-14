
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var tree,treeImg,boy ,boyImg;
var BGimg;

function preload()
{
  boyImg =loadImg("boy.png");
  BGimg = loadImg("Backgorund.jpg")
  treeImg =loadImg("tree.png");
 
}

function setup() {
	createCanvas(1000, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
tree =createSprite(750,350,20,20);
tree.addImg(treeImg);
tree.scale= 0.4;

boy= createSprite(200,525,20,20);
boy.addImg(boyImg);
boy.scale = 0.1;

ground = new Ground(500,590,1000,20);

stone = new Stone(200,200,70);
string = new Slingshot(stone.body,{x:145, y:470});
mango1 = new Mango(700,250,60);
mango2 = new Mango(760,200,60);
mango3 = new Mango(800,340,60);
mango4 = new Mango(675,350,60);
mango5 = new Mango(900,350,60);
mango6 = new Mango(870,250,60);
mango7 = new Mango(550,300,60);
mango8 = new Mango(800,150,60);

	Engine.run(engine);
  
}



function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();

  detectCollision(stoneObj,mango1)
		detectCollision(stoneObj,mango2)
		detectCollision(stoneObj,mango3)
		detectCollision(stoneObj,mango4)
		detectCollision(stoneObj,mango5)

		textSize (18);
		textFont("Georgia");
		textStyle(BOLD);
		text("Press space to get one more chance to play!!",10,20);

 
}

function mouseDragged(){
Matter.Body.setPosition(stoneBody, {x=mouseX, y:mouseY})

}

function mouseReleased(){
	string.fly();
}

function detectCollision(lstone,lmango){
	mangoBodyPosition = lmango.body.position
	stoneBodyPosition = lstone.body.position

	var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y , mangoBodyPosition.x , mangoBodyPosition.y);
	if (distance<=lmango.r+lstone.r){
		Matter.Body.setStatic(lmango.body,false);

		
	}

}
function keyPressed(){

}if(keyCode === 32)
	{
		Matter.Body.setPosition(stone.body,{x:235, y:420})
		string.attach(stone.body);
  }
  
  if(keyCode === space){
    stone.x=200;
    stone.y=200;
  }




