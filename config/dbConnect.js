import mysql from 'mysql';
import env from 'dotenv';
env.config();


const connection = mysql.createConnection({
    host : process.env.HOST_URL,
    user : process.env.USER,
    password :process.env.PASSWORD,
    database: process.env.DB_NAME
});

//mysql database connection 
connection.connect((err)=>{
    if(err) { console.error('Error conntecting : '+ err.stack); return;}
    console.log("Connected as ThreadID : "+ connection.threadId);

});

export default connection;
