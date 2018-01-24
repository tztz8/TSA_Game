

function setup() {
  var myCanvas = createCanvas(tilesSet.width*tilesSet.size, tilesSet.height*tilesSet.size); // I save this to a variable so i can chage this about it
  myCanvas.parent('myContainer'); // I am tell the p5 scrip to put the canvas where i have the id of myContainer
  background("#00F1D3");// set the background to blue

  // seting up the floor amd seling
  setupFloor();
  setupSeling();

}

function draw() {
  for(var i = 0; i < tilesSet.width; i++){
    floor[i].show();
    seling[i].show();
  }
}
