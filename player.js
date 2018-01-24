class player {
  constructor(){
    this.x = 0;
    this.y = 0;
    this.frame = 0;
  }

  show(){
    image(loadImage("assets/images/gameart2d_com/png/Idle (" + this.frame + ").png"), this.x, this.y);
    this.frame = this.frame + 1;
    if(this.frame > 10){
      this.frame = 0;
    }
  }
}
