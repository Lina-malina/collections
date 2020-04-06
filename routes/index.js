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
router.get('/users/:userId', auth, ctrlUsers.getUserById)
router.post('/users/disable', auth, ctrlUsers.disableUsers);
router.post('/users/enable', auth, ctrlUsers.enableUsers);
router.post('/users/delete', auth, ctrlUsers.deleteUsers);
router.post('/users/new-admin', auth, ctrlUsers.makeAdmin);
router.post('/users/not-admin', auth, ctrlUsers.disableAdmin);
router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);

router.get('/collections', ctrlCollections.getCollections);
router.get('/collections/user/:userId', auth, ctrlCollections.getUserCollections);
router.get('/collections/:id', ctrlCollections.getCollectionById);
router.post('/collections', auth, ctrlCollections.addCollection);
router.post('/collections/:id', auth, ctrlCollections.editCollection);
router.delete('/collections/:id', auth, ctrlCollections.deleteCollection);

router.get('/items', ctrlItems.getItems);
router.get('/search-items', ctrlItems.searchItems);
router.get('/items/:id', ctrlItems.getItemById)
router.post('/items', auth, ctrlItems.addItem);
router.post('/items/:id', auth, ctrlItems.editItem);
router.delete('/items/:id', auth, ctrlItems.deleteItem);
router.post('/items/:id/comments', auth, ctrlItems.addComment);

module.exports = router;