// const mongoose = require('./../db.js');
import mongoose from "mongoose";
import { Schema } from 'mongoose';

interface IActiveUser {
  identifier?: string;
  username: string;
  name?: string;
  profilePicture?: string;
  phone?: string;
  email?: string;
  age: number;
  friends?: string[];
  following?: string[];
  savedEvents?: string[];
  joinedEvents?: string[];
}

const activeUserSchema = new Schema<IActiveUser>({
  identifier:{
    type: String,
    required: false,
  },
  username:{
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: false,
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
    type: [String],
    required: false,
  },
  following: {
    type: [String],
    required: false,
  },
  savedEvents: {
    type: [String],
    required: false,
  },
  joinedEvents: {
    type: [String],
    required: false,
  }
});

//activeUserSchema.plugin(passportLocalMongoose)

// module.exports = mongoose.model('ActiveUser', activeUserSchema);
export default mongoose.model<IActiveUser>('ActiveUser', activeUserSchema)