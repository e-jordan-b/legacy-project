import express from  'express';
const router = express.Router();
import userController from './controllers/user_controller';
import eventController from './controllers/event_controller';
import Multer from "multer";

const storage:Multer.StorageEngine = Multer.memoryStorage();
const upload = Multer({
  storage,
});

router.get('/login/:username/:password', userController.loginUser);

router.get('/users', userController.getAllUsers);
router.get('/user/:userId', userController.getUserById);
router.post('/user', userController.postUser);
router.post('/userEvent', userController.postUserEvent);
router.post('/userFriend', userController.postUserFriend);

router.post('/event', eventController.postEvent);
router.get('/events/:userId', eventController.getAllEvents);
router.post('/eventUser', eventController.postEventUser)
router.post("/upload", upload.single("my_file"), eventController.postUpload);

export default router;