const { createConnection } = require("../services/dbService")


const companyController = {

    createDataBase: (req, res) => {
        const dbName = 'company'; // Specify the database name here
        const connection = createConnection(''); // Connect without a specific database
        const sql = `CREATE DATABASE IF NOT EXISTS ${dbName}`;

        connection.query(sql, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            res.send("DataBase created successfully!");
            connection.end(); // Close the connection after the query
        });
    },

    createEmployeeTable: (req, res) => {
        const dbName = 'company'; // Specify the database name here
        const connection = createConnection(dbName);

        // const createTableQuery = `
        //     CREATE TABLE IF NOT EXISTS employee (
        //         employee_id INT PRIMARY KEY,
        //         first_name VARCHAR(50),
        //         last_name VARCHAR(50)
        //     )
        // `;

        // const createTableQuery = `
        // CREATE TABLE employee (
        //     empId INT PRIMARY KEY,
        //     name VARCHAR(50),
        //     department VARCHAR(50),
        //     salary INT
        // );
        // `


        const createTableQuery = `
        CREATE TABLE employee (
            empId INT PRIMARY KEY,
            name VARCHAR(50),
            department VARCHAR(50),
            city VARCHAR(25),
            salary INT
        );
        `
        connection.query(createTableQuery, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            res.send("Employee table created successfully!");
            connection.end(); // Close the connection after the query
        });
    },

    dropCompanyDatabase: (req, res) => {
        const dbName = 'company'; // Specify the database name here
        const connection = createConnection('');

        const dropDatabaseQuery = `DROP DATABASE IF EXISTS ${dbName}`;

        connection.query(dropDatabaseQuery, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            res.send("Company database dropped successfully!");
            connection.end(); // Close the connection after the query
        });
    },

    insertData: (req, res) => {
        const dbName = 'company'; // Change this to your database name
        const connection = createConnection(dbName);

        // const insertQuery = `
        //     INSERT INTO employee (empId, name, department, salary)
        //     VALUES
        //         (1, 'Riti', 'IT', 30000),
        //         (2, 'Rahul', 'HR', 15000)
        // `;

        const insertQuery = `
        INSERT INTO employee (empId, name, department, salary, city) VALUES
        (1, 'Riti', 'IT', 30000, 'Mumbai'),
        (2, 'Rahul', 'HR', 15000, 'Pune'),
        (3, 'Anita', 'Finance', 40000, 'Delhi'),
        (4, 'Raj', 'IT', 35000, 'Bangalore'),
        (5, 'Priya', 'Marketing', 25000, 'Hyderabad'),
        (6, 'Vinay', 'HR', 20000, 'Chennai'),
        (7, 'Neha', 'Finance', 45000, 'Mumbai'),
        (8, 'Kiran', 'IT', 32000, 'Ahmedabad'),
        (9, 'Suresh', 'Marketing', 27000, 'Indore'),
        (10, 'Aditi', 'IT', 36000, 'Jaipur');
    `;


        connection.query(insertQuery, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            res.send("Data inserted successfully!");
            connection.end(); // Close the connection after the query
        });
    },

    updateSalary: (req, res) => {
        const dbName = 'company'; // Change this to your database name
        const connection = createConnection(dbName);

        const updateQuery = `
            UPDATE employee
            SET salary = 20000
            WHERE department = 'HR'
        `;

        connection.query(updateQuery, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            res.send("Salaries updated for HR department!");
            connection.end(); // Close the connection after the query
        });
    },

    deleteEmployee: (req, res) => {
        const empId = 2; // Get empId from request parameters
        const dbName = 'company'; // Change this to your database name
        const connection = createConnection(dbName);

        const deleteQuery = `
            DELETE FROM employee
            WHERE empId = ?
        `;

        connection.query(deleteQuery, [empId], (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            res.send(`Employee with empId ${empId} deleted successfully!`);
            connection.end(); // Close the connection after the query
        });
    },

    dropEmployeeTable: (req, res) => {
        const dbName = 'company'; // Change this to your database name
        const connection = createConnection(dbName);

        const dropQuery = `
            DROP TABLE IF EXISTS employee
        `;

        connection.query(dropQuery, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            res.send("Employee table deleted successfully!");
            connection.end(); // Close the connection after the query
        });
    },


    countITEmployees: (req, res) => {
        const dbName = 'company'; // Change this to your database name
        const connection = createConnection(dbName);

        const countQuery = `
            SELECT COUNT(*) AS total_employees 
            FROM employee 
            WHERE department = 'IT';
        `;

        connection.query(countQuery, (err, results) => {
            if (err) {
                return res.status(500).send(err);
            }

            // Access the count result from the first row of the result set
            const totalEmployees = results[0].total_employees;
            res.send(`Total employees in IT department: ${totalEmployees}`);
            connection.end(); // Close the connection after the query
        });
    },

    getEmployeesStartingWithR: (req, res) => {
        const dbName = 'company'; // Change this to your database name
        const connection = createConnection(dbName);

        const selectQuery = `
            SELECT * FROM employee WHERE name LIKE 'R%';
        `;

        connection.query(selectQuery, (err, results) => {
            if (err) {
                return res.status(500).send(err);
            }

            res.json(results); // Send back the results as a JSON response
            connection.end(); // Close the connection after the query
        });
    },
    findSecondHighestSalary: (req, res) => {
        const dbName = 'company'; // Change this to your database name
        const connection = createConnection(dbName);

        // const secondHighestSalaryQuery = `
        //     SELECT MAX(salary) 
        //     FROM employee 
        //     WHERE salary <> (SELECT MAX(salary) FROM employee);
        // `;

        // connection.query(secondHighestSalaryQuery, (err, results) => {
        //     if (err) {
        //         return res.status(500).send(err);
        //     }
        //     const secondHighestSalary = results[0]['MAX(salary)'];
        //     res.send(`Second highest salary: ${secondHighestSalary}`);
        //     connection.end(); // Close the connection after the query
        // });


        const secondHighestSalaryQuery = `
                 SELECT DISTINCT salary 
                 FROM employee 
                 ORDER BY salary DESC 
                 LIMIT 1 OFFSET 1;
             `;

        connection.query(secondHighestSalaryQuery, (err, results) => {
            if (err) {
                return res.status(500).send(err);
            }

            if (results.length > 0 && results[0].salary !== null) {
                const secondHighestSalary = results[0].salary; // Ensure you access the salary correctly
                res.send(`Second highest salary: ${secondHighestSalary}`);
            } else {
                res.send('There is no second highest salary available.');
            }

            connection.end(); // Close the connection after the query
        });


    },

      findNthHighestSalary : (req, res) => {
        const dbName = 'company'; // Change this to your database name
        const n =3; // Assuming you're passing the value of n in the route parameter
        const connection = createConnection(dbName); // Assuming createConnection is defined properly
    
        const nthHighestSalaryQuery = `
            SELECT DISTINCT salary
            FROM employee
            ORDER BY salary DESC
            LIMIT ?, 1;
        `;
    
        connection.query(nthHighestSalaryQuery, [n - 1], (err, results) => {
            if (err) {
                return res.status(500).send(err);
            }
    
            if (results.length > 0) {
                const nthHighestSalary = results[0].salary; // Ensure you access the salary correctly
                res.send(`The ${n}th highest salary is: ${nthHighestSalary}`);
            } else {
                res.send(`There is no ${n}th highest salary available.`);
            }
    
            connection.end(); // Close the connection after the query
        });
    },

      findTopTwoSalaries : (req, res) => {
        const dbName = 'company'; // Change this to your database name
        const connection = createConnection(dbName); // Assuming createConnection is defined properly
    
        const topTwoSalariesQuery = `
            SELECT salary
            FROM employee
            ORDER BY salary DESC
            LIMIT 2;
        `;
    
        connection.query(topTwoSalariesQuery, (err, results) => {
            if (err) {
                return res.status(500).send(err);
            }
    
            if (results.length > 0) {
                res.send(`Top 2 salaries are: ${results.map(row => row.salary).join(', ')}`);
            } else {
                res.send('No salaries found.');
            }
    
            connection.end(); // Close the connection after the query
        });
    },
    
    
      calculateTotalAndAverageSalary : (req, res) => {
        const dbName = 'company'; // Change this to your database name
        const connection = createConnection(dbName); // Assuming createConnection is defined properly
    
        const salaryQuery = `
            SELECT department, 
                   SUM(salary) AS total_salary, 
                   AVG(salary) AS avg_salary
            FROM employee
            GROUP BY department;
        `;
    
        connection.query(salaryQuery, (err, results) => {
            if (err) {
                return res.status(500).send(err);
            }
    
            if (results.length > 0) {
                res.send(results); // Send the results directly to the client
            } else {
                res.send('No salary data found.');
            }
    
            connection.end(); // Close the connection after the query
        });
    },
    

      findRowsWithNullDepartment : (req, res) => {
        const dbName = 'company'; // Change this to your database name
        const connection = createConnection(dbName); // Assuming createConnection is defined properly
    
        const nullDepartmentQuery = `
            SELECT *
            FROM employee
            WHERE department IS NULL;
        `;
    
        connection.query(nullDepartmentQuery, (err, results) => {
            if (err) {
                return res.status(500).send(err);
            }
    
            if (results.length > 0) {
                res.send(results); // Send the results directly to the client
            } else {
                res.send('No employees found with NULL department.');
            }
    
            connection.end(); // Close the connection after the query
        });
    },
    


      findDuplicateDepartments : (req, res) => {
        const dbName = 'company'; // Change this to your database name
        const connection = createConnection(dbName); // Assuming createConnection is defined properly
    
        const duplicateDepartmentQuery = `
            SELECT department, COUNT(*) AS count
            FROM employee
            GROUP BY department
            HAVING COUNT(*) > 1;
        `;
    
        connection.query(duplicateDepartmentQuery, (err, results) => {
            if (err) {
                return res.status(500).send(err);
            }
    
            if (results.length > 0) {
                res.send(results); // Send the results directly to the client
            } else {
                res.send('No duplicate departments found.');
            }
    
            connection.end(); // Close the connection after the query
        });
    },
    



};


// Explanation of the Query

//     SELECT department, COUNT(*): This selects the department column and counts the number of occurrences for each department.

//     FROM employee: This specifies that the data is being retrieved from the employee table.

//     GROUP BY department: This groups the results by the department column so that aggregate functions like COUNT can be applied to each group.

//     HAVING COUNT(*) > 1: This condition filters the grouped results to include only those departments where the count of rows is greater than one, indicating duplicates.

module.exports = companyController;
