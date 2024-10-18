import React, { useState,useEffect } from 'react';
import {useSelector, useDispatch } from 'react-redux';
//import { createJobTitle } from '../../actions/jobTitleCreateAction';
import { createProduct } from '../../actions/stockAction';
import LoadingBox from '../loading';
import MessageBox from '../messageBox';
import Spinner from '../spinner';    
import { listServiceType } from '../../actions/serviceTypeAction';   
 const CreateStock = () => {

  const serviceCreate=useSelector((state)=>state.createproduct)
  const {success,loading,error}=serviceCreate
  const serviceTypeList = useSelector((state) => state.listservicetype);
   
  const {serviceTypes}=serviceTypeList
    const [description,setDescription]=useState('')
    const [code, setServiceCode]=useState('')
    const [serviceType,setServiceType]=useState('') 
    const [quantity,setQuantity]=useState('')
    const [unitPrice,setUnitPrice]=useState('')
    const[measurement,setMeasurment]=useState('')
    const dispatch = useDispatch();

    const options = ['Kg', 'g','m'];
    const submitHandler = async (e) => {
      e.preventDefault();
      if (code) {
      
      await dispatch(createProduct(code,quantity,unitPrice,description,measurement,serviceType));
          clearField(e)
      } else {
        alert('Code and descrption is required');
      }
    };

    const clearField=(event)=> {
    
      Array.from(event.target).forEach((e) => (e.value = ""));
    
    }

    useEffect(()=> {
    
      dispatch(listServiceType())
      
      },[dispatch])
      
  return (

   <div className='createStock'>

{loading && <LoadingBox variant="success"></LoadingBox>}
        {error && <MessageBox variant="danger">{error}</MessageBox>}
        {success && <MessageBox variant="success">{success}</MessageBox>}
      <form onSubmit={submitHandler}>
            <div className='row'>
            <div className="col-md-4">
          <label htmlFor="code" className="form-label">
            Code
          </label>
          <input
            type="text"
            
            className="form-control py-2"
            id="code"
            onChange={(e) => setServiceCode(e.target.value)}
          />
        </div>

            

                  <div className="col-md-4">
          <label htmlFor="code" className="form-label">
            Unit Price
          </label>
          <input
            type="text"
            
            className="form-control py-2"
            id="PRICE"
            onChange={(e) => setUnitPrice(e.target.value)}
          />
        </div>  

        <div className="col-md-4">
          <label htmlFor="quantity" className="form-label">
            Quantity
          </label>
          <input
            type="text"
            
            className="form-control py-2"
            id="qantity"
            onChange={(e) => setQuantity(e.target.value)}
          />
        </div>
             </div>
             

     <br></br>
   <div className='row'>

         <div className="col-md-4">
        <label htmlFor="id" className="form-label">Measurment </label>
        <div className="col-lg-12 col-6 col-md-6">
        <select className="form-select" onChange={(e) => setMeasurment(e.target.value)}>
        <option value="" style={{fontFamily: "Times New Roman, Times, serif"}} > Select Measurment</option>
               {options.map((option, index) => {
                   return <option key={index} >
                       {option}
                   </option>
                 })}


         </select>
              
            </div>


            
      </div>

      <div className="col-md-4">
          <label className="form-label">Description</label>
          <textarea
            
            className="form-control"
            rows="4"
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        

        { serviceTypes.length > 0  &&
      <div className="col-md-4">
        <label htmlFor="id" className="form-label">Service Type</label>
        <div className="col-lg-12 col-6 col-md-6">
              <select className="form-select" onChange={(e) => setServiceType(e.target.value)}>
              <option value="" style={{fontFamily: "Times New Roman, Times, serif"}} > Select Service Type</option>
                    {serviceTypes.map((s, index) => {
                        return <option key={index} >
                            {s.name}
                        </option>
                      })}


              </select>
              
            </div>
      </div>

     }








       

   </div>

  <div className='row'>
  <div className="col-md-4" style={{ marginTop: "10px" }}>
        
        </div>
        <div className="col-md-4" style={{ marginTop: "10px" }}>
        
        </div>
  <div className="col-md-2" style={{ marginTop: "10px" }}>
          <button className="btn btn-primary block">Save</button>
        </div>
        <br></br>
  
  <div className="col-md-3" style={{ marginTop: "10px" }}>
        
        </div>
  
  </div>
   
      





 </form>




   </div>









  );
};
export default CreateStock;
