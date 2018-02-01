/*
* States
* 0 = Idle
* 1 = Run
* 2 = Jump
*/
class player {
  constructor(){
    this.x = 0;
    this.y = 0;
    this.frameAt = 1;
    this.frameNumber = [];
    this.frameNumberAt = 10;
    this.frame = [];
    this.state = 1;
    this.speed = 0;
    this.size = 80;
  }

  load(){
    for(var i = 0; i < 3; i++){
      this.frame[i] = [];
    }
    // Load imges
    this.frameNumber[0] = 10;
    for(var i = 1;i < 11; i++){ // Load Idle
      this.frame[0][i] = loadImage("assets/images/gameart2d_com/png/Idle (" + i + ").png");
      console.log(i);
    }
    this.frameNumber[1] = 8
    for(var i = 1;i < 9; i++){ // Load Run
      this.frame[1][i] = loadImage("assets/images/gameart2d_com/png/Run (" + i + ").png");
      console.log(i);
    }/*
    for(var i = 1;i < 11; i++){ // Load Jump
      this.frame[2][i] = loadImage("assets/images/gameart2d_com/png/Jump (" + i + ").png");
    }*/
  }

  run(speed){
    this.speed = speed;
    this.state = 1;
  }

  stop(){
    this.speed = 0;
    this.state = 0;
  }

  show(widthIn){
    // Image State
    switch (this.state) {
      case 0:
        this.frameNumberAt = this.frameNumber[0];
        image(this.frame[0][this.frameAt], this.x, this.y, this.size, this.size);
        break;
      case 1:
        this.frameNumberAt = this.frameNumber[1];
        image(this.frame[1][this.frameAt], this.x, this.y, this.size, this.size);
        break;/*
      case 2:
        image(this.frame[2][this.frameAt], this.x, this.y, 80, 80);
        break;*/
      default:
        alert("something Whent Wrong");
        console.log(this.state);
    }
    // change frame
    this.frameAt = this.frameAt + 1;
    if(this.frameAt > this.frameNumberAt){
      this.frameAt = 1;
    }
    // update pos
    this.x = this.x + this.speed;
    if(this.x > widthIn){
      this.x = widthIn - this.size;
    }else if(this.x < 0){
      this.x = 0;
    }
  }
}
