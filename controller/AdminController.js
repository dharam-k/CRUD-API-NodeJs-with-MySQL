import connection from "../config/dbConnect.js";
import bcrypt from 'bcrypt';

const adminRegister =async (req,resp)=>{
    const {admin_name, admin_email, admin_password} = req.body;

    const salt = await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash(admin_password, salt);

    connection.query(`INSERT INTO admin(admin_name, admin_email, admin_password) VALUES("${admin_name}","${admin_email}","${hashPassword}")`, (err, result)=>{
        if(err) throw err;
        if(result) resp.send({'status':'success', 'message': 'Admin created!'});
    });

    connection.end();
}

const adminLogin =async (req,resp)=>{

    const {email, password} = req.body;

    connection.query("SELECT * FROM admin WHERE admin_email= ?",[email],(err, result,fields)=>{
            if(err) throw err;
              
        });


    connection.end();
   
}

export {adminLogin, adminRegister};