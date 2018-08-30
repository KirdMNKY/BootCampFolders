var express = require("express");
var mysql = require("mysql");
var chartRoutes = ;




var router = express.Router();




// function chartRoutes(app, connection){
//     app.get("/:attitude/:attVal", function(req, res){
//         var att = req.params.attitude;
//         var val = req.params.attVal;
    
//         for (var i = 0; i < characters.length; i++){
//             if(att === characters.attitude.val){
//                 return res.send(characters[i]);
//             }
//         }
//         res.sendFile(path.join(__dirname, "index.html"))
//     });
    
//     app.get("/", function(req, res){
//         res.sendFile(path.join(__dirname, "index.html"))
//     });
// }