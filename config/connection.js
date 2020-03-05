const mysql = require('mysql');

require('dotenv').config();

if (process.env,JSWDB_URL) {
  connection = mysql.createConnection(process.env.JAWSBS_URL);
} else {
  connection = mysql.createConnection ({
  host: 'localhost',
  user: 'root',
  password: 'All4toomb',
  database: 'burgers_db'
});

};


module.exports = connection;