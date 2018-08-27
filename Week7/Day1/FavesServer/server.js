//requires
var http = require("http");
var fs = require("fs");

//PORT
var PORT = 8080;

var server = http.createServer(handleRequest);

function handleRequest(req, res){
    var path = req.url;
    switch(path){
        case "/index.html":
            callIndex(path, req, res);
            break;
        case "/foods.html":
            callFoods(path, req, res);
            break;
        case "/movies.html":
            callMovies(path, req, res);
            break;
        case "/frameworks.html":
            callFrameworks(path, req, res);
            break;
        default:
            callError(path, req, res);
    }
}

function callIndex(path, req, res){
    fs.readFile(__dirname + "/index.html", function(err, data){
        if(err){
            res.writeHead(500);
            res.end("Something has gone wrong (Could not read HTML file.");
        }
        res.writeHead(200, {"Content-Type": "text/html"});
        res.end(data);
    });
}

function callFoods(path, req, res){
    fs.readFile(__dirname + "/foods.html", function(err, data){
        if(err){
            res.writeHead(500);
            res.end("Something has gone wrong (Could not read HTML file.");
        }
        res.writeHead(200, {"Content-Type": "text/html"});
        res.end(data);
    });
}

function callFoods(path, req, res){
    fs.readFile(__dirname + "/foods.html", function(err, data){
        if(err){
            res.writeHead(500);
            res.end("Something has gone wrong (Could not read HTML file.");
        }
        res.writeHead(200, {"Content-Type": "text/html"});
        res.end(data);
    });
}

function callMovies(path, req, res){
    fs.readFile(__dirname + "/movies.html", function(err, data){
        if(err){
            res.writeHead(500);
            res.end("Something has gone wrong (Could not read HTML file.");
        }
        res.writeHead(200, {"Content-Type": "text/html"});
        res.end(data);
    });
}

function callFrameworks(path, req, res){
    fs.readFile(__dirname + "/frameworks.html", function(err, data){
        if(err){
            res.writeHead(500);
            res.end("Something has gone wrong (Could not read HTML file.");
        }
        res.writeHead(200, {"Content-Type": "text/html"});
        res.end(data);
    });
}

function callError(path, req, res){
    
    res.writeHead(500);
    res.end("Something has gone wrong (Could not read HTML file.");

}


server.listen(PORT, function(){
    console.log("Server is listening on PORT: " + PORT);
})