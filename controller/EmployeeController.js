import { json } from "express";
import connection from "../config/dbConnect.js";


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
        resp.send(result);
    });
}

export {getAllEmpDetail,getEmpDetailByID, deleteEmpDetailByID };