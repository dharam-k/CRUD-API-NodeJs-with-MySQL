import { json } from "express";
import connection from "../config/dbConnect.js";


const createEmpDetail = (req, resp)=>{
    const {emp_name, emp_email, emp_address, emp_phone} = req.body;
    connection.query(`INSERT INTO manage_employees(emp_name, emp_email, emp_address, emp_phone) VALUES("${emp_name}","${emp_email}","${emp_address}",${emp_phone})`,  (err, result) =>{
        if (err) throw err;

        if(result.affectedRows==1) resp.send({'status':'success', 'message': 'Employee created!'});
    });
}

const getAllEmpDetail = (req, resp)=>{
    connection.query("SELECT * FROM manage_employees",  (err, result) =>{
        if (err) throw err;
        resp.send(result);
    });
}

const getEmpDetailByID = (req, resp)=>{
    connection.query(`SELECT * FROM manage_employees where emp_id = ${req.params.id}`,  (err, result) =>{
        if (err) throw err;
        resp.send(result);
    });
}

const deleteEmpDetailByID = (req, resp)=>{
    connection.query(`DELETE FROM manage_employees where emp_id = ${req.params.id}`,  (err, result) =>{
        if (err) throw err;
        resp.send({'status':'success', 'message': 'Employee Records Deleted!'});
    });
}

const deleteAllEmpDetail = (req, resp)=>{
    connection.query(`TRUNCATE TABLE manage_employees;`,  (err, result) =>{
        if (err) throw err;
        resp.send({'status':'success', 'message': 'All Employee Records Deleted!'});
    }); 
}

export {getAllEmpDetail,getEmpDetailByID, deleteEmpDetailByID,createEmpDetail, deleteAllEmpDetail };