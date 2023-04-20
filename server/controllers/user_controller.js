const User = require('../models/user_model');
const bcrypt = require('bcrypt');


const createUser = async (req, res) => {
  try {
    User.create({
      username: req.body.username,
      password: bcrypt.hashSync(req.body.password,8),
      name: req.body.name,
      phone: '',
      email: '',
      profilePicture: req.body.profilePicture,
      age: req.body.age,
      friends: [],
      following: [],
      savedEvents: [],
      joinedEvents: []
    })
    res.json(req.body);
    res.status(201);
  } catch (e) {
    res.status(400);
    console.log(e);
  }
};

module.exports = {createUser};