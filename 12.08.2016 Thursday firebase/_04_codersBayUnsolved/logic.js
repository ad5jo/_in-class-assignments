  
// Initialize Firebase

var config = {
    apiKey: "AIzaSyBjTtEsYFPrCdJBFGhjH0c_JBTINQJkVKs",
    authDomain: "ddurkee-79c86.firebaseapp.com",
    databaseURL: "https://ddurkee-79c86.firebaseio.com",
    storageBucket: "ddurkee-79c86.appspot.com",
    messagingSenderId: "101017078086"
  };
  firebase.initializeApp(config);

// Create a variable to reference the database
var database = firebase.database();

// Initial Values
var initialBid = 0;
var initialBidder = "No one :-(";
var highPrice = initialBid;
var highBidder = initialBidder;

// --------------------------------------------------------------

// At the initial load, get a snapshot of the current data.
database.ref().on("value", function(snapshot) {

  // If Firebase has a highPrice and highBidder stored (first case)
  if (snapshot.child("highBidder").exists() && snapshot.child("highPrice").exists()) {

    // Set the initial variables for highBidder equal to the stored values.
    highBidder = snapshot.val().highBidder_db
    highPrice = snapshot.val().highPrice_db

    // Change the HTML to reflect the initial value
    $("#highest-bidder").html(highBidder);
    $("#highest-price").html(highPrice);

    // Print the initial data to the console.
    console.log("initialBid: " + initialBid);
    console.log("initialBidder: " + initialBidder);

  }

  // Keep the initial variables for highBidder equal to the initial values
  else {

    // Change the HTML to reflect the initial value
    $("#highest-bidder").html(initialBidder);
    $("#highest-price").html(initialBid);

    // Print the initial data to the console.
    console.log("initialBid: " + initialBid);
    console.log("initialBidder: " + initialBidder);


  }


// If any errors are experienced, log them to console.
}, function(errorObject) {
  console.log("The read failed: " + errorObject.code);
});

// --------------------------------------------------------------

// Whenever a user clicks the submit-bid button
$("#submit-bid").on("click", function() {

  // Get the input values


  // Log the Bidder and Price (Even if not the highest)
  if (bidderPrice > highPrice) {

    // Alert
    alert("You are now the highest bidder.");

    // Save the new price in Firebase


    // Log the new High Price


    // Store the new high price and bidder name as a local variable (could have also used the Firebase variable)


    // Change the HTML to reflect the new high price and bidder

  }

  else {
    // Alert
    alert("Sorry that bid is too low. Try again.");
  }

  // Return "false" to allow "enter"
  return false;

});
