function setup() {
    createCanvas(400,400);
    gravity = 9.8;
  
    //add all particles to system.
    particle1 = new Particle(150, 375, 1, 50);
    particle2 = new Particle(300, 375, 1, 50);
    particle2.velocity=createVector(10,0);
    engine = new Engine(gravity, width, height);
    engine.addObject(particle1);  
    engine.addObject(particle2); 
  
    //variables to ensure deterministic system
    
    timeStep = 1/60;
    accumulator = 0;
  }
  
  function draw() {
    background(220);
    //deltaTime is the real time difference between previous frame and this frame.
    accumulator += deltaTime; 
    appliedForce = createVector(0,0);
    
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

  function mousePressed() {
      engine.addObject(new Particle(mouseX,mouseY,1,50));
  }
  