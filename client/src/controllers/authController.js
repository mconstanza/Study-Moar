var express = require('express');
var router = express.Router();
var passport = require('passport');

// =====================================
// LOGIN ===============================
// =====================================

router.route('/login').post(function(req, res, next) {
    console.log(req.body, req.session)
    passport.authenticate('local-login', function(err, user, info) {
        if (err) {
            return res.send(info)
        } else
            req.login(user, function(err) {
                return res.send({user: user, info: info});
            })
    })(req, res, next)
})


// =====================================
// SIGNUP ==============================
// =====================================

router.route('/signup').post(passport.authenticate('local-signup', {
successRedirect: '/', // redirect to the secure profile section
failureRedirect: '/', // redirect back to the signup page if there is an error
}));

// router.route('/signup').get(function(req, res) {
//     res.send('nuh uh uh')
// });

// =====================================
// GOOGLE ROUTES =======================
// =====================================
// send to google to do the authentication
// profile gets us their basic information including their name
// email gets their emails
router.route('/auth/google').get(passport.authenticate('google', {
scope: ['profile', 'email', 'https://www.googleapis.com/auth/youtube']
}));

// the callback after google has authenticated the user
router.route('/auth/google/callback').get(passport.authenticate('google', {
successRedirect: '/',
failureRedirect: '/'
}));

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
