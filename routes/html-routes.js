// html routes


//dependencies
var path = require("path");


//routes

module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads home.html
  app.get("/", function(req, res) {
    res.render("home");
  });

  app.get("/chatroom2", function(req, res) {
    res.render("chatroom2");
  });

  // about route loads about.html
  app.get("/about", function(req, res) {
    res.render("about");
  });

  app.get("/technology", function(req, res) {
    res.render("technology");
  });

  //route to ID 

};