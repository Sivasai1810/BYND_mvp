import dotenv from "dotenv"
import express from "express"
import bcrypt from 'bcrypt'
import { supabase_connect } from "../supabase/set-up.js"
const router=express.Router();
router.post('',async(req,res)=>{
const {user_email,user_password}=req.body;
console.log(`${user_email},${user_password}`)
const {data:existingUsers}=await supabase_connect
.from("users_account_details")
.select('*')
.eq('user_email',user_email)
.single()
if(existingUsers){
   return  res.json({message:`User Already exists! ${existingUsers.user_email}` })
}
const hashedPassword=await bcrypt.hash(user_password,10);
const {data,error}=await supabase_connect
.from("users_account_details")
.insert([{
    user_email:user_email,
    user_password:hashedPassword,
}])
if(error){
    // Update it later to res.json null
    console.log(`unable to insert into the supabase ${error.message} `)
}else{
res.json({message:"data inserted sucessfully",data})
}

})
export default router
