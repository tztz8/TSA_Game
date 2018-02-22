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

  run(speed){
    this.speed = speed;
    this.rTimer = 0;
    if(!this.rTimerOn){
      this.rTimerOn = true;
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
    // Multipayer
    if(mpF){ // check is Online Multipayer is true
      //console.log(this);
      var data = {// setingup the data need only to remove lage
        state: this.state,
        frameAt: this.frameAt,
        x: this.x-5,
        y: this.y,
        size: this.size
      }
      socket.emit("playerC", data);// seding the data to the server
    }
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
        this.speed = this.speed - (this.rTimer/(worldSpeedIn/5));
        if(!(this.speed > 0)){
          this.stop();
        }
      }else if(this.speed < 0){
        this.speed = this.speed + (this.rTimer/(worldSpeedIn/5));
        if(!(this.speed < 0)){
          this.stop();
        }
      }

      if(this.speed == 0){
        this.stop();
      }
    }
    // update the y floor posishon
    this.yFloor = (((height-tilesSet.size)+10)-this.size);
    // update time for jumping
    if(this.jTimerOn){
      this.jTimer++;
    }else if (this.state == 2) {
      this.state = 0;
    }
    // update y pos
    var timeAT = this.jTimer/(worldSpeedIn/2);
    this.y = this.yFloor + ((0-this.yv)*(timeAT)) + ((1/2)*(0-this.ya)*((timeAT)*(timeAT)));
    if(this.y > this.yFloor){
      this.y = this.yFloor;
      this.jTimer = 0;
      this.jTimerOn = false;
    }
  }
}
