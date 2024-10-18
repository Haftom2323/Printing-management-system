import React, {useState,useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import LoadingBox from '../loading'
import MessageBox from '../messageBox'
import { useParams } from "react-router-dom";
import { resetPassword } from '../../actions/userAction'
import { ToastContainer, toast } from 'react-toastify';
import { useHistory } from "react-router-dom";

const ChangePassword = (props) => {
  // let {activationToken}=useParams();
  const activationToken = props.location.search
               ? props.location.search.split('=')[1]
               :1;

  const history=useHistory()
  const [password,setPassword]=useState('')
  const [cpassword,setCpassword]=useState('')

  const dispatch=useDispatch()

  const resetpassword=useSelector((state)=>state.resetpassword)
 const {success,loading,error}=resetpassword

 console.log('ccccccc',success,loading,error)
 const submitHandler=(e)=> {
          e.preventDefault();
          dispatch(resetPassword(activationToken,password))
              }



              useEffect(()=>{
                if(success)
                    {
                   toast.success('password Reseted Successfully', {
                     position: "top-right",
                     autoClose: 4000,
                     hideProgressBar: false,
                     closeOnClick: true,
                     pauseOnHover: true,
                     draggable: true,
                     progress: undefined,
                     theme: "light",
                     });

                   setTimeout(() => {
                    history.push('/');
                   }, 3000);
                    }
 
                  
                    
 
            },[resetpassword])


  return (
    <div className='row'>


     <div className='col-md-4'>

     </div>

     
    <div className='col-md-4'>
    {loading && <LoadingBox variant="success"></LoadingBox>}
       {error && <MessageBox variant="danger">{error}</MessageBox>}
       {/* {success && <MessageBox variant="success">{success}</MessageBox>} */}

       <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
              />
              {/* Same as */}
              <ToastContainer />  
    <form className="form" onSubmit={submitHandler}>
    <label className="avatar"><span> 
    <div className="logo">
      <img style={{ height: "90px",width
      :'90px'}} src="../images/logopg.jpg" alt='Logo'/>
    </div>
    </span></label>
    <span className="resettitle">Enter New  Password Now</span>
    {/* <span className="sub mb">Register to get full access now :)</span> */}
 
   
    
      <input type="password" className="input" placeholder="New Password" onChange={(e)=>setPassword(e.target.value)}  />
     <input type="password" className="input" placeholder="confirm Password" onChange={(e)=>setCpassword(e.target.value)}/>

      
    {/* <span className="sub">Already have an account ? <a href="#">Sign in</a></span> */}
      <button className='button btn btn-primary'>Change</button>
  </form>





    </div>



    </div>
  )
}

export default ChangePassword