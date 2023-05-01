// const Event = require('../models/event_model');
// const cloudinary = require("cloudinary").v2;
// cloudinary.config({
//   cloud_name: process.env.CLOUD_NAME,
//   api_key: process.env.API_KEY,
//   api_secret: process.env.API_SECRET,
// });

// const addEvent = function(req, res) {
//   try{
//   Event.create({
//     owner: req.body.owner,
//     title: req.body.title,
//     description: req.body.description,
//     date: req.body.date,
//     location: req.body.location,
//     coordinates: req.body.coordinates,
//     image: req.body.image,
//     limitAttendees: req.body.limitAttendees,
//     visibility: req.body.visibility,
//     invitees: req.body.invitees,
//     hideFrom: req.body.hideFrom,
//     joined: req.body.joined,
//     announcements: [],
//     canceled: req.body.canceled,
//     active: req.body.active
//   })
//   res.json(req.body);
//   res.status(201)
//   }catch(e){
//     res.status(400);
//     console.log(e);
//   }
// }

// // When user is Authenticated we will hide the
// //events that are marked as hidden to that user
// const getAllEvents = async function (req, res) {
//   try{
//     const allEvents = await Event.find({});
//     const eventsNonHiddenFromUser = allEvents.filter(event => {
//       if(!event.hideFrom.find(user => user == req.params.userId)){
//         return event;
//       }})
//     res.json(eventsNonHiddenFromUser)
//     res.status(201)
//   }catch(e){
//     res.status(400);
//     console.log(e);
//   }
// }

// const addUserToJoinedList = async(req, res) => {
//   const event = await Event.findOne({_id: req.body.eventId})
//   try{
//     event.joined.push(req.body.userId)
//     event.save();
//     res.json(event)
//   }catch(e){
//     console.log(e)
//   }
// }

// const removeUserFromJoinedList = async(req, res) => {
//   const event = await Event.findOne({_id: req.body.eventId})
//   try{
//     const arrayWithoutUnjoinedUser = event.joined.filter(user => user !== req.body.userId)
//     event.joined = arrayWithoutUnjoinedUser;
//     event.save();
//     res.json(event)
//   }catch(e){
//     console.log(e)
//   }
// }

// async function handleUpload(file) {
//   const res = await cloudinary.uploader.upload(file, {
//     resource_type: "auto",
//   });
//   return res;
// }

// const handleUploadToCloudinary = async (req, res) => {
//   try {
//     const b64 = Buffer.from(req.file.buffer).toString("base64");
//     let dataURI = "data:" + req.file.mimetype + ";base64," + b64;
//     const cldRes = await handleUpload(dataURI);
//     console.log(cldRes)
//     res.json(cldRes);
//   } catch (error) {
//     console.log(error);
//     res.send({
//       message: error.message,
//     });
//   }
// }

// module.exports = {addEvent, getAllEvents, addUserToJoinedList,
//   removeUserFromJoinedList,
//   handleUploadToCloudinary}
