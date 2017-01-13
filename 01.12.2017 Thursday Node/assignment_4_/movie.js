// Run this program by navigating to it in terminal/bash.
// Then run node_js.js
// Run this program by navigating to it in terminal/bash.
// Then run node Hello.js.
var fs = require('fs');
var path = require('path');
console.log("---------------------");
var process_argv = process.argv;
var movie_name;
// = process_argv;
//[2];


for (var i = 0, len = arr.length; i < len; i++) {
  someFn(arr[i]);
}

// var movie_name =process_argv[2:ilen].forEach(function(answer){
// 	//
// 	answer = answer + "&";
// });


console.log("movie_name");
console.log(movie_name);

do_reqest(movie_name);

function do_reqest(movie_name)
{
  console.log("\ndo_reqest ---\n" );
  // Include the request npm package (Don't forget to run "npm install request" in this folder first!)
  var request = require("request");

  // Then run a request to the OMDB API with the movie specified
  request("http://www.omdbapi.com/?t=" + movie_name + "&y=&plot=short&r=json", function(error, response, body) {

  // If the request is successful (i.e. if the response status code is 200)
  if (!error && response.statusCode === 200) {

    // Parse the body of the site and recover just the imdbRating
    // (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).
    console.log("The movie's rating is: " + JSON.parse(body).imdbRating);
    console.log("Released: " + JSON.parse(body).Released);

  }
});
	
}

	function do_math(process_argv)
	{
		var num1 = parseFloat(process.argv[2]) ;

		var oper = process.argv[3] ;

		var num2 = parseFloat(process.argv[4]) ;

		switch(oper) {
		    case "add":
		        console.log(num1 + num2);
		        break;

		    case "subtract":
		        console.log(num1 - num2);
		        break;

		    case "multiply":
		        console.log(num1 * num2);
		        break;

		    case "divide":
		        console.log(num1 / num2);
		        break;

		    case "remainder":
		        console.log(num1 % num2);
		        break;

		    default:
		        console.log("incorrect argument");
	}

}


//var filePath = path.join(__dirname, 'start.html');
function read_total( sfile )
{
fs.readFile(sfile, {encoding: 'utf-8'}, function(err,data)
{
    if (!err)
    {
      var lines = data.trim().split('\n');
      var lastLine = lines.slice(-1)[0];
      console.log("\n\nlines:\n");
      console.log(lines);
      console.log("\n\nlastLine:\n");
	  console.log(lastLine);
      var fields = lastLine.split(',');
      console.log("\n\nfields:\n");
      console.log(fields);
      var arr_total_balance = fields.split(',');
      console.log("\n\narr_total_balance[0]:\n");
	  console.log(arr_total_balance[0]);
    }
    else
    {
   		console.log(err);
    }

});
}



