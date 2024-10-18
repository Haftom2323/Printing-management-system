import React, {useEffect,useState } from 'react';
import {useSelector, useDispatch } from 'react-redux';
import Sidebar from '../sidebar'
import Header from '../header'
import CheackOutPhases from '../cheackoutPhase'
import { listEmployee } from '../../actions/employeeAction';
import { useParams } from "react-router-dom";
//import { useNavigate } from "react-router-dom";
import { useHistory } from "react-router-dom";

import { updateOrder } from '../../actions/orderAction';
import LoadingBox from '../loading';
import MessageBox from '../messageBox';
 const FinishingPhase = () => {
    const employeeList = useSelector((state) => state.employeelist);
    const {employees}=employeeList
    const [filteredEmployee,setFilteredEmployee]=useState([])
    const updateOr = useSelector((state) => state.updateorder);
     const {error,loading,success}=updateOr
    const [quantity,setQuantity]=useState('')
    const [assigned_to,setAsign]=useState('')
    const dispatch=useDispatch()
    let history = useHistory();
    let {_id}=useParams();
   // const navigate=useNavigate()
  
    useEffect(()=>{

      if(employees)
         {
           let filteredDepartment=employees.filter((e)=>e.jobTitleId=='Finishing')
           setFilteredEmployee(filteredDepartment)
         }
    
        },[employees])
    
        
           const save=()=> {
            let phase='FN'
    
          dispatch(updateOrder ({_id,assigned_to,quantity,phase}));
    
    
           }
    
           const pevPhase=()=> {
            history.push(`/pphase/${_id}`);
        
        
          }
    
      const nextPhase=()=> {
        history.push(`/dphase/${_id}`);
    
    
      }
    
  return (
    <div className='GraphicPase'>
    {/* <cheackOutPhases step1></cheackOutPhases> */}
 
    <Sidebar />
    <main className="main-wrap">
      <Header />
    
      <section className="content-main">
      <CheackOutPhases step1 step2 step3 _id={_id}></CheackOutPhases>
      {loading  && <LoadingBox variant="success"></LoadingBox>}
        {error && !success && <MessageBox variant="danger">{error}</MessageBox>}
        {success && <MessageBox variant="success">{success}</MessageBox>}
  
  <div className="order card shadow-sm">
    <div className="body card-body">

       <div className='row'></div>
       <br></br>
      <div className="row">
      <div className='col-md-2'></div>
      <div className='col-md-6'>

{
 employees && 
        <select className="form-select form-control" onChange={(e) =>setAsign(e.target.value)}>
        <option value="" style={{fontFamily: "Times New Roman, Times, serif"}} >Select Finisher Employee</option>
       {filteredEmployee.map((option, index) => {
           return <option key={index} >
           {option.firstName} {option.lastName} {option.middleName}
           </option>
         })}


 </select>

      }


 </div>


          
      </div>

         <br></br>
         <div className='row'>
          <div className='col-md-2'></div>
         <div className="col-md-6">
        <label htmlFor="phonenumber" className="form-label">Qantity</label>
        <input
          
          className="form-control py-2"
          type="number"
          id="phonenumber"
          
          onChange={(e) => setQuantity(e.target.value)}
        ></input>
      </div>
         </div>

         <div className='row'>
        <div className='col-md-2'></div>
        <div className='col-md-2'>
              <div className="grid y-2" style={{marginTop:"35px"}}>
              <button className="btn btn-secondary" onClick={pevPhase}><i class="fa fa-arrow-left">&nbsp;Back</i></button>
        </div>
           </div>
    

    <div className='col-md-2'>
              <div className="grid y-2" style={{marginTop:"35px"}}>
          <button className="btn btn-primary block b" onClick={save}>Save</button>
        </div>
        </div>
        <div className='col-md-2'>
              <div className="grid y-2" style={{marginTop:"35px"}}>
          <button className="btn btn-secondary" onClick={nextPhase}><i class="fa fa-arrow-right">&nbsp;Next</i></button>
        </div>
        </div>
       </div>
       <br></br>
<br></br>
   <div className='row'>

   </div>
    </div>
  </div>
</section>
    </main>
    </div>
  )
}
export default FinishingPhase









