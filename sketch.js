const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine,world;

var stand,ground;
var box1, box2, box3, box4, box5, box6; 
var box7, box8, box9, box10, box11;
var box12, box13, box14,box15;
var box16,box17,box18;
var box19,box20;
var box21;
var polygon;
var slingshot;

function preload() {
  polygon_img=loadImage("polygon.png");
}



function setup() {
  createCanvas(800,550);
 
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  stand = new Ground(480,350,250,10);
  ground = new Ground (400,550,850,50);

  box1 = new Box1(380,320,35,40,"yellow");
  box2 = new Box1(420,320,35,40,"yellow");
  box3 = new Box1(460,320,35,40,"yellow");
  box4 = new Box1(500,320,35,40,"yellow");
  box5 = new Box1(540,320,35,40,"yellow");
  box6 = new Box1(580,320,35,40,"yellow");
  //console.log("Happy");

  box7 = new Box1(400,275,35,40,"pink");
  box8 = new Box1(440,275,35,40,"pink");
  box9 = new Box1(480,275,35,40,"pink");
  box10 = new Box1(520,275,35,40,"pink");
  box11 = new Box1(560,275,35,40,"pink");
  //2 layer

  box12 = new Box1(420,230,35,40,"green");
  box13 = new Box1(460,230,35,40,"green");
  box14 = new Box1(500,230,35,40,"green");
  box15 = new Box1(540,230,35,40,"green");
  //3 layer

  box16 = new Box1(440,185,35,40,"blue");
  box17 = new Box1(480,185,35,40,"blue");
  box18 = new Box1(520,185,35,40,"blue");
  //4 layer

  box19 = new Box1(460,140,35,40,"turquoise");
  box20 = new Box1(500,140,35,40,"turquoise");
  //5 layer

  box21 = new Box1(480,99,35,40,"violet");
  //6 layer

  polygon = Bodies.circle(50,200,20);
  World.add(world,polygon);
  
  slingshot = new Slingshot(this.polygon,{x:100,y:200});
  

}

function draw() {
  background(0);

  textSize(30);
  fill("white");
  text("Drag the Hexagon to push all the boxes :)",20,30);
  
  stand.display();
  ground.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();  

  imageMode(CENTER)
  image(polygon_img ,polygon.position.x,polygon.position.y,40,40);

  slingshot.display();
}

function keyPressed (){
  if(keyCode === 32){
    //console.log("happy");
    slingshot.attach(this.polygon);
  }
}

function mouseDragged(){
  Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  slingshot.fly();
}

