class player {
  constructor(){
    this.x = 0;
    this.y = 0;
    this.frameAt = 1;
    this.frame = new Array;
  }

  load(){
    for(var i = 1;i < 11; i++){
      this.frame[this.frameAt] = loadImage("assets/images/gameart2d_com/png/Idle (" + i + ").png");
    }
  }

  show(){
    image(this.frame[this.frameAt], this.x, this.y, 80, 80);
    this.frameAt = this.frameAt + 1;
    if(this.frameAt > 10){
      this.frameAt = 1;
    }
  }
}
