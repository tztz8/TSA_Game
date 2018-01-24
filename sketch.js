var floorLight, floor;
var seling, selingLeft, selingRight;
var atI;
var f1r = false;
var f2r = false;

function setup() {
  var myCanvas = createCanvas(tilesSet.width*tilesSet.size, tilesSet.height*tilesSet.size); // I save this to a variable so i can chage this about it
  myCanvas.parent('myContainer'); // I am tell the p5 scrip to put the canvas where i have the id of myContainer
  background("#00F1D3");// set the background to blue
  floorLight = loadImage("assets/images/gameart2d_com/png/Tiles/BGTile (1).png");
  floor = loadImage("assets/images/gameart2d_com/png/Tiles/BGTile (2).png");
  seling = loadImage("assets/images/gameart2d_com/png/Tiles/Tile (10).png");
  selingLeft = loadImage("assets/images/gameart2d_com/png/Tiles/Tile (9).png");
  selingRight = loadImage("assets/images/gameart2d_com/png/Tiles/Tile (11).png");
}

function draw() {
  image(selingLeft, 0, 0, tilesSet.size, tilesSet.size);
  for (var i = 0; i < tilesSet.width;i = i + 2){
    image(floorLight, i*tilesSet.size, height-tilesSet.size, tilesSet.size, tilesSet.size);
    if (i != 0){
      if (i != tilesSet.width-1){
        image(seling, i*tilesSet.size, 0, tilesSet.size, tilesSet.size);
      }
    }
  }
  for (var i = 1; i < tilesSet.width;i = i + 2){
    image(floor, i*tilesSet.size, height-tilesSet.size, tilesSet.size, tilesSet.size);
    if (i != 0){
      if (i != tilesSet.width-1){
        image(seling, i*tilesSet.size, 0, tilesSet.size, tilesSet.size);
      }
    }
  }
  image(selingRight, width-tilesSet.size, 0, tilesSet.size, tilesSet.size);
}
