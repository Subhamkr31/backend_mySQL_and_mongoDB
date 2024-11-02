const dbService = require("../services/dbService")
const mysql = require('mysql');


exports.createTable = (req, res) => {

    var sql = "CREATE TABLE customers (id INT primary key, name VARCHAR(255), address VARCHAR(255))";
    dbService.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Table created");
        res.send(result);
    });

}


exports.checkTable = (req, res) => {
    const tableName = 'customers';
    const query = `
    SELECT COUNT(*) AS tableExists 
    FROM INFORMATION_SCHEMA.TABLES 
    WHERE TABLE_SCHEMA = 'mydb' 
    AND TABLE_NAME = 'customers'`;

    dbService.query(query, [tableName], (err, results) => {
        if (err) {
            console.error('Error checking table existence:', err);
            return res.status(500).send('Error checking table existence');
        }

        const tableExists = results[0].tableExists > 0;
        console.log("table", results)
        if (tableExists) {
            res.send(`Table ${tableName} exists`);
        } else {
            res.send(`Table ${tableName} does not exist`);
        }
    });
};

exports.insertData = (req, res) => {

    // Single data
    // var sql = "INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')";
    // dbService.query(sql, function (err, result) {
    //   if (err) throw err;
    //   console.log("1 record inserted");
    //   res.send(result);
    // });

    // multiple data

    var sql = "INSERT INTO customers (id, name, address) VALUES ?";
    var values = [
        [1, 'John', 'Highway 71'],
        [2, 'Peter', 'Lowstreet 4'],
        [3, 'Amy', 'Apple st 652'],
        [4, 'Hannah', 'Mountain 21'],
        [5, 'Michael', 'Valley 345'],
        [6, 'Sandy', 'Ocean blvd 2'],
        [7, 'Betty', 'Green Grass 1'],
        [8, 'Richard', 'Sky st 331'],
        [9, 'Susan', 'One way 98'],
        [10, 'Vicky', 'Yellow Garden 2'],
        [11, 'Ben', 'Park Lane 38'],
        [12, 'William', 'Central st 954'],
        [13, 'Chuck', 'Main Road 989'],
        [14, 'Viola', 'Sideway 1633']
    ];
    dbService.query(sql, [values], function (err, result) {
        if (err) throw err;
        console.log("Number of records inserted: " + result.affectedRows);
        res.send(result);
    });

    //   var sql = "INSERT INTO customers (name, address) VALUES ('Michelle', 'Blue Village 1')";
    //   dbService.query(sql, function (err, result) {
    //     if (err) throw err;
    //     console.log("1 record inserted, ID: " + result.insertId);
    //     res.send("1 record inserted, ID: " + result.insertId);
    //   });
}


exports.displayData = (req, res) => {
    dbService.query("SELECT * FROM customers", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
        res.send(result);
    });
    // dbService.query("SELECT name FROM customers", function (err, result, fields) {
    //     if (err) throw err;
    //     console.log(fields);
    //     res.send(result);
    //   });
}

exports.queryWHERE = (req, res) => {


    //   dbService.query("SELECT * FROM customers WHERE address LIKE 'S%'", function (err, result) {
    //     if (err) throw err;
    //     console.log(result);
    //     res.send(result);
    //   });


    // var adr = 'Mountain 21';
    // var sql = 'SELECT * FROM customers WHERE address = ' + mysql.escape(adr);
    // dbService.query(sql, function (err, result) {
    //     if (err) throw err;
    //     console.log(result);
    //     res.send(result);
    // });


    // var adr = 'Mountain 21';
    // var sql = 'SELECT * FROM customers WHERE address = ?';
    // dbService.query(sql, [adr], function (err, result) {
    //     if (err) throw err;
    //     console.log(result);
    //     res.send(result);
    // })

    var name = 'Amy';
    var adr = 'Mountain 21';
    var sql = 'SELECT * FROM customers WHERE name = ? OR address = ?';
    dbService.query(sql, [name, adr], function (err, result) {
        if (err) throw err;
        console.log(result);
        res.send(result);
    });
}


exports.OrderBy = (req, res) => {
    // dbService.query("SELECT * FROM customers ORDER BY name", function (err, result) {
    //     if (err) throw err;
    //     console.log(result);
    //     res.send(result);
    // });

    // DESC
    dbService.query("SELECT * FROM customers ORDER BY name DESC", function (err, result) {
        if (err) throw err;
        console.log(result);
        res.send(result);
    });
}

exports.deleteQuery = (req, res) => {
    var sql = "DELETE FROM customers WHERE address = 'Mountain 21'";
    dbService.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Number of records deleted: " + result.affectedRows);
        res.send(result);
    });
}

exports.DropTable = (req, res) => {
    //     var sql = "DROP TABLE customers";
    //     dbService.query(sql, function (err, result) {
    //     if (err) throw err;
    //     console.log("Table deleted");
    //     res.send(result);
    //   });

    var sql = "DROP TABLE IF EXISTS customers";
    dbService.query(sql, function (err, result) {
        if (err) throw err;
        console.log(result);
        res.send(result);
    });
}

exports.UpdateQuery = (req, res) => {
    var sql = "UPDATE customers SET address = 'Canyon 123' WHERE address = 'Valley 345'";
    dbService.query(sql, function (err, result) {
        if (err) throw err;
        console.log(result.affectedRows + "record(s) updated");
        res.send(result);
    });
}

