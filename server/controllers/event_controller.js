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

const getAllEvents = async function (req, res) {
  try{
    const events = await Event.find({});
    res.json(events)
    res.status(201)
  }catch(e){
    res.status(400);
    console.log(e);
  }

}

module.exports = {addEvent, getAllEvents};
