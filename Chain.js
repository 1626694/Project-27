class Chain{
constructor(BodyA,pointB){
    var options = {
        bodyA:BodyA,
        pointB:pointB,
        stiffness:0.04,
        length:10
    }
    this.chain=Constraint.create(options);
    World.add(world,this.chain);
}
display(){
    strokeWeight(7);
    var pointA=this.chain.bodyA.position;
    var pointB=this.chain.pointB;
    line(pointA.x,pointA.y,pointB.x,pointB.y);
}
}