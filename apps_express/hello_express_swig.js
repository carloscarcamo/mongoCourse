var express = require("express"),
    app = express(),
    cons = require('consolidate');

app.engine('html', cons.swig);
app.set('view engine', 'html');
app.set('views', __dirname + "/public_html");

app.get("/", function(req, res){
    res.render("index", {'name':'swig'});
});

app.get("*", function(req, res){
    res.send("Page not found", 404);
});

app.listen(8080);

console.log("Server running at http://localhost:8080");
