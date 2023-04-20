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

const login = async(req, res) => {
  try {
    const authenticate = User.authenticate()
    authenticate(req.body.username, req.body.password, function(err, result) {
      if (err) {console.log(err)}
      if(result != false){
        const token = jwt.sign({ userId: User._id, username: User.username }, secretkey, { expiresIn: "24h" });
        console.log(result)
        res.json({ success: true, message: "Authentication successful", token: token });
        //res.redirect('/');
      }
      else{
        res.send('user is not authenticated')
      }
    });
    res.status(201);
  }catch(e){
    res.status(400);
    console.log(e)
  }

}

module.exports = {createUser, login};