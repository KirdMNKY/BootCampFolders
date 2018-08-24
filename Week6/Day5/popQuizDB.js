var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 8889,
    user: "root",
    password: "root",
    database: "popQuizDB"
});

connection.connect(function(err){
    if(err){
        return console.log(err);
    }
    inquirer.prompt([
        {
        name: "input",
        message: "Enter text:"
        }
    ]).then(function(ir){
        connection.query("INSERT INTO quiz(textField) VALUES(?);", [ir.input],
            function(err, res) {
            console.log(ir.affectedRows + " text inserted!\n");
            }
    });
    }  

