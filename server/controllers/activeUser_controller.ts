// const ActiveUser = require('../models/activeUser_model');
import ActiveUser from '../models/activeUser_model'
import { Request, Response } from 'express';

const setActiveUser = async (req: Request, res: Response): Promise<void> => {
  console.log(req.body)
  try {
    const active = await ActiveUser.create({
      identifier: req.body.identifier,
      username: req.body.username,
      name: req.body.name,
      phone: req.body.phone,
      email: req.body.email,
      profilePicture: req.body.profilePicture,
      age: req.body.age,
      friends: req.body.friends,
      following: req.body.following,
      savedEvents: req.body.savedEvents,
      joinedEvents: req.body.joinedEvents
    })
    ;
    res.status(201).json(active);
  } catch (e) {
    res.status(400).json('something went wrong');
    console.log(e);
  }
};

const getActiveUser = async(req: Request, res: Response): Promise<void> => {
  try{
    const activeUser = await ActiveUser.find({});
    console.log('activeuser', activeUser)
    if(activeUser.length != 0){
      res.status(201).json(activeUser[0]);
    }else{
      res.json(false)
    }

    res.status(201);
  }
  catch (e) {
    // res.json(false)
    res.status(400).json('something went wrong');
    console.log(e);
  }
}


const deleteActiveUser= async(req: Request, res: Response): Promise<void> => {
  console.log('delete', req.body.username)
  try{
    await ActiveUser.findOneAndRemove({username: req.body.username});
    res.status(201).json(req.body);
  }
  catch (e) {
    res.status(400).json('something went wrong');
    console.log(e);
  }
}

export default { setActiveUser, getActiveUser, deleteActiveUser}
