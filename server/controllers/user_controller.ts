import User from '../models/user_model';
import { Request, Response } from 'express';

const createUser = async(req: Request, res: Response): Promise<void> => {
 try {
    const userInstance = new User({
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
    })
    await userInstance.save();
    res.json(req.body);
    res.status(201);
  } catch (e) {
    res.status(400);
    console.log(e);
  }
}


const loginUser = async(req: Request, res: Response): Promise<void> => {
  try {
    const user = await User.find({username: req.params.username});
    res.status(201).json(user);
   } catch(e) {
    res.status(400);
    console.log(e);
   }
}

const getAllUsers = async(req: Request, res: Response): Promise<void> => {
  try {
    const users = await User.find();
    res.status(201).json(users);
   } catch(e) {
    res.status(400);
    console.log(e);
   }
}

const getUserById = async(req: Request, res: Response): Promise<void> => {
  try {
    const user = await User.find({_id: req.params.userId});
    res.status(201).json(user);
   } catch(e) {
    res.status(400);
    console.log(e);
   }
}

const postUserEvent = async(req: Request, res: Response): Promise<void> => {
  try {
    const user = await User.findOne({_id: req.body.userId});
    
    if (user) {
      if (req.body.type === 'addSaved') {
        user.savedEvents.push(req.body.eventId);
      } else if (req.body.type === 'removeSaved') {
        const arrayWithoutUnsavedEvent = user.savedEvents.filter(event => event !== req.body.eventId);
        if (arrayWithoutUnsavedEvent) {
          user.savedEvents = arrayWithoutUnsavedEvent;
        }
      } else if (req.body.type === 'addJoined') {
          user.joinedEvents.push(req.body.eventId);
      } else {
        const arrayWithoutUnjoinedEvent = user?.savedEvents.filter(event => event !== req.body.eventId);
        if (arrayWithoutUnjoinedEvent) {
          user.joinedEvents = arrayWithoutUnjoinedEvent;
        }
      }
    }

    user?.save();
    res.status(201).json(user);
   } catch(e) {
    res.status(400);
    console.log(e);
   }
}

export default { createUser, loginUser, getAllUsers, getUserById, postUserEvent };