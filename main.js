// load the http module
var http = require('http');

// configure our HTTP server
var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("Hello www.northropgrumman.com\n");
});

// listen on localhost:8050
server.listen(8050);
console.log("Server listening at http://127.0.0.1:8050/");
