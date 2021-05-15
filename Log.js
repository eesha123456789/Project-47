class Log extends Baseclass
{
    constructor(x,y,height,angle)
    {
        super(x,y,15,height,angle);
        this.image=loadImage("Angry Bird Game/wood2.png")
        Matter.Body.setAngle(this.body,angle);
    }
}