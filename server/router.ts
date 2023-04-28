import express from  'express';
const router = express.Router();
import userController from './controllers/user_controller';

router.get('/login/:username/:password', userController.loginUser);

router.get('/users', userController.getAllUsers);
router.get('/user/:userId', userController.getUserById);
router.post('/register', userController.createUser);
router.post('/userEvent', userController.postUserEvent);
router.post('/userFriend', userController.postUserFriend);

export default router;