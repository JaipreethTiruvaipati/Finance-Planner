import express from 'express';
const router=express.Router();
import {RegisterUser,LoginUser} from '../controllers/authController.js';

//Router for user registration
router.post('/register',RegisterUser);
router.post('/login',LoginUser);

export default router;
