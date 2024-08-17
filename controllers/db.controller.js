const dbService = require('../services/dbService');

exports.hello = (req, res) => {
    res.send("Hello World!");
};

exports.query = (req, res) => {
    const query = 'SELECT * FROM student';  
    dbService.query(query, (error, results, fields) => {
        if (error) {
            console.error('Error executing query:', error);
            return res.status(500).json({ error: 'Error executing query' });
        }
        res.json(results);
    });
};

exports.insert = (req, res) => {
    const { rollno, name } = req.body;  
    if (!rollno || !name) return res.status(400).send('Missing required fields');
    const query = 'INSERT INTO student (rollno, name) VALUES (?, ?)';
    
    dbService.query(query, [rollno, name], (err, results) => {
        if (err) {  
            console.error('Error inserting data:', err);
            return res.status(500).send('Error inserting data');
        }
        console.log('Data inserted:', results.insertId);
        res.send('Data inserted successfully');
    });
};
