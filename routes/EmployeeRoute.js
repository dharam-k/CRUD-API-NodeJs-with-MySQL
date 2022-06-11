import express from 'express';
import { deleteEmpDetailByID, getAllEmpDetail, getEmpDetailByID } from '../controller/EmployeeController.js';

const router = express.Router();


router.get('/getAllEmpDetails', getAllEmpDetail);
router.get('/getEmpDetailByID', getEmpDetailByID);
router.get('/deleteEmpDetailByID', deleteEmpDetailByID);


export default router;