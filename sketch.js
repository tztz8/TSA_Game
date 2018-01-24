var floorLight, floor;
var seling, selingLeft, selingRight;
var atI;
var f1r = false;
var f2r = false;

var widthTiles = 9;
var heightTiles = 5;
var sizeTiles = 80;

function setup() {
  var myCanvas = createCanvas(widthTiles*sizeTiles, heightTiles*sizeTiles); // I save this to a variable so i can chage this about it
  myCanvas.parent('myContainer'); // I am tell the p5 scrip to put the canvas where i have the id of myContainer
  background("#00F1D3");// set the background to blue
  floorLight = loadImage("assets/images/gameart2d_com/png/Tiles/BGTile (1).png");
  floor = loadImage("assets/images/gameart2d_com/png/Tiles/BGTile (2).png");
  seling = loadImage("assets/images/gameart2d_com/png/Tiles/Tile (10).png");
  selingLeft = loadImage("assets/images/gameart2d_com/png/Tiles/Tile (9).png");
  selingRight = loadImage("assets/images/gameart2d_com/png/Tiles/Tile (11).png");
}

function draw() {
  image(selingLeft, 0, 0, sizeTiles, sizeTiles);
  for (var i = 0; i < widthTiles;i = i + 2){
    image(floorLight, i*sizeTiles, height-sizeTiles, sizeTiles, sizeTiles);
    if (i != 0){
      if (i != widthTiles-1){
        image(seling, i*sizeTiles, 0, sizeTiles, sizeTiles);
      }
    }
  }
  for (var i = 1; i < widthTiles;i = i + 2){
    image(floor, i*sizeTiles, height-sizeTiles, sizeTiles, sizeTiles);
    if (i != 0){
      if (i != widthTiles-1){
        image(seling, i*sizeTiles, 0, sizeTiles, sizeTiles);
      }
    }
  }
  image(selingRight, width-sizeTiles, 0, sizeTiles, sizeTiles);
}
