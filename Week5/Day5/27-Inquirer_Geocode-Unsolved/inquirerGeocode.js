// Instructions:
// Convert the below geocoding code from earlier today so that it uses inquirer.js instead of process.argv to handle the intake of user inputs. 
// Make sure your new code provides the exact same output as it did with process.argv.

// HINT: Don't forget to create your package.json file and save the correct packages to it.
// HINT: You should not need to change *that much* code.

// ========================================================================================================================

// Include the geocoder NPM package (Remember to run "npm install geocoder"!)
var geocoder = require("geocoder");
var inquirer = require("inquirer");

// Take in the command line arguments
// var nodeArgs = process.argv;

inquirer.prompt([
  {
    type: "input",
    message: "Enter a location you would like to search: ",
    name: "userLocation"
  }
]).then(function(inquirerResponse){

debugger;

  // Create an empty string for holding the address
  var address = inquirerResponse.userLocation;


  // Then use the Google Geocoder to geocode the address
  geocoder.geocode(address, function(err, data) {

    // Then console log the result and stringify it.
    // Note the argument of "2" being included in the JSON stringify. This makes the JSON output pretty.
    // See link here: http://stackoverflow.com/questions/4810841/how-can-i-pretty-print-json-using-javascript
    console.log(JSON.stringify(data, null, 2));
  });
});

