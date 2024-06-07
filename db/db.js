// Initialize the database connection
const { Client } = require('pg');

//Database configuration
const dbConfig = {
    user: 'postgres',
    host: 'localhost',
    database: 'buz_planner',
    password: 'sbuZZPlan3r@04',
    port: 5432,
};

//Creating a new instance of the Client
const client = new Client(dbConfig);

client
    .connect()
    .then(() => console.log('Connected to the database'))
    .catch((err) => console.error('Database unable to connect', err.stack));

// Method to close the connection
const closeConnection = () => {
    return client.end()
      .then(() => console.log('Database connection closed'))
      .catch((err) => console.error('Error closing the database connection', err.stack));
  };
  
  // Exporting the client and closeConnection method
  module.exports = { client, closeConnection };