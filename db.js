// mongodb.js

const { MongoClient } = require('mongodb');

let client = null; // Initialize the client variable to null

async function connect() {
  try {
    client = await MongoClient.connect('mongodb+srv://mangowallet:LENxPrfUk2rxm36f@mangowallet.fu2ndfj.mongodb.net/?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw error;
  }
}

function getClient() {
  if (!client) {
    throw new Error('MongoDB client has not been initialized');
  }
  return client;
}

module.exports = {
  connect,
  getClient,
};