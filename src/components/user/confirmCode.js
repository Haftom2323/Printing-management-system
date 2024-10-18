import React from 'react'

const ConfirmCode = () => {
 
 
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
        <span className="sub mb">Enter your user account's verified email address and we will send you a password reset link. </span>
     
       
        
          <input type="text" className="input" placeholder="code" />
        
    
          
        {/* <span className="sub">Already have an account ? <a href="#">Sign in</a></span> */}
          <button className='button btn btn-primary'>Send</button>
      </form>
    
    
    
    
    
        </div>
    
    
    
        </div>
      )
    }

export default ConfirmCode