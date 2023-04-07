import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { fileURLToPath } from 'url';
import path from 'path';
const __dirname = path.resolve();
//const __filename = fileURLToPath(import.meta.url);
//const __dirname = dirname(__filename);
//import dotenv from 'dotenv';
const app = express();

import userRouter from './routes/user-routes';
import blogRouter from './routes/blog-routes';
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(express.json());
app.use(express.static(path.join(__dirname, './frontend/build')))
//app.use(cors);
app.use("/user", userRouter);
app.use("/blog", blogRouter);
//dotenv.config();
mongoose.connect('mongodb+srv://admin:lTgFmfLTH7RrdNYe@cluster0.4ruf5ba.mongodb.net/?retryWrites=true&w=majority').then(() => console.log("DBconnection successfull")).catch((error) => { console.log("error") });
app.use('*', function (req, res) {
    res.sendFile(path.join(__dirname, './frontend/build/index.html'))
})
app.listen(5000, () => {
    console.log("server is running");
})


//admin: lTgFmfLTH7RrdNYe