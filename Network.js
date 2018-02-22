var socket;
var mPlayers = [];
var mpCRF = false;

// start the connext to the server proces
function connect(){
  if(!mpCRF){ // to check if we are alread connect or trying to connect
    // connect to the server, get the url/port from the box on the page
    socket = io.connect(document.getElementById("network").elements[0].value);
    socket.on("payerM", updateMP);// say wich function to run when get a nother palyer data come in
    socket.on("payerMR", removeMPlayer);// when resaving playerMR run removeMPlayer
    socket.on("worldSpeed", updateWS);// when resave worldspeed run updateWS
    setTimeout(CheckConnect, 600);// after a hafe of a secent check if we are connect
    mpCRF = true;// set the flag that we try to conect
  }else{
    /* alert the users that thay need to refresh the page to reset the fage's and var
      to connect to a difrent URL andor Port */
    alert("ether try to connect or is connect refresh the page to chage url");
  }
}

// check if we are connect to the game server
function CheckConnect () {
    if (!socket.connected){
      // tell the users that is has not yet got connect to the server
      alert("The server is not working at this time");
    }
    mpF = true; // Set the Multipayer flag to on-True
}

// update the world speed from the server
function updateWS(data){
  worldSpeed = data;
  worldSpeedBefore = worldSpeed;
}

// update the Multipayer or add a new player
function updateMP(data){
  //console.log(data);

  // check if new person
  var newPlayerIF = true;
  for(var i = 0; i < mPlayers.length; i++){
    // update the player
    if (mPlayers[i].id == data.id){
      newPlayerIF =  false;
      mPlayers[i].playerData = data.playerData;
      break; // to stop runing code that it doesnt need to
    }
  }

  // if new person add them
  if (newPlayerIF){
    mPlayers.push(data);
  }
}

// remove a Multipayer that disconnect from the server
function removeMPlayer(data){
  mPlayers = mPlayers.filter(function(item){
    return item.id != data;
  })
}
