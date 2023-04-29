// const ActiveUser = require('../models/activeUser_model');

// const setActiveUser = async (req, res) => {
//   console.log(req.body)
//   try {
//     ActiveUser.create({
//       identifier: req.body.identifier,
//       username: req.body.username,
//       name: req.body.name,
//       phone: req.body.phone,
//       email: req.body.email,
//       profilePicture: req.body.profilePicture,
//       age: req.body.age,
//       friends: req.body.friends,
//       following: req.body.following,
//       savedEvents: req.body.savedEvents,
//       joinedEvents: req.body.joinedEvents
//     })
//     res.json(req.body);
//     res.status(201);
//   } catch (e) {
//     res.status(400);
//     console.log(e);
//   }
// };

// const getActiveUser = async(req, res) => {
//   try{
//     const activeUser = await ActiveUser.find({});
//     console.log('activeuser', activeUser)
//     if(activeUser.length != 0){
//       res.json(activeUser[0]);
//     }else{
//       res.json(false)
//     }

//     res.status(201);
//   }
//   catch (e) {
//     // res.json(false)
//     res.status(400);
//     console.log(e);
//   }
// }


// const deleteActiveUser= async(req, res) => {
//   console.log('delete', req.body.username)
//   try{
//     await ActiveUser.findOneAndRemove({username: req.body.username});
//     res.json(req.body);
//     res.status(201);
//   }
//   catch (e) {
//     res.status(400);
//     console.log(e);
//   }
// }

// module.exports = {
//   setActiveUser,
//   getActiveUser,
//   deleteActiveUser
// };
