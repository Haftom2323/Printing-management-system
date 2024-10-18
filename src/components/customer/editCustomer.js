import React ,{useState,useEffect}from 'react'
import {useDispatch,useSelector} from 'react-redux';
import { Link } from "react-router-dom";
import MessageBox from '../messageBox';
import Spinner from '../spinner';
import { useParams } from "react-router-dom";
import { detailsCustomer } from '../../actions/customerAction';
import { UpdateCustomer } from '../../actions/customerAction';
import LoadingBox from '../loading';

const EditCustomer=(props)=> {


  let {_id}=useParams();
  const customerUpdate=useSelector((state)=>state.customerupdate)
    const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = customerUpdate;
  const detailCustomer=useSelector((state)=>state.detailcustomer)

  const {loading,error,customer}=detailCustomer
  const [firstName,setFirstName]=useState()
  const [middleName,setMiddleName]=useState('')
  const [lastName,setLastName]=useState('')
  const [phoneNumber,setPhoneNumber]=useState('')
  const [homeNumber,setHomeNumber]=useState('')
  const [email,setEmail]=useState()
  const [tinNum,setTinNumber]=useState('')
  const [address,setAddress]=useState('')
  const [streetAdress,setStreetAddress]=useState('')
  const [companyName,setCompanyName]=useState('')

  const dispatch=useDispatch()

   useEffect(() => {
      console.log('entereed to useEfect')
      const load = async () => {
          try {
            dispatch(detailsCustomer(_id))
            
                
          }
          catch(error)
          {


          }
          
      };
      load();
      
    }, []);

  useEffect(()=> {


    if(customer)

     {
      setFirstName(customer.firstName)
      setLastName(customer.lastName)
      setEmail(customer.email)
      setMiddleName(customer.middleName)
      setAddress(customer.address)
      setCompanyName(customer.companyName)
      setPhoneNumber(customer.phoneNumber)
      setHomeNumber(customer.homeNumber)
      setTinNumber(customer.tinNum)
      setStreetAddress(customer.streetAdress)
     }


  },[customer])




    const submitHandler = (e) => {
      console.log('eeeeeeeeeee',email,firstName)
      e.preventDefault();
    
      if (firstName && email) {
  
     dispatch(UpdateCustomer({_id,firstName,lastName,phoneNumber,homeNumber,email,tinNum,address,streetAdress,companyName}));
        
      } else {
        alert('Name and descrption is required');
      }
    };


  return (
    <div>
       {loadingUpdate && <LoadingBox></LoadingBox>}
        {errorUpdate && <MessageBox variant="danger">{errorUpdate}</MessageBox>}
      
        {loading && <Spinner variant="success"></Spinner>}
        {successUpdate && <MessageBox variant="success">{successUpdate}</MessageBox>}
   
          {customer &&
          <form onSubmit={submitHandler}>
     <div className='row'>

     <div className="col-md-4">
        <label htmlFor="job_name" className="form-label">
          First Name
        </label>
        <input
          type="text"
          defaultValue={customer.firstName}
          className="form-control py-2"
          id="first_name"
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      {/* <div className="col-md-4">
        <label htmlFor="name" className="form-label">
          Middle Name
        </label>
        <input
          type="text"
          defaultValue={customer.middleName}
          className="form-control py-2"
          id="name"
          onChange={(e) => setMiddleName(e.target.value)}
        />
      </div> */}
     
      <div className="col-md-4">
        <label htmlFor="lastname" className="form-label">Last Name</label>
        <input
          
          className="form-control py-2"
          type="text"
          defaultValue={customer.lastName}
          id="lastname"
          onChange={(e) => setLastName(e.target.value)}
        ></input>
      </div>



     </div>
     <br></br>
      <div className='row'>
      <div className="col-md-4">
        <label htmlFor="phonenumber" className="form-label">phone Number</label>
        <input
          
          className="form-control py-2"
          type="text"
          id="phonenumber"
          defaultValue={customer.phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        ></input>
      </div>

      <div className="col-md-4">
        <label htmlFor="email" className="form-label">Email</label>
        <input
          
          className="form-control py-2"
          type="text"
          id="email"
          defaultValue={customer.email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
      </div>


      <div className="col-md-4">
        <label htmlFor="email" className="form-label">Home Phone Number</label>
        <input
          
          className="form-control py-2"
          type="text"
          id="email"
          defaultValue={customer.homeNumber}
          onChange={(e) => setHomeNumber(e.target.value)}
        ></input>
      </div>

      </div>
 
      <br></br>
     <div className='row'>


     <div className="col-md-4">
        <label htmlFor="address" className="form-label">Full Address</label>
        <input
          
          className="form-control py-2"
          type="text"
          id="address"
          defaultValue={customer.address}
          onChange={(e) => setAddress(e.target.value)}
        ></input>
      </div>
      
      <div className="col-md-4">
        <label htmlFor="remark" className="form-label">Tin Number</label>
        <input
          
          className="form-control py-2"
          type="text"
          id="remark"
          defaultValue={customer.tinNum}
          onChange={(e) => setTinNumber(e.target.value)}
        ></input>
      </div>

      <div className="col-md-4">
        <label htmlFor="cname" className="form-label">Companey Name</label>
        <input
          
          className="form-control py-2"
          type="text"
          id="cname"
          defaultValue={customer.companyName}
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
          defaultValue={customer.streetAdress}
          onChange={(e) => setStreetAddress(e.target.value)}
        ></input>
      </div>
  
      <div className="col-md-2" style={{ marginTop: "30px" }}>
          <button className="btn btn-primary block">Save</button>
        </div>
     

  </div>
  <br></br>
  
  <div className="col-md-6" style={{ marginTop: "30px" }}>
        
      </div>
</form>

          }

        </div>


    

  )
}
export default EditCustomer