/* Book Marker Warm Up (18.3.1)
 * backend
 * ==================== */


// STUDENTS: Your assignment is to define the routes below. Good luck!


// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongojs = require("mongojs");

// Initialize Express
var app = express();

// Configure our app for morgan and body parser
app.use(logger("dev"));
app.use(bodyParser.urlencoded({
  extended: false
}));

// Static file support with public folder
app.use(express.static("public"));

// Mongojs configuration
var databaseUrl = "week18day3";
var collections = ["books"];

// Hook our mongojs config to the db var
var db = mongojs(databaseUrl, collections);
db.on("error", function(error) {
  console.log("Database Error:", error);
});


// Routes
// ======


// TODO: Fill in each route so that the server performs
// the proper mongojs functions for the site to function
// -/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/


// Post a book to the mongoose database
app.post("/submit", function(req, res) {

  // Save the request body as an object called book
  var book = req.body;
  console.log("52 book");
  console.log(book);
  // If we want the object to have a boolean value of false,
  // we have to do it here, because the ajax post will convert it
  // to a string instead of a boolean
  book.read = false;

});


// Find all books marked as read
app.get("/read", function(req, res) {

});


// Find all books marked as unread
app.get("/unread", function(req, res) {

});


// Mark a book as having been read
app.get("/markread/:id", function(req, res) {
  // Remember: when searching by an id, the id needs to be passed in
  // as (mongojs.ObjectId(IDYOUWANTTOFIND))

});


// Mark a book as having been not read
app.get("/markunread/:id", function(req, res) {
  // Remember: when searching by an id, the id needs to be passed in
  // as (mongojs.ObjectId(IDYOUWANTTOFIND))

});


// Listen on port 3000
app.listen(3000, function() {
  console.log("App running on port 3000!");
});


// When the #makenew button is clicked

// $(document).on("click", "#makenew", function() {
//   // AJAX POST call to the submit route on the server
//   // This will take the data from the form and send it to the server
//   $.ajax({
//     type: "POST",
//     dataType: "json",
//     url: "/submit",
//     data: {
//       title: $("#title").val(),
//       note: $("#note").val(),
//       created: Date.now()
//     }
//   })
//   // If that API call succeeds, add the title and a delete button for the note to the page
//   .done(function(data) {
//     // Add the title and delete button to the #results section
//     $("#results").prepend("<p class='dataentry' data-id=" + data._id + "><span class='dataTitle' data-id=" +
//       data._id + ">" + data.title + "</span><span class=deleter>X</span></p>");
//     // Clear the note and title inputs on the page
//     $("#note").val("");
//     $("#title").val("");
//   }
//   );
// });
