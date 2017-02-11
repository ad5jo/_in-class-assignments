//

var dogs = {"raining":true, "noise":"Woof!", "makeNoise": function() {
	var my_var= 1;
	console.log (this["noise"]);
	}
};

var cats = {
	"raining":false, 
	"noise":"Meow", 
	"makeNoise": function() 
	{
	var my_var = 1;
	//console.log("hello");
	console.log (this["noise"]);
	}
};

console.log("Start\n");
cats["makeNoise"]();
console.log("done");





//