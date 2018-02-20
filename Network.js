var socket;

function connect(){
  socket = io.connect(document.getElementById("network").elements[0].value);
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
}
