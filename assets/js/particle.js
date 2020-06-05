class Particle {
    constructor(x, y, mass, diameter) {
        this.pos = createVector(x,y);
        this.prevPos = createVector(0,0);
        this.velocity = createVector(0,0);
        this.diameter = diameter;
        this.mass = mass;
    }

    updateParticle(force, dt) {
        this.prevPos = this.pos.copy();
        this.velocity.add(force.copy().mult(dt).mult(1/this.mass));
        this.pos.add(this.velocity.copy().mult(dt));
    }

    toString() {
        return `${this.pos} at ${this.mass} kg and ${this.diameter} m`;
    }
}