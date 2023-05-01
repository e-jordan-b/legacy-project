// require('dotenv').config();
// const express = require('express');
// const cors = require('cors');
// const router = require('./router');
// const app = express();
// const SERVER_PORT = process.env.PORT | 3002;
// const session = require('express-session');
// const passport = require('passport');
// //const {verifyToken} = require('./middleware/verifyToken');
// var bodyParser = require('body-parser')

// app.use(cors())
// app.use(express.json());
// app.use(bodyParser.urlencoded({ extended: false }))

// app.use(session({
//   key: 'user_sid',
//   // secret: process.env.SESSION_SECRET,
//   secret: 'SUPERkey',
//   resave: true,
//   saveUninitialized: false,
//   cookie: {
//     expires: 10800000, // 3 hours
//     httpOnly: false
//   }
// }))
// app.use(passport.initialize());

// app.use(passport.session());

// app.use(router);




// app.listen(SERVER_PORT, (err) => {
//   if (err) {
//     console.log(`😞 Sorry, something went wrong! ${err}`); // eslint-disable-line no-console
//   } else {
//     console.log(`🚀 Server (sessions) is listening on port ${SERVER_PORT}!`); // eslint-disable-line no-console
//   }
// });

// TODO: FUTURE TESTING ->
// App will have to be stored in const server and exported for the tests to work

// const server = app.listen(SERVER_PORT, (err) => {
//   if (err) {
//     console.log(`😞 Sorry, something went wrong! ${err}`); // eslint-disable-line no-console
//   } else {
//     console.log(`🚀 Server (sessions) is listening on port ${SERVER_PORT}!`); // eslint-disable-line no-console
//   }
// });

//module.exports = server;
