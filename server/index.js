const express = require('express');
const cors = require('cors');
const router = require('./router');
const app = express();
const SERVER_PORT = 3030;


app.use(cors())
app.use(express.json());
app.use(router);


app.listen(SERVER_PORT, (err) => {
  if (err) {
    console.log(`😞 Sorry, something went wrong! ${err}`); // eslint-disable-line no-console
  } else {
    console.log(`🚀 Server (sessions) is listening on port ${SERVER_PORT}!`); // eslint-disable-line no-console
  }
});

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
