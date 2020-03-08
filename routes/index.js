const express = require('express');
const router = express.Router();
const jwt = require('express-jwt');

const auth = jwt({
  secret: 'MY_SECRET',
  userProperty: 'payload'
});
const ctrlUsers = require('../controllers/users');
const ctrlAuth = require('../controllers/authentication');

router.get('/users', auth, ctrlUsers.getUsers);
router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);
router.post('/users/disable', auth, ctrlUsers.disableUsers);
router.post('/users/enable', auth, ctrlUsers.enableUsers);
router.post('/users/delete', auth, ctrlUsers.deleteUsers);

module.exports = router;