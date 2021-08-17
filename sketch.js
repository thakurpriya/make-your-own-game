const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var m1;

function preload(){

}

function setup(){
  createCanvas(displayWidth, displayHeight);

  engine = Engine.create();
  world = engine.world;

  m1 = new Meteor(300,10,30);
  meteorarr = [];
}
function draw(){

  Engine.update(engine);

  background(0);

  m1.display();

  spawnMeteor();

  for(var i=0;i<meteorarr.length;i++){
    meteorarr[i].display();
  }


}

function spawnMeteor(){
  if(frameCount % 20 === 0){
    var mx = Math.round(random(100,1000));

    var m = meteorarr.push(new Meteor(mx,10,80));
  }
}

