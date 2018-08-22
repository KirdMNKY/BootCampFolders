var request = require("request");
var fs = require("fs");

var Actor = function() {
    this.findActor = function(actor) {
        var URL = "http://api.tvmaze.com/search/people?q=" + actor;


        // We then run the request module on a URL with a JSON
        request(URL, function(error, response, body) {
            if(error){
                return console.log(error);
            }else if(!error && response.statusCode === 200){
                var info = JSON.parse(body);
                // console.log(JSON.stringify(info, null, 2)); //checkAPI data
                var actorInfo =
                    "\n ======================================\n" +
                    "\nName: " + info[0].person.name + "\n" +
                    "\nDOB: " + info[0].person.birthday + "\n" +
                    "\nGender: " + info[0].person.gender + "\n" +
                    "\nCountry: " + info[0].person.country.name + "\n" +
                    "\nFind more info here: " + info[0].person.url + "\n" +
                    "\n ======================================\n"
                ;
                console.log(actorInfo);

                /*solution
                var showData = [ 
                    "Show: " + info.name,
                    "Genres: " + info.genres.join(", "),
                    "Rating: " + info.rating.average,
                    "Network: " + (info.netowrk != null) ? info.network : "Information Not Available",
                    "Summary: " + info.summary
                ].join("\n\n");
                */
               
                fs.appendFile("log.txt", actorInfo + "\n*****************************\n", function(err){
                    if(err){
                        console.log(err);
                    }
                }
            );
        }
        });
    };
};

module.exports = Actor;
