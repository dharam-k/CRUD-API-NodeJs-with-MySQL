import express from "express";
import EmployeeRoute from './routes/EmployeeRoute.js'
import AdminRoute from './routes/AdminRoute.js'
import cors from 'cors';
import env from 'dotenv';
env.config();

const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use('/api/employee', EmployeeRoute);
app.use('/api/admin', AdminRoute);

app.listen(PORT, ()=>{
    console.log(`Server : http://localhost:${PORT}`);
});