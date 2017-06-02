var express = require("express");
var http    = require("http");
var config  = require("./config.js");
var routes   = require("./routes.js");
var routessignup = require("./routessignup.js");
var app      = express();
app.use( express.static( __dirname  + '/../client' ) );
console.log(__dirname);
app.get('/login/:username', routes.login);
app.get('*',routes.defaultPage);
app.listen(config.port, function() {
   console.log('Express server listening on port ' , config.port);
} );
