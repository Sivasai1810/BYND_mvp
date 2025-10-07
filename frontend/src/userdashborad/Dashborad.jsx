import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
const Dashborad = () => {
   const [fetcheddata,setFetcheddata]=useState([])
  const [uniqueid,setUniqueid]=useState()
  const [fetched_email,setFetchedemail]=useState()
  // const [fetched_img,setFetchedimg]=useState()
useEffect(()=>{
 async function FetchProfile(){
const res=await axios.post("http://localhost:3000/fetch/profile",{},{
  withCredentials:true
})
const user_data = res.data.profile
setFetcheddata(user_data)
setUniqueid(user_data.user_uuid)
setFetchedemail(user_data.user_email)
// setFetchedimg(user_data.user_img)
  }
  FetchProfile();
}, [])

  return (
    <div>
   <p>{fetched_email}</p>
   <p>{uniqueid}</p>
    </div>
  )
}

export default Dashborad
