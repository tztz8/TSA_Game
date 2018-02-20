// make var to store the floor and selimg
var floorNormalimg;// set up normal tip of tile floor
var floorLightimg;// set up light tip of tile floor
var selingNormalimg;// set up seling floor
// make the player
var player1 = new player();
// var to know the speed of this world
var worldSpeed = 24;// Set to 24
var worldSpeedStart = worldSpeed;// to beable to chane the speed of the world by remebeing the normal speed
// 
var runingSpeed = 8;
var jumpV = 300;

function preload(){
  player1.load();
  floorNormalimg = loadImage("assets/images/gameart2d_com/png/Tiles/BGTile (2).png");
  floorLightimg = loadImage("assets/images/gameart2d_com/png/Tiles/BGTile (1).png");
  selingNormalimg = loadImage("assets/images/gameart2d_com/png/Tiles/Tile (10).png");
}

function setup() {
  var myCanvas = createCanvas(tilesSet.width*tilesSet.size, tilesSet.height*tilesSet.size); // I save this to a variable so i can chage this about it
  myCanvas.parent('myContainer'); // I am tell the p5 scrip to put the canvas where i have the id of myContainer

  // seting up the floor amd seling
  setupFloor(floorNormalimg, floorLightimg);
  setupSeling(selingNormalimg);

  // set player inshal place
  player1.x = 0;
  player1.y = 245;
  player1.yFloor = 245;
}

function draw() {
  frameRate(worldSpeed);
  background("#00F1D3");// set the background to blue
  for(var i = 0; i < tilesSet.width; i++){
    gameFloor[i].show();
    seling[i].show();
  }
  player1.show(width, worldSpeedStart);

  // User Input
  if (keyIsDown(LEFT_ARROW)){
    player1.run(0-runingSpeed);
  }else if (keyIsDown(RIGHT_ARROW)){
    player1.run(runingSpeed);
  }else if (keyIsDown(65)){// a = 65
    player1.run(0-runingSpeed);
  }else if (keyIsDown(68)){// d = 68
    player1.run(runingSpeed);
  }
  if (keyIsDown(UP_ARROW)){
    player1.jump(jumpV);
  }else if (keyIsDown(DOWN_ARROW)){
    player1.stop();
  }else if (keyIsDown(87)){// w = 87
    player1.jump(jumpV);
  }else if (keyIsDown(83)){// s = 83
    player1.stop();
  }
}

function resetAll(){
  worldSpeed = worldSpeedStart;
  player1.stop();
  player1.x = 0;
  player1.yv = 0;
  player1.timer = 0;
  player1.timerOn = false;
  player1.y = player1.yFloor;
}

function keyTyped() {
  switch (key) {
    case 'r':
      resetAll();
      break;
    case '1':
      worldSpeed = worldSpeedStart*0.5;
      break;
    case '2':
      worldSpeed = worldSpeedStart;
      break;
    case '3':
      worldSpeed = worldSpeedStart*2;
      break;
    default:
    //alert("That key is not in use key:"+key);
  }
}
