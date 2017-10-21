var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var path = require("path");

var app = express();
var port = process.env.PORT || 8080;


// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "/public/index.html"))
})

app.listen(port, function(err){
  if(err) {
    return console.log(err);
  }
  console.log("listening on Port " + port);
});
