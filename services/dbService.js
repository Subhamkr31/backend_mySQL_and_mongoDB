// const mysql = require('mysql');

// function createConnection(database) {
//     const connection = mysql.createConnection({
//         host: '127.0.0.1',
//         port: 3307, // Specify the custom port here
//         user: 'root',
//         password: 'mypass',
//         database: database // Use the provided database name
//     });

//     connection.connect(function(err) {
//         if (err) throw err;
//         console.log(`Connected to MySQL database: ${database} 😜`);
//     });

//     return connection;
// }

// // Example usage
// const dbName = 'mydb'; // You can set this dynamically based on your logic
// const connection = createConnection(dbName);

// module.exports = connection;



const mysql = require('mysql');

function createConnection(database) {
    const connection = mysql.createConnection({
        host: '127.0.0.1',
        port: 3307,
        user: 'root',
        password: 'mypass',
        database: database // Use the provided database name
    });

    connection.connect(function(err) {
        if (err) throw err;
        console.log(`Connected to MySQL database: ${database} 😜`);
    });

    return connection;
}

module.exports = { createConnection };
