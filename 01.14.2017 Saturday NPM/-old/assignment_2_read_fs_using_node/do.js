// Run this program by navigating to it in terminal/bash.
// Then run node_js.js

var fs = require('fs');
var path = require('path');

//var filePath = path.join(__dirname, 'start.html');

fs.readFile("the_best_thing_ever.txt", {encoding: 'utf-8'}, function(err,data)
{
    if (!err)
    {
    //response.writeHead(200, {'Content-Type': 'text/html'});
    //response.write(data);
    //response.end();

    var arrData = data.split(",");

    for (i = 0; i < arrData.length; i++)
    { 
    	console.log(arrData[i]);
	}
    console.log('\nreceived data: ' + data + '\n');
    }
    else
    {
   		console.log(err);
    }

});

