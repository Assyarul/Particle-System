class Particle {
    constructor(x, y, mass, diameter) {
        this.pos = createVector(x,y);
        this.prevPos = createVector(x,y);
        this.velocity = createVector(0,0);
        this.totalforce = createVector(0,0);

        this.history = [];
        this.diameter = diameter;
        this.mass = mass;
    }

    addPrevState(){
        if (this.history.length > 100){
            this.history.shift()
        }
        this.history.push(this.prevPos);
    }

    updateParticle(dt) {
        this.prevPos = this.pos.copy();
        this.velocity.add(this.totalforce.copy().mult(dt).mult(1/this.mass));
        this.pos.add(this.velocity.copy().mult(dt));
        this.totalforce = createVector(0,0);
    }

    renderParticle(alpha) {
        this.addPrevState();
        let interpolatedpos = p5.Vector.lerp(this.prevPos,this.pos,alpha);
        this.prevPos = this.pos;
        stroke(0);
        strokeWeight(this.mass);
        fill(255,127);
        ellipse(interpolatedpos.x, interpolatedpos.y, this.diameter);

        stroke(0,0,0,80);
        noFill();
        beginShape();
        for (let i=0;i<this.history.length;i++){
            vertex(this.history[i].x,this.history[i].y);
        }
        endShape();
    }

    toString() {
        return `${this.pos} at ${this.mass} kg and ${this.diameter} m`;
    }
}