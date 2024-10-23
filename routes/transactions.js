const express = require('express');
const router = express.Router();

let transactions = []; // In-memory data storage for transactions

// POST /transactions: Add a new transaction
router.post('/', (req, res) => {
  const { type, category, amount, date, description } = req.body;

  if (!type || !category || !amount || !date) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const newTransaction = {
    id: transactions.length + 1,
    type,
    category,
    amount: parseFloat(amount),
    date,
    description: description || ''
  };

  transactions.push(newTransaction);

  res.status(201).json({
    message: 'Transaction added!',
    data: newTransaction
  });
});


// GET /transactions/summary: Retrieve summary of transactions
router.get('/summary', (req, res) => {
  if (transactions.length === 0) {
    return res.status(200).json({
      totalIncome: 0,
      totalExpenses: 0,
      balance: 0,
      message: 'No transactions available.'
    });
  }

  const totalIncome = transactions
    .filter(t => t.type === 'income')
    .reduce((sum, t) => sum + t.amount, 0);

  const totalExpenses = transactions
    .filter(t => t.type === 'expense')
    .reduce((sum, t) => sum + t.amount, 0);

  const balance = totalIncome - totalExpenses;

  res.status(200).json({
    totalIncome,
    totalExpenses,
    balance
  });
});



// GET /transactions: Retrieve all transactions
router.get('/', (req, res) => {
  res.json({ data: transactions });
});

// GET /transactions/:id: Retrieve a specific transaction by ID
router.get('/:id', (req, res) => {
  const transaction = transactions.find(t => t.id === parseInt(req.params.id));
  if (!transaction) {
    return res.status(404).json({ error: 'Transaction not found' });
  }
  res.json({ data: transaction });
});

// PUT /transactions/:id: Update a transaction by ID
router.put('/:id', (req, res) => {
  const transaction = transactions.find(t => t.id === parseInt(req.params.id));
  if (!transaction) {
    return res.status(404).json({ error: 'Transaction not found' });
  }

  const { amount, category, type, date, description } = req.body;

  transaction.amount = amount || transaction.amount;
  transaction.category = category || transaction.category;
  transaction.type = type || transaction.type;
  transaction.date = date || transaction.date;
  transaction.description = description || transaction.description;

  res.json({
    message: 'Transaction updated!',
    data: transaction
  });
});

// DELETE /transactions/:id: Delete a transaction by ID
router.delete('/:id', (req, res) => {
  const index = transactions.findIndex(t => t.id === parseInt(req.params.id));
  if (index === -1) {
    return res.status(404).json({ error: 'Transaction not found' });
  }

  transactions.splice(index, 1);
  res.json({ message: 'Transaction deleted!' });
});

// Export the router to be used in app.js
module.exports = router;
