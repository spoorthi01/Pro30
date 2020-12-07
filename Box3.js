class Box3 {
  constructor(x, y, width, height){
    var options = {
      restitution :0.4,
      friction :0.1,
      //isStatic : false, 
    }
    
    this.body = Bodies.rectangle(x,y,width,height,options);
    //this.image = loadImage("sprites/wood1.png");
    this.width = width
    this.height - height
    World.add(world,this.body);
    this.visibility = 255;
  }

  display(){
    var angle = this.body.angle;
    var pos= this.body.position;
    if(this.body.speed < 3){
      this.body.display;
    }else{ 
      World.remove(world,this.body);
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      fill("green");
      rectMode(CENTER);
      rect(0,0,this.width, this.height);
      pop();
    }  
  }
};