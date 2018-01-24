var floor = new Array;
var seling = new Array;

function setup() {
  var myCanvas = createCanvas(tilesSet.width*tilesSet.size, tilesSet.height*tilesSet.size); // I save this to a variable so i can chage this about it
  myCanvas.parent('myContainer'); // I am tell the p5 scrip to put the canvas where i have the id of myContainer
  background("#00F1D3");// set the background to blue

  // seting up the floor
  var floorNormal = loadImage("assets/images/gameart2d_com/png/Tiles/BGTile (2).png");
  var floorLight = loadImage("assets/images/gameart2d_com/png/Tiles/BGTile (1).png");
  for(var i = 0; i < tilesSet.width; i++){
    if (0 == i % 2){
      floor[i] = new tile(i*tilesSet.size,
         height-tilesSet.size,
         floorLight,
         tilesSet.size);
    }else if (Math.abs(i % 2) == 1) {
      floor[i] = new tile(i*tilesSet.size,
         height-tilesSet.size,
         floorNormal,
         tilesSet.size);
    }else {
      alert("something went wrong");
      debugger;
    }
  }

}

function draw() {
  for(var i = 0; i < tilesSet.width; i++){
    floor[i].show();
  }
}
