var mysql = require("mysql");
var inquirer = require("inquirer");
// var Item = require("./item");
var connection = mysql.createConnection({
    host: "localhost",
    port: 8889,
    user: "root",
    password: "root",
    database: "greatBayDB"
});

mainInquire();

function makeConnection(){
    connection.connect(function(err){
        if (err) return console.log(err);
        console.log("connected as id " + connection.threadId);
        connection.query("ALTER TABLE bids ADD COLUMN numBids INTEGER;", function(err, resp){
            if(err) return console.log(err);
        });
        connection.query("UPDATE bids SET numBids=0;", function(err, resp){
            if(err) return console.log(err);
        });
        mainInquire();
    });
}

function mainInquire(){
    inquirer.prompt([
        {
            message: "Would you like to [POST] an auction or [BID] on an auction?",
            type: "list",
            choices: ["POST", "BID", "EXIT"],
            name: "action"
        }
    ]).then(function(ir){
        switch(ir.action){
            case "POST":
                postInquire();
                break;
            case "BID":
                bidInquire();
                break;
            case "EXIT":
                connection.end();
                break;
            default:
                console.log("Go fuck yourself Mike");
        }
    })
}

function postInquire(){
    inquirer.prompt([
        {
            message: "What is the item you would like to submit?",
            name: "itemName"
        },
        {
            message: "What category would like to place your auction in?",
            name: "category"
        },
        {
            message: "What would you like your starting bid to be?",
            name: "firstBid"
        }
    ]).then(function(ir){
        // var item = new Item(ir.itemName, ir.category, parseFloat(ir.firstBid));

        connection.query("INSERT INTO bids(itemName, itemCat, highBid) VALUES(?,?,?);", [ir.itemName, ir.category, parseFloat(ir.firstBid)], function(err, result){
            if (err) return console.log(err);
        });
        connection.query("SELECT * FROM bids;", function(err, result){
            if (err) return console.log(err);
        })
        mainInquire();
    })
}

function bidInquire(){
    connection.query("SELECT * from bids;", displayBids);
}

function displayBids(err, result){
    if(err) 
        return console.log(err);
    var choices = [];
    for(var i = 0; i < result.length; i++){
        choices.push(i + ") Item Name: " + result[i].itemName + "\n     Current Bid: " + result[i].highBid);
    }
    inquirer.prompt([
        {
            message: "What auction would you like to place a bid in?",
            type: "list",
            choices: choices,
            name: "item"
        }
    ]).then(function(ir){
        console.log(ir.item);
        connection.query("SELECT * from bids WHERE itemName=?", [choices[parseInt(ir.item[0])]], function(err, resp){
            if(err) 
                return console.log(err);
            bid(resp);
        })
    });
}


function bid(item){
    inquirer.prompt([
        {
            message: "How much would you like to bid?",
            name: "bidNum"
        }
    ]).then(function(ir){
        var bidItem = item[0];
        if(bidItem.highBid < parseFloat(ir.bidNum)){
            console.log("Congrats you are the highest bidder!");
            console.log("The highest bid for " + bidItem.itemName + " is " + ir.bidNum);
            connection.query("UPDATE bids SET highBid=? WHERE itemName=?", [ir.bidNum, bidItem.itemName], function(err, resp){
                if(err) 
                    return console.log(err);
            })
            connection.query("UPDATE bids SET numBids=?", [bidItem.numBids + 1], function(err, resp){
                if(err) 
                    return console.log(err);
            })
        }else{
            console.log("Your bid is not high enough!");
        }
        mainInquire();
    })
}