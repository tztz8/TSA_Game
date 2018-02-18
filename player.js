/*
* States
* 0 = Idle
* 1 = Run
* 2 = Jump
*/
class player {
  constructor(){
    // things need for x pos
    this.x = 0;
    this.speed = 0;
    this.rTimer = 0;
    this.rTimerOn = false;
    // things need for y pos
    this.yFloor = 0;
    this.y = 0;
    this.yv = 0;
    this.ya = -600;
    this.jTimer = 0;
    this.jTimerOn = false;
    // things need for frame
    this.frameAt = 1;
    this.frameNumber = [];
    this.frameNumberAt = 10;
    this.frame = [];
    this.state = 0;
    this.size = 80;
  }

  load(){
    // set each frame sate to a ary for the next sete
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
    if(!this.rTimerOn){
      this.rTimerOn = true;
      this.rTimer = 0;
    }
    this.state = 1;
  }

  jump(velocity){
    this.yv = velocity;
    if(!this.jTimerOn){
      this.jTimerOn = true;
      this.jTimer = 0;
    }
    this.state = 2;
  }

  stop(){
    this.speed = 0;
    this.rTimerOn = false;
    this.rTimer = 0;
    this.state = 0;
  }

  show(widthIn, worldSpeedIn){
    // seting crect state
    if(this.jTimerOn){
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
    // update speed
    if(this.rTimerOn){
      this.rTimer++;
      if(this.speed > 0){
        this.speed = this.speed - (this.rTimer/(worldSpeedIn));
        if(!(this.speed > 0)){
          this.stop();
        }
      }else if(this.speed < 0){
        this.speed = this.speed + (this.rTimer/(worldSpeedIn));
        if(!(this.speed < 0)){
          this.stop();
        }
      }

      if(this.speed == 0){
        this.stop();
        console.log("stop");
      }
    }
    // update time for jumping
    if(this.jTimerOn){
      this.jTimer++;
    }else if (this.state == 2) {
      this.state = 0;
    }
    // update y pos
    if(this.y > this.yFloor){
      this.jTimer = 0;
      this.jTimerOn = false;
    }
    var timeAT = this.jTimer/(worldSpeedIn/2);
    this.y = this.yFloor + ((0-this.yv)*(timeAT)) + ((1/2)*(0-this.ya)*((timeAT)*(timeAT)));
  }
}
