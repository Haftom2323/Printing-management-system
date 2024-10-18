import React, {useEffect,useState } from 'react';
import {useSelector, useDispatch } from 'react-redux';
import Sidebar from '../sidebar'
import Header from '../header'
import { useParams } from "react-router-dom";

import CheackOutPhases from '../cheackoutPhase'
import { listEmployee } from '../../actions/employeeAction';
import { updateOrder } from '../../actions/orderAction';
import LoadingBox from '../loading';
import MessageBox from '../messageBox';
import { useHistory } from "react-router-dom";

 const GraphicDesign = () => {
  const employeeList = useSelector((state) => state.employeelist);
  const {employees}=employeeList
  const updateOr = useSelector((state) => state.updateorder);
  const {error,loading,success}=updateOr
  const [filteredEmployee,setFilteredEmployee]=useState([])
  let {_id}=useParams();
  const [assigned_to,setAsign]=useState('')
  const [quantity,setQuantity]=useState('')
  const dispatch=useDispatch()
  let history = useHistory();

 useEffect(()=>{
       dispatch(listEmployee())
 },[])
 useEffect(()=>{

  if(employees)
     {
       let filteredDepartment=employees.filter((e)=>e.jobTitleId=='Designer')
       setFilteredEmployee(filteredDepartment)
     }

    },[employees])

    
       const save=()=> {
        let phase='GD'

      dispatch(updateOrder ({_id,assigned_to,quantity,phase}));


       }


  const nextPhase=()=> {
     history.push(`/pphase/${_id}`)


  }






return (
  <div className='GraphicPase'>
  {/* <cheackOutPhases step1></cheackOutPhases> */}

  <Sidebar />
  <main className="main-wrap">
    <Header />
  
   <section className="content-main">
    <CheackOutPhases step1 _id={_id}></CheackOutPhases>
    {loading && <LoadingBox variant="success"></LoadingBox>}
        {error && <MessageBox variant="danger">{error}</MessageBox>}
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
      <option value="" style={{fontFamily: "Times New Roman, Times, serif"}} >Select Graphic Designer Employee</option>
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
          <button className="btn btn-primary block" onClick={save}>Save</button>
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
export default GraphicDesign









