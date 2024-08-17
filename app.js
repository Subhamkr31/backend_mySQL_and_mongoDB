const express = require("express");
const http = require("http");
const routes = require("./routes/route");
const connectToMongoDB = require("./services/mongodbService");

const app = express();
// Middleware to parse JSON bodies
app.use(express.json());


// connectToMongoDB()   
// Create an HTTP service.
http.createServer(app).listen(8000, () => {
    console.log("Server is running on port 8000");
});


// require('./routes/route')(app)
app.use(routes);

app.get('/', (req, res) => {  
    res.send("Server is running on port 8000");
});
 