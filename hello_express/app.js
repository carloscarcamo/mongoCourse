var express = require("express"),
    app = express();

app.get('/', function(req, res){
    res.send("Hello world!")
});

app.get('*', function(req, res){
    res.send("Page not found", 404);
});
app.listen(8080);

console.log("Server running at http://localhost:8080");
