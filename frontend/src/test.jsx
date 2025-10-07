import React from 'react'
import axios from 'axios'

const Test = () => {
    const handlefuntion=async()=>{
        try{
const res=await axios.post("http://localhost:3000/auth/test",{},{withCredentials:true})
console.log(res.data.message)
        }catch(err){
            console.log("unalbe to send http",err)
        }
    }
  return (
    <div>
     <button onClick={handlefuntion}>verify</button> 
    </div>
  )
}

export default Test
