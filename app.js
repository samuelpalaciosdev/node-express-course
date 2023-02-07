const express = require('express');
const logger = require('./logger');
const app = express();

// Applying logger middleware funct to every route  that starts with /api
app.use('/api', logger);

app.get('/', (req, res) => {
  res.send('Home page');
});

app.get('/about', (req, res) => {
  res.send('About');
});

app.get('/products', (req, res) => {
  res.send('Products');
});
app.get('/items', (req, res) => {
  res.send('Items');
});

app.listen(5000, () => {
  console.log('hey from the server');
});
