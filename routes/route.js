const express = require('express');
const router = express.Router();
const controller = require('../controllers/db.controller');

const mysql = require('../controllers/mysql.controller');
const mongodb = require("../controllers/mongo.controller");
// const employee = require("../controllers/employee.controller");
const companyController = require('../controllers/employee.controller');

router.get('/hello', controller.hello);
router.get('/query', controller.query);
router.post('/insert', controller.insert);

//  MYSQL
router.post('/createtable', mysql.createTable);
router.post('/checktable', mysql.checkTable);
router.post('/insertData', mysql.insertData);
router.post('/displayData', mysql.displayData);
router.post('/queryWHERE',mysql.queryWHERE);
router.post('/OrderBy',mysql.OrderBy)
router.post('/deleteQuery',mysql.deleteQuery);
router.post('/DropTable',mysql.DropTable);
router.post('/UpdateQuery',mysql.UpdateQuery)
router.post('/limitQuery',mysql.limitQuery)
router.post('/CreateUserAndProduct',mysql.CreateUserAndProduct)
router.get("/JoinQuery",mysql.JoinQuery);
router.get("/LeftJoin",mysql.LeftJoin);
router.get("/RightJoin",mysql.RightJoin)

// Employeee MySQL
router.post("/createdatabase", companyController.createDataBase)
router.post('/create-employee-table', companyController.createEmployeeTable);
router.post('/drop-company-database', companyController.dropCompanyDatabase);
router.post('/insert-employee-data', companyController.insertData);
router.post('/update-hr-salaries', companyController.updateSalary);
router.post('/delete-employee', companyController.deleteEmployee);
router.post('/drop-employee-table', companyController.dropEmployeeTable);
router.post('/count-it-employees', companyController.countITEmployees);
router.post('/employees-starting-with-r', companyController.getEmployeesStartingWithR);
router.post('/second-highest-salary', companyController.findSecondHighestSalary);
router.post('/nth-highest-salary', companyController.findNthHighestSalary);
router.post('/top-two-salaries', companyController.findTopTwoSalaries);
router.post('/salary-summary', companyController.calculateTotalAndAverageSalary);
router.post('/null-department', companyController.findRowsWithNullDepartment);
router.post('/duplicate-departments', companyController.findDuplicateDepartments);


// MONGODB
router.post("/customers",mongodb.createCustomer)
 

module.exports = router;

// module.exports = (app) => {
//     app.use(router);
// };

// var mysql = require('mysql');

// const connection = mysql.createConnection({
//     host: '127.0.0.1',
//     port: 3307, // Specify the custom port here
//     user: 'root',
//     password: 'mypass',
//     database: 'collage'
// });

// connection.connect(function(err) {
//     // connection.query("CREATE DATABASE IF NOT EXISTS mydb", function (err, result) {
//     //     if (err) throw err;
//     //     console.log("Database created");
//     //   });
//     // if (err) throw err;  
//     console.log("My SQL database is Connected! 😜");
// });   

// const connection = mysql.createPool({
//     host: '127.0.0.1',
//     port: 3307, // Specify the custom port here
//     user: 'root',
//     password: 'mypass',
//     database: 'collage',
//     connectionLimit:10
// });


// const query = 'SELECT * FROM student'; // Replace 'yourtable' with your actual table name
// connection.query(query, (error, results, fields) => {
//     if (error) {
//         return console.error('Error executing query:', error);
//         //   return res.status(500).json({ error: 'Error executing query' });
//     }
//     return console.log(results);
// });

 
// routes.js
// module.exports = (app) => {
   
//     // Add more routes here as needed
//     app.get('/hello', (req, res) => {
//         res.send("Hello World!");
//     });

//     app.get('/query', (req, res) => {
//         const query = 'SELECT * FROM student';  
//         connection.query(query, (error, results, fields) => {
//             if (error) {
//                 console.error('Error executing query:', error);
//                 return res.status(500).json({ error: 'Error executing query' });
//             }
//             res.json(results);
//         });
//     });

//     app.post('/insert', (req, res) => {
//         const { rollno, name, } = req.body;  
//         if (!rollno || !name) return res.status(400).send('Missing required fields');
//         const query = 'INSERT INTO student (rollno, name) VALUES (?, ?)';
    
//         connection.query(query, [rollno, name, ], (err, results) => {
//             if (err) {  
//                 console.error('Error inserting data:', err);
//                 return res.status(500).send('Error inserting data');
//             }
//             console.log('Data inserted:', results.insertId);
//             res.send('Data inserted successfully');
//         });
//     });
// };
