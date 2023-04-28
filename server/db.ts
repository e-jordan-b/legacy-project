import mongoose from 'mongoose';

const DB_PORT = process.env.DB_PORT || 27017;
const DB_NAME = process.env.DB_NAME || 'imin';

try {
  mongoose.connect(`mongodb://localhost:${DB_PORT}/${DB_NAME}`);
  console.log(`🦆 Database (sessions) connected @ port ${DB_PORT}!`);
} catch (err) {
  console.log(`😞 Sorry, something went wrong! ${err}`);
}

export default mongoose;
