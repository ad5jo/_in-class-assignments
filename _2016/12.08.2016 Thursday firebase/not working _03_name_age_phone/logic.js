// Initialize Firebase (YOUR OWN APP)
//5-recentuser.html
//<script 
src="https://www.gstatic.com/firebasejs/3.6.3/firebase.js"
//></script>
//<script>

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBjTtEsYFPrCdJBFGhjH0c_JBTINQJkVKs",
    authDomain: "ddurkee-79c86.firebaseapp.com",
    databaseURL: "https://ddurkee-79c86.firebaseio.com",
    storageBucket: "ddurkee-79c86.appspot.com",
    messagingSenderId: "101017078086"
  };
  firebase.initializeApp(config);

//</script>



// Create a variable to reference the database
var databaseVariable = firebase.database();

// Use the below initialValue
var initialValue = 100;

// Use the below variable clickCounter to keep track of the clicks.
var clickCounter = initialValue;

// --------------------------------------------------------------

// At the initial load, get a snapshot of the current data. (I.E FIREBASE HERE)
// HINT: Use databaseVariable.ref().on("value", function(snapshot) {}
$(document).ready(function(){
  databaseVariable.ref().on("value", function(snapshot) {
    // 1.
    console.log(snapshot.val());
      // window.
      // 2. 
      var temp_val = snapshot.val().clickCount;
      // 3.
      $("#click-value").html(temp_val);
      // 4.
      clickCounter = snapshot.val().clickCount;
  }, function(errorObject) { // 5.
      console.log("The read failed: " + errorObject.code);
  });
});

// Inside our .on function...
  // 1. Console.log the initial "snapshot" value (the object itself)
  // 2. Change the initial value to reflect the initial value in Firebase
  // HINT: snapshot.val().__________
  // 3. Change the value of our clickCounter to match the value in the database
  // ___________ = snapshot.val().______________________

  // 4.
  // Change the HTML using jQuery to reflect the updated clickCounter value

// 5.
// Then include Firebase error logging
// HINT: }, function(errorObject)

// --------------------------------------------------------------

// Whenever a user clicks the click button
$("#click-button").on("click", function() {

  // Reduce the clickCounter by 1
  clickCounter--;

  // Alert User and reset the counter
  if (clickCounter === 0) {

    alert("Phew! You made it! That sure was a lot of clicking.");

    clickCounter = initialValue;

  }

  // Save new value to Firebase
  databaseVariable.ref().set({
        clickCount: clickCounter
      });


  // Log the value of clickCounter
  console.log(clickCounter);

});

// Whenever a user clicks the restart button
$("#restart-button").on("click", function() {

  // Set the clickCounter back to initialValue
  clickCounter = initialValue;

  // Save new value to Firebase
  databaseVariable.ref().set({
        clickCount: clickCounter
      });

  // Log the value of clickCounter
  console.log(clickCounter);

  // Change the HTML Values
  $("#click-value").html(clickCounter);


});

$("#add-user").on("click", function() {
  console.log("hello");
  var s_user = $("#name-input")
  var s_email = $("#email-input")
  var s_age = $("#age-input")

  // Save new value to Firebase
  databaseVariable.ref().set({
        //clickCount: clickCounter
        s_user_db: s_user,
        s_email_db: s_email,
        s_age_db: s_age
      });

  // Log the value of clickCounter
  console.log(s_user);
console.log(s_email);
console.log(s_age);

  // Change the HTML Values
  var html_content ="";
  $("#name-display").html(html_content);

  html_content ="";
  $("#email-display").html(html_content);

    html_content ="";
  $("#age-display").html(html_content);

});
