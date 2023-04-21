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
  console.log(req.passport)
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
  console.log(req)
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


module.exports = {createUser, getUser, getAllUsers, getUserById};