class Particle {
    constructor(x, y, diameter) {
        this.pos = createVector(x,y);
        this.velocity = createVector(0,0);
        this.acceleration = createVector(0,0);
        this.diameter = diameter;
    }

    exertForce(force){
        this.acceleration.add(force);
    }

    // In each frame, acceleration will reset.
    updatePos() {
        this.velocity.add(this.acceleration);
        this.pos.add(this.velocity);
        this.acceleration.mult(0);
    }

    // Prevent particle from exceeding the box boundary. added dampening effect.
    checkEdges(height) {
        if (this.pos.y > (height-this.diameter/2)) {
            this.velocity.y *= -0.8;
            this.pos.y = (height - this.diameter/2);
        } else if (this.pos.y < this.diameter/2) {
            this.velocity.y *= -0.8;
            this.pos.y = this.diameter/2;
        }

        if (this.pos.x > (width-this.diameter/2)) {
            this.velocity.x *= -0.8;
            this.pos.x = (width - this.diameter/2);
        } else if (this.pos.x < this.diameter/2) {
            this.velocity.x *= -0.8;
            this.pos.x = this.diameter/2;
        }
    }

    display() {
        stroke(0);
        strokeWeight(2);
        fill(255,127);
        ellipse(this.pos.x, this.pos.y, this.diameter);
    }

}