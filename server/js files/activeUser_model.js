// const mongoose = require('../db.js');

// const activeUserSchema = mongoose.Schema({
//   identifier:{
//     type: String,
//     required: false,
//   },
//   username:{
//     type: String,
//     required: true,
//   },
//   name: {
//     type: String,
//     required: false,
//   },
//   profilePicture: {
//     type: String,
//     required: false,
//     default: '/public/blank-profile-picture.webp'
//   },
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
//     type: [String],
//     required: false,
//   },
//   following: {
//     type: [String],
//     required: false,
//   },
//   savedEvents: {
//     type: [String],
//     required: false,
//   },
//   joinedEvents: {
//     type: [String],
//     required: false,
//   }
// });

// //activeUserSchema.plugin(passportLocalMongoose)

// module.exports = mongoose.model('ActiveUser', activeUserSchema);
