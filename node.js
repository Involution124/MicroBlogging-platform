var http = require("http");
var path = require("path");
var exphbs = require("express-handlebars");


var express = require("express");
var app = express();

var database = require("./modules/mongo.js");


var server = http.createServer(app);

var homeRoute = require(path.join(__dirname, "routes", "homeRoute.js"));
var loginRoute = require(path.join(__dirname, "routes", "loginRoute.js"));

var loggedin=false;

app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "views"));
app.engine("handlebars", exphbs({
        defaultLayout: 'default',
        helpers: {
            loggedin: function(){
                return false;
                //Where login and session is parsed. 
            }
        }
    })
); 

app.use('/css', express.static(path.join(__dirname,"public", "css")));
app.use('/js', express.static(path.join(__dirname,"public", "js")));
app.use('/images', express.static(path.join(__dirname,"public", "images")));
app.use('/fonts', express.static(path.join(__dirname,"public", "fonts")));
        


if(process.argv.length!=3){
	console.log("Usage: " + process.argv[1] + " <port>");
	process.exit(1);
}

app.use("/login", loginRoute);

app.use(["/home","/"], homeRoute);


server.listen(process.argv[2], function(){
    console.log("Listening on port " + process.argv[2]); 
});;
