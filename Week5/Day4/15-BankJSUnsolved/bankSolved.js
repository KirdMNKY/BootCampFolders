var fs = require("fs");

var bankTotal = 0;

fs.readFile("bank.txt", "utf8", function(err, data){
    if(err){
        return console.log(err);
    }

    var bankList = data.split(",");
    var action = process.argv[2];
    var value = process.argv[3];

    switch(action){
        case "total":
            total();
            break;
        case "deposit":
            deposit();
            break;
        case "withdraw":
            withdrawl();
            break;
        case "lotto":
            lotto();
            break;        
        default:
            console.log("nope");
        break;
    }

    function total(){
    console.log("\n\n------ Your Favorite Bank ------\n\n");
        fs.readFile("bank.txt", "utf8", function(err, data){
            if(err){
                return console.log(err);
            }
            var transactions = data.split(",");
            var total = 0;
            for(var i = 0; i < transactions.length; i++){

            }
        });
    }

    function deposit(){
        //check if value is a number
        var depositAmount = parseFloat(value);
        if(depositAmount !== NaN && depositAmount > 0){
            fs.appendFile("bank.txt", ", " + value, function(err, data){
            if(err){
                return console.log(err);
            }

            });
        }else {
            console.log("You cant deposit that");
        }
        
    }

    function withdrawl(){
        //check if value is a number
        var depositAmount = parseFloat(value);
        if(depositAmount !== NaN && depositAmount > 0){
            fs.appendFile("bank.txt", ", -" + value, function(err, data){
            if(err){
                return console.log(err);
            }

            });
        }else {
            console.log("You cant withdraw that");
        }
        
    }

    function lotto(){
        //check if value is a number
        var depositAmount = parseFloat(value);
        if(depositAmount !== NaN && depositAmount > 0){
            fs.appendFile("bank.txt", ", 2" + value, function(err, data){
            if(err){
                return console.log(err);
            }

            });
        }else {
            console.log("You cant withdraw that");
        }
        
    }

});

