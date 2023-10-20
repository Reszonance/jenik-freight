const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import the cors middleware
const app = express();
const serverPort = process.env.SERVER_PORT || 5000;

require('dotenv').config({ path: '..\\.env' });

// Database Credentials
const username = process.env.MONGODB_USERNAME;
const password = process.env.MONGODB_PASSWORD;
const clusterUrl = process.env.MONGODB_CLUSTER_URL;
const dbName = process.env.MONGODB_DATABASE_NAME;

// Connection URL
const mongoURI = `mongodb+srv://${username}:${password}@${clusterUrl}/${dbName}?retryWrites=true&w=majority`;

console.log('MongoDB connection URL:', mongoURI);

// Connect to MongoDB using Mongoose
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Get the default connection
const db = mongoose.connection;

// Handle connection events
db.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

db.once('open', () => {
  console.log('Connected to MongoDB!');
});

// Set up middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Enable CORS for all routes
app.use(cors());
console.log('CORS is enabled')

console.log('Middleware set up.');

// Import routes from routes.js
const routes = require('./routes/routes');
app.use('/', routes);

console.log('Routes imported.');

// Start the server
app.listen(serverPort, () => {
  console.log(`Server is running on port ${serverPort}`);
});
