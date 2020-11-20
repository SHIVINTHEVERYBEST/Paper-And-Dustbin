class Paper{
    constructor(){
    var options = {
        isStatic : false,
        restituion: 0.3,
        friction: 0.5,
        density: 1.2
    }
    this.body = Bodies.circle(200, 100, 20, options);
    World.add(world, this.body);
    }
    display(){
        var pos = position;

        ellipseMode(RADIUS);
        ellipse(this.body.pos.x, this.body.pos.y);
    }
}