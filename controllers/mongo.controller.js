const connectToMongoDB = require('../services/mongodbService');

// async function createCollection(req, res) {
//     var MongoClient = require('mongodb').MongoClient;
//     var url = "mongodb://localhost:27017/";

//     MongoClient.connect(url, function (err, db) {
//         if (err) throw err;
//         var dbo = db.db("mydb");
//         dbo.createCollection("customers", function (err, res) {
//             if (err) throw err;
//             console.log("Collection created!");
//             db.close();
//         });
//     });

// }

async function createCollection(req, res) {
    try {
        // Connect to MongoDB
        const db = await connectToMongoDB();

        // Check if the collection already exists
        const collections = await db.listCollections().toArray();
        if (collections.find(c => c.name === 'customers')) {
            return res.status(400).json({
                message: 'Collection "customers" already exists'
            });
        }

        // Create the "customers" collection
        const result = await db.createCollection('customers');
        console.log('Collection "customers" created!');

        // Send a simplified success response
        res.status(200).json({
            message: 'Collection "customers" created successfully!',
            collectionName: result.collectionName  // Only include the collection name in the response
        });
    } catch (err) {
        console.error('Error creating collection:', err);
        res.status(500).json({
            message: 'Error creating collection',
            error: err.message
        });
    }
}


async function createCustomer(req,res) {
        try {
        const db = await connectToMongoDB(); // Connect to MongoDB and get the db object
        const customersCollection = db.collection('customers'); // Access the "customers" collection

        const newCustomer = {    
            name: 'John Doe',
            email: 'john.doe@example.com',
            createdAt: new Date()
        };

        const result = await customersCollection.insertOne(newCustomer);
        console.log(`Customer inserted with _id: ${result.insertedId}`);

        res.status(201).send({ message: 'Customer created successfully', customerId: result.insertedId });
    } catch (err) {
        console.error('Error creating customer:', err);
        res.status(500).send({ message: 'Failed to create customer' });
    }
}

async function AddField(req,res) {
    const db = await connectToMongoDB(); // Connect to MongoDB and get the db object
        const customersCollection = db.collection('customers'); // Access the "customers" collection

        const result = await customersCollection.updateOne(
        { name: "John Doe" }, // Filter  
        { $set: { age: 26 } } // Update
      );
      res.status(201).send({ message: 'inserted new ke successfully', data: result });
}

module.exports = { createCollection,createCustomer,AddField };
