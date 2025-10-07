import dotenv from 'dotenv'
dotenv.config();
import express from "express"
import cookieParser from 'cookie-parser';
import cors from "cors"
import signup from './authentication/signup.js';
import login from './authentication/login.js'
// import test01 from './test-case/test01.js';
import redirecturl from './RedirectUrls/redirecturl.js'
const app=express()
app.use(express.json());
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))
const port=process.env.PORT;
app.use(cookieParser());
app.use('/auth/signup',signup);
app.use('/auth/login',login)
app.use('/supabase/redirecturl',redirecturl)
// app.use('/auth/test',test01)
app.listen(port,()=>{
    console.log(`server is started ${port}`)
})