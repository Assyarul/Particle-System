function setup() {
  createCanvas(400,400);

  //add all particles to system.
  particle1 = new Particle(200, 0, 1, 50);
  engine = new Engine(9.8, width, height);
  engine.addObject(particle1);  

  //variables to ensure deterministic
  frameRate(60);
  timeStep = 1/60;
  accumulator = 0;
}

function draw() {
  background(220);
  //deltaTime is the real time difference between previous frame and this frame.
  accumulator += deltaTime; 

  if (accumulator > 0.2){
    accumulator = 0.2;
  }
  while (accumulator > timeStep) {
    engine.updateEngine(timeStep);
    accumulator -= timeStep;
  }

  //linear interpolation
  const alpha = accumulator/timeStep;
  engine.renderEngine(alpha);
}