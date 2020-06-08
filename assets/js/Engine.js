// Class that contains variables that determine the basic physics of objects.
// Engine will be the one applying the forces unto the objects.
// No collision detection between objects
// Locked time-step Physics Engine i.e timeStep is fixed throughout.
class Engine {
    constructor(gravity, width, height) {
        this.gravity = createVector(0,gravity);
        this.height = height;
        this.width = width;
        this.objects = [];
    }

    addObject(particle) {
        this.objects.push(particle);
    }

    exertForce(force,particle) {
        particle.totalforce.add(force);
    }

    calculateGravity(particle) {
        return this.gravity.copy().mult(particle.mass); // F=ma
    }

    checkEdges(particle) {
        if (particle.pos.y > (this.height - particle.diameter/2)) {
            particle.velocity.y *= -0.8;
            particle.prevPos.y = particle.pos.y;
            particle.pos.y = (this.height - particle.diameter/2);
        } else if (particle.pos.y < particle.diameter/2) {
            particle.velocity.y *= -0.8;
            particle.prevPos.y = particle.pos.y;
            particle.pos.y = particle.diameter/2;
        }
        if (particle.pos.x > (this.width - particle.diameter/2)) {
            particle.velocity.x *= -0.8;
            particle.prevPos.x = particle.pos.x;
            particle.pos.x = (this.width - particle.diameter/2);
        } else if (particle.pos.x < particle.diameter/2) {
            particle.velocity.x *= -0.8;
            particle.prevPos.x = particle.pos.x;
            particle.pos.x = particle.diameter/2;
        }
    }

    updateEngine(dt){
        this.objects.forEach(function(object){
            this.exertForce(this.calculateGravity(object),object);
            object.updateParticle(dt);
            this.checkEdges(object);
        }, this);
    }

    // uses linear interpolation
    renderEngine(alpha) {
        this.objects.forEach(function(object){
            object.renderParticle(alpha);
        });
    }

}