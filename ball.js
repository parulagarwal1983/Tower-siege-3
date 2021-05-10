class Ball{
    constructor(x,y,width,height){
        var options = {
            isStatic: false,
            'restitution':0.7,
            'friction':0.5,
            'density':1.2
        }
        this.body = Matter.Bodies.rectangle(x, y,width,height,options);
        this.width = width;
        this.height = height;
        this.image = loadImage("Hexagon.png");

        World.add(world, this.body);
    }

    display(){
        var pos =this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.width,this.height);
      }
}