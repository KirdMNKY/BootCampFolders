var groups = require("./bands.js");

var properties = Object.getOwnPropertyNames(groups);
for(var i = 0; i < properties.length; i++){
    console.log(groups.properties[i] + " is an example of " + properties[i] + ".");
}


//solution
for (var key in groups){
    console.log(key);
    console.log("A " + key + " band is " + groups[key] + ".");
}