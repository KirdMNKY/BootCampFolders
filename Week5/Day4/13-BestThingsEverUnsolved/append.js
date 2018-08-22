var fs = require("fs");

var textFile = process.argv[2];
var appendedInfo = process.argv[3];

for(var i = 4; i < process.argv.length; i++){
    appendedInfo += " " + process.argv[i];
}

fs.appendFile(textFile, ", " + appendedInfo, function(err){
    if(err){
        console.log(err);
    }
    console.log("Content Added");
})