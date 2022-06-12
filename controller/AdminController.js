import connection from "../config/dbConnect.js";
import bcrypt from 'bcrypt';

const adminRegister =(req,resp)=>{
    const {admin_name, admin_email, admin_password} = req.body;

    bcrypt.hash(admin_password, 10, function(err, hash) {
        if(err) resp.send(err)
        encyptPassword = hash;
    });

    connection.query(`INSERT INTO admin(admin_name, admin_email, admin_password) VALUES("${admin_name}","${admin_email}","${encyptPassword}")`, (err, result)=>{
        if(err) throw err;
        if(result) resp.send({'status':'success', 'message': 'Admin created!'});
    });
}

const adminLogin =(req,resp)=>{
    console.log('login');
}

export {adminLogin, adminRegister};