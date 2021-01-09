class Mango{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0,
            'isStatic':true
        }
        this.mango = Matter.Body.circle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("Plucking mangoes/mango.png");
        World.add(world, this.mango);
      }
      display(){
        var angle = this.mango.angle;
        push();
        translate(this.mango.position.x, this.mango.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
}