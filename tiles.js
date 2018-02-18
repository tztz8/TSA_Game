var tilesSet = {
  width: 9,
  height: 5,
  size: 80
};

class tile {
  constructor(x, y, imgLd, size){
    this.x = x;
    this.y = y;
    this.img = imgLd;
    this.size = size;
  }

  show() {
    image(this.img, this.x, this.y, this.size, this.size);
  }
}

// seting up the floor
var gameFloor = new Array;
function setupFloor(floorNormal, floorLight) {
  for(var i = 0; i < tilesSet.width; i++){
    if (0 == i % 2){
      gameFloor[i] = new tile(i*tilesSet.size,
         height-tilesSet.size,
         floorLight,
         tilesSet.size);
    }else if (Math.abs(i % 2) == 1) {
      gameFloor[i] = new tile(i*tilesSet.size,
         height-tilesSet.size,
         floorNormal,
         tilesSet.size);
    }else {
      alert("something went wrong");
      debugger;
    }
  }
}

// seting up the floor
var seling = new Array;
function setupSeling(selingNormal) {
  for(var i = 0; i < tilesSet.width; i++){
    seling[i] = new tile(i*tilesSet.size,
       0,
       selingNormal,
       tilesSet.size);
  }
}
