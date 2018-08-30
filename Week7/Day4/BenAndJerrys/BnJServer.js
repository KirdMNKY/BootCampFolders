//Dependencies
var express = require("express");
var exphbs = require("express-handlebars");

//Instantiate express app
var app = express();

//PORT for Heroku
var PORT = process.env.PORT || 8080;

//Handlebars setup
app.engine("handlebars", exphbs({
    defaultLayout: "main"}));
app.set("view engine", "handlebars");

//DATA!!
var icecreams = 
[
    {
        name: 'vanilla', 
        price: 10, 
        awesomeness: 3
    },  
    {
        name: 'chocolate', 
        price: 4, 
        awesomeness: 8
    },  
    {
        name: 'banana', 
        price: 1, 
        awesomeness: 1
    },  
    {
        name: 'greentea', 
        price: 5, 
        awesomeness: 7
    },  
    {
        name: 'jawbreakers', 
        price: 6, 
        awesomeness: 2
    }
];

//Routes

app.get("/icecreams", function(req, res){
    res.render("index", {icecreams: icecreams});
});

app.get("/icecreams/:name", function(req, res){
    var flavor = res.params.name;
    res.render("", flavor);
});

app.listen(PORT, function(){
    console.log("server listening on http://localhost:" + PORT);
})
