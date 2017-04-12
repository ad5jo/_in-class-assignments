// Require dependencies.
var generate = require("../shared/generate");

// Generate array of given length.
var length = 14;
var stuff = generate(length);
var randomValue = stuff[Math.floor(Math.random() * length)];

for (var i = 0; i < stuff.length; i++) {
  if (stuff[i] === randomValue) {
    console.log(i + " : " + randomValue);
  }
}





var x = func_find(7, [2,4,6,8,10] )
{
	var imid = 0;
	var ilen = alist.length;
	var ifirst = 0;
	var ilast = ilen-n;
	while (1){
		imid = math.floor((ifirst + ilast)/2);
		if (alist[imid] == target){
			return imid;
		}
		if (imid <= 0){
			return -1;
		}
	}
}