const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var particles = [];
var particles1 = [];
var particles2 = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;

function setup() {
  createCanvas(1515, 730);
  engine = Engine.create();
  world = engine.world;

  base = new Rect(757.5, 720, 2625, 20);

  for (var k = 0; k <= width; k = k + 80) {
    divisions.push(new Rect(k, divisionHeight / 2 + 500, 10, divisionHeight));
  }

  for (var j = 40; j <= width; j = j + 50) {
    plinkos.push(new Plinko(j, 95, 8));
  }

  for (var j = 15; j <= width - 10; j = j + 50) {
    plinkos.push(new Plinko(j, 195, 8));
  }

  for (var j = 40; j <= width; j = j + 50) {
    plinkos.push(new Plinko(j, 295, 8));
  }

  for (var j = 15; j <= width - 10; j = j + 50) {
    plinkos.push(new Plinko(j, 395, 8));
  }


}

function draw() {
  Engine.update(engine);
  background(0);

  base.display();

  if (frameCount % 35 === 0) {
    particles.push(new Particle(random(650,850), 10, 10));
  }

  if (frameCount % 35 === 0) {
    particles1.push(new Particle(random(350,550), 10, 10));
  }

  if (frameCount % 35 === 0) {
    particles2.push(new Particle(random(950,1150), 10, 10));
  }

  for (var j = 0; j < particles.length; j++) {
    particles[j].display();
  }

  for (var l = 0; l < particles.length; l++) {
    particles1[l].display();
  }

  for (var q = 0; q < particles.length; q++) {
    particles2[q].display();
  }

  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

  for (var f = 0; f < plinkos.length; f++) {
    plinkos[f].display();
  }
}

