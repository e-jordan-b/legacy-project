// const mongoose = require('./../db.js');
// const passportLocalMongoose = require('passport-local-mongoose');

// const userSchema = mongoose.Schema({
//   name: {
//     type: String,
//     required: false,
//   },
//   username:{
//     type: String,
//     required: true,
//   },
//   profilePicture: {
//     type: String,
//     required: false,
//     default: '/public/blank-profile-picture.webp'
//   },
//   // Phone, email, are for now not used in the app (created for future use)
//   phone: {
//     type: String,
//     required: false,
//   },
//   email: {
//     type: String,
//     required: false,
//   },
//   age: {
//     type: Number,
//     min: 14,
//     max: 110,
//     required: true
//   },
//   friends: {
//     type: [String],  // Array of other user IDs
//     required: false,
//   },
//   // "following" is created for the future.
//   // The user will be able to friend another user but not follow their feed
//   following: {
//     type: [String],
//     required: false,
//   },
//   savedEvents: {
//     type: [String], // Array of event IDs
//     required: false,
//   },
//   joinedEvents: {
//     type: [String], // Array of event IDs
//     required: false,
//   }
// });

// userSchema.plugin(passportLocalMongoose)

// module.exports = mongoose.model('User', userSchema);
