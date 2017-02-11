// Run this program by navigating to it in terminal/bash.
// Then run node_js.js
// Run this program by navigating to it in terminal/bash.
// Then run node Hello.js.
var fs = require('fs');
var path = require('path');
var arr_total_balance;

console.log("---------------------");

var process_argv = process.argv;




if (process.argv[2] === "total")
{
	do_total(process_argv);
}

else if (process.argv[2] === "deposit")
{
	do_deposit(process_argv);
}

else if (process.argv[2] === "withdraw ")
{
	do_withdraw (process_argv);
}

else if (process.argv[2] === "lotto")
{
	do_lotto(process_argv);
}

else 
{
	do_nothing(process_argv);
}

function do_total(process_argv)
{
	//console.log("total --- this should tally up all of the money in the bank balance and display it for the user.\n" );
	read_total("bank.txt");
	
}

function do_deposit(process_argv)
{
	//console.log("deposite --- this should add a positive amount to the bank balance.\n" );
	var oper = process.argv[2] ;
	var num1 = parseFloat(process.argv[3]) ;
	var num2 = parseFloat(process.argv[4]) ;
	var ans = Math.pow(num1,num2)
	console.log(ans);
}

function do_withdraw(process_argv)
{
	//console.log("withdraw --- this should add a negative amount to the bank balance.\n" );
	var oper = process.argv[2] ;
	var num1 = parseFloat(process.argv[3]) ;
	var num2 = parseFloat(process.argv[4]) ;
	var ans = Math.pow(num1,num2)
	console.log(ans);
}

function do_lotto(process_argv)
{
	//console.log("lotto --- this should subtract an amount from the bank balance, but if a random number is hit it should add back a larger amount into the bank balance.\n" );
	var oper = process.argv[2] ;
	var num1 = parseFloat(process.argv[3]) ;
	var num2 = parseFloat(process.argv[4]) ;
	var ans = Math.pow(num1,num2)
	console.log(ans);
}


function do_exp(process_argv)
{
	//console.log("exp --- " );
	var oper = process.argv[2] ;
	var num1 = parseFloat(process.argv[3]) ;
	var num2 = parseFloat(process.argv[4]) ;
	var ans = Math.pow(num1,num2)
	console.log(ans);
}




function do_algebra(process_argv)
{
	console.log("alg --- ");
	//var chunks = process_argv.split("");
	//var num1 = parseFloat(process.argv[3]) ;
	//var num2 = parseFloat(process.argv[4]) ;
	//var ans = Math.pow(num1,num2)
	// 4x+2=10
	//console.log(chunks);
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
      //var audioFile = fields.slice(-1)[0].replace('file:\\\\', '');
      console.log("\n\narr_total_balance[0]:\n");
	  console.log(arr_total_balance[0]);

    }

    else
    {
   		console.log(err);
    }

});
}


// fs.readFile("the_best_thing_ever.txt", {encoding: 'utf-8'}, function(err,data)
// {
//     if (!err)
//     {
//     //response.writeHead(200, {'Content-Type': 'text/html'});
//     //response.write(data);
//     //response.end();

//     var arrData = data.split(",");

//     for (i = 0; i < arrData.length; i++)
//     { 
//     	console.log(arrData[i]);
// 	}
//     console.log('\nreceived data: ' + data + '\n');
//     }
//     else
//     {
//    		console.log(err);
//     }

// });

