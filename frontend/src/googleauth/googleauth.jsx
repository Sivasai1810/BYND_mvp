import React from 'react'
import  supabase_connect  from '../supabase-setup/supabase.jsx'
const Googleauth = () => {
    const handleouthlogin=async()=>{
try{
const {data, error}=await supabase_connect.auth.signInWithOAuth({
    provider:"google",
    options:{
        redirectTo:"http://localhost:3000/supabase/redirecturl"
    }
})
}catch(err){
    console.log("unable to login",err)
}
    }
  return (
    <div>
      <button onClick={handleouthlogin}>Continue with google</button>
    </div>
  )
}

export default Googleauth
