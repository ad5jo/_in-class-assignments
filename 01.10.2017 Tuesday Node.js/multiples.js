// Run this program by navigating to it in terminal/bash.
// Then run node Hello.js.
// multiples.js


console.log("---------------------");

var process_argv = process.argv[2];
var icount = 0;
do_multiples(process_argv);

	function do_multiples(process_argv)
	{
		console.log("do_multiples");
		var num1 = parseFloat(process.argv[2]) ;
		console.log(num1);
		console.log("--------");
		for (i = 1; i < num1+1; i++) { 
    		var num2 = i%6;
    		//console.log(num2);
			if (num2)
			{
				//console.log("not");
			}
			else
			{
				icount++;
				//console.log("add 1");
			}
		}
		var final = icount * 6;
		console.log("sum is ");
		console.log( final);
	}



