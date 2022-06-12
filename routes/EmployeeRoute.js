import express from 'express';
import { createEmpDetail, deleteAllEmpDetail, deleteEmpDetailByID, getAllEmpDetail, getEmpDetailByID } from '../controller/EmployeeController.js';

const router = express.Router();

router.post('/createEmpDetail', createEmpDetail);
router.get('/getAllEmpDetails', getAllEmpDetail);
router.get('/getEmpDetailByID/:id', getEmpDetailByID);
router.delete('/deleteEmpDetailByID/:id', deleteEmpDetailByID);
router.delete('/deleteAllEmpDetail', deleteAllEmpDetail);



export default router;