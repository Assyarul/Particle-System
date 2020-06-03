function setup() {
  createCanvas(400,400);
  reset();
}

function draw() {
  let GRAVITY = createVector(0,0.2);
  background(220);
  console.log(particle1.velocity);
  
  particle1.exertForce(GRAVITY);

  particle1.updatePos(); 
  particle1.display();
  particle1.checkEdges(400);

}

function reset(){
  particle1 = new Particle(createVector(200,0), createVector(5,0), 10, createVector(0,0));
}
function mousePressed(){
  reset();
}