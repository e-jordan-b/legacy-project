// require('dotenv').config();
// const router = require('express').Router();
// const userController = require('./controllers/user_controller');
// const eventController = require('./controllers/event_controller');
// const activeUserController = require('./controllers/activeUser_controller');
// var passport = require('passport');

// // const upload = require("./middleware/multer_middleware")
// const Multer = require("multer");

// const storage = new Multer.memoryStorage();
// const upload = Multer({
//   storage,
// });



// // USER AUTHENTICATION ROUTES
// // router.get('/login/:username/:password', userController.loginUser);
// // router.get('/get-active-user', activeUserController.getActiveUser);
// // router.post('/set-active-user', activeUserController.setActiveUser);
// // router.post('/delete-active-user', activeUserController.deleteActiveUser)

// // PAGES ROUTES

//   // Related to User-service in front-end
//   router.get('/users', userController.getAllUsers);
//   router.get('/user/:userId', userController.getUserById)
//   router.post('/register', userController.createUser);
//   // the login route is not used for now (the login form in the front-end only navigates to the homepage)
//   // router.post('/login', userController.loginUser);
//   router.post('/add-saved-event/:eventId', userController.addSavedEvent)
//   router.post('/remove-saved-event/:eventId', userController.removeSavedEvent)
//   router.post('/add-joined-event/:eventId', userController.addJoinedEvent)
//   router.post('/remove-joined-event/:eventId', userController.removeJoinedEvent)
//   router.post('/add-friend', userController.addFriend)
//   router.post('/remove-friend', userController.removeFriend)

//   // Related to Event-service in front-end
//   router.post('/add-event', eventController.addEvent);
//   router.get('/all-events/:userId', eventController.getAllEvents);
//   router.post('/add-user-to-joined-list/:eventId', eventController.addUserToJoinedList)
//   router.post('/remove-user-from-joined-list/:eventId', eventController.removeUserFromJoinedList)

// // CLOUDINARY ROUTES (FOR NOW NOT USED)
// router.get('/cloudinary', function(req, res) {
//   console.log(process.env.CLOUDINARY_URL)
//   res.json(process.env.CLOUDINARY_URL)
// })

// router.post("/upload", upload.single("my_file"), eventController.handleUploadToCloudinary);

// //FUTURE FUNCTIONS FOR AUTHENTICATION WITH PASSPORT
// // router.post('/login', passport.authenticate('local', {
// //   failureRedirect: '/login-failure',
// //   successRedirect: '/profile/:username'
// // }), (err, req, res, next) => {
// //   if (err) next(err);
// // });

// // router.get('/login-failure', (req, res, next) => {
// //   res.send('Login Attempt Failed.');
// // });

// // router.get('/login-success', (req, res, next) => {
// //   res.send('Login Attempt was successful.');
// //   // res.redirect(`/profile/${req.}`);
// // });

// module.exports = router;