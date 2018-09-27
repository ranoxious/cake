// Node Dependency
var mysql = require('mysql');
var connection;

// For Heroku Deployment v9csp[k;Z<s. Local MySQL Database
if(process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else{
  connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '9csp[k;Z<', // Add your password
    database : 'cake_db' // Add your database
  });
}


// Export the Connection
module.exports = connection;