var express = require("express"),
    app = express(),
    cons = require('consolidate'),
    MongoClient = require("mongodb").MongoClient,
    server = require("mongodb").Server;



app.engine('html', cons.swig);
app.set('view engine', 'html');
app.set('views', __dirname + "/public_html");

var mongoclient = new MongoClient(new server('localhost', 27017,
					    {'native_parser': true}));
var db = mongoclient.db('estudiantes');


app.get("/", function(req, res){
    db.collection("usuario").findOne({}, function(err, doc){
	res.render("index", doc);	
    });
    
});

app.get("*", function(req, res){
    res.send("Page not found", 404);
});

mongoclient.open(function(err, mongoclient){
    if(err) throw err;
    app.listen(8080);
    console.log("Server running at http://localhost:8080");
});


