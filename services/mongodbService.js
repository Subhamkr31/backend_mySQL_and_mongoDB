// const { MongoClient } = require('mongodb');

// async function connectToMongoDB() {
//     const url = 'mongodb://0.0.0.0:27017/mydb'; // Use IPv4 address
//     const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

//     try {
//         await client.connect();
//         console.log('---------------- Connected to MongoDB 🤪 -----------------');
//         const db = client.db('mydb');
//         // Perform operations on the database here

//         return db; // Return the database object for further use
//     } catch (err) {
//         console.error('Failed to connect to MongoDB', err);
//     } finally {
//         await client.close();    
//     }
// }

// module.exports = connectToMongoDB;

// db.js
const { MongoClient } = require('mongodb');

let cachedClient = null;

async function connectToMongoDB() {
    const url = 'mongodb://0.0.0.0:27017/mydb'; // Ensure correct URL
    const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

    if (cachedClient) {
        return cachedClient.db('mydb');  // Reuse existing connection
    }

    try {
        // Await connection to MongoDB
        await client.connect();
        console.log('---------------- Connected to MongoDB 🤪 -----------------');
        cachedClient = client;  // Cache the client
        return client.db('mydb');  // Return the database object
    } catch (err) {
        console.error('Failed to connect to MongoDB', err);
        throw err;
    }
}

module.exports = connectToMongoDB;

