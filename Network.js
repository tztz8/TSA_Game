var socket;
var mPlayers = [];
var mpCRF = false;

function connect(){
  if(!mpCRF){
    // connect to the server, get the url/port from the box on the page
    socket = io.connect(document.getElementById("network").elements[0].value);
    socket.on("payerM", updateMP);// say wich function to run when get a nother palyer data come in
    socket.on("worldSpeed", updateWS);// say when resave worldspeed run updateWS
    //socket.on("newPlayer", newMPlayer);
    setTimeout(CheckConnect, 500);
    console.log(document.getElementById("network").elements[0].value);
    mpCRF = true;
  }else{
    alert("ether try to connect or is connect refresh the page to chage url");
  }
}

function CheckConnect () {
    //console.log('check 1', socket.connected);
    if (!socket.connected){
        alert("The server is not working at this time");
    }else{
        //socket.emit('update', "resave");
    }
    mpF = true;
}

function updateWS(data){
  worldSpeed = data;
  worldSpeedBefore = worldSpeed;
}

function updateMP(data){
  //console.log(data);

  // check if new person
  var newPlayerIF = true;
  for(var i = 0; i < mPlayers.length; i++){
    // update the player
    if (mPlayers[i].id == data.id){
      newPlayerIF =  false;
      mPlayers[i].playerData = data.playerData;
      break;
    }
  }

  // if new person add them
  if (newPlayerIF){
    mPlayers.push(data);
  }
}

/*
function newMPlayer(data){

}*/
