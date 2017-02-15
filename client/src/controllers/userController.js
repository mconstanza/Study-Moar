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
      return console.error(err);
    }
    if (user) {
      res.send(user.history)
    }
  })
})
.post(function(req, res){
  console.log("posting history:",req.body);
  console.log('params:', req.params)
  User.findByIdAndUpdate(
    {'_id': req.params.id},
    {$push: {"history": {query: req.body.query, date: req.body.date}}},
    {safe: true, upsert: true},
    function(err, user) {
      if (err){
        return console.error(err);
      }
      console.log('\nuser after post:', user)
      res.send(user)
    }
  )
})

module.exports = router;
