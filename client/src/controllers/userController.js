// load up the user model
require('../models/user')
var mongoose = require('mongoose');
var User = mongoose.model('User');

var express = require('express');
var router = express.Router();
var passport = require('passport');




router.route('/:id/history')
.get(function(req, res){
  User.findOne({'_id': req.params.id}, function(err, user) {
    if (err){
      return console.error(user);
    }
    if (user) {
      res.send(user.history)
    }
  })
})
.post(function(req, res){
  console.log(req.body);
  User.findOne({'_id': req.params.id}, function(err, user) {
    if (err){
      return console.error(user);
    }
    if (user) {
      user.history.push({query: req.body.query, date: Date.now()})
    }
  })
})

module.exports = router;
