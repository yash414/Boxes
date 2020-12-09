const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myengine, myworld, box1, box2;

function setup() {
  createCanvas(400,400);
  myengine = Engine.create();
  myworld = myengine.world;
  box1 = new box(200,100,50,50);
  box2 = new box(210,50,50,100);
  var ground_options = {
    isStatic: true
  }
  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(myworld,ground);
}

function draw() {
  background(0);
  Engine.update(myengine);
  box1.display();
  box2.display();
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);
}