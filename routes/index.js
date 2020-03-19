const express = require('express');
const router = express.Router();
const jwt = require('express-jwt');
const auth = jwt({
  secret: 'MY_SECRET',
  userProperty: 'payload'
});
const ctrlUsers = require('../controllers/users');
const ctrlAuth = require('../controllers/authentication');
const ctrlItems = require('../controllers/items');
const ctrlCollections = require('../controllers/collections')

router.get('/users', auth, ctrlUsers.getUsers);
router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);

router.get('/collections', auth, ctrlCollections.getCollections);
router.get('/collections/:id', auth, ctrlCollections.getCollectionById);
router.post('/collections', auth, ctrlCollections.addCollection);
router.post('/collections/:id', auth, ctrlCollections.editCollection);
router.delete('/collections/:id', auth, ctrlCollections.deleteCollection);

router.get('/items', auth, ctrlItems.getItems);
router.post('/items', auth, ctrlItems.addItem);
router.post('/items/:id', auth, ctrlItems.editItem);
router.delete('/items/:id', auth, ctrlItems.deleteItem);

module.exports = router;