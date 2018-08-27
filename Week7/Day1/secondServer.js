//http built in to Node.js
var http = require("http");

var PORT = 7000; //program can have multiple ports, but ports should never belong to more than one program

//picking the function we use is how routing works
function handleRequest(req, res){
    var path = req.url;
    switch(path){
        case "/":
            displayRoot();
            break;
        case "/portfolio":
            displayPortfolio();
            break;
        default:
            display404();
            break;
    }
    // response.end("It works! Path Hit " + req.url);
}

//create server and tell it how to handle requests
var server = http.createServer(handleRequest);


//create the server
server.listen(PORT, function(){
    //show where the server is
    console.log(`http://localhost:${PORT}`);
});

function displayPortfolio(url, req, res){
    var myHTML = 
    `
    <html>
        <body>
            <h1> Home Page </h1>
            <a href="/portfolio">Portfolio</a>
        </body>
    `
    res.writeHead(200, {"Content-Type: ": "text/html"});
    res.end(myHTML);
}

function displayRoot(url, req, res){
    res.end("here is the root");
}

function display404(url, req, res){
    var myHTML = 
    `
    <html>
        <body>
            <h1> 404 </h1>
            FORBIDDEN
        </body>
    `
    res.writeHead(404, {"Content-Type: ": "text/html"});
    res.end(myHTML);
}

/*
SOLUTION

var http = require("http");

var PORT = 7000;

function handleRequest(req, res){
  var path = req.url
  switch(path){
    case "/":
      displayRoot(path, req, res);
      break;
    case "/portfolio":
      displayPortfolio(path, req, res);
      break
    default:
      display404(path, req, res);
      break;
  }
  //response.end(`I SAY SOMETHING NICE, AS HUMANS.. I MEAN WE.... OFTEN DO`);
}

function displayRoot(url, req, res){
  var myHTML =
  `
    <html>
      <body>
        <h1>Home Page</h1>
        <a href="/portfolio">Portfolio</a>
      </body>
    </html>
  `
  res.writeHead(200, { "Content-Type": "text/html"})
  res.end(myHTML);
}

function displayPortfolio(url, req, res){
  var myHTML =
  `
    <html>
      <body>
        <h1>My Portfolio Page</h1>
        <a href="/">Home</a>
      </body>
    </html>
  `
  res.writeHead(200, { "Content-Type": "text/html"})
  res.end(myHTML);
}

function display404(url, req, res){
  var myHTML =
  `
    <html>
      <body>
        <h1>PAY NO ATTENTION TO THE MAN BEHIND THE CURTAIN (Page: ${url} not found)</h1>
      </body>
    </html>
  `
  res.writeHead(404, { "Content-Type": "text/html"})
  res.end(myHTML);
}

var server = http.createServer(handleRequest);

server.listen(PORT, function(){
  console.log(`Server listening on http://localhost:${PORT}`);
})

*/