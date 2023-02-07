const express = require('express');
const router = express.Router();
const {
  getPeople,
  createPerson,
  createPersonInsomnia,
  updatePerson,
  deletePerson,
} = require('../controllers/people');

router.get('/', getPeople);

// Add new person. This will be /api/people
router.post('/', createPerson);

// Add new person with insomnia. This will be /api/people/insomnia
router.post('/insomnia', createPersonInsomnia);

// Update person name by id
router.put('/:id', updatePerson);

// Remove person by id
router.delete('/:id', deletePerson);

module.exports = router;
