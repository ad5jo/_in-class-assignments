//a3_solution.js
// constructor function which can be used to create objects
var Programmer = function() {
  this.name = 'myname';
  this.position = 'myposition';
  this.age = 0;
  this.fave_lang = 'java';
  
  // method 
  this.data_out = function() {
  	var a =1;
    console.log("Name " + this.name);
    console.log("Position "+ this.position);
    console.log("Favorite Language "+ this.age);
    console.log("My favorite language "+ this.fave_lang);  
  };
};


// creates a new "programmer" object 
this.dave = new Programmer();

this.dave.data_out();
