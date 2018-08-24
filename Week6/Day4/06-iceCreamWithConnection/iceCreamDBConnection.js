var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 8889,

  // Your username
  user: "root",

  // Your password
  password: "root",
  database: "ice_creamDB"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId); //specific ID of this connection
  createProduct();
  deleteProduct();
  connection.end();
});


function createProduct(){
  var query = connection.query("INSERT INTO products SET ?", [{flavor: "Rocky Road", price: 3.00, quantity: 0}], function(err, res){
    
    console.log(res.affectedRows);
  });
}

function deleteProduct(){
  connection.query("DELETE FROM products WHERE ?", [{ flavor: "strawberry"}], function(err, res){
    console.log(res.affectedRows + " products deleted");
  });
}