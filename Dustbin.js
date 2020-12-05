class Dustbin {
constructor(x,y){
this.x=x;
this.y=y;
this.dw=200;
this.dh=200;
this.wth= 20;

var options={
isStatic:true

}
this.bottomBody= Bodies.rectangle(this.x,this.y,this.dw,this.wth,options);
this.leftBody = Bodies.rectangle(this.x-this.dw/2,this.y-this.dh/2,this.wth,this.dh,options);
this.rightBody = Bodies.rectangle(this.x+this.dw/2,this.y-this.dh/2,this.wth,this.dh,options);
this.dustbinImage = loadImage("dustbingreen.png");
World.add(world,this.bottomBody);
World.add(world,this.leftBody);
World.add(world,this.rightBody);
}


display(){
    var posb = this.bottomBody.position;
    push();
    translate(posb.x,posb.y);
    imageMode(CENTER);
    image(this.dustbinImage,0,0,this.dw,this.dh);
    pop();

    var posl = this.leftBody.position;
    push();
    translate(posl.x,posl.y);
    rectMode(CENTER);
    //image(this.dustbinImage,0,0,this.dw,this.dh);
    pop();


    var posr = this.rightBody.position;
    push();
    translate(posr.x,posr.y);
    rectMode(CENTER);
    //image(this.dustbinImage,0,0,this.dw,this.dh);
    pop();


}

}

