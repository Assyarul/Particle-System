class CollisionSolver {

    constructor(dt){
        this.dt = dt;

    }
    detectCollision(object1,object2){
        if (object1.pos.copy().sub(object2.pos).mag() < 0.5*object1.diameter+0.5*object2.diameter) { // |object1.pos - object2.pos| < object1.diameter+object2.diameter
            new ParticleContact(object1,object2).resolve();
        } 
    }

    //bruteforce approach for now
    //no broadphase
    solveCollision(objects){
        for (let i=0;i<objects.length;i++){ 
            for(let j=i+1;j<objects.length;j++){
                this.detectCollision(objects[i],objects[j]);
            }
        }
    }

}