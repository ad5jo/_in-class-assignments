// https://console.firebase.google.com/project/emp-data-mngmnt-durkee/database/data

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAwEJa3T9Q8Wos3_XxxflsrBxsSTZ2lNh8",
    authDomain: "emp-data-mngmnt-durkee.firebaseapp.com",
    databaseURL: "https://emp-data-mngmnt-durkee.firebaseio.com",
    storageBucket: "emp-data-mngmnt-durkee.appspot.com",
    messagingSenderId: "1053889376202"
  };
  firebase.initializeApp(config);


// Get a reference to the database service
var database = firebase.database();
// var connectionsRef = database.ref("/connections");
// var connectedRef = database.ref(".info/connected");




$(document).ready(function(e) {
     $('.submit').click(function() {
        var name = $('.employeeName').val();
        var role = $('.role').val();
        var start = $('.start').val();
        var rate = $('.rate').val();
        var now = moment();
        var then = moment(start,"MM/DD/YYYY");
        var difference = now.diff(then, 'months');
        var pay = rate * difference;
        
         database.ref().push({
             name_db: name,
             role_db: role,
             start_db: start,
             rate_db: rate,
             months_db: difference,

         });

         database.ref().on("child_added", function(child_snapshot){
$('.table').append("<tr><td>" +childSnapshot.val().name_db +"</td><td>" +childSnapshot.val().role_db +"</td><td>" +childSnapshot.val().start_db +"</td><td>" +childSnapshot.val().rate_db +"</td></tr>")


      });
     })
 });


//
//
$("#chat-send-button").onClick()

event.preventDefault();
    var date = new Date();
    var now_month = date.getMonth();
    var now_year = date.getYear();
    //console.log(now_month);
    //console.log(now_year);

    var name = $('.employeeName').val();
    var role = $('.role').val();
    var start = $('.start').val();
    var rate = $('.rate').val();
    var converted_date = moment($(".start").val(), "MM/DD/YYYY");
    var months_worked = moment().diff(converted_date, "months");
    var amount_billed = "$" + (rate * months_worked);
    
    console.log(months_worked);
    console.log(amount_billed);

    database.ref().push({
        name_db : name,
        role_db : role,
        start_db : start,
        rate_db : rate,
        months_db: months_worked,
        amount_billed_db : amount_billed
    });

