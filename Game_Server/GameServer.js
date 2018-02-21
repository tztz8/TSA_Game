// Server set up

// Pulling in the library (express)
var express = require('express');

// Launch the library and set the library to app
var app = express();

// files libary
//var fs = require('fs');
// https prodicall libary
//var https = require('https');

// the files need for https
//var options = {
    //key: fs.readFileSync('./privkey.pem').toString(),
    //cert: fs.readFileSync('./cert.pem').toString()
//};

// Set a port listener to server at a port (port:8192)
var server = app.listen(8181); // not https
//var server = https.createServer(options, app).listen(8181);

// this line of code is to host files on the port --> library.use(name of library.not changing files(folder));
//app.use(express.static('puplic'));

//var helmet = require('helmet');
//app.use(helmet());

// Show that the Server is running
console.log("My server is running");

// ----------------------------------------------------
// socket set up
// ----------------------------------------------------

// Pulling in the library (socket.io)
var socket = require('socket.io');

// Launch the library and set the library to in put, out put (io) and tell the library where the server is
var io = socket(server);

// call the libary (io.socket) then say when a connection happen ('connection') then launch function (newConnection)
io.sockets.on('connection', newConnection);

//var nUsers = 0;

function newConnection(socket){
  // show new users
  console.log("New connection ID:" + socket.id);

  // tell players of this user
  //nUsers++;
  //io.sockets.emit("newPlayer", nUsers);

  // reseave player data
  socket.on("playerC", broadcastPlayer);
  function broadcastPlayer(data){
    var dataSend = {
      id: socket.id,
      playerData: data
    }
    socket.broadcast.emit("payerM", dataSend);
  }

  // when a payer disconnect
  socket.on('disconnect', function(data) {
    console.log('disconnect id:' + socket.id);
  });
}
