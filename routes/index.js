const express = require('express');
const router = express.Router();
const jwt = require('express-jwt');

const auth = jwt({
  secret: 'MY_SECRET',
  userProperty: 'payload'
});
const ctrlUsers = require('../controllers/users');
const ctrlAuth = require('../controllers/authentication');
const ctrlNotes = require('../controllers/notes')

router.get('/users', auth, ctrlUsers.getUsers);
router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);
router.post('/users/disable', auth, ctrlUsers.disableUsers);
router.post('/users/enable', auth, ctrlUsers.enableUsers);
router.post('/users/delete', auth, ctrlUsers.deleteUsers);

router.get('/notes', auth, ctrlNotes.getNotes);
router.post('/notes', auth, ctrlNotes.createNote);
router.post('/notes/:id', auth, ctrlNotes.updNote);
router.delete('/notes/:id', auth, ctrlNotes.deleteNote);

module.exports = router;