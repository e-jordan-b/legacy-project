const router = require('express').Router();
const userController = require('./controllers/user_controller');
const eventController = require('./controllers/event_controller');
var passport = require('passport');

const User = require('./models/user_model');

router.get('/', function (req, res) {
  console.log('home')
});

// router.get('/login', userController.login);
// router.post('/login',  userController.login)

router.post('/login', passport.authenticate('local', {
  failureRedirect: '/login-failure',
  successRedirect: '/profile/:username'
}), (err, req, res, next) => {
  if (err) next(err);
});

router.get('/login-failure', (req, res, next) => {
  res.send('Login Attempt Failed.');
});

// router.get('/login-success', (req, res, next) => {
//   res.send('Login Attempt was successful.');
//   // res.redirect(`/profile/${req.}`);
// });

router.get('/profile/:username', userController.getUser)


router.get('/users', userController.getAllUsers);
router.get('/user/:userId', userController.getUserById)

router.post('/register', userController.createUser);

router.post('/add-event', eventController.addEvent);
router.get('/all-events', eventController.getAllEvents);


module.exports = router;