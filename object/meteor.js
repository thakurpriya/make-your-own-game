class Meteor{
    constructor(x,y,radius){
        var options={
            isStatic : false
        }

        this.body = Bodies.circle(x,y,radius, options);
        World.add(world, this.body);
        this.radius = radius;
    }


    display(){
        var pos = this.body.position;
        ellipse(pos.x,pos.y,this.radius,this.radius);


    }


}