var express = require('express');
var router = express.Router();
var passport = require('passport');

    // =====================================
    // LOGIN ===============================
    // =====================================

    router.route('/login').post(passport.authenticate('local-login', {
        successRedirect : '/signup', // redirect to the secure profile section
        failureRedirect : '/login', // redirect back to the signup page if there is an error
    }));

    // =====================================
    // SIGNUP ==============================
    // =====================================

    router.route('/signup').post(passport.authenticate('local-signup', {
          successRedirect : '/user', // redirect to the secure profile section
          failureRedirect : '/signup', // redirect back to the signup page if there is an error
      }));

      router.route('/signup').get(function(req,res) {
          res.send('nuh uh uh')
        });

    // =====================================
    // LOGOUT ==============================
    // =====================================
    router.route('/logout').get(function(req, res) {
        req.logout();
        res.redirect('/');
    });

// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.redirect('/');
}

module.exports = router;
