import React from 'react'

const resetInfo = () => {
  return (
    <div className='row'>
    
    
    <div className='col-md-4'>

    </div>

   <div className='col-md-4'>

   <form className="form">
   <label className="avatar" for=""><span> 
   <div className="logo">
     <img style={{ height: "90px",width
     :'90px'}} src="../images/logopg.jpg" alt='Logo'/>
   </div>
   </span></label>
   <span className="title"> Reset Password</span>
   <span className="sub mb">Check your email for a link to reset your password. If it doesn’t appear within a few minutes, check your spam folder. </span>

  
   
  
   

     
   {/* <span className="sub">Already have an account ? <a href="#">Sign in</a></span> */}
     <button className='button btn btn-primary'>Return to Sign in</button>
 </form>





   </div>



   </div>
 )
  
}

export default resetInfo