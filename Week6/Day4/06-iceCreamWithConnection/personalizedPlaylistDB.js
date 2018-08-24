var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  // Your port; if not 3306
  port: 8889,
  // Your username
  user: "root",
  // Your password
  password: "root",
  database: "personalizedPlaylistDB"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId); //specific ID of this connection
    selectAll();
    selectGenre("Alternative");
    addSong();
    deleteSong();
    connection.end();
});

function selectAll(){
    connection.query("SELECT * FROM playlist", cb);
    
}

// function selectGenre(){                       // use the ? and an array
//     connection.query("SELECT * FROM playlist WHERE genre=?",["Rock"], cb);
    
// }

function selectGenre(genre){              // use the ? and an array pass the argument
    connection.query("SELECT * FROM playlist WHERE genre=?",[genre], cb);
    
}

function cb(err, results){
    if(err)
        return console.log(err);
    
    for(var i = 0; i < results.length; i++){
        console.log(results[i].id + " | " + results[i].title + " | " + results[i].artist + " | " + results[i].genre);
    }
}

function addSong(){
    var query = connection.query("INSERT INTO playlist SET ?", [
        {
            title: "Buyo",
            artist: "Lucky Chops",  
            genre: "Rock"
        }
    ], function(err, res){
        if(err){
            console.log(err);
        }
        console.log(res.affectedRows);
    });
  }
  
  function deleteSong(){
    connection.query("DELETE FROM playlist WHERE ?", 
    [
        { 
            artist: "Lazerhawk"
        }
    ], function(err, res){
        if(err){
            console.log(err);
        }
        console.log(res.affectedRows + " songs deleted");
    });
  }