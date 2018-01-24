var testPNG;

function setup() {
  var myCanvas = createCanvas(720, 400); // I save this to a variable so i can chage this about it
  myCanvas.parent('myContainer'); // I am tell the p5 scrip to put the canvas where i have the id of myContainer
  background("#00F1D3");// set the background to blue
  testPNG = loadImage("assets/images/gameart2d_com/png/Tiles/BGTile (1).png")
}

function draw() {
  image(testPNG, 0, 0);
}
