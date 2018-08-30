
var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;


app.get("/:calc/:num1/:num2",
    function(req, res) {
        var cmd = req.params.calc;
        var num1 = parseInt(req.params.num1);
        var num2 = parseInt(req.params.num2);

        switch(cmd){
            case "add":
                res.send(num1 + num2);
                break;
            case "subtract":
                res.send(num1 - num2);
                break;
            case "multiply":
                res.send(num1*num2);
                break;
            case "divide":
                res.send(num1 / num2);
                break;
            default:
                return res.send("That is not a valid command: Use add, subtract, multiply, divide");
        }
    })

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });