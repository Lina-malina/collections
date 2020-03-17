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

module.exports = router;