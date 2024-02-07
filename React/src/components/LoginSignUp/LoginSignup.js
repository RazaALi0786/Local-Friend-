import React, { useState } from 'react'
import './LoginSignup.css'

import user_icons from '../assets/person.png';
import email_icons from '../assets/email.png';
import password_icons from '../assets/password.png';

const LoginSignup = () => {

  const[action,setAction] =useState("Sign Up");
  return (
    <div className='container'>
         <div className='header'>
           <div className='text'>{action}</div>
           <div className='underline'></div>
         </div>
         <div className='inputs'>

          {
            action==="Login"?<div></div>: <div className='input'>
            <img src={user_icons} alt='user'/>
            <input type='text' placeholder='Name'/> 
           </div>
          }

          

           <div className='input'>
            <img src={email_icons} alt='email'/>
            <input type='email' placeholder='Email id'/> 
           </div>

           <div className='input'>
            <img src={password_icons} alt='password'/>
            <input type='password' placeholder='Password'/>
           </div>

         </div>
         {
          action==="Sign Up"?<div></div>:<div className='forgot-password'>Lost password? <span>Click Here!</span> </div>
         }
         


         <div className='submit-container'>
           <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
           <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
         </div>
    </div>
  )
}

export default LoginSignup