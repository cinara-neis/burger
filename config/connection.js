const mysql = require("mysql");
require("dotenv").config();

let connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {
    connection = mysql.createConnection({
        host: '127.0.0.1',
        user: 'root',
        password: '',
        database: 'filmes',
    });
}
connection.connect((err) => {
    if (err) {
        throw err;
    }
    console.log(`connected as id ${connection.threadId}`);
});


module.exports = connection;