// Create web server
// Create a new express app
const express = require('express');
const app = express();

// Create a new comment
app.post('/comments', (req, res) => {
  res.send('Creating a new comment');
});

// Get all comments
app.get('/comments', (req, res) => {
  res.send('Getting all comments');
});

// Get a specific comment
app.get('/comments/:id', (req, res) => {
  res.send('Getting a specific comment');
});

// Update a specific comment
app.put('/comments/:id', (req, res) => {
  res.send('Updating a specific comment');
});

// Delete a specific comment
app.delete('/comments/:id', (req, res) => {
  res.send('Deleting a specific comment');
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});