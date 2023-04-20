const mongoose = require('mongoose');
const DB_PORT = process.env.DB_PORT || 27017;
const DB_NAME = process.env.DB_NAME || 'imin';

let connection;

try{
  mongoose.connect(
    `mongodb://localhost:${DB_PORT}/${DB_NAME}`
  )
}catch(err){
  if (err) {
    console.log(`😞 Sorry, something went wrong! ${err}`);
  } else {
    console.log(`🦆 Database (sessions) connected @ port ${DB_PORT}!`);
  }
}


module.exports = mongoose;