import express from 'express';
import { createEmpDetail, deleteEmpDetailByID, getAllEmpDetail, getEmpDetailByID } from '../controller/EmployeeController.js';

const router = express.Router();


router.get('/getAllEmpDetails', getAllEmpDetail);
router.get('/getEmpDetailByID/:id', getEmpDetailByID);
router.delete('/deleteEmpDetailByID/:id', deleteEmpDetailByID);
router.post('/createEmpDetail', createEmpDetail);


export default router;