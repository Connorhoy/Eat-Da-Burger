// JS Code (ORM JS)

// Requiring Dependincies
var connection = require("./connection.js");

// ORM Logic for connecting and interacting with the database.
var orm = {
	createTable: function(){
		var queryString = "CREATE TABLE IF NOT EXISTS burgers (";
		queryString += "id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,";
		queryString += "burger_name VARCHAR(50),";
		queryString += "devoured BOOLEAN NOT NULL DEFAULT 0,";
		queryString += "date TIMESTAMP);";

		connection.query(queryString, function(err, result){
			if (err) {
				throw err;
			}
		});
	},
	
	selectAll: function(table, cb){
		var queryString = "SELECT * FROM " + table + ";";
		connection.query(queryString, function(err, result){
			if (err) {
				throw err;
			}
			cb(result);
		});
	},
	// Inserts new values into the table.
	insertOne: function(table, vals, cb){
		var queryString = "INSERT INTO " + table;
		queryString += " (burger_name) ";
		queryString += "VALUES (";
		queryString += "?";
		queryString += ") ";

		console.log(queryString);

		connection.query(queryString, vals, function(err, result){
			if(err){
				throw err;
			}
			cb(result);
		});
	},
	// Updates the table.
	updateOne: function(table, condition, cb){
		var queryString = "UPDATE " + table;
		queryString += " SET devoured = 1 WHERE ";
		queryString += condition;

		console.log(queryString);

		connection.query(queryString, function(err, result){
			if(err){
				throw err;
			}
			cb(result);
		});
	}
};

// Finally, exports the module.

module.exports = orm;