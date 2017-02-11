// Run this program by navigating to it in terminal/bash.
// Then run node_js.js

console.log("---------------------");

var process_argv = process.argv;

process_argv.shift();
process_argv.shift();
process_argv.sort();

console.log(process_argv);

console.log("---------------------");
for (i = 0; i < process_argv.length; i++) { 
    console.log(process_argv[i]);
}

console.log("--------------------- done");





// if (process.argv[2] === process.argv[3])
// {
// 	console.log(true);
// }
// else
// {
// 	console.log(false);
// }


