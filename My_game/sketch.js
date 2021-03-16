var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 var background_Img, man_img, man_dying, man_attack;

function preload(){

  background_Img=loadImage("images/download.jpeg");
 man_img=loadImage("images/knight.png");
  man_dying=loadImage("images/knight.png");
  man_attack=loadImage("images/knight.png");
}

function setup() {
  createCanvas(1520, 800);
  engine = Engine.create();
  world = engine.world;
  
var m1,m2,m3,m4,m5,m6,m7,m8,m9,m10,m11,m12;

m1 = createSprite(400,400,200,10);
m2 = createSprite(450,500,10,100);
m3 = createSprite(500,500,100,10);
m4 = createSprite(500,400,100,10);
m5 = createSprite();
m6 = createSprite();
m7 = createSprite();
m8 = createSprite();
m10 = createSprite();
m11 = createSprite();
m12 = createSprite();

//ar background_display = createSprite(750,400,20,20);
var man = createSprite(600,600,20,20);




  //background_display.addImage("Thebackground",background_Img);
  //background_display.scale = 2;
  man.scale = 0.25;
 man.addImage("walking",man_img);
  
  
}
 


function draw() {
  background("black");
 
  Engine.update(engine);
 
drawSprites();
}