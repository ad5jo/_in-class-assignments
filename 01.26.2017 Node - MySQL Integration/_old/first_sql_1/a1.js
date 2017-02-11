//a2js
// var TabbyCat <-- cat(prototype) <--animal(prototype) <-- Object

// constructor function which can be used to create objects
// var Animal = function() {this.name = 'myanimal';};
// var Cat = function() { this.name = 'mycat'; };

function f_animal()
{
	
}
function f_cat()
{
	
}

// creates a new object 
var cat = new Cat();
this.TabbyCat = new Cat();
cat.prototype = new Animal();

