import React,{useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Sidebar from '../components/sidebar';
import Header from '../components/header';
import LoadingBox from '../components/loading';
import MessageBox from '../components/messageBox';
import { changeProfile } from '../actions/userAction';

 const ChangeProfileScreen = () => {
  const dispatch=useDispatch() 
  const [username,setUserName]=useState('')
  const [profilePicture,setImg]=useState('')
  const changePro=useSelector((state)=>state.changeprofile)
  const {success,loading,error}=changePro   
  // const userSignin=useSelector((state)=>state.userSignin)
  // const {userInfo}=userSignin
  const userSignin=localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null

  const userId=userSignin._id
    
  const submitHandler=(e)=> {
    e.preventDefault()
    const userFile = new FormData();
     console.log('clicked',username)
    userFile.append('userName',username)
    userFile.append('userId',userSignin._id)
    userFile.append('profilePicture',profilePicture);
      dispatch(changeProfile(userFile))
  }
 


  return (
    
    <>
    <Sidebar />
    <main className="main-wrap">
      <Header />
    
      <section className="content-main">
  <div className="content-header">
  <div className="card shadow-sm">
        <div className="card-body">

      
        <div className='changeProfile'>
           {loading && <LoadingBox variant="success"></LoadingBox>}
       {error && <MessageBox variant="danger">{error}</MessageBox>}
       {success && <MessageBox variant="success">{success}</MessageBox>}
          <form onSubmit={submitHandler}>
          <div className='row'>

         <div className="col-md-4">
                  <label htmlFor="name" className="form-label">
                  User Name
                  </label>
                  <input
                  type="text"
                  placeholder=""
                  className="form-control py-2"
                  id="uname"
                  defaultValue={userSignin.username}
                  onChange={(e) => setUserName(e.target.value)}
                  />
            </div>

          <div className="col-md-4">
          <label htmlFor="imgphoto" className="form-label">Upload Photo</label>
          <input

                type="file"
                accept="image/*"
                name="profilePicture"
                onChange={(e) => setImg(e.target.files[0])}
                id="fileInput"
              

          ></input>

          <small  id="uploadHelpInline" className="text-muted"><span>
          Photo Frame with a maximum of 1 MB size</span>.</small>
          </div>
    </div>
          <br></br>
          <br></br>
    <div className='row'>
            

          <div className='col-md-2'>

          </div>
            <div className="col-md-2" style={{ marginTop: "30px" }}>
         <button className="btn btn-primary block">Save</button>
       </div>
           

           </div>
          
          
          
          </form>



           </div>



        </div>
        </div>







        
  </div>
</section>
    </main>
  </>
  )
}
export default ChangeProfileScreen;
