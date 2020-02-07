class bolita{
  constructor(){
    this.x = 100;
    this.y = 200;
  }
  mostrar(){
    ellipse (this.x,this.y,50,50);
  }
  seguir(){
    let x = 100,
  y = 100,
  angle1 = 0.0,
  segLength = .5;
    this.x=mouseX - x;
    this.y=mouseY - y;
     angle1 = atan2(this.y, this.x);
  x = mouseX - cos(angle1) * segLength;
  y = mouseY - sin(angle1) * segLength;

  }
}
