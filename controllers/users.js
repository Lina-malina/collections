const mongoose = require('mongoose');
const User = mongoose.model('User');

module.exports.getUsers = function(req, res) {
  User.find(function(err, users) {
    res.status(200).json(users);
  })
};
