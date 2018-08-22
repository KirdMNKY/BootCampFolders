var fs = require("fs");

fs.readFile("movies.txt", "utf8", function(error, data){
    console.log(data);

    var items = data.split(",");
    for(var i =0; i < items.length; i++){
        console.log(items[i].trim());
    }
});