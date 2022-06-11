import express from 'express';
import { getAllEmpDetail, getEmpDetailByID } from '../controller/EmployeeController.js';

const router = express.Router();


router.get('/getAllEmpDetails', getAllEmpDetail);
router.get('/getAllEmpDetails', getEmpDetailByID);


export default router;