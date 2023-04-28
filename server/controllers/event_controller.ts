import { Request, Response } from 'express'; 
import Event from '../models/event_model';
import cloudinary2 from 'cloudinary';
const cloudinary = cloudinary2.v2;

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

const postEvent = async function(req:Request, res:Response): Promise<void> {
  try{
    await Event.create({
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
      hideFrom: req.body.hideFrom || [],
      joined: req.body.joined || [],
      announcements: [],
      canceled: req.body.canceled,
      active: req.body.active
    })

    res.status(201).json(req.body);
  }catch(e){
    res.status(400);
    console.log(e);
  }
}

// When user is Authenticated we will hide the
//events that are marked as hidden to that user
const getAllEvents = async function (req:Request, res:Response): Promise<void> {
  try{
    const allEvents = await Event.find({});
    const eventsNonHiddenFromUser = allEvents.filter(event => {
      if(!event.hideFrom.find(user => user == req.params.userId)){
        return event;
      }})
    res.status(201).json(eventsNonHiddenFromUser)
  }catch(e){
    res.status(400);
    console.log(e);
  }
}

const postEventUser = async(req:Request, res:Response): Promise<void> => {
  try{
    const event = await Event.findOne({_id: req.body.eventId})
    if (event) {
      if (req.body.type === 'add') {
        event.joined.push(req.body.userId);
        await event.save();
      }

      if (req.body.type === 'remove') {
        const arrayWithoutUnjoinedUser = event.joined.filter(user => user !== req.body.userId)
        event.joined = arrayWithoutUnjoinedUser;
        await event.save();
      }

      res.status(201).json(event);
    } else {
      throw new Error('Event does not exist!');
    }
  }catch(e){
    res.status(400);
    console.log(e);
  }
}

async function handleUpload(file: Express.Multer.File): Promise<any> {
  const b64: string = Buffer.from(file.buffer).toString("base64");
  let dataURI: string = "data:" + file.mimetype + ";base64," + b64;
  const res = await cloudinary.uploader.upload(dataURI, {
    resource_type: "auto",
  });
  return res;
}

const postUpload = async (req:Request, res:Response):Promise<void> => {
  try {
    if (req.file) {
      const cldRes = await handleUpload(req.file);
      console.log(cldRes)
      res.json(cldRes);
    }
  } catch (e) {
    console.log(e);
    res.status(400);
    res.send(e);
  }
}

export default { postEvent, getAllEvents, postEventUser, postUpload }