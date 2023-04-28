import mongoose from '../db';
import { Schema } from 'mongoose';

// 1. Create interfaces representing the documents in MongoDB.
interface IAnnouncement {
  text?: string,
  createdAt?: Date,
  owner?: string
};

interface IEvent {
  owner: mongoose.ObjectId,
  title: string,
  description?: string,
  date: Date,
  location: string,
  coordinates?: number[],
  image?: string, 
  limitAttendees?: mongoose.Mixed,
  visibility?: boolean,
  invitees?: string[],
  hideFrom: string[],
  joined: string[],
  announcements?: IAnnouncement[], 
  canceled: boolean, 
  active: boolean,
  liked: boolean,
};

// 2. Create a Schema corresponding to the document interface.
const Announcement = new Schema<IAnnouncement>({
  text: {
    type: String,
    required: false
  },
  createdAt: {
    type: Date,
    default: Date.now,
    required: false
  },
  owner:{
    type: String,
    required: false
  }
});

const eventSchema = new Schema<IEvent>({
  owner: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
  title: {
    type: String,
    required: true,
    maxLength: 220
  },
  description: {
    type: String,
    required: false,
    default: '',
    maxLength: 2000
  },
  date: {
    type: Date,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  coordinates: {
    type: [Number],
    required: false,
  },
  image: {
    type: String,
    required: false,
  },
  limitAttendees: {
    type: mongoose.Schema.Types.Mixed,
    required: false,
  },
  visibility: {
    type: Boolean, // true means the event is public, false means the event is private
    required: false,
  },
  invitees: {
    type: [String], // array of user IDs
    required: false,
  },
  hideFrom: {
    type: [String], // array of user IDs
    required: true,
  },
  joined: {
    type: [String], // array of user IDs
    required: true,
  },
  announcements: {
    type: [Announcement],
    required: false
  },
  canceled: {
    type: Boolean,
    required: true,
    default: false,
  },
  active: {
    type: Boolean,
    required: true,
    default: true,
  },
  // This will be related to the user active in the session
  // If the user has saved the event, it will be true
  liked: {
    type: Boolean,
    required: true,
    default: false
  }
  });


// 3. Create a Model.
export default mongoose.model<IEvent>('Event', eventSchema);