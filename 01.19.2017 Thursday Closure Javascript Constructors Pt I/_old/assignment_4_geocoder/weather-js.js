
//var process_argv = process.argv;

//process_argv.shift();
//process_argv.shift();

// Load the NPM Package inquirer
var inquirer = require("inquirer");
// Here we include the weather-js so we can use it in our Node application.
var weather = require("weather-js");


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




// Then we use the package to search for the weather at a location
weather.find({ search: "Anchorage, AK", degreeType: "F" }, function(err, result) {

  // If there is an error log it.
  if (err) {
    console.log(err);
  }

  // If there is no error... then print out the weather data.
  // We use JSON.stringify to print the data in string format.
  // We use the JSON.stringify argument of "2" to make the format pretty.
  // See link here: http://stackoverflow.com/questions/4810841/how-can-i-pretty-print-json-using-javascript
  console.log(JSON.stringify(result, null, 2));

});




/////////////


// Here we create a basic password-protected text prompt.
//   {
//     type: "password",
//     message: "Set your password",
//     name: "password"
//   },

//   // Here we give the user a list to choose from.
//   {
//     type: "list",
//     message: "Which Pokemon do you choose?",
//     choices: ["Bulbasaur", "Squirtle", "Charmander"],
//     name: "pokemon"
//   },
  
// // choices
//   {
//    type: "checkbox",
//    message: "Which Pokemon do you choose?",
//    choices: ["Red", "Blue", "Green"],
//    name: "selectColor",
//    default: ["Blue"]
//    //  Choices marked as {checked: true} will be checked by default.
//  },
//   // Here we ask the user to confirm.
//   {
//     type: "confirm",
//     message: "Are you sure:",
//     name: "confirm",
//     default: true

//   }
