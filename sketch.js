var floorLight, floor;
var seling, selingLeft, selingRight;

function setup() {
  var myCanvas = createCanvas(720, 400); // I save this to a variable so i can chage this about it
  myCanvas.parent('myContainer'); // I am tell the p5 scrip to put the canvas where i have the id of myContainer
  background("#00F1D3");// set the background to blue
  floorLight = loadImage("assets/images/gameart2d_com/png/Tiles/BGTile (1).png");
  floor = loadImage("assets/images/gameart2d_com/png/Tiles/BGTile (2).png");
  seling = loadImage("assets/images/gameart2d_com/png/Tiles/Tile (10).png");
  selingLeft = loadImage("assets/images/gameart2d_com/png/Tiles/Tile (9).png");
  selingRight = loadImage("assets/images/gameart2d_com/png/Tiles/Tile (11).png");
}

function draw() {
  image(selingLeft, 0, 0, 80, 80);
  for (var i = 0; i < 8;i = i + 2){
    image(floorLight, i*80, height-80, 80, 80);
    if(i != 0 || i != 8){
      image(seling, i*80, 0, 80, 80);
    }
  }
  for (var i = 1; i < 8;i = i + 2){
    image(floor, i*80, height-80, 80, 80);
    image(seling, i*80, 0, 80, 80);
  }
  image(selingRight, width-80, 0, 80, 80);
}
