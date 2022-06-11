import { json } from "express";
import connection from "../config/dbConnect.js";


const getAllEmpDetail = (req, resp)=>{
    connection.query("SELECT * FROM manage_employees",  (err, result) =>{
        if (err) throw err;
        resp.send(result);
    });
}


export {getAllEmpDetail};