exports.limitQuery = (req, res) => {
    // var sql = "SELECT * FROM customers LIMIT 5";
    // dbService.query(sql, function (err, result) {
    //   if (err) throw err;
    //   console.log(result);
    //   res.send(result);
    // });


    // var sql = "SELECT * FROM customers LIMIT 5 OFFSET 2";
    // dbService.query(sql, function (err, result) {
    //   if (err) throw err;
    //   console.log(result);
    //   res.send(result);
    // });

    var sql = "SELECT * FROM customers LIMIT 2, 5";
    dbService.query(sql, function (err, result) {
        if (err) throw err;
        console.log(result);
        res.send(result);
    });
}

// exports.CreateUserAndProduct = (req, res) => {

   
//     // let sql = "CREATE TABLE user ( id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255) NOT NULL, favourite_product INT, FOREIGN KEY (favourite_product) REFERENCES product(id))"
//     // let sql = "CREATE TABLE product (id INT AUTO_INCREMENT PRIMARY KEY, product_name VARCHAR(255) NOT NULL)"
//     // dbService.query(sql, function (err, result) {
//     //     if (err) throw err;
//     //     console.log(result);
//     //     res.send(result);
//     // })

//     // var sql = "INSERT INTO product (id, product_name) VALUES ?";
//     // var values = [
//     //   [154, 'Chocolate Heaven'],
//     //   [155, 'Tasty Lemons'],
//     //   [156, 'Vanilla Dreams']
//     // ];

//      // insert user
//     let sql = "INSERT into user (id , name ,favourite_product) VALUES ?"
//     var values = [
//         [1, 'John', 154],
//         [2, 'Peter', 154],
//         [3, 'Amy', 155],
//         [4, 'Hannah', null],
//         [5, 'Michael', null]
//       ];
//     dbService.query(sql, [values], function (err, result) {
//         if (err) throw err;
//         console.log(result);
//         res.send(result);
//     })
// }

exports.CreateUserAndProduct = (req, res) => {
    // Step 1: Create the 'products' table
    let createProductsTable = `
        CREATE TABLE IF NOT EXISTS products (
            id INT AUTO_INCREMENT PRIMARY KEY, 
            product_name VARCHAR(255) NOT NULL
        )
    `;
    
    dbService.query(createProductsTable, function (err, result) {
        if (err) {
            console.error("Error creating products table: ", err);
            return res.status(500).send("An error occurred while creating the products table.");
        }
        console.log("Products table created: ", result);
        
        // Step 2: Create the 'users' table
        let createUsersTable = `
            CREATE TABLE IF NOT EXISTS users (
                id INT AUTO_INCREMENT PRIMARY KEY, 
                name VARCHAR(255) NOT NULL, 
                favourite_product INT,
                FOREIGN KEY (favourite_product) REFERENCES products(id)
            )
        `;
        
        dbService.query(createUsersTable, function (err, result) {
            if (err) {
                console.error("Error creating users table: ", err);
                return res.status(500).send("An error occurred while creating the users table.");
            }
            console.log("Users table created: ", result);
            
            // Step 3: Insert sample data into the 'products' table
            let insertProducts = `
                INSERT INTO products (id, product_name) VALUES ?
                ON DUPLICATE KEY UPDATE product_name = VALUES(product_name)
            `;
            
            let productValues = [
                [154, 'Chocolate Heaven'],
                [155, 'Tasty Lemons'],
                [156, 'Vanilla Dreams']
            ];
            
            dbService.query(insertProducts, [productValues], function (err, result) {
                if (err) {
                    console.error("Error inserting into products table: ", err);
                    return res.status(500).send("An error occurred while inserting into the products table.");
                }
                console.log("Products inserted: ", result);
                
                // Step 4: Insert sample data into the 'users' table
                let insertUsers = `
                    INSERT INTO users (id, name, favourite_product) VALUES ?
                    ON DUPLICATE KEY UPDATE name = VALUES(name), favourite_product = VALUES(favourite_product)
                `;
                
                let userValues = [
                    [1, 'John', 154],
                    [2, 'Peter', 154],
                    [3, 'Amy', 155],
                    [4, 'Hannah', null],
                    [5, 'Michael', null]
                ];
                
                dbService.query(insertUsers, [userValues], function (err, result) {
                    if (err) {
                        console.error("Error inserting into users table: ", err);
                        return res.status(500).send("An error occurred while inserting into the users table.");
                    }
                    console.log("Users inserted: ", result);
                    res.send(result);
                });
            });
        });
    });
};

// Join Two or More Tables
exports.JoinQuery= async (req,res)=> {
    var sql = "SELECT users.name AS user, products.product_name AS favorite FROM users JOIN products ON users.favourite_product = products.id";
  dbService.query(sql, function (err, result) {
    if (err) throw err;  
    console.log(result);
    res.send(result);
  });
}

// Left Join 
exports.LeftJoin = async (req,res) => {
    var sql = "SELECT users.name AS user, products.product_name AS favorite FROM users LEFT JOIN products ON users.favourite_product = products.id";
    dbService.query(sql, function (err, result) {
      if (err) throw err;  
      console.log(result);
      res.send(result);
    });
}


// Right Join
exports.RightJoin = async (req,res) => {
    var sql = "SELECT users.name AS user, products.product_name AS favorite FROM users RIGHT JOIN products ON users.favourite_product = products.id";
    dbService.query(sql, function (err, result) {
      if (err) throw err;  
      console.log(result);
      res.send(result);
    });
}







