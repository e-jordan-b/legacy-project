// const mongoose = require('./../db.js');


// const Announcement = mongoose.Schema({
//   text: {
//     type: String,
//     required: false
//   },
//   createdAt: {
//     type: Date,
//     default: Date.now,
//     required: false
//   },
//   owner:{
//     type: String,
//     required: false
//   }
//  });


// const eventSchema = mongoose.Schema({
//   owner: {
//     type: mongoose.ObjectId,
//     required: true,
//   },
//   title: {
//     type: String,
//     required: true,
//     maxLength: 220
//   },
//   description: {
//     type: String,
//     required: false,
//     default: '',
//     maxLength: 2000
//   },
//   date: {
//     type: Date,
//     required: true,
//   },
//   location: {
//     type: String,
//     required: true,
//   },
//   coordinates: {
//     type: [Number],
//     required: false,
//   },
//   image: {
//     type: String,
//     required: false,
//   },
//   limitAttendees: {
//     type: mongoose.Mixed,
//     required: false,
//   },
//   visibility: {
//     type: Boolean, // true means the event is public, false means the event is private
//     required: false,
//   },
//   invitees: {
//     type: [String], // array of user IDs
//     required: false,
//   },
//   hideFrom: {
//     type: [String], // array of user IDs
//     required: false,
//   },
//   joined: {
//     type: [String], // array of user IDs
//     required: false,
//   },
//   announcements: {
//     type: [Announcement],
//     required: false
//   },
//   canceled: {
//     type: Boolean,
//     required: true,
//     default: false,
//   },
//   active: {
//     type: Boolean,
//     required: true,
//     default: true,
//   },
//   // This will be related to the user active in the session
//   // If the user has saved the event, it will be true
//   liked: {
//     type: Boolean,
//     required: true,
//     default: false
//   }
// });

// module.exports = mongoose.model('Event', eventSchema);
