//Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var exphbrs = require("express-handlebars");
var mysql = require("mysql");
//create express app
var app = express();

//Deployment
var PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

app.engine("handlebars", exphbrs({
    defaultLayout: "main" //, extname: ".hbs"
}));
app.set("view engine", "handlebars"); 
                        //".hbs"

var connection = mysql.createConnection({
    host: "localhost",
    port: 8889,
    user: "root",
    password: "root",
    database: "wishesDB"
});

console.log("connected as id " + connection.threadId);

//Set Routes
app.get("/", function(req, res){
    connection.query("SELECT * FROM wishes;", function(err, data){
        if(err) throw err;
        res.render("index", { 
            wishes: data 
        });
    });
});

app.post("/", function(req, res){
    connection.query("INSERT INTO wishes (wish) VALUES (?)", [req.body.wish], function(err, result){
        if(err) throw err;
        res.redirect("/");
    })
})

//activate server
app.listen(PORT, function(){
    console.log("Server listening on: http://localhost:" + PORT);
});