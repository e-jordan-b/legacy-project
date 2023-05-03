import mongoose from 'mongoose';

const DB_PORT = process.env.DB_PORT || 27017;
const DB_NAME = process.env.DB_NAME || 'legacy';

try {
  // mongoose.connect(`mongodb://localhost:${DB_PORT}/${DB_NAME}`);
  if(process.env.NODE_ENV === 'test') {
    mongoose.connect(`mongodb://127.0.0.1/TestForLegacy`);
    console.log('CONNECTED TO TEST DATABASE')
  } else {
    mongoose.connect(`mongodb://127.0.0.1/${DB_NAME}`);
    console.log(`🦆 Database (sessions) connected @ port ${DB_PORT}!`);
  }
} catch (err) {
  console.log(`😞 Sorry, something went wrong! ${err}`);
}

export default mongoose;
