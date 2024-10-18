import React ,{useEffect,useState}from 'react'
import {useSelector, useDispatch} from 'react-redux';
// import { listEmployee } from '../../actions/employeeAction';
import { listJobTitle } from '../../actions/jobTitleCreateAction';
import { createEmployee } from '../../actions/employeeAction';
import LoadingBox from '../loading';
import MessageBox from '../messageBox';
import Validation from './Validation';
 const CreatEmployee = () => {
  const dispatch = useDispatch();
  const [firstName,setFirstName]=useState('')
  const [middleName,setMiddleName]=useState('')
  const [lastName,setLastName]=useState('')
  const [phoneNumber,setPhoneNumber]=useState('')
  const [email,setEmail]=useState('')
  const [jobTitleId,setJobTitleId]=useState('')
  const [address,setAddress]=useState('')
  const [remark,setRemark]=useState('')
  const [username,setUserName]=useState('')
  const [password,setPassword]=useState('')
  const [cpassword,setConfirmPassword]=useState('')
  const employeCreate=useSelector((state)=>state.employecreate)
  const {success,loading,error}=employeCreate
   
  const jobTitleList = useSelector((state) => state.jobtitlelist);
  const {jobTitles} = jobTitleList
      
  const [errors, setErrors] = useState({})

    

  useEffect(()=> {
    
    dispatch(listJobTitle())
    
    },[dispatch])



  const submitHandler = async (e) => {
    e.preventDefault();
    
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    setErrors(Validation({firstName,lastName,middleName,phoneNumber,jobTitleId,address,email,username,password,cpassword}))
    
     if(firstName==="" || lastName==="" || phoneNumber==="" || address==="" || email==="" || username==="" ||
     !email_pattern.test(email) || cpassword!==password)  
         
         {
           return
         }



   await dispatch(createEmployee(firstName,middleName,lastName,phoneNumber,email,jobTitleId,address,remark,username,password));
       clearField(e)

        setFirstName('')
        setLastName('')
        setMiddleName('')
        setConfirmPassword('')
        setPassword('')
        setUserName('')
        setJobTitleId('')
        setRemark('')
        setAddress('')
        setPhoneNumber('')
        setEmail('')
   
  };
  const clearField=(event)=> {
    
    Array.from(event.target).forEach((e) => (e.value = ""));
  
}

  return (
    <div className="createEmployee">
    {loading && <LoadingBox variant="success"></LoadingBox>}
        {error && <MessageBox variant="danger">{error}</MessageBox>}
        {success && <MessageBox variant="success">{success}</MessageBox>}
        <form onSubmit={submitHandler}>
         <div className='row'>
          
         <div className="col-md-4">
        <label htmlFor="job_name" className="form-label required" >
          First Name
        </label>
        <input
          type="text"
          placeholder=""
          className="form-control py-2"
          id="job_code"
          onChange={(e) => setFirstName(e.target.value)}
        />  
        {errors.firstName && <p style={{color: "red"}}>{errors.firstName}</p>}

      </div>
      <div className="col-md-4">
        <label htmlFor="name" className="form-label required">
          Middle Name
        </label>
        <input
          type="text"
          placeholder=""
          className="form-control py-2"
          id="name"
          onChange={(e) => setMiddleName(e.target.value)}
        />
                {errors.middleName && <p style={{color: "red"}}>{errors.middleName}</p>}

      </div>
     
      <div className="col-md-4">
        <label htmlFor="lastname" className="form-label required">Last Name</label>
        <input
          placeholder=""
          className="form-control py-2"
          type="text"
          id="lastname"
          onChange={(e) => setLastName(e.target.value)}
        ></input>
                {errors.lastName && <p style={{color: "red"}}>{errors.lastName}</p>}

      </div>


            </div>


            <br></br>
     <div className='row'>

     <div className="col-md-4">
        <label htmlFor="phonenumber" className="form-label required">phone Number</label>
        <input
          placeholder=""
          className="form-control py-2"
          type="text"
          id="phonenumber"
          onChange={(e) => setPhoneNumber(e.target.value)}
        ></input>
         {errors.phoneNumber && <p style={{color: "red"}}>{errors.phoneNumber}</p>}

      </div>

      <div className="col-md-4">
        <label htmlFor="email" className="form-label required">Email</label>
        <input
          placeholder=""
          className="form-control py-2"
          type="text"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
        ></input>
                {errors.email && <p style={{color: "red"}}>{errors.email}</p>}

      </div>

     { jobTitles.length > 0  &&
      <div className="col-md-4">
        <label htmlFor="id" className="form-label required">Job Title</label>
        <div className="col-lg-12 col-6 col-md-6">
              <select className="form-select form-control" onChange={(e) => setJobTitleId(e.target.value)}>
              <option value="" style={{fontFamily: "Times New Roman, Times, serif"}} > Select Job Title</option>
                    {jobTitles.map((jobTitle, index) => {
                        return <option key={index} >
                            {jobTitle.name}
                        </option>
                      })}


              </select>
              {errors.jobTitleId && <p style={{color: "red"}}>{errors.jobTitleId}</p>}

            </div>
      </div>

     }
     





     </div>
     <br></br>
     <div className='row'>

     <div className="col-md-4">
        <label htmlFor="address" className="form-label required">Full Address</label>
        <input
          placeholder=""
          className="form-control py-2"
          type="text"
          id="address"
          onChange={(e) => setAddress(e.target.value)}
        ></input>
         {errors.address && <p style={{color: "red"}}>{errors.address}</p>}

      </div>
      <div className="col-md-4">
        <label htmlFor="remark" className="form-label">Remark</label>
        <input
          placeholder=""
          className="form-control py-2"
          type="text"
          id="remark"
          onChange={(e) => setRemark(e.target.value)}
        ></input>

      </div>


      <div className="col-md-4">
        <label htmlFor="remark" className="form-label required">Password</label>
        <input
          placeholder=""
          className="form-control py-2"
          type="text"
          id="pasword"
          onChange={(e) => setPassword(e.target.value)}
        ></input>
                {errors.password && <p style={{color: "red"}}>{errors.password}</p>}

      </div>
 

     


      
</div>
<br></br>
   <div className='row'>
   <div className="col-md-4">
        <label htmlFor="cpassword" className="form-label required" required>Confirm Password</label>
        <input
          placeholder=""
          className="form-control py-2"
          type="text"
          id="cpaswword"
          onChange={(e) => setConfirmPassword(e.target.value)}
        ></input>
          {errors.cpassword && <p style={{color: "red"}}>{errors.cpassword}</p>}

      </div>

      <div className="col-md-4">
        <label htmlFor="userName" className="form-label required">User Name</label>
        <input
          placeholder=""
          className="form-control py-2"
          type="text"
          id="userName"
          onChange={(e) => setUserName(e.target.value)}
        ></input>
                {errors.username && <p style={{color: "red"}}>{errors.username}</p>}

      </div>



     <div className="col-md-2" style={{ marginTop: "30px" }}>
          <button className="btn btn-primary block">Save</button>
        </div>



   </div>


    
      
      

    
    </form>
    </div>
  );
};
export default CreatEmployee;
