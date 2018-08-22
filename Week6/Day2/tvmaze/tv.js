var request = require("request");
var fs = require("fs");

var TV = function() {
    this.findShow = function(show) {
      // The following URL can be used to search the TV Maze API for a given show
      var URL = "http://api.tvmaze.com/singlesearch/shows?q=" + show;


        // We then run the request module on a URL with a JSON
        request(URL, function(error, response, body) {
            if(error){
                return console.log(error);
            }else if(!error && response.statusCode === 200){
                var info = JSON.parse(body);
                //console.log(JSON.stringifgy(body, null, 2)); //checkAPI data
                var showInfo =
                    "\n ======================================\n" +
                    "\nTitle: " + info.name + "\n" +
                    "\nGenre: " + info.genres + "\n" +
                    "\nRating: " + info.rating.average + "\n" +
                    "\nNetwork Name: " + info.network + "\n" +
                    "\nSummary: " + info.summary + "\n" +
                    "\n ======================================\n"
                ;
                console.log(showInfo);

                /*solution
                var showData = [ 
                    "Show: " + info.name,
                    "Genres: " + info.genres.join(", "),
                    "Rating: " + info.rating.average,
                    "Network: " + (info.netowrk != null) ? info.network : "Information Not Available",
                    "Summary: " + info.summary
                ].join("\n\n");
                */
               
                fs.appendFile("log.txt", showInfo + "\n========================================================================================================\n", function(err){
                    if(err){
                        console.log(err);
                    }
                }
            );
        }

        });
    };
};

module.exports = TV;