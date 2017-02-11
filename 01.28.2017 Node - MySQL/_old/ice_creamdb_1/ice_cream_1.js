
var mysql = require("mysql"); // npm install mysql

var connection = mysql.createConnection({
	host: "localhost",
	port: 3306,
	user: "root",
	password:"Starbucks9",
	database: "music_db"

});

connection.connect(function(err) {
  if (err) {throw err;}
  
  console.log("connected as id " + connection.threadId);
});

// connection.query("SELECT * FROM products", function(err, res){
// 	if(err) throw err;
// 	console.log(err);
// });

// CREATE - WORKED - added a record
// connection.query("INSERT INTO songs SET ?",{
// 	title:"1title",
// 	artist:"1artist",
// 	genre:"1genre"
// },
//  function(err, res){
// 	if(err) throw err;
// 	console.log(err);
// });

// UPDATE
connection.query("UPDATE songs SET ? WHERE ?",{
	title:"2title",
	artist:"2artist",
	genre:"2genre"
},{
	id:2
},

 function(err, res){
	if(err) throw err;
	console.log(err);
});

