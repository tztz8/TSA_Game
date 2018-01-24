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
