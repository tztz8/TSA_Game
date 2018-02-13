/*
* States
* 0 = Idle
* 1 = Run
* 2 = Jump
*/
class player {
  constructor(){
    this.x = 0;
    this.speed = 0;
    this.yFloor = 0;
    this.y = 0;
    this.yv = 0;
    this.ya = -600;
    this.frameAt = 1;
    this.frameNumber = [];
    this.frameNumberAt = 10;
    this.frame = [];
    this.state = 0;
    this.size = 80;
    this.timer = 0;
    this.timerOn = false;
  }

  load(){
    for(var i = 0; i < 3; i++){
      this.frame[i] = [];
    }
    // Load imges
    this.frameNumber[0] = 10;
    for(var i = 1;i < 11; i++){ // Load Idle
      this.frame[0][i] = loadImage("assets/images/gameart2d_com/png/Idle (" + i + ").png");
    }
    this.frameNumber[1] = 8
    for(var i = 1;i < 9; i++){ // Load Run
      this.frame[1][i] = loadImage("assets/images/gameart2d_com/png/Run (" + i + ").png");
    }
    this.frameNumber[2] = 10
    for(var i = 1;i < 11; i++){ // Load Jump
      this.frame[2][i] = loadImage("assets/images/gameart2d_com/png/Jump (" + i + ").png");
    }
  }

  run(speed){
    this.speed = speed;
    this.state = 1;
  }

  jump(velocity){
    this.yv = velocity;
    if(!this.timerOn){
      this.timerOn = true;
      this.timer = 0;
    }
    this.state = 2;
  }

  stop(){
    this.speed = 0;
    this.state = 0;
  }

  show(widthIn, worldSpeedIn){
    // seting crect state
    if(this.timer){
      this.state = 2;
    }else if(this.speed > 0 || this.speed < 0){
      this.state = 1;
    }else{
      this.state = 0;
    }
    // Frame limit
    this.frameNumberAt = this.frameNumber[this.state];
    if(this.frameAt > this.frameNumberAt){
      this.frameAt = 1;
    }
    // print Image
    image(this.frame[this.state][this.frameAt], this.x, this.y, this.size, this.size);
    // change frame
    this.frameAt = this.frameAt + 1;
    // update pos in the x
    this.x = this.x + this.speed;
    // set lim to the x
    if(this.x > widthIn-this.size){
      this.x = widthIn - this.size;
      this.stop();
    }else if(this.x < 0){
      this.x = 0;
      this.stop();
    }
    // update time for jumping
    if(this.timerOn){
      this.timer++;
    }else if (this.state == 2) {
      this.state = 0;
    }
    // update y pos
    if(this.y > this.yFloor){
      this.timer = 0;
      this.timerOn = false;
    }
    var timeAT = this.timer/(worldSpeedIn/2);
    this.y = this.yFloor + ((0-this.yv)*(timeAT)) + ((1/2)*(0-this.ya)*((timeAT)*(timeAT)));
  }
}
