// Instructions:
// Build a Node application that takes in a location input via the command line, then geocodes it using the geocoder NPM package.
// Then console.log the geocoding information for display.

// Easier: User will provide the city and state in the following format: "Atlanta, GA", "Houston, TX"
// Slightly More Challenging: User will provide ANY sort of location identifier: ex: "151 Sip Ave Jersey City, NJ", "Austin, TX", "The White House", etc.

// All: Be sure to console log the output using JSON.stringify in "pretty-print" format.

// ===================================================================================================================



// Create a "Prompt" with a series of questions.
inquirer.prompt([

  // Here we create a basic text prompt.
  {
    type: "input",
    message: "City name?",
    city_name: "Anchorage"
  },

    // Here we create a basic text prompt.
  {
    type: "input",
    message: "State?",
    state_name: "AK"
  },
    // Here we create a basic text prompt.
  {
    type: "input",
    message: "Degree Type?",
    degreeType_name: "F"
  }
  
// Once we are done with all the questions... "then" we do stuff with the answers
// In this case, we store all of the answers into a "user" object that inquirer makes for us.
]).then(function(user) {


  // If we log that user as a JSON, we can see how it looks.
  console.log(JSON.stringify(user, null, 2));

  // If the user confirms, we displays the user's name and pokemon from the answers.
  if (user.confirm) {

    console.log("==============================================");
    console.log("");
    console.log("name of city " + user.city_name);
    console.log("name of state " + user.state_name);
    console.log("name of degree type " + user.degreeType_name);
    console.log("");
    console.log("==============================================");

  }

});



// Include the geocoder NPM package (Remember to run "npm install geocoder"!)
var geocoder = require("geocoder");

// Take in the command line arguments
var nodeArgs = process.argv;

// Create an empty string for holding the address
var address = "";

// Capture all the words in the address (again ignoring the first two Node arguments)

// for (var i = 2; i < nodeArgs.length; i++) {

//   // Build a string with the address.
//   address = address + " " + nodeArgs[i];
// }

address = user.city_name + user.state_name
// Log the address we built
console.log("Searching for" + address);

// Then use the Google Geocoder to geocode the address
geocoder.geocode(address, function(err, data) {

  // Then console log the result and stringify it.
  // Note the argument of "2" being included in the JSON stringify. This makes the JSON output pretty.
  // See link here: http://stackoverflow.com/questions/4810841/how-can-i-pretty-print-json-using-javascript
  console.log(JSON.stringify(data, null, 2));
});

