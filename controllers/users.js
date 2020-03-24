const mongoose = require('mongoose');
const User = mongoose.model('User');

module.exports.getUsers = function(req, res) {
  User.find(function(err, users) {
    res.status(200).json(users);
  })
}
module.exports.disableUsers = function(req, res) {
  req.body.selectedId.forEach(id => {
      User.findOne({_id: id}, function(err, disabledUser) {
      if (err) { return new Error; }
      disabledUser.isActive = false;

      disabledUser.save(function() {
        res.status(200).json();
      })
    })
  });
}
module.exports.enableUsers = function(req, res) {
  req.body.selectedId.forEach(id => {
      User.findOne({_id: id}, function(err, enabledUser) {
      if (err) { return new Error; }
      enabledUser.isActive = true;

      enabledUser.save(function() {
        res.status(200).json();
      })
    })
  });
}
module.exports.deleteUsers = function(req, res) {
  req.body.selectedId.forEach(id => {
      User.deleteOne({_id: id}, function(err) {
      if (err) { return new Error; }
      res.status(200).json();
    })
  });
}
module.exports.makeAdmin = function(req, res) {
  req.body.selectedId.forEach(id => {
      User.findOne({_id: id}, function(err, user) {
      if (err) { return new Error; }
      user.isAdmin = true;

      user.save(function() {
        res.status(200).json();
      })
    })
  });
}
module.exports.disableAdmin = function(req, res) {
  req.body.selectedId.forEach(id => {
      User.findOne({_id: id}, function(err, user) {
      if (err) { return new Error; }
      user.isAdmin = false;

      user.save(function() {
        res.status(200).json();
      })
    })
  });
}
