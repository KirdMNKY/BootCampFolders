var http = require("http");

var PORT1 = 7000;
var PORT2 = 7500;

var goodServer = http.createServer(handleGoodRequest);
var badServer = http.createServer(handleBadRequest);

goodServer.listen(PORT1, function(){
    console.log(`Sever listening on http://localhost:${PORT1}`);
});
badServer.listen(PORT2, function(){
    console.log(`Server listening on http://localhost${PORT2}`);
});

function handleGoodRequest(request, response){
    //get random phrase from list
    var quotes = [
        ["Stay Hungry. Stay Foolish.", "Steve Jobs"],
        ["Good Artists Copy, Great Artists Steal.", "Pablo Picasso"],
        ["Argue with idiots, and you become an idiot.", "Paul Graham"],
        ["Be yourself; everyone else is already taken.", "Oscar Wilde"],
        ["Simplicity is the ultimate sophistication.", "Leonardo Da Vinci"]
      ];
        console.log(quotes(Math.floor(Math.random)*10));
    response.end("You are an amazing individual with great skills and talents! Path Hit " + request.url);
    

    //use Twitter package to return random tweets

}
function handleBadRequest(request, response){
    //get random phrase from list
    var quotes = [
        ["Stay Hungry. Stay Foolish.", "Steve Jobs"],
        ["Good Artists Copy, Great Artists Steal.", "Pablo Picasso"],
        ["Argue with idiots, and you become an idiot.", "Paul Graham"],
        ["Be yourself; everyone else is already taken.", "Oscar Wilde"],
        ["Simplicity is the ultimate sophistication.", "Leonardo Da Vinci"]
    ];
    console.log(quotes(Math.floor(Math.random)*10));

     //use Twitter package to return random tweets
    response.end("You still have work to do on builing yourself up to be the best person you can be. Path Hit " + request.url);
    

}