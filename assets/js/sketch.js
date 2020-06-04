function setup() {
  createCanvas(400,400);
  reset();
}

function draw() {
  let GRAVITY = createVector(0,0.2);
  background(220);
  
  particle1.exertForce(GRAVITY);

  particle1.updatePos(); 
  particle1.display();
  particle1.checkEdges(400);

}

function reset(){
  particle1 = new Particle(200,0, 50);
}

function mousePressed(){
  particle1.exertForce(createVector(10,-10));
}