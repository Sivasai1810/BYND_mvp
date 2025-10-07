import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const Navigate=useNavigate()
 const [email,setEmail]=useState("");
 const [password,setPassword]=useState("");
 const [message,setMessage]=useState("")
    const handlesign=async()=>{
      if(!email){
        alert("please enter the email to login")
        return
      }else if(!password){
        alert("please enter the password to login")
        return
      }
        try{
const res=await axios.post("http://localhost:3000/auth/signup",{
user_email:email,
user_password:password
},{withCredentials:true})
  setEmail("")
  setPassword("")
if(res.data.success==true){
  alert(res.data.message)
  Navigate('/Dashboard')
}else{
setMessage(res.data.message)
  Navigate('/Dashboard')
}
        }catch(err){
          
            console.log("Internal server error",err)
        }
       
    }
    const handlelogin=async()=>{
      if(!email){
        alert("please enter the email to login")
        return
      }else if(!password){
        alert("please enter the password to login")
        return
      }
        try{
const res=await axios.post("http://localhost:3000/auth/login",{
user_email:email,
user_password:password
},{withCredentials:true})
  setEmail("")
  setPassword("")
if(res.data.success==true){
  alert(res.data.message)
  Navigate('/Dashboard')

}else{
 setMessage(res.data.message)
}
        }catch(err){
            console.log("uanble to hit the login",err)   }   
    }
  return (
    <div>
      <input type='email'  value={email} placeholder='email'  onChange={(e)=>{setEmail(e.target.value)}}></input><br></br>
      <input type='password' placeholder='enter the password' value={password}  onChange={(e)=>{setPassword(e.target.value)}}></input><br></br>
      <button onClick={handlesign}>sign</button><br></br>
      <button onClick={handlelogin}>Login</button><br></br>
      <p value={message}>{message}</p>
      {/* <Googleauth /> */}
    </div>
  )
}

export default Login
