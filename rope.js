class Rope {
    constructor(body1,body2,offsetX,offsetY){
        this.offsetX=offsetX
        this.offsetY=offsetY
        var options={
            bodyA:body1,
            bodyB:body2,
            pointB:{x:this.offsetX,y:this.offsetY}
        //  stiffness:0.7,
        //  length:100

            
        }
        this.rope=Constraint.create(options)
        World.add(world,this.rope)
    }
    display(){
        var pointA=this.rope.bodyA.position
        var pointB=this.rope.bodyB.position
        var bx=pointB.x+this.offsetX
        var by=pointB.y+this.offsetY
        strokeWeight(4)
       line(pointA.x,pointA.y,bx,by)

    }
}