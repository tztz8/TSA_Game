// make var to store the floor and selimg
var floorNormalimg;// set up normal tip of tile floor
var floorLightimg;// set up light tip of tile floor
var selingNormalimg;// set up seling floor
// make the player
var player1 = new player();
// player images
var playerImg = [];
var playerImgNumber = [];
// var to know the speed of this world
var worldSpeed = 24;// Set to 24
var worldSpeedStart = worldSpeed;// to beable to chane the speed of the world by remebeing the normal speed
var worldSpeedBefore = worldSpeed;
//
var runingSpeed = 8;
var jumpV = 300;
// Multipayer Flage
var mpF = false;

function preload(){
  // load default player imges
  // set each frame sate to a ary for the next sete
  for(var i = 0; i < 3; i++){
    playerImg[i] = [];
  }
  // Load imges
  playerImgNumber[0] = 10;
  for(var i = 1;i < 11; i++){ // Load Idle
    playerImg[0][i] = loadImage("assets/images/gameart2d_com/png/Idle (" + i + ").png");
  }
  playerImgNumber[1] = 8
  for(var i = 1;i < 9; i++){ // Load Run
    playerImg[1][i] = loadImage("assets/images/gameart2d_com/png/Run (" + i + ").png");
  }
  playerImgNumber[2] = 10
  for(var i = 1;i < 11; i++){ // Load Jump
    playerImg[2][i] = loadImage("assets/images/gameart2d_com/png/Jump (" + i + ").png");
  }

  // load tiles
  floorNormalimg = loadImage("assets/images/gameart2d_com/png/Tiles/BGTile (2).png");
  floorLightimg = loadImage("assets/images/gameart2d_com/png/Tiles/BGTile (1).png");
  selingNormalimg = loadImage("assets/images/gameart2d_com/png/Tiles/Tile (10).png");
}

function setup() {
  var myCanvas = createCanvas(tilesSet.width*tilesSet.size, tilesSet.height*tilesSet.size); // I save this to a variable so i can chage this about it
  myCanvas.parent('myContainer'); // I am tell the p5 scrip to put the canvas where i have the id of myContainer

  // setup grid
  setUpGrid();

  // seting up the floor amd seling
  setupFloor(floorNormalimg, floorLightimg);
  setupSeling(selingNormalimg);

  // set player inshal place and give the player it imges
  player1.x = 0;
  player1.y = 245;
  player1.yFloor = 245;
  player1.frame = playerImg;
  player1.frameNumber = playerImgNumber;
}

function draw() {
  // if Multipayer is on change the speed of other players world to mach this world
  if(mpF){
    //worldSpeed = worldSpeedStart;
    if(!(worldSpeed == worldSpeedBefore)){
      socket.emit("worldSpeed", worldSpeed);
      worldSpeedBefore == worldSpeed;
    }
  }
  frameRate(worldSpeed);// imperment the worldSpeed

  background("#00F1D3");// set the background to blue

  // draw the floor and seling
  for(var i = 0; i < tilesSet.width; i++){
    for(var v = 0; v < tilesSet.height; v++){
      if(!(grid[v][i] == undefined)){
        grid[v][i].show();
      }
    }
  }
  // draw the Multipayers if Multipayer is on
  if(mpF){
    for(var i = 0; i < mPlayers.length; i++){
      image(playerImg[mPlayers[i].playerData.state][mPlayers[i].playerData.frameAt], mPlayers[i].playerData.x, mPlayers[i].playerData.y, mPlayers[i].playerData.size, mPlayers[i].playerData.size);
    }
  }
  // draw and update the player
  player1.show(width, worldSpeedStart);

  // update the data box
  document.getElementById('dataBox').innerHTML = ("<p>WorldSpeed is at:" + worldSpeed +
    "<br>Number of Players:" + (mPlayers.length+1) +
    "<br>Size of You:" + (player1.size) + "</p>");

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
  player1.size = 80;
}

function keyTyped() {
  switch (key) {
    case 'r':
      resetAll();
      break;
    case '1':
      worldSpeed = worldSpeed*0.75;
      break;
    case '2':
      worldSpeed = worldSpeedStart;
      break;
    case '3':
      worldSpeed = worldSpeed*1.25;
      break;
    case 'z':
      player1.size = player1.size*0.75;
      break;
    case 'x':
      player1.size = 80;
      break;
    case 'c':
      player1.size = player1.size*1.25;
      break;
    default:
    //alert("That key is not in use key:"+key);
  }
}
