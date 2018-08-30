var express = require("express");
var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "seinfeld"
});

connection.connect(function(err){
  if(err) { console.log(err); return; }
  console.log(`connected as id ${connection.threadId}`);
})

function renderResults(result, title){
  var html = `<h1>${title}</h1>`;
  for(var i = 0; i < result.length; i++){
    // name
    var rowHtml = `<p>Name: ${result[i].name}</p>`
    rowHtml += `<p>Coolness Points ${result[i].coolness_points} </p>`
    rowHtml += `<p>Attitude ${result[i].attitude} </p>`
    rowHtml += `<br><br>`

    html += rowHtml;
  }
  return html;
}

var router = new express.Router();

router.get("/cast", function(req, res){
  const query = `SELECT * FROM actors`;
  connection.query(query, function(err, result){
    console.log(err);
    console.log(result);
    res.send(renderResults(result, "Actors by Id"));
  })
})

router.get("/coolness-chart", function(req, res){
  const query = `SELECT * FROM actors ORDER BY coolness_points DESC`;
  connection.query(query, function(err, result){
    console.log(err);
    console.log(result);
    res.send(renderResults(result, "Actors by Coolness"));
  })
})

router.get("/attitude-chart/:attitude", function(req, res){
  const query = `SELECT * FROM actors WHERE ? ORDER BY coolness_points DESC ;`;
  connection.query(query, [{attitude: req.params.attitude}],function(err, result){
    res.send(renderResults(result, "Actors with Attitude"));
  })
})


module.exports = router;
