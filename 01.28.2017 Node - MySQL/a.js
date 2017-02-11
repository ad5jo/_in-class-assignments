var mysql = require("mysql");
var inquirer = require("inquirer");


var connection = mysql.createConnection({
	host: "localhost",
	port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "Starbucks9",
    database: "top_songsdb"
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////
function connectDB() {
	connection.connect(function (err) {
		if (err) { throw err; }
		console.log("connected as id " + connection.threadId);
		inquireMain();
	});
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////
// inquire user input for card type
function inquireMain() {
	inquirer.prompt([
	{
		type: "list",
		message: "Welcome to Flashcard App, Select an Option Below:",
		choices: ["Add New", "Query by Artist", "QUIT"],
		name: "command"
	}
	]).then(function (user) {
		switch (user.command) {
			case "Add New":
			console.log('POST');
			inquireItem();
			break;
			case "Query by Artist":
			console.log('Query by Artist');
			inquire_by_artist();
			break;
			case "QUIT":
			console.log("Goodbye!");
			process.exit(0);
		}
	});
}

function inquireItem() {
	inquirer.prompt([
	{
		type: "input",
		message: "Enter your item for bid: ",
		name: "item"
	},
	{
		type: "input",
		message: "Enter your item's starting bid: ",
		name: "bid"
	}
	]).then(function (user) {

		connection.query("INSERT INTO item SET ?", {
			item_name: user.item,
			start_price: user.bid
		}, function (err, res) { });
		inquireMain();
	});
}


function inquire_by_artist() {
	var items = [];
	console.log("entered inquire_by_artist");
	connection.query("SELECT artist FROM top5000",
		function (err, res) {
			for (var i = 0; i < res.length; i++) {
				console.log(res[i].artist);
				items.push(res[i].artist);
			}
			

		});
}
		
connectDB();


// qry_art(user.selected)

// function qry_art(user.selected)
// {
// 	connection.query("SELECT * FROM top5000 WHERE artist=?, [user.selected]",
//         		function (err, res) {
//             		for (var i = 0; i < res.length; i++) {
//                 	console.log(res[i].song); 
//                 	}
                	
//             	});
// }



// inquirer.prompt([{
// 				type: "list",
// 				message: "Select an artist",
// 				choices: items,
// 				name: "selected"
// 			},
// 			]).then(function (user) {
// 				console.log(user.selected);
// 				connection.query("SELECT * FROM top5000 WHERE artist=?, [user.selected]",
// 					function (err, res) {
// 						for (var i = 0; i < res.length; i++) {
// 							console.log(res[i].artist); 
//                 			//items.push(res[i].artist);
//                 			//qry_art(user.selected);
//                 		}
//                 	}
//                 	);
// 			});