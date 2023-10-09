const mongoose = require('mongoose');
require('dotenv').config({ path: '..\\..\\.env' }); // Load environment variables from .env

// Database Credentials
const username = process.env.MONGODB_USERNAME;
const password = process.env.MONGODB_PASSWORD;
const clusterUrl = process.env.MONGODB_CLUSTER_URL;
const dbName = process.env.MONGODB_DATABASE_NAME;

// Connection URL
const mongoURI = `mongodb+srv://${username}:${password}@${clusterUrl}/${dbName}?retryWrites=true&w=majority`;

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

db.on('disconnected', () => {
  console.warn('MongoDB disconnected');
});

// Export the Mongoose connection
module.exports = db;
