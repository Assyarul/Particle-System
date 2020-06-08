var gravity;
var appliedX;
var appliedY;

function setup() {
  createCanvas(400,400);
  gravity = 9.8;
  appliedX = 10;
  appliedY = -20;

  //add all particles to system.
  particle1 = new Particle(200, 0, 1, 50);
  engine = new Engine(gravity, width, height);
  engine.addObject(particle1);  

  //variables to ensure deterministic system
  
  timeStep = 1/60;
  accumulator = 0;
}

function draw() {
  background(220);
  //deltaTime is the real time difference between previous frame and this frame.
  accumulator += deltaTime; 
  appliedForce = createVector(0,0);
  
  if (mouseIsPressed) {
    appliedForce.y = appliedY;
    appliedForce.x = appliedX;
  }

  //if it took too long to generate a frame, prevent spiralling out of control;
  //here the accumulator will not exceed 0.2 seconds.
  if (accumulator > 0.2){
    accumulator = 0.2;
  }
  while (accumulator > timeStep) {
    engine.exertForce(appliedForce,particle1);
    engine.updateEngine(timeStep);
    accumulator -= timeStep;
  }

  //linear interpolation
  const alpha = accumulator/timeStep;
  engine.renderEngine(alpha);
}

