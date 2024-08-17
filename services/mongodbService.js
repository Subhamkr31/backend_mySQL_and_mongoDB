const { MongoClient } = require('mongodb');

async function connectToMongoDB() {
    const url = 'mongodb://0.0.0.0:27017/mydb'; // Use IPv4 address
    const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

    try {
        await client.connect();
        console.log('---------------- Connected to MongoDB 🤪 -----------------');
        const db = client.db('mydb');
        // Perform operations on the database here

        return db; // Return the database object for further use
    } catch (err) {
        console.error('Failed to connect to MongoDB', err);
    } finally {
        await client.close();    
    }
}

module.exports = connectToMongoDB;
