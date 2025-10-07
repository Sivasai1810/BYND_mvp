import express from 'express'
import { supabase_connect }from "../supabase/set-up.js"
import verifyToken from "../middlewares/verifytoken.js"
const router=express.Router()
router.use(express.json())
router.post('',verifyToken,async(req,res)=>{
    try{
const user_id=req.user
const {data,error}=await supabase_connect
.from("users_account_details")
.select('*')
.eq('unique_id',user_id)
.single()
const user_email=data.user_email
if(error){
console.log("ayyobabue",error)
}
res.json({message:"User details fetched sucessfully",
    profile:{user_email:user_email,uniqueid:user_id}
})
    }catch(err){
        res.json("Session Expired")
    }
})
export default router