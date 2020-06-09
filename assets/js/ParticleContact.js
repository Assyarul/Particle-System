//resolve interpenetration and closing velocity
class ParticleContact {
    constructor(particle1,particle2) {
        this.particle1 = particle1;
        this.particle2 = particle2;
        this.restitution = 0.8;     //supposed to be the lower restitution value of the two. 

        this.penetration= ParticleContact.calculatePenetration(particle1,particle2);
        this.contactNormal = ParticleContact.calculateContactNormal(particle1,particle2);
    }

    static calculateContactNormal(particle1,particle2){ // n = (p_a - p_b).normalize()
        return particle1.pos.copy().sub(particle2.pos).normalize();
    }

    static calculatePenetration(particle1,particle2){
        return (0.5*particle1.diameter+0.5*particle2.diameter)-p5.Vector.sub(particle2.pos,particle1.pos).mag();
    }
    
    calculateSeparatingVelocity(){ 
        let relativeVelocity = p5.Vector.sub(this.particle1.velocity,this.particle2.velocity)
        return relativeVelocity.dot(this.contactNormal);
    }

    resolveVelocity(){
        let separatingVelocity = this.calculateSeparatingVelocity();
        if (separatingVelocity > 0){
            return;
        }

        let totalInverseMass = (1/this.particle1.mass)+(1/this.particle2.mass); //

        let deltaVelocity = separatingVelocity *  (-this.restitution-1);

        let impulse = deltaVelocity/totalInverseMass;

        let impulseMass = p5.Vector.mult(this.contactNormal,impulse);
        this.particle1.velocity.add(impulseMass.copy().mult(1/this.particle1.mass));
        this.particle2.velocity.add(impulseMass.copy().mult(-1/this.particle2.mass));
    }
    resolveInterpenetration(){
        if (this.penetration <=0) {
            return ;
        } else {
            let totalInverseMass = (1/this.particle1.mass)+(1/this.particle2.mass);
            let moveMass = p5.Vector.mult(this.contactNormal,-this.penetration/totalInverseMass);

            this.particle1.pos.add(moveMass.copy().mult(1/this.particle1.mass));
            this.particle2.pos.add(moveMass.copy().mult(1/this.particle2.mass));
        }

    }

    resolve() {
        this.resolveVelocity();
        this.resolveInterpenetration();
    }
}