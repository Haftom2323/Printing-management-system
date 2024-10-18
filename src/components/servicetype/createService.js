import React, { useState } from 'react';
import {useSelector, useDispatch } from 'react-redux';
import { createServiceType } from '../../actions/serviceTypeAction';
import LoadingBox from '../loading';
import MessageBox from '../messageBox';

 const CreateServiceType = () => {


 
    const serviceCreate=useSelector((state)=>state.createservicetype)
    const {success,loading,error}=serviceCreate
    const [name,setName]=useState('')
    const [description,setDescription]=useState('')
    const [code, setServiceCode]=useState('')
    const [hasDefinedPrice,setDefinedPrice]=useState('')
    const [unitPrice,setUnitPrice]=useState('')
    const dispatch = useDispatch();
    const options = ['true', 'false'];
    const submitHandler = async (e) => {
      console.log('nnnnnn', hasDefinedPrice)
      e.preventDefault();
      if (name) {
      
      await dispatch(createServiceType(name,code,hasDefinedPrice,unitPrice,description));
        clearField(e)
      } else {
        alert('Name and descrption is required');
      }
    };

    const clearField=(event)=> {
    
      Array.from(event.target).forEach((e) => (e.value = ""));
    
    }


   
      
  return (
    
    <div className='createServiceType'>
      {loading && <LoadingBox variant="success"></LoadingBox>}
        {error && <MessageBox variant="danger">{error}</MessageBox>}
        {success && <MessageBox variant="success">{success}</MessageBox>}
    <form onSubmit={submitHandler}>

    <div className='row'>

  <div className="col-md-4">
          <label htmlFor="sname" className="form-label">
            Service Type Name
          </label>
          <input
            type="text"
            placeholder=""
            className="form-control py-2"
            id="sname"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="code" className="form-label">
            Code
          </label>
          <input
            type="text"
            placeholder=""
            className="form-control py-2"
            id="code"
            onChange={(e) => setServiceCode(e.target.value)}
          />
        </div>

        <div className="col-md-4">
        <label htmlFor="id" className="form-label">Fixed Price </label>
        <div className="col-lg-12 col-6 col-md-6">
        <input class="form-check-input" type="radio" name="inlineRadioOptions" value="true" onChange={(e)=>setDefinedPrice(e.target.value)}>
         </input>&nbsp;&nbsp;
         <label class="form-check-label" for="inlineRadio1">true</label>&nbsp;&nbsp;
         &nbsp;
           
           
         <input class="form-check-input" type="radio" name="inlineRadioOptions" value="false" onChange={(e)=>setDefinedPrice(e.target.value)}>
         </input> &nbsp;&nbsp;
         <label class="form-check-label" for="inlineRadio1">false</label>

              
            </div>
      </div>

  </div>

  <br></br>
   <div className='row'>
   <div className="col-md-4">
          <label className="form-label">Description</label>
          <textarea
            placeholder=""
            className="form-control"
            rows="4"
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
   <div className="col-md-4"  style={{ marginTop: "30px" }}>
          <label htmlFor="code" className="form-label">
            Unit Price
          </label>
          <input
            type="number"
            placeholder=""
            className="form-control py-2"
            id="PRICE"
            onChange={(e) => setUnitPrice(e.target.value)}
          />
        </div>
   

        <div className="col-md-2" style={{ marginTop: "60px" }}>
          <button className="btn btn-primary block">Save</button>
        </div>
       
        
       
</div>

<br></br>
        <div className="" style={{marginLeft:"80px"}}>
        
        </div>



     </form>

    </div>
   
    



  );
};
export default CreateServiceType;
