const mysql = require('mysql');
require('dotenv').config();
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSBS_URL);
} else {
  connection = mysql.createConnection ({
  host: 'localhost',
  user: 'root',
  password: 'All4toomb',
  database: 'johnhughesburgers_db'
});
};
module.exports = connection;