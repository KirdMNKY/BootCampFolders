var mysql = require("mysql");
var inquirer = require("inquirer");

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",
  port: 8889,
  user: "root",
  password: "root",
  database: "top_songs_db"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    collectQuery();
});

function collectQuery(){
    inquirer.prompt(
        [
            {
                type: "input",
                name: "artist",
                message: "Enter an Artist's Name:"
            },
            {
                type: "input",
                name: "song",
                message: "Enter a Song Name:"
            },
            {
                type: "input",
                name: "decade",
                message: "Enter a Decade as YYYY:"
            },
        ]
    ).then(function(ir){
        readQuery(ir.artist, ir.song, ir.decade);
    });
} // End CollectQuery

function readQuery(artist, song, decade) {
    //Create SELECT Statement
    connection.query("SELECT * FROM top5000 WHERE song = ?;", [song], function(err, res) {
        if (err) throw err;
        // Log all results of the SELECT statement
        console.log(res);
        
    });
        //Create SELECT Statement
    connection.query("SELECT * FROM top5000 WHERE artist = ?;", [artist], function(err, res) {
        if (err) throw err;
        // Log all results of the SELECT statement
        console.log(res);
        
    });
    //Create SELECT Statement
    connection.query("SELECT * FROM top5000 WHERE yearReleased = ?;", [decade], function(err, res) {
        if (err) throw err;
        // Log all results of the SELECT statement
        console.log(res);
        
    });
    //Create SELECT Statement
    // connection.query("SELECT artist, song, concat((yearReleased DIV 10)*10, 's') FROM top5000 INNER JOIN (SELECT (yearReleased div 10) as decade, MAX(usPop) as us_pop FROM top5000 GROUP BY decade ORDER BY us_pop) AS tops ON top5000.usPop = tops.us_pop ORDER BY usPop DESC;", function(err, res) {
    //     if (err) throw err;
    //     // Log all results of the SELECT statement
    //     console.log(res);
        connection.end();
    // });
} // End of readQuery

// Set up each search as a different function and create an inquirer prompt for each

