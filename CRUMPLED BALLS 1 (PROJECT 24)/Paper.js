class Paper {
    constructor(x, y) {
      var options = {
          'isStatic':false,
          'restitution':0.3,
          'friction':1.5,
          'density':1.2
      }
      this.body = Bodies.circle(x, y, 15, options);
      this.radius = 15;

      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      ellipseMode(RADIUS);
      fill("purple");
      ellipse(pos.x,pos.y, this.radius,this.radius);
      pop();
    }
  };