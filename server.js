var express = require("express");
var bodyParser = require("body-parser");
var studentRoutes = require("./tasks-routes");
var app = express();
app.use(bodyParser.json());
app.use("/", tasksRoutes);

var server = app.listen(3000,function() {
  var port = server.address().port;
  console.log("App's server listening at http://localhost:%s", port);

});
