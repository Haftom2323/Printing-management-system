import React ,{useEffect,useState}from 'react'
import {useSelector, useDispatch} from 'react-redux';
// import { listEmployee } from '../../actions/employeeAction';
import { listJobTitle } from '../../actions/jobTitleCreateAction';
import { register } from '../../actions/userAction';
import LoadingBox from '../loading';
import MessageBox from '../messageBox';

 const CreateUser=()=> {
 const dispatch = useDispatch();
 const [firstName,setFirstName]=useState('')
 const [userName,setUserName]=useState('')
 const [password,setPassword]=useState('')
 const [cpassword,setConfirmPassword]=useState('')
 const [email,setEmail]=useState('')
 const [role,setJobTitleId]=useState('')
 const [fileName,setFileName]=useState()
 const [file,setFile]=useState()
 const [profilePicture,setImg]=useState('')
 
 
 const userRegister=useSelector((state)=>state.userRegister)
 const {success,loading,error}=userRegister
  
 const jobTitleList = useSelector((state) => state.jobtitlelist);
 const {jobTitles} = jobTitleList
     
 
   

 useEffect(()=> {
   
   dispatch(listJobTitle())
   
   },[dispatch])



 const submitHandler = (e) => {
   e.preventDefault();
   if (firstName &&password) {
         console.log('firstName',firstName)
      
   
        const userFile = new FormData();
       
        userFile.append('firstName',firstName)
        userFile.append('userName',userName)
        userFile.append('email',email)
        userFile.append('password',password)
        userFile.append('role',role)
        userFile.append('profilePicture',profilePicture);

        dispatch(register(userFile));
     
   } else {
     alert('passwor and userName is required');
   }
 };

 const setOnChange = (e) => {
 
              // const fileInput = document.querySelector("#fileInput");
              // console.log('file,file',fileInput.files[0])
              // const file = new FormData();
              //   file.append('file', fileInput.files[0]);
            
  };

 return (
   <div className="createEmployee">
   {loading && <LoadingBox variant="success"></LoadingBox>}
       {error && <MessageBox variant="danger">{error}</MessageBox>}
       {success && <MessageBox variant="success">{success}</MessageBox>}
       <form onSubmit={submitHandler}>
        <div className='row'>
         
        <div className="col-md-4">
       <label htmlFor="job_name" className="form-label" >
         First Name
       </label>
       <input
         type="text"
         placeholder=""
         className="form-control py-2"
         id="firstName"
         onChange={(e) => setFirstName(e.target.value)}
       />
     </div>
     <div className="col-md-4">
       <label htmlFor="name" className="form-label">
         User Name
       </label>
       <input
         type="text"
         placeholder=""
         className="form-control py-2"
         id="uname"
         onChange={(e) => setUserName(e.target.value)}
       />
     </div>
    
     <div className="col-md-4">
       <label htmlFor="lastname" className="form-label">Email</label>
       <input
         placeholder=""
         className="form-control py-2"
         type="text"
         id="email"
         onChange={(e) => setEmail(e.target.value)}
       ></input>
     </div>


           </div>


           <br></br>
    <div className='row'>

   

     <div className="col-md-4">
       <label htmlFor="email" className="form-label">Password</label>
       <input
         placeholder=""
         className="form-control py-2"
         type="text"
         id="password"
         onChange={(e) => setPassword(e.target.value)}
       ></input>
     </div>


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




    { jobTitles.length > 0  &&
     <div className="col-md-4">
       <label htmlFor="id" className="form-label">Job Title</label>
       <div className="col-lg-12 col-6 col-md-6">
             <select className="form-select" onChange={(e) => setJobTitleId(e.target.value)}>
              
                   {jobTitles.map((jobTitle, index) => {
                       return <option key={index} >
                           {jobTitle.name}
                       </option>
                     })}


             </select>
             
           </div>
     </div>

    }
    





    </div>
    <br></br>
  


    <div className='row'>

    <div className="col-md-4">
       <label htmlFor="imgphoto" className="form-label">Upload Photo</label>
       <input
         
                type="file"
                accept="image/*"
                name="profilePicture"
                onChange={(e) => setImg(e.target.files[0])}
                id="fileInput"
                placeholder="Photo"
                className="custom-file-input"
              
          
       ></input>

<small  id="uploadHelpInline" class="text-muted"><span>
   Photo Frame with a maximum of 1 MB size</span>.</small>
     </div>
   

     <div className="col-md-4" style={{ marginTop: "30px" }}>
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
 );
    
}
export default CreateUser