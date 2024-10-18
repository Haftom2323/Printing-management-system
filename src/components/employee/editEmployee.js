import React ,{useState,useEffect}from 'react'
import {useDispatch,useSelector} from 'react-redux';
import MessageBox from '../messageBox';
import Spinner from '../spinner';
import { useParams } from "react-router-dom";
import { detailsEmployee } from '../../actions/employeeAction';
import { updateEmployee } from '../../actions/employeeAction';
import { listJobTitle } from '../../actions/jobTitleCreateAction';
import LoadingBox from '../loading';

const EditEmployee=(props)=> {
  let {_id}=useParams();
  const employeeDetail=useSelector((state)=>state.employeedetail)
  console.log('detail order',employeeDetail)
  const {success,loading,error,employee}=employeeDetail
  const [firstName,setFirstName]=useState('')
  const [middleName,setMiddleName]=useState('')
  const [lastName,setLastName]=useState('')
  const [phoneNumber,setPhoneNumber]=useState('')
  const [email,setEmail]=useState('')
  const [jobTitleId,setJobTitleId]=useState('')
  const [address,setAddress]=useState('')
  const [remark,setRemark]=useState('')
  
 
   const jobTitleList = useSelector((state) => state.jobtitlelist);
  const {jobTitles} = jobTitleList
  
  const employeeUp = useSelector((state) => state.employeeupdate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = employeeUp;

  const dispatch=useDispatch()
    
   
        useEffect(() => {
          const load = async () => {
            try {
              dispatch(detailsEmployee(_id))
              dispatch(listJobTitle())
                }
            catch(error)
            {

             }
            
        };
          load();
        
          }, []);


          useEffect(()=> {

            if(employee) {

               setFirstName(employee.firstName)
               setLastName(employee.lastName)
               setMiddleName(employee.middleName)
               setAddress(employee.address)
               setEmail(employee.email)
               setPhoneNumber(employee.phoneNumber)
               setJobTitleId(employee.jobTitleId)
               setRemark(employee.remark)

            }

        },[employee])


  
  
      const submitHandler = (e) => {
        e.preventDefault();
        if (firstName && lastName) {
    
    dispatch(updateEmployee({_id,firstName,middleName,lastName,phoneNumber,email,jobTitleId,address,remark}));
          
        } else {
          alert('Name and descrption is required');
        }
      };





  return (
    <div>
       {loadingUpdate && <LoadingBox></LoadingBox>}
        {errorUpdate && <MessageBox variant="danger">{errorUpdate}</MessageBox>}
      
        {loading && <Spinner variant="success"></Spinner>}
        {error && <MessageBox variant="danger">{error}</MessageBox>}
        {successUpdate && <MessageBox variant="success">{successUpdate}</MessageBox>}


          {employee &&
          <form onSubmit={submitHandler}>
         <div className='row'>
          
         <div className="col-md-4">
        <label htmlFor="job_name" className="form-label" >
          First Name
        </label>
        <input
          type="text"
          defaultValue={employee.firstName}
          className="form-control py-2"
          id="job_code"
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <div className="col-md-4">
        <label htmlFor="name" className="form-label">
          Middle Name
        </label>
        <input
          type="text"
          defaultValue={employee.middleName}
          className="form-control py-2"
          id="name"
          onChange={(e) => setMiddleName(e.target.value)}
        />
      </div>
     
      <div className="col-md-4">
        <label htmlFor="lastname" className="form-label">Last Name</label>
        <input
          defaultValue={employee.lastName}
          className="form-control py-2"
          type="text"
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
          defaultValue={employee.phoneNumber}
          className="form-control py-2"
          type="text"
          id="phonenumber"
          onChange={(e) => setPhoneNumber(e.target.value)}
        ></input>
      </div>

      <div className="col-md-4">
        <label htmlFor="email" className="form-label">Email</label>
        <input
          defaultValue={employee.email}
          className="form-control py-2"
          type="text"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
        ></input>
      </div>

     { jobTitles  &&
      <div className="col-md-4">
        <label htmlFor="id" className="form-label">Job Title</label>
        <div className="col-lg-12 col-6 col-md-6">
              <select className="form-select form-control" defaultValue={employee.jobTitleId} onChange={(e) => setJobTitleId(e.target.value)}>
              <option value="" style={{fontFamily: "Times New Roman, Times, serif"}} > Select Job Title</option>
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
        <label htmlFor="address" className="form-label">Full Address</label>
        <input
          defaultValue={employee.address}
          className="form-control py-2"
          type="text"
          id="address"
          onChange={(e) => setAddress(e.target.value)}
        ></input>
      </div>
      <div className="col-md-4">
        <label htmlFor="remark" className="form-label">Remark</label>
        <input
          defaultValue={employee.remark}
          className="form-control py-2"
          type="text"
          id="remark"
          onChange={(e) => setRemark(e.target.value)}
        ></input>
      </div>

      <div className="col-md-3" style={{ marginTop: "30px" }}>
          <button className="btn btn-primary block">Save</button>
        </div>


      
</div>
<br></br>


    
      
      

    
    </form>



          }

    


    </div>
  )
}

export default EditEmployee