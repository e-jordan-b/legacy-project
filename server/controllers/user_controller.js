const User = require('../models/user_model');
const passport = require('passport');
var LocalStrategy = require('passport-local');

passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

const createUser = async (req, res) => {
  try {
    User.register({
      username: req.body.username,
      name: '',
      phone: '',
      email: '',
      profilePicture: req.body.profilePicture,
      age: req.body.age,
      friends: [],
      following: [],
      savedEvents: [],
      joinedEvents: []
    }, req.body.password)
    res.json(req.body);
    res.status(201);
  } catch (e) {
    res.status(400);
    console.log(e);
  }
};

const getUser = async(req, res) => {
  if (req.isAuthenticated()) {
    res.json({ message: 'You made it to the secured profile' })
  } else {
    res.json({ message: 'You are not authenticated' })
  }
}

const getAllUsers = async(req, res) => {
   try {
    const user = await User.find({});
    res.json(user)
    res.status(201);
   } catch(e) {
    res.status(400);
    console.log(e)
   }
}
const getUserById = async(req, res) => {
  try {
   const user = await User.findOne({_id: req.params.userId});
   console.log(user)
   res.json(user)
   res.status(201);
  } catch(e) {
   res.status(400);
   console.log(e)
  }
}

const addSavedEvent = async(req, res) => {
  const user = await User.findOne({_id: req.body.userId})
  try{
    user.savedEvents.push(req.body.eventId)
    user.save();
    res.json(user)
  }catch(e){
    console.log(e)
  }
}

const removeSavedEvent = async(req, res) => {
  const user = await User.findOne({_id: req.body.userId})
  try{
    const arrayWithoutUnsavedEvent = user.savedEvents.filter(event => event !== req.body.eventId)
    user.savedEvents = arrayWithoutUnsavedEvent;
    user.save();
    res.json(user)
  }catch(e){
    console.log(e)
  }
}

const addJoinedEvent = async(req, res) => {
  const user = await User.findOne({_id: req.body.userId})
  try{
    user.joinedEvents.push(req.body.eventId)
    user.save();
    res.json(user)
  }catch(e){
    console.log(e)
  }
}

const removeJoinedEvent = async(req, res) => {
  const user = await User.findOne({_id: req.body.userId})
  try{
    const arrayWithoutUnjoinedEvent = user.joinedEvents.filter(event => event !== req.body.eventId)
    user.joinedEvents = arrayWithoutUnjoinedEvent;
    user.save();
    res.json(user)
  }catch(e){
    console.log(e)
  }
}

module.exports = {
  createUser,
  getUser,
  getAllUsers,
  getUserById,
  addSavedEvent,
  removeSavedEvent,
  addJoinedEvent,
  removeJoinedEvent
};