class Launcher{
    constructor(body,anchor){
        var options = {
            bodyA:body,
            pointB:anchor,
            stiffness: 0.004,
            length: 1,
            isStatic: false
        }
 
        this.pointB = anchor
        this.bodyA = body
        this.launcher = Constraint.create(options);
        this.image = loadImage( "Plucking mangoes/launcher.png")
        World.add(world,this.launcher);
    }

    attach(){
        this.launcher.bodyA = body;
    }

    fly(){
        this.launcher.bodyA = null;
    }
    display(){

       if(this.launcher.bodyA){
        var pointA = this.launcher.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(2);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
        }
    }
}
