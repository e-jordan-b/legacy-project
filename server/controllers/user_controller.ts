import User from '../models/user_model';
import { Request, Response } from 'express';

const postUser = async(req: Request, res: Response): Promise<void> => {
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

    res.status(201).json(req.body);
  } catch (e) {
    res.status(400).json('wrong information');
    console.log(e);
  }
}


const loginUser = async(req: Request, res: Response): Promise<void> => {
  try {
    const user = await User.find({username: req.params.username});
    if(user) {res.status(201).json(user)}
   } catch(e) {
    res.status(400).json('wrong username');
    console.log(e);
   }
}

const getAllUsers = async(req: Request, res: Response): Promise<void> => {
  try {
    const users = await User.find();
    res.status(201).json(users);
   } catch(e) {
    res.status(400).json('something went wrong');
    console.log(e);
   }
}

const getUserById = async(req: Request, res: Response): Promise<void> => {
  try {
    const user = await User.find({_id: req.params.userId});
    res.status(201).json(user);
   } catch(e) {
    res.status(400).json('something went wrong');
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

      await user.save();
      res.status(201).json(user);
    } else {
      res.json('User does not exists!');
    }
   } catch(e) {
    res.status(400).json('something went wrong');
    console.log(e);
   }
}

const postUserFriend = async(req: Request, res: Response): Promise<void> => {
  try {
    const activeUser = await User.findOne({_id: req.body.activeUserId})
    const friendUser = await User.findOne({_id: req.body.friendUserId})

    if (activeUser && friendUser && req.body.type !== '') {
      if (req.body.type === 'add') {
        activeUser.friends.push(req.body.friendUserId)
        await activeUser.save();
        friendUser.friends.push(req.body.activeUserId)
        await friendUser.save();
      }

      if (req.body.type === 'remove') {
        console.log('im here')
        console.log(activeUser.friends)
        const ActiveUserArrayWithoutFriend = activeUser.friends.filter(friend => friend !== req.body.friendUserId)
        activeUser.friends = ActiveUserArrayWithoutFriend;
        console.log(activeUser.friends)
        await activeUser.save();
        const FriendUserArrayWithoutFriend = friendUser.friends.filter(friend => friend !== req.body.activeUserId)
        console.log(friendUser.friends)
        friendUser.friends = FriendUserArrayWithoutFriend;
        console.log(friendUser.friends)
        await friendUser.save();
      }

      res.status(201).json(activeUser);
    } else {
      throw new Error ('User/Friend does not exists or the type has not been indicated!');
    }
   } catch(e) {
    res.status(400).json('something went wrong');
    console.log(e);
   }
}

export default { postUser, loginUser, getAllUsers, getUserById, postUserEvent, postUserFriend };