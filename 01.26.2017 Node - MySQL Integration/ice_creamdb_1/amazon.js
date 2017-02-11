
var mysql = require("mysql"); // npm install mysql

var connection = mysql.createConnection({
	host: "localhost",
	port: 3306,
	user: "root",
	password:"Starbucks9",
	database: "amazon_db"

});

connection.connect(function(err) {
  if (err) {throw err;}
  
  console.log("connected as id " + connection.threadId);
});

// CREATE - WORKED - added a record
connection.query("INSERT INTO item SET ?",{
	item_name:"1title",
	start_price:"1artist",
	current_bid:"1genre"
},
 function(err, res){
	if(err) throw err;
	console.log(err);
});
