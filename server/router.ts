import express from  'express';
const router = express.Router();
import userController from './controllers/user_controller';

router.get('/login/:username/:password', userController.loginUser);

router.get('/users', userController.getAllUsers);
router.get('/user/:userId', userController.getUserById);
router.post('/register', userController.createUser); //NOT BEING USED
router.post('/userEvent', userController.postUserEvent);

export default router;