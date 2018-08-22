var TV = require("./tv.js");
var Actor = require("./actor.js");

//node main.js [searchTerm] [tvShowName or actorName]
var search = process.argv[2];

//read process.argv[2-n]
var searchTerm = process.argv.slice(3).join(" ");

var tv = new TV();
var actor = new Actor();

if(!search){
    search = "show";
}

if(!searchTerm){
    searchTerm = "Stargate";
}
    //determine searchTerm at argv[2] switch

    //determine tvShowName or actorName at [3-n]
if(search === "show"){
    console.log("I'm looking for the TV Show: " + searchTerm);
    tv.findShow(searchTerm);
}else{
    console.log("I'm looking for the actor: " + searchTerm);
    actor.findActor(searchTerm);
}



//create search tvShowName

//create search actorName