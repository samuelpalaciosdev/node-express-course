const express = require('express');
const router = express.Router();
const {
  getPeople,
  createPerson,
  createPersonInsomnia,
  updatePerson,
  deletePerson,
} = require('../controllers/people');

// GET and POST --> on /api/people
router.route('/').get(getPeople).post(createPerson);
// POST --> on /api/people/insomnia
router.route('/insomnia').post(createPersonInsomnia);
// POST and DELETE --> on /api/people/:id
router.route('/:id').post(updatePerson).delete(deletePerson);

// router.get('/', getPeople);
// router.post('/', createPerson);
// router.post('/insomnia', createPersonInsomnia);
// router.put('/:id', updatePerson);
// router.delete('/:id', deletePerson);

module.exports = router;
