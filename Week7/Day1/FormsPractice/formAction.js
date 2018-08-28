var http = require("http");

var PORT = 8080;

var server = http.createServer(handleRequest);

function handleRequest(req, res){
    var path = req.url;
    switch (path){
        default:
            return renderWelcomPage(req, res);
    }
    fs.readFile(__dirname + path + ".html", function(err, data) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      });
}

server.listen(PORT, function(){
    console.log("Sever listening on: http://localhost:" + PORT);
});

renderWelcomPage(req, res){
    fs.readFile(__dirname + "/index.html", function(err, data){
        res.writeHead(200, {"Content-Type": "text/html"});
    });
    res.end(data);
}