const passport = require('passport');
const mongoose = require('mongoose');
const User = mongoose.model('User');

module.exports.register = function(req, res) {
    let user = new User();
    user.name = req.body.name;
    user.email = req.body.email;
    user.setPassword(req.body.password);
    user.createdDate = new Date();
    user.isActive = true;
    user.lastLoginDate = new Date();
    
    user.save(function(err) {
      let token = user.generateJwt();
      res.status(200);
      res.json({
        "token" : token
      });
    });
  };
  module.exports.login = function(req, res) {
    passport.authenticate('local', function(err, user, info){
      let token;
      if (err) {
        res.status(404).json(err);
        return;
      }
      if(user){
        user.lastLoginDate = new Date();
        user.save(function(err) {
          token = user.generateJwt();
          res.status(200);
          res.json({
            "token" : token
          });
        })
      } else {
        res.status(401).json(info);
      }
    })(req, res);
  };