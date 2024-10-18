import React, {useState,useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { resetEmail } from '../../actions/userAction'
import LoadingBox from '../loading'
import MessageBox from '../messageBox'
const ForgottenPassword = () => {

  const [email,setEmail]=useState('')
  const dispatch=useDispatch()

  const ressetemail=useSelector((state)=>state.resetemail)
 const {success,loading,error}=ressetemail

   const submitHandler=(e)=> {
          e.preventDefault();
          dispatch(resetEmail(email))


            }


  return (
    <div className='row'>
    
    
    <div className='col-md-4'>

    </div>

   <div className='col-md-4'>

   
    <div className='titleHeader'>

    {loading && <LoadingBox variant="success"></LoadingBox>}
       {error && <MessageBox variant="danger">{error}</MessageBox>}
       {success && <MessageBox variant="success">{success}</MessageBox>}
    <label className="avatar" ><span> 
        <div className="logo">
          <img style={{ height: "90px",width
          :'90px'}} src="../images/logopg.jpg" alt='Logo'/>
        </div>
        </span></label>
        <br></br>
        <span className="title"> Reset Password</span><br></br>
        <span className="sub mb">Enter your user account's verified email address and we will send you a password reset link. </span>

    </div>
     <div className='card shadow-sm'>

    <div className='card-body'>
    <form className="form" onSubmit={submitHandler}>
  
     
       
        
 <input type="email" className="input" placeholder="email" onChange={(e)=>setEmail(e.target.value)} />
   

     
   {/* <span className="sub">Already have an account ? <a href="#">Sign in</a></span> */}
     <button className='button btn btn-primary'>Send Password Email Link</button>
 </form>






    </div>




     </div>




   </div>



   </div>



    








 )
  
}

export default ForgottenPassword