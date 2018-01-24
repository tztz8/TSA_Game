class player {
  constructor(){
    this.x = 0;
    this.y = 0;
    this.frameAt = 1;
    this.frame = new Array;
<<<<<<< HEAD
    for(var i = 1; i < 11; i++){
      this.frame[i] = loadImage("assets/images/gameart2d_com/png/Idle (" + i + ").png");
=======
  }

  load(){
    for(var i = 1;i < 11; i++){
      this.frame[this.frameAt] = loadImage("assets/images/gameart2d_com/png/Idle (" + i + ").png");
>>>>>>> working-on-player
    }
  }

  show(){
<<<<<<< HEAD
    image(this.frame[this.frameAt], this.x, this.y);
=======
    image(this.frame[this.frameAt], this.x, this.y, 80, 80);
>>>>>>> working-on-player
    this.frameAt = this.frameAt + 1;
    if(this.frameAt > 10){
      this.frameAt = 1;
    }
  }
}
