var express = require("express");
var mysql = require("mysql");

var PORT = process.env.PORT || 8080;
app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var characters = [
    {
        name: "Jerry Seinfeld",
        coolnessPoints: 10,
        attitude: "responsible"
    },
    {
        name: "Elaine Bennis",
        coolnessPoints: 8,
        attitude: "aloof"
    },
    {
        name: "George Costanza",
        coolnessPoints: 3,
        attitude: "dork"
    },
    {
        name: "Cosmo Kramer",
        coolnessPoints: 12,
        attitude: "doofus"
    },
    {
        name: "Newman",
        coolnessPoints: 2,
        attitude: "maniacal"
    },
];


app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "index.html"))
});

app.get("/:attitude/:attVal", function(req, res){
    var att = req.params.attitude;
    var val = req.params.attVal;

    for (var i = 0; i < characters.length; i++){
        if(att === characters.attitude.val){
            return res.send(characters[i]);
        }
    }
    res.sendFile(path.join(__dirname, "index.html"))
});

app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "index.html"))
});

app.listen(PORT, function(){
    console.log("Server listening on: http://localhost:" + PORT);
})