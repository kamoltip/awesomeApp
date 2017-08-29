// html routes


//dependencies
var path = require("path");


//routes

module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads home.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

  app.get("/chatroom", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/chatroom2.html"));
  });

  // about route loads about.html
  app.get("/about", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/about.html"));
  });

  app.get("/technology", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/technology.html"));
  });

  //route to ID 

};