import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server'
import { connect } from 'http2';

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


// export let mongod: any = null;

// export const connectDB = async () => {
//   try {
//     let dbUrl = `mongodb://127.0.0.1/${DB_NAME}`;
//     if (process.env.NODE_ENV === 'test') {
//       mongod = await MongoMemoryServer.create();
//       dbUrl = mongod.getUri();
//       console.log('in test')
//     }

//     const conn = await mongoose.connect(dbUrl)//`mongodb://127.0.0.1/${DB_NAME}`);

//     console.log(`MongoDB connected: ${conn.connection.host}`);

//   } catch (err) {
//     console.log(err);
//     process.exit(1);
//   }
// };

// export const disconnectDB = async () => {
//   try {
//     await mongoose.connection.close();
//     if (mongod) {
//       await mongod.stop();
//     }
//   } catch (err) {
//     console.log(err);
//     process.exit(1);
//   }
// }

export default mongoose;
