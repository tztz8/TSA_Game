var socket;

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
  //data.superShow();
}

/*
function newMPlayer(data){

}*/
