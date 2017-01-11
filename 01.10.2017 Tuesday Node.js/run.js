// Run this program by navigating to it in terminal/bash.
// Then run node Hello.js.
// run.js

var x = require('./bands.js');
//console.log(x.obj);
var bandlist = x.obj;

for(var key in bandlist) {
  console.log(x[key]);
}



