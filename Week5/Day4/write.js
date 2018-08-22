//internal package
var fs = require("fs");
//          file to create   content                         what to do after we do that, callback
fs.writeFile("movies.txt", "Inception, Die Hard, Free Willy", function(err){
    if(err){
        console.log(err);
    }

    console.log("movies.txt was updated");
});