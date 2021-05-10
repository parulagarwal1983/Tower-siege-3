const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;

function preload(){
  lightbg = loadImage("lightcolor.png");
  darkbg = loadImage("darkcolor.png");

  getTime();
}

function setup() {
 
  createCanvas(windowWidth,windowHeight);
  
  engine = Engine.create();
  world = engine.world;

  bg = createSprite(width/2,height/2,width,height);

  ground1 = new Ground(650,500,300,13);
  ground2 = new Ground(1000,375,240,13);
  ground3 = new Ground(1250,250,180,13);

  fill("Black");
  ground4 = new Ground(770,710,windowWidth,20);
  ground5 = new Ground(10,360,20,windowHeight);
  ground6 = new Ground(1530,360,20,windowHeight);

  box1 = new Box(530,490,30,50);
  box2 = new Box(560,490,30,50);
  box3 = new Box(590,490,30,50);
  box4 = new Box(620,490,30,50);
  box5 = new Box(650,490,30,50);
  box6 = new Box(680,490,30,50);
  box7 = new Box(710,490,30,50);
  box8 = new Box(740,490,30,50);
  box9 = new Box(770,490,30,50);

  box10 = new Box2(910,365,30,50);
  box11 = new Box2(940,365,30,50);
  box12 = new Box2(970,365,30,50);
  box13 = new Box2(1000,365,30,50);
  box14 = new Box2(1030,365,30,50);
  box15 = new Box2(1060,365,30,50);
  box16 = new Box2(1090,365,30,50);

  box17 = new Box3(1190,240,30,50);
  box18 = new Box3(1220,240,30,50);
  box19 = new Box3(1250,240,30,50);
  box20 = new Box3(1280,240,30,50);
  box21 = new Box3(1310,240,30,50);

  box22 = new Box2(560,430,30,50);
  box23 = new Box2(590,430,30,50);
  box24 = new Box2(620,430,30,50);
  box25 = new Box2(650,430,30,50);
  box26 = new Box2(680,430,30,50);
  box27 = new Box2(710,430,30,50);
  box28 = new Box2(740,430,30,50);

  box29 = new Box3(940,305,30,50);
  box30 = new Box3(970,305,30,50);
  box31 = new Box3(1000,305,30,50);
  box32 = new Box3(1030,305,30,50);
  box33 = new Box3(1060,305,30,50);

  box34 = new Box4(1220,180,30,50);
  box35 = new Box4(1250,180,30,50);
  box36 = new Box4(1280,180,30,50);


  box37 = new Box3(590,370,30,50);
  box38 = new Box3(620,370,30,50);
  box39 = new Box3(650,370,30,50);
  box40 = new Box3(680,370,30,50);
  box41 = new Box3(710,370,30,50);

  box42 = new Box4(970,245,30,50);
  box43 = new Box4(1000,245,30,50);
  box44 = new Box4(1030,245,30,50);

  box45 = new Box5(1250,120,30,50);


  box46 = new Box4(620,310,30,50);
  box47 = new Box4(650,310,30,50);
  box48 = new Box4(680,310,30,50);

  box49 = new Box5(1000,185,30,50);


  box50 = new Box5(650,250,30,50);

  ball = new Ball(200,360,70,70);

  rope = new SlingShot(ball.body,{x:200,y:260});
}

function draw() {
  
  background(rgb(184,31,31));  

  Engine.update(engine);

  ground1.display();
  ground2.display();
  ground3.display();

  ground4.display();
  ground5.display();
  ground6.display();

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
  box22.display();
  box23.display();
  box24.display();
  box25.display();
  box26.display();
  box27.display();
  box28.display();
  box29.display();
  box30.display();
  box31.display();
  box32.display();
  box33.display();
  box34.display();
  box35.display();
  box36.display();
  box37.display();
  box38.display();
  box39.display();
  box40.display();
  box41.display();
  box42.display();
  box43.display();
  box44.display();
  box45.display();
  box46.display();
  box47.display();
  box48.display();
  box49.display();
  box50.display();

  rope.display();
  ball.display();
  
  textSize(32);
  fill("lightyellow");
  text("Drag the polygon to aim and release to shoot",450,50);
  text("Press 'space' to re-attach the polygon",450,100);
  
  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  rope.fly();
}

function keyPressed(){
  if(keyCode === 32){
    rope.attach(ball.body);
  }
}

async function getTime(){
   
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");

  var responseJSON = await response.json();

  var datetime = responseJSON.dateTime;
  var hour = datetime.slice(10,13);

  if(hour < 06 && hour > 18){
      bg = lightbg;
  }

  else{
      bg = darkbg;
  } 
}