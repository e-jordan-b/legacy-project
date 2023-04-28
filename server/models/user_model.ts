import mongoose from '../db';
import { Schema } from 'mongoose';

// 1. Create an interface representing a document in MongoDB.
interface IUser {
  name?: string;  
  username: string;
  profilePicture?: string; 
  phone?: string; 
  email?: string;
  age: number; 
  friends: string[];
  following?: string[];
  savedEvents: string[];
  joinedEvents: string[];
}

// 2. Create a Schema corresponding to the document interface.
const userSchema = new Schema<IUser>({
  name: {
    type: String,
    required: false,
  },
  username:{
    type: String,
    required: true,
  },
  profilePicture: {
    type: String,
    required: false,
    default: '/public/blank-profile-picture.webp'
  },
  phone: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: false,
  },
  age: {
    type: Number,
    min: 14,
    max: 110,
    required: true
  },
  friends: {
    type: [String],  // Array of other user IDs
    required: true,
  },
  following: {
    type: [String],
    required: false,
  },
  savedEvents: {
    type: [String], // Array of event IDs
    required: true,
  },
  joinedEvents: {
    type: [String], // Array of event IDs
    required: true,
  }
  });


// 3. Create a Model.
export default mongoose.model<IUser>('User', userSchema);