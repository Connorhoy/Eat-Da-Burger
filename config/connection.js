// JS Code (ConnectionJS)

// Requiring Dependencies.
var mysql = require("mysql");

// Setting up MySQL Connection.
var connection = mysql.createPool({
	host: '	vvfv20el7sb2enn3.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
	user: 'tv8tjkhp04fdn1zr',
	password: 'm23urdtgcr8iiu91',
	database: 'htq8tk21l1qvxrv0'
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