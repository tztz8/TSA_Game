var socket;
var mPlayers = [];

function connect(){
  socket = io.connect(document.getElementById("network").elements[0].value);
  socket.on("payerM", updateMP);
  //socket.on("newPlayer", newMPlayer);
  setTimeout(CheckConnect, 500);
  console.log(document.getElementById("network").elements[0].value);
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

function updateMP(data){
  console.log(data);

  // check if new person
  var newPlayerIF = true;
  for(var i = 0; i < mPlayers.length; i++){
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
  //mPlayers[data.id]
  //data.superShow();
}

/*
function newMPlayer(data){

}*/
