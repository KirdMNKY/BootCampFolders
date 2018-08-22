var fs = require("fs");

var bankTotal = 0;

fs.readFile("bank.txt", "utf8", function(err, data){
    if(err){
        return console.log(err);
    }

    var bankList = data.split(",");

    console.log("\n\n------ Your Favorite Bank ------\n\n");

    if(parseFloat(bankTotal) >= 0){
        for(var i = 0; i < bankList.length; i++){
            
                if(Math.sign(parseFloat(bankList[i].trim())) === -1){
                    if((parseFloat(bankList[i].trim()) === -.25)){
                        bankTotal -= .25;
                        wonLotto();
                        console.log("New bankTotal: $" + bankTotal.toFixed(2));

                    }else{
                        bankTotal += parseFloat(bankList[i].trim());
                        console.log("New bankTotal: $" + bankTotal.toFixed(2));
                    }
                }else if(Math.sign(parseFloat(bankList[i].trim())) === 1){
                    bankTotal += parseFloat(bankList[i].trim());
                    console.log("New bankTotal: $" + bankTotal.toFixed(2));
                }
            }   
    }else{
        console.log("You are out of money");
        console.log("Your bankTotal is: $" + bankTotal.toFixed(2));
        
    }
    console.log("\n\n--------------------------------\n\n");
    function wonLotto(){
        var rand = Math.round(Math.floor(Math.random()*10));
        if(rand === 5){
            bankTotal += 2;
            console.log("You won the lotto");
            console.log("New bankTotal: $" + bankTotal.toFixed(2));
        }else{
            console.log("You lost the lotto");
            console.log("New bankTotal: $" + bankTotal.toFixed(2));
        }
    }
    console.log("Final total: $" + bankTotal.toFixed(2));
});

