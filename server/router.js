const router = require('express').Router();
const userController = require('./controllers/user_controller');


router.post('/register', userController.createUser);

module.exports = router;