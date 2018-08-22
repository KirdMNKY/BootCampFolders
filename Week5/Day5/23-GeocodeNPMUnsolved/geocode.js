// Instructions: 
// Build a Node application that takes in a location input via the command line, then geocodes it using the geocoder NPM package.
// Then console.log the geocoding information for display.

// Easier: User will provide the city and state in the following format: "Atlanta, GA", "Houston, TX"
// Slightly More Challenging: User will provide the address in any format: "151 Sip Ave Jersey City, NJ", "Austin, TX", etc.

// All: Be sure to console log the output using JSON.stringify in "pretty-print" format. 

// ========================================================================================================================

// Include the geocoder NPM package (Remember to run "npm install geocoder"!)
var geocoder = require("geocoder");


var userInput = process.argv;
// Take in the command line arguments
var location = "";
for(var i = 2; i < userInput.length; i++){
    location += userInput[i] + " ";
}



// Build your address as an array or string
// Geocoding
geocoder.geocode(location, function ( err, data ) {
    //guard statement
    if(err){
        return console.log(err);
    }
    console.log(JSON.stringify(data, null, 2));
  });



// Then use Geocoder NPM to geocode the address
