import express from 'express';
import { adminLogin, adminRegister } from '../controller/AdminController.js';

const router = express.Router();


router.post('/login', adminLogin)
router.post('/register', adminRegister)

export default router;