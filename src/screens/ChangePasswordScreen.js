import React ,{useEffect,useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Sidebar from '../components/sidebar';
import Header from '../components/header';
import { changePassword } from '../actions/userAction';
import LoadingBox from '../components/loading';
import MessageBox from '../components/messageBox';
 const ChangePasswordScreen = () => {
  

  const [newPassword,setPassword]=useState('')
  const [cpassword,setConfirmPassword]=useState('')
  const [currentPassword,setOldPassword]=useState('')
  const changePass=useSelector((state)=>state.changepassword)
  const {success,loading,error}=changePass
  // const userSignin=useSelector((state)=>state.userSignin)
  // const {userInfo}=userSignin
  const userSignin=localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null

  const userId=userSignin._id
  const dispatch=useDispatch()
  const submitHandler=(e)=> {
    e.preventDefault();
      if(newPassword !== cpassword)
        {
          alert('password does not eqaual')
          return
        }
      dispatch(changePassword({userId,newPassword,cpassword,currentPassword}))
      
       }
  


  return (
    
    <>
    <Sidebar />
    <main className="main-wrap">
      <Header />
    
      <section className="content-main">
  <div className="content-header">
          
  </div>
  <div className="card shadow-sm">
        <div className="card-body">
        

  <div className="changePassword">
   {loading && <LoadingBox variant="success"></LoadingBox>}
       {error && <MessageBox variant="danger">{error}</MessageBox>}
       {success && <MessageBox variant="success">{success}</MessageBox>}
       <form onSubmit={submitHandler}>
       

    <div className='row'>
    <div className="col-md-4">
       <label htmlFor="email" className="form-label">old Password</label>
       <input
         placeholder=""
         className="form-control py-2"
         type="text"
         id="opassword"
         onChange={(e) => setOldPassword(e.target.value)}
       ></input>
     </div>
     <div className="col-md-4">
       <label htmlFor="email" className="form-label">New Password</label>
       <input
         placeholder=""
         className="form-control py-2"
         type="text"
         id="password"
         onChange={(e) => setPassword(e.target.value)}
       ></input>
     </div>


    </div>
    <br></br>
  


    <div className='row'>


    <div className="col-md-4">
       <label htmlFor="email" className="form-label">Confirm Password</label>
       <input
         placeholder=""
         className="form-control py-2"
         type="text"
         id="cpassword"
         onChange={(e) => setConfirmPassword(e.target.value)}
       ></input>
     </div>
     <div className="col-md-2" style={{ marginTop: "30px" }}>
         <button className="btn btn-primary block">Save</button>
       </div>


          
      </div>
      <br></br>

      <div className='row'>
      <div className="col-md-4" style={{ marginTop: "30px" }}>
          
          </div>
      </div>
        
          
     

   
   </form>
   </div>

        </div>
        </div>







</section>
    </main>
  </>
  )
}
export default ChangePasswordScreen;
