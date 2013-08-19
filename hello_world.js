var http = require("http");

var server = http.createServer(function(request, response){
    response.writeHead(200, {"content-Type":"text/plin"});
    response.end("Hello, world\n");
});

server.listen(8080);

console.log("Server running at http://localhost:8080");
