var floorNormalimg;
var floorLightimg;
var selingNormalimg;

var player1 = new player();

function preload(){
  player1.load();
  floorNormalimg = loadImage("assets/images/gameart2d_com/png/Tiles/BGTile (2).png");
  floorLightimg = loadImage("assets/images/gameart2d_com/png/Tiles/BGTile (1).png");
  selingNormalimg = loadImage("assets/images/gameart2d_com/png/Tiles/Tile (10).png");
}
function setup() {
  var myCanvas = createCanvas(tilesSet.width*tilesSet.size, tilesSet.height*tilesSet.size); // I save this to a variable so i can chage this about it
  myCanvas.parent('myContainer'); // I am tell the p5 scrip to put the canvas where i have the id of myContainer
  background("#00F1D3");// set the background to blue

  // seting up the floor amd seling
  setupFloor(floorNormalimg, floorLightimg);
  setupSeling(selingNormalimg);

  // set player inshal place
  player1.x = 0;
  player1.y = height / 2;
}

function draw() {
  for(var i = 0; i < tilesSet.width; i++){
    floor[i].show();
    seling[i].show();
  }
  player1.show();
}
