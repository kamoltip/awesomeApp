// *********************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
// *********************************************************************************

// Dependencies
// =============================================================
var express = require("express");
// var bodyParser = require("body-parser");
var app = express();
var http = require("http").Server(app);
var sio = require("socket.io")(http);

var handlebars = require("express-handlebars");
// Sets up the Express App
// =============================================================

// var PORT = process.env.PORT || 8080;

// require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);

sio.on('connection', function(socket){
  socket.on('chat message', function(msg) {
  	sio.emit('chat message', msg);
  });
  // socket.on('disconnect', function(){
  //   console.log('user disconnected');
  // });
});

app.engine('handlebars', handlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

http.listen(3000, function() {
	console.log('listening on *:3000')
});

// // Sets up the Express app to handle data parsing
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.text());
// app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// // Static directory
// app.use(express.static("./public"));

// // Routes
// // =============================================================
// require("./routes/api-routes.js")(app);

// // Starts the server to begin listening
// // =============================================================
// app.listen(PORT, function() {
//   console.log("App listening on PORT " + PORT);
// });
