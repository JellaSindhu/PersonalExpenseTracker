const express = require('express'); // Import Express.js
const app = express(); // Create an Express application
const PORT = 3000; // Define the port number

// Middleware to parse JSON requests
app.use(express.json());

// Import the transactions router
const transactionsRouter = require('./routes/transactions');

// Mount the transactions router under the /transactions path
app.use('/transactions', transactionsRouter);

// Root route to confirm server status
app.get('/', (req, res) => {
  res.send('Welcome to the Personal Expense Tracker API!');
});

// Start the server and listen on the defined port
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
