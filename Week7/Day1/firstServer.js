//http built in to Node.js
var http = require("http");

var PORT = 8080; //program can have multiple ports, but ports should never belong to more than one program

//picking the function we use is how routing works
function handleRequest(request, response){
    response.end("It works! Path Hit " + request.url);
}

//create server and tell it how to handle requests
var server = http.createServer(handleRequest);


//create the server
server.listen(PORT, function(){
    //show where the server is
    console.log(`Sever listening on http://localhost:${PORT}`);
});