const Event = require('../models/event_model');

const addEvent = function(req, res) {
  try{
  Event.create({
    owner: req.body.owner,
    title: req.body.title,
    description: req.body.description,
    date: req.body.date,
    location: req.body.location,
    coordinates: req.body.coordinates,
    image: req.body.image,
    limitAttendees: req.body.limitAttendees,
    visibility: req.body.visibility,
    invitees: req.body.invitees,
    hideFrom: req.body.hideFrom,
    joined: req.body.joined,
    announcements: [],
    canceled: req.body.canceled,
    active: req.body.active
  })
  res.json(req.body);
  res.status(201)
  }catch(e){
    res.status(400);
    console.log(e);
  }
}

// When user is Authenticated we will hide the
//events that are marked as hidden to that user
const getAllEvents = async function (req, res) {
  try{
    const allEvents = await Event.find({});
    const eventsNonHiddenFromUser = allEvents.filter(event => {
      if(!event.hideFrom.find(user => user == req.params.userId)){
        return event;
      }})
    res.json(eventsNonHiddenFromUser)
    res.status(201)
  }catch(e){
    res.status(400);
    console.log(e);
  }
}

const addUserToJoinedList = async(req, res) => {
  const event = await Event.findOne({_id: req.body.eventId})
  try{
    event.joined.push(req.body.userId)
    event.save();
    res.json(event)
  }catch(e){
    console.log(e)
  }
}

const removeUserFromJoinedList = async(req, res) => {
  const event = await Event.findOne({_id: req.body.eventId})
  try{
    const arrayWithoutUnjoinedUser = event.joined.filter(user => user !== req.body.userId)
    event.joined = arrayWithoutUnjoinedUser;
    event.save();
    res.json(event)
  }catch(e){
    console.log(e)
  }
}

module.exports = {addEvent, getAllEvents, addUserToJoinedList, removeUserFromJoinedList};
