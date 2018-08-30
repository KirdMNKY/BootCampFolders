// Dependencies
var express = require("express");
var mysql = require("mysql");

// Create instance of express app.
var app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

// MySQL DB Connection Information (remember to change this with our specific credentials)
var connection = mysql.createConnection({
  host: "localhost",
  port: 8889,
  user: "root",
  password: "root",
  database: "seinfeld"
});

// Initiate MySQL Connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Routes

app.get("/", function(req, res){
  res.send(
    `    
      <div>
        try /cast, /coolness-chart, or /attitude/:attitude instead.
      </div>
    `

  )
})


app.get("/cast", function(req, res) {
  connection.query("SELECT * FROM actors order by id", function(err, result) {
    var html = "<h1>Actors Ordered BY ID</h1>";

    html += "<ul>";

    for (var i = 0; i < result.length; i++) {
      html += "<li><p> ID: " + result[i].id + "</p>";
      html += "<p> Name: " + result[i].name + "</p>";
      html += "<p> Coolness Points: " + result[i].coolness_points + "</p>";
      html += "<p>Attitude: " + result[i].attitude + "</p></li>";
    }

    html += "</ul>";

    res.send(html);
  });
});

app.get("/coolness-chart", function(req, res) {
  connection.query("SELECT * FROM actors order by coolness_points DESC", function(err, result) {
    var html = "<h1>Actors by Coolness</h1>";

    html += "<ul>";

    for (var i = 0; i < result.length; i++) {
      html += "<li><p> ID: " + result[i].id + "</p>";
      html += "<p> Name: " + result[i].name + "</p>";
      html += "<p> Coolness Points: " + result[i].coolness_points + "</p>";
      html += "<p>Attitude: " + result[i].attitude + "</p></li>";
    }

    html += "</ul>";

    res.send(html);
  });
});

app.get("/attitude-chart/:att", function(req, res) {
  connection.query("SELECT * FROM actors where attitude = ?", [req.params.att], function(err, result) {
    var html = "<h1>Actors With an Attitude of " + req.params.att + "</h1>";

    html += "<ul>";

    for (var i = 0; i < result.length; i++) {
      html += "<li><p> ID: " + result[i].id + "</p>";
      html += "<p> Name: " + result[i].name + "</p>";
      html += "<p> Coolness Points: " + result[i].coolness_points + "</p>";
      html += "<p>Attitude: " + result[i].attitude + "</p></li>";
    }

    html += "</ul>";

    res.send(html);

    /*
    SOLUTION
    app.get("/attitude-chart/:attitude", function(req, res){
      var query =  `SELECT * FROM actors WHERE attitude=? ORDER BY coolness_points DESC;`;
      connection.query(query, [req.params.attitude], function(err, result){
        console.log(err);
        console.log(result);
        //renderResults(result, title) --> formatting HTML
        res.send(renderResults(result, "Actors with Attitude"));
      })
    })
    */
  });
});

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
