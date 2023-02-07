const express = require('express');
const app = express();
const PORT = 5000;

const people = require('./routes/people');
const auth = require('./routes/auth');

// Static files
app.use(express.static('./methods-public'));
// Middleware
app.use(express.urlencoded({ extended: false }));
// Parse JSON
app.use(express.json());

// Adding /api/people as a prefix por all people file routes
app.use('/api/people', people);

// Adding /login as a prefix por all auth file routes
app.use('/login', auth);

app.post('/login', (req, res) => {
  const { name } = req.body;
  if (name) {
    return res.status(200).send(`Welcome ${name}`);
  }
  res.status(401).send('Please provide credentials');
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
