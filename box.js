class Box{
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.01,
        'friction':2.0,
        'density':0.1
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.visibility = 255;

    World.add(world, this.body);
  }
  display(){
    if(this.body.speed < 4){
      var pos = this.body.position;
      rectMode(CENTER);
      fill("purple");
      rect(pos.x,pos.y, this.width, this.height);
    }
    else{
      World.remove(world,this.body);
      push();
      this.visibility = this.visibility - 5;
      tint(255,this.visibility);
      pop();
    }
  }
}