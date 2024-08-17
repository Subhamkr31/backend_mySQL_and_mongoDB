const mysql = require('mysql');

const connection = mysql.createConnection({
    host: '127.0.0.1',
    port: 3307, // Specify the custom port here
    user: 'root',
    password: 'mypass',
    // database: 'collage'
    database: 'mydb'
});

connection.connect(function(err) {
    // connection.query("CREATE DATABASE IF NOT EXISTS mydb", function (err, result) {
    //     if (err) throw err;
    //     console.log("Database created");
    //   });
    // if (err) throw err;  
    console.log("My SQL database is Connected! 😜");
});   


module.exports = connection;
