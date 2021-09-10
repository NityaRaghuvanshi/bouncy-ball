
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var ball,ground;

function setup()
{
  createCanvas(400,400);
engine=Engine.create();
world=engine.world;

var ballOptions={
  restitution:1,
  frictionAir:0.01,

}

ball=Bodies.circle(100,50,30,ballOptions);
World.add(world,ball);

var groundOptions={
  isStatic:true,
}

ground=Bodies.rectangle(1,390,400,20,groundOptions);
World.add(world,ground);
}

function draw() 
{
  background(51);
  Engine.update(engine);
  fill("blue");
 ellipse(ball.position.x,ball.position.y,30);
 fill("brown");
 rect(ground.position.x,ground.position.y,400,20);
}

