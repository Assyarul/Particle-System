class Particle {
    constructor(pos, velocity, diameter, acceleration) {
        this.pos = pos;
        this.velocity = velocity;
        this.acceleration = acceleration;
        this.diameter = diameter;
    }

    exertForce(force){
        this.acceleration.add(force);
    }

    updatePos() {
        this.velocity.add(this.acceleration);
        this.pos.add(this.velocity);
        this.acceleration.mult(0);
    }

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