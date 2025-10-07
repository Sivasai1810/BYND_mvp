import React from 'react'
import Bynd from "../assets/byndlogo.svg"
const Footer = () => {
  return (
    <div className='footers'>
    <div className='title'>
        <img src={Bynd} alt='BYND'></img>
        <p>byndhq@gmail.com</p>
    </div>
    <div className='subpart'>
   <p>BYND is in its early stages. We'd love your feedback or suggestions — email us at byndhq@gmail.com or reach out to the founder directly on <a href="https://x.com/uxayaan">twitter</a></p>
   <hr></hr>
    </div>
    <div className='footer'>
<p>Terms of use </p>
<p>Privacy and Cookies policy</p>
<p>Contact</p>
<p>© 2025 BYND. All rights reserved</p>
    </div>
    </div>
  )
}

export default Footer
