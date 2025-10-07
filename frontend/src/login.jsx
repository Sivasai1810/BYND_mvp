import React, { useState } from 'react'
import axios from 'axios'
import Googleauth from './googleauth/googleauth';
const Login = () => {
 const [email,setEmail]=useState();
 const [password,setPassword]=useState();
    const handlesign=async()=>{
        try{
const res=await axios.post("http://localhost:3000/auth/signup",{
user_email:email,
user_password:password
},{withCredentials:true})
console.log(res.data.message)
        }catch(err){
            console.log("uanble to hit the api",err)
        }
       
    }
    const handlelogin=async()=>{
        try{
const res=await axios.post("http://localhost:3000/auth/login",{
user_email:email,
user_password:password
},{withCredentials:true})
console.log(res.data.message)
        }catch(err){
            console.log("uanble to hit the login",err)   }   
    }
  return (
    <div>
      <input type='email' placeholder='email' onChange={(e)=>{setEmail(e.target.value)}}></input>
      <input type='password' placeholder='enter the password' onChange={(e)=>{setPassword(e.target.value)}}></input>
      <button onClick={handlesign}>sign</button>
      <button onClick={handlelogin}>Login</button>
      <Googleauth />
    </div>
  )
}

export default Login
