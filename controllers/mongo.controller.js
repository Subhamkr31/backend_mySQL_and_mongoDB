const connectToMongoDB = require('../services/mongodbService');

async function createCustomer(req, res) {
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

module.exports = { createCustomer };
