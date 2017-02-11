// Run this program by navigating to it in terminal/bash.
// Then run node Hello.js.

console.log("---------------------");

var process_argv = process.argv;




if (process.argv[2] === "exp")
{
	do_exp(process_argv);
}
else if (process.argv[2] === "algebra")
{
	do_algebra(process_argv);
}
else 
{
	do_math(process_argv);
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


