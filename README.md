# Rudimentary Physics Engine

Implementing a basic physics system for future projects.

## To Do:
- [ ] Implement friction in system.
- [ ] Add interactable objects
- [ ] Use InverseMass() method to calculate 1/m instead. Issue arise if mass of object is set to 0.
- [ ] Replace checkEdges() method to something that is similiar to ParticleContact.js way of calculating collision with Edges. 
## Tutorials Used:
1. [Creating a Physics Engine Series by Randy Gaul](https://gamedevelopment.tutsplus.com/series/how-to-create-a-custom-physics-engine--gamedev-12715)
    The Core Engine component of the series was really clear in explaining key concepts. 
    
2. [Drawing Object Trails by the Coding Train Channel](https://www.youtube.com/watch?v=vqE8DMfOajk)
    Enables me to draw a trailing line to denote the path of my Particle object.

3. Game Physics Engine Development by Ian Millington
    A more in-depth guide to making a physics engine. Although it was cpp, it delivers a clear message on how do you structure your physics engine.