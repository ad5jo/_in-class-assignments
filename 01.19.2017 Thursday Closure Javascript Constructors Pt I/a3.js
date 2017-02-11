// a3.js

// constructor function which can take in a series of values and create objects
// with the properties contained inside
function DigitalPal(hungry, sleepy, bored, age) {
  this.hungry = hungry;
  this.sleepy = sleepy;
  this.bored = bored;
  this.age = age;

  // method
  this.feed = function(){
    if (this.hungry === true){
      console.log("that was yummy");
      this.hungry = false;
      this.sleepy = true;
    }
    else if (this.hungry === false){
      console.log("No thanks, I'm full.");
    }
  }

  // method
  this.sleepy = function(){
    if (this.sleepy === true){
      console.log("Zzzzzzzz");
      this.bored = true;
      this.sleepy = false;
      increaseAge();
    }
    else if (this.sleepy === false){
      console.log("No way! I'm not tired.");
    }
  }

  // method
  this.play = function(){
    if (this.bored === true){
      console.log("Yay! Let's play!");
      this.bored = false;
      this.hungry = true;
    }

    else if (this.bored === false){
      console.log("Not right now. Later?");
    }
  }



// method
  this.increaseAge = function(){
      this.age++;
      console.log("Happy Birthday to me! I am " + this.age + " old!");
  }


// creates two unique characters using the "character" constructor
var Dog = new Character(false,false,true,0);
var Cat = new Character(false,false,true,0);

Cat.HouseCondition = 100;
Cat.meow = function () {
  console.log("Woof! Woof!");
}


Cat.destroyFurniture() = function () {
  if (this.HouseCondition < 1) {this.HouseCondition = this.HouseCondition - 10;
  console.log("MUAHAHAHAHA! TAKE THAT FURNITURE!");
  this.bored = false;
  this.sleepy = true;
  }
}

Cat.buyNewFurniture() = function () {
  this.HouseCondition = this.HouseCondition + 50;
  console.log("Are you sure about that?");
}


Dog.Outside = false;
Dog.Bark = function () {
  console.log("Meow! Meow!");
}


Dog.goOutside = function () {
  if(this.goOutside === false){
    console.log("Yay! I love the outdoors!");
    this.goOutside = true;
    this.Bark();
    }
  else if (this.goOutside === true) {
    console.log("We're already outside though...");
  }
}


Dog.goInside = function () {
  if(this.goInside === true){
    console.log("Do we have to? Fine...");
    this.goOutside = false;
    }
  else if (this.goInside === false) {
    console.log("I'm already inside...");
  }
}


}


