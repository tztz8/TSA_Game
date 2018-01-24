class player {
  constructor(){
    this.x = 0;
    this.y = 0;
    this.frameAt = 1;
    this.frame = new Array;
    for(var i = 1; i < 11; i++){
      this.frame[i] = loadImage("assets/images/gameart2d_com/png/Idle (" + i + ").png");
    }
  }

  show(){
    image(this.frame[this.frameAt], this.x, this.y);
    this.frameAt = this.frameAt + 1;
    if(this.frameAt > 10){
      this.frameAt = 1;
    }
  }
}
