import express from 'express';
import { getAllEmpDetail } from '../controller/EmployeeController.js';

const router = express.Router();


router.get('/getAllEmpDetails', getAllEmpDetail);


export default router;