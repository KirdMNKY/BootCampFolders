var fs = require("fs");
if(process.argv[2]){
    var fileName = process.argv[2];
}else{
    var fileName = "best_things_ever.txt";
}
fs.readFile(fileName, "utf8", function(error, data){
    //guard statement
    if(error){
        return console.log(error);
    }

    var items = data.split(",");
    console.log("\n\n==Things I Like==\n\n");
    for(var i = 0; i < items.length; i++){
        console.log(items[i].trim());
    }
    console.log("\n\n===========\n\n");
});