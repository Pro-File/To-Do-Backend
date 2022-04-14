import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import ToDosRoutes from './routes/ToDosRoutes.js';
import SubToDosRoutes from './routes/SubToDosRoutes.js';


const app = express();
const PORT = process.env.PORT || 4000;
dotenv.config()
app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.DB_CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true}).then(() => {
    app.listen(PORT, ()=> console.log(`------------- Server Running on PORT ${PORT} ----------------------`))
}).catch((error)=> {
    console.log(`------------------------------ ${error.message} -----------------------------`);
});

// Adding Routes
app.use('/api/todos', ToDosRoutes);
app.use('/api/subtodos', SubToDosRoutes);