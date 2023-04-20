const router = require('express').Router();
const userController = require('./controllers/user_controller');
var passport = require('passport');

const User = require('./models/user_model');

router.get('/', function (req, res) {
  console.log('home')
});

// router.get('/login', userController.login);
// router.post('/login',  userController.login)

router.post('/login', passport.authenticate('local', {
  failureRedirect: '/login-failure',
  successRedirect: '/login-success'
}), (err, req, res, next) => {
  if (err) next(err);
});

router.get('/login-failure', (req, res, next) => {
  console.log(req.session);
  res.send('Login Attempt Failed.');
});

router.get('/login-success', (req, res, next) => {
  console.log(req.session);
  res.send('Login Attempt was successful.');
});

router.get('/profile', function(req, res) {
  console.log(req.session)
  if (req.isAuthenticated()) {
    res.json({ message: 'You made it to the secured profie' })
  } else {
    res.json({ message: 'You are not authenticated' })
  }
})


router.post('/register', userController.createUser);

module.exports = router;