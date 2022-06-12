import express from "express";
import EmployeeRoute from './routes/EmployeeRoute.js'
import env from 'dotenv';
env.config();

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use('/api/employee', EmployeeRoute);

app.listen(PORT, ()=>{
    console.log(`Server : http://localhost:${PORT}`);
});