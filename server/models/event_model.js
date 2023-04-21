const mongoose = require('./../db.js');


const Announcement = mongoose.Schema({
  text: {
    type: String,
    required: false
  },
  createdAt: {
    type: Date,
    default: Date.now,
    required: false
  }
 });


const eventSchema = mongoose.Schema({
  owner: {
    type: mongoose.ObjectId,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
    default: ''
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
    type: mongoose.Mixed,
    required: false,
  },
  visibility: {
    type: mongoose.Mixed,
    required: false,
  },
  invitees: {
    type: [String],
    required: false,
  },
  hideFrom: {
    type: [String],
    required: false,
  },
  joined: {
    type: [String],
    required: false,
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
  }
});

module.exports = mongoose.model('Event', eventSchema);
