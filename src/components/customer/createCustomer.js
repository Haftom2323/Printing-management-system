import React ,{useState}from 'react'
import {useSelector, useDispatch} from 'react-redux';

import { createCustomer } from '../../actions/customerAction';
import LoadingBox from '../loading';
import MessageBox from '../messageBox';
import Validation from './Validation';
 const CreateCustomer = () => {
  const [firstName,setFirstName]=useState('')
  const [middleName,setMiddleName]=useState('')
  const [lastName,setLastName]=useState('')
  const [phoneNumber,setPhoneNumber]=useState('')
  const [homeNumber,setHomeNumber]=useState('')
  const [email,setEmail]=useState('')
  const [tinNum,setTinNumber]=useState('')
  const [address,setAddress]=useState('')
  const [streetAdress,setStreetAddress]=useState('')
  const [companyName,setCompanyName]=useState('')
  const [username,setUserName]=useState('')
  const [password,setPassword]=useState('')
  const [cpassword,setConfirmPassword]=useState('')
  
  const customerCreate = useSelector((state) => state.customerreducer);
  const {success,loading,error,clear}=customerCreate
  // validation
  const [errors, setErrors] = useState({})
  let errorLength=Object.keys(errors).length
  const dispatch = useDispatch();
  const submitHandler = async (e) => {
    e.preventDefault();

    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
   setErrors(Validation({firstName,lastName,phoneNumber,username,address,email,password,cpassword}))
   
    if(firstName==="" || lastName==="" || phoneNumber==="" || address==="" || email==="" ||username==="" ||
    !email_pattern.test(email) || cpassword!==password)  
        
        {
          return
        }
   
    
  //  console.log('errorssss',Object.keys(errors).length)

  await  dispatch(createCustomer(firstName,lastName,password,username,phoneNumber,homeNumber,email,tinNum,address,streetAdress,companyName));
      clearField(e)

      setFirstName('')
      setLastName('')
      setPassword('')
      setCompanyName('')
      setAddress('')
      setPhoneNumber('')
      setStreetAddress('')
      setConfirmPassword('')
      setTinNumber('')
      setEmail('')
      setUserName('')
      
    
   
  };

  const clearField=(event)=> {
    
    Array.from(event.target).forEach((e) => (e.value = ""));
  
}




  return (
     <div className='createCustomer'>
        
        {loading && <LoadingBox variant="success"></LoadingBox>}
        {error && <MessageBox variant="danger">{error}</MessageBox>}
        {success && <MessageBox variant="success">{success}</MessageBox>}
<form onSubmit={submitHandler}>
     <div className='row'>

     <div className="col-md-4">
        <label htmlFor="job_name" className="form-label required">
          First Name
        </label>
        <input
          type="text"
           defaultValue={firstName}
          className="form-control py-2"
          id="job_code"
          onChange={(e) => setFirstName(e.target.value)}
        />
                 {errors.firstName && <p style={{color: "red"}}>{errors.firstName}</p>}

      </div>
      {/* <div className="col-md-4">
        <label htmlFor="name" className="form-label">
          Middle Name
        </label>
        <input
          type="text"
          defaultValue={middleName}
          className="form-control py-2"
          id="name"
          onChange={(e) => setMiddleName(e.target.value)}
        />
      </div> */}
     
      <div className="col-md-4">
        <label htmlFor="lastname" className="form-label required">Last Name</label>
        <input
          
          className="form-control py-2"
          type="text"
          id="lastname"
          defaultValue={lastName}
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
          
          className="form-control py-2"
          type="text"
          defaultValue={phoneNumber}
          id="phonenumber"
          onChange={(e) => setPhoneNumber(e.target.value)}
        ></input>
       {errors.phoneNumber && <p style={{color: "red"}}>{errors.phoneNumber}</p>}

      </div>

      <div className="col-md-4">
        <label htmlFor="email" className="form-label required">Email</label>
        <input
          
          className="form-control py-2"
          type="text"
          defaultValue={email}
          id="email"
          onChange={(e) => setEmail(e.target.value)}
        ></input>
         {errors.email && <p style={{color: "red"}}>{errors.email}</p>}
      </div>


      <div className="col-md-4">
        <label htmlFor="email" className="form-label">Home Number</label>
        <input
          
          className="form-control py-2"
          type="text"
          defaultValue={homeNumber}
          id="email"
          onChange={(e) => setHomeNumber(e.target.value)}
        ></input>
      </div>

      </div>
 
      <br></br>
     <div className='row'>


     <div className="col-md-4">
        <label htmlFor="address" className="form-label required">Full Address</label>
        <input
          
          className="form-control py-2"
          type="text"
          id="address"
          defaultValue={address}
          onChange={(e) => setAddress(e.target.value)}
        ></input>
                 {errors.address && <p style={{color: "red"}}>{errors.address}</p>}

      </div>
      
      <div className="col-md-4">
        <label htmlFor="remark" className="form-label">Tin Number</label>
        <input
          
          className="form-control py-2"
          type="text"
          id="remark"
          defaultValue={tinNum}
          onChange={(e) => setTinNumber(e.target.value)}
        ></input>
      </div>

      <div className="col-md-4">
        <label htmlFor="cname" className="form-label">Company Name</label>
        <input
          
          className="form-control py-2"
          type="text"
          id="cname"
          defaultValue={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
        ></input>
      </div>


      
</div>
      <br></br>
  <div className='row'>

  <div className="col-md-4">
        <label htmlFor="remark" className="form-label">Street Address</label>
        <input
          
          className="form-control py-2"
          type="text"
          id="remark"
          defaultValue={streetAdress}
          onChange={(e) => setStreetAddress(e.target.value)}
        ></input>
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
        <label htmlFor="cpassword" className="form-label required">Confirm Password</label>
        <input
          placeholder=""
          className="form-control py-2"
          type="text"
          id="cpaswword"
          onChange={(e) => setConfirmPassword(e.target.value)}
        ></input>
        {errors.cpassword && <p style={{color: "red"}}>{errors.cpassword}</p>}

      </div>
      <div className="col-md-2" style={{ marginTop: "30px" }}>
          <button className="btn btn-primary block">Save</button>
        </div>

   </div>

  <br></br>
  
  <div className="col-md-6" style={{ marginTop: "30px" }}>
        
      </div>
</form>
     </div>






    
    
  );
};
export default CreateCustomer;
