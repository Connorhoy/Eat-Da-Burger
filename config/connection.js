// JS Code (ConnectionJS)

// Requiring Dependencies.
var mysql = require("mysql");

// Setting up MySQL Connection.
var connection = mysql.createPool({
	host: 'localhost',
	user: 'root',
	password: '11connor',
	database: ''
});

//Make connection 
connection.getConnection(function(err, result) {
	if (err) {
		console.error("error connecting: " + err.stack);
		connection.release();
		return;
	}
	result.connect();
	console.log("connected as id " + connection.threadID);
});

//Export connection for ORM to use
module.exports = connection;