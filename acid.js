const mysql = require('mysql');

// Create a connection to the MySQL database
const connection = mysql.createConnection({
    host: '127.0.0.1',
    port: 3307, // Specify the custom port here
    user: 'root',
    password: 'mypass',
    database: 'bankaccount'
});

// (function createDatabase() {
//     let sql = "CREATE DATABASE IF NOT EXISTS bankAccount";
//     connection.query(sql, function (err, result) {
//         if (err) throw err;
//         if (result.warningCount === 0) {
//             console.log("Database created successfully");
//         } else {
//             console.log("Database already exists");
//         }
//     });
// })();

// (function createTable() {
// let sql = "CREATE TABLE accounts (id INT PRIMARY KEY AUTO_INCREMENT, balance DECIMAL(10, 2) NOT NULL )";
// connection.query(sql, function (err, result) {
//     if (err) throw err;

// });

//  USE bankAccount;

// })()

// (function insertData() {

//     // -- Insert sample data
//     let insert = "INSERT INTO accounts (balance) VALUES (1000.00), (1500.00)";
//     connection.query(insert, function (err, result) {
//         if (err) throw err;
//         console.log("Data inserted");

//     });

// })()

// (function displayData(){
//     connection.query("SELECT * FROM accounts", function (err, result, fields) {
//         if (err) throw err;
//         console.log(result);
//     });
// })()



// // Function to delete an account by ID
// // function deleteAccount(accountId, callback) {
//     function deleteAccount( callback) {
//     // const sql = 'DELETE FROM accounts WHERE id = ?';
//     const sql = 'TRUNCATE TABLE accounts';

//     connection.query(sql, (err, result) => {
//         // connection.query(sql, [accountId], (err, result) => {
//         if (err) {
//             return callback(new Error('Error deleting account: ' + err.message));
//         }

//         if (result.affectedRows === 0) {
//             return callback(new Error('No account found with the specified ID.'));
//         }

//         callback(null, 'Account deleted successfully.');
//     });
// }

// // Connect to the database and delete an account
// connection.connect(err => {
//     if (err) {
//         return console.error('Connection error:', err.message);
//     }
//     console.log('Connected to the database');

//     // Example: Delete account with ID 1
//     // deleteAccount(1, (err, message) => {
//     deleteAccount( (err, message) => {
//         if (err) {
//             console.error(err.message);
//         } else {
//             console.log(message);
//         }

//         // Close the connection after the operation completes
//         connection.end(err => {
//             if (err) {
//                 console.error('Error closing the connection:', err.message);
//             }
//             console.log('Connection closed');
//         });
//     });
// });



// Function to perform a fund transfer
function transferFunds(fromAccountId, toAccountId, amount, callback) {
    connection.beginTransaction(err => {
        if (err) {
            return callback(err);
        }

        // Step 1: Select balance from the source account and lock the row
        connection.query('SELECT balance FROM accounts WHERE id = ? FOR UPDATE', [fromAccountId], (err, results) => {
            if (err) {
                return connection.rollback(() => {
                    return callback(new Error('Error fetching source account: ' + err.message));
                });
            }

            if (results.length === 0) {
                return connection.rollback(() => {
                    return callback(new Error('Source account not found'));
                });
            }

            const balance = results[0].balance;

            if (balance < amount) {
                return connection.rollback(() => {
                    return callback(new Error('Insufficient funds'));
                });
            }

            // Step 2: Deduct the amount from the source account
            connection.query('UPDATE accounts SET balance = balance - ? WHERE id = ?', [amount, fromAccountId], (err) => {
                if (err) {
                    return connection.rollback(() => {
                        return callback(new Error('Error updating source account: ' + err.message));
                    });
                }

                // Step 3: Add the amount to the destination account
                connection.query('UPDATE accounts SET balance = balance + ? WHERE id = ?', [amount, toAccountId], (err) => {
                    if (err) {
                        return connection.rollback(() => {
                            return callback(new Error('Error updating destination account: ' + err.message));
                        });
                    }

                    // Commit the transaction if all operations succeed
                    connection.commit(err => {
                        if (err) {
                            return connection.rollback(() => {
                                return callback(new Error('Commit error: ' + err.message));
                            });
                        }
                        callback(null, 'Transaction successful');
                    });
                });
            });
        });
    });
}

// Connect to the database and initiate a transfer
connection.connect(err => {
    if (err) {
        return console.error('Connection error:', err.message);
    }
    console.log('Connected to the database');

    // Example transfer: Transfer $500 from account ID 1 to account ID 2
    transferFunds(1, 2, 500, (err, message) => {
        if (err) {
            console.error(err.message);
        } else {
            console.log(message);
        }

        // Close the connection after the operation completes
        connection.end(err => {
            if (err) {
                console.error('Error closing the connection:', err.message);
            }
            console.log('Connection closed');
        });
    });
});