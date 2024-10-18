import React, { useState } from 'react';
import {useSelector, useDispatch } from 'react-redux';
import { createJobTitle } from '../../actions/jobTitleCreateAction';
import LoadingBox from '../loading';
import MessageBox from '../messageBox';
 const JobTile = () => {

  const jobTitleReducer = useSelector((state) => state.jobtitle);
  const { success, loading, error } = jobTitleReducer;
      console.log(success,loading,error)

    const [name,setName]=useState('')
    const [code,setJobTitleCode]=useState('')
    const [description,setDescription]=useState('')

        const dispatch = useDispatch();
    const submitHandler = async (e) => {
      e.preventDefault();
      if (name && description) {
        console.log(name,description)
      
      await dispatch(createJobTitle(name,code,description));
      clearField(e)
      } else {
        alert('Name and descrption is required');
      }
    };

    const clearField=(event)=> {
    
      Array.from(event.target).forEach((e) => (e.value = ""));
    
    }


      
  return (

     

     <div className='createJobTitle'>
     {loading && <LoadingBox></LoadingBox>}
        {error && <MessageBox variant="danger">{error}</MessageBox>}
        {success && <MessageBox variant="success">{success}</MessageBox>}

        <div className="col-md-12 col-lg-4">
        </div>

      <form onSubmit={submitHandler}>
       <div className='row'>
       <div>
    
          </div>
       <div className="col-md-4">
          <label htmlFor="job_name" className="form-label">
            Job Title Code
          </label>
          
          <input
            type="text"
            placeholder=""
            className="form-control py-2"
            id="job_code"
            onChange={(e) => setJobTitleCode(e.target.value)}
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            placeholder=""
            className="form-control py-2"
            id="name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>





       </div>
       <br></br>
       <div className='row'>
       <div className="col-md-4">
          <label className="form-label">Description</label>
          <textarea
            placeholder=""
            className="form-control"
            rows="3"
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
      
        <div className="col-md-2" style={{ marginTop: "60px" }}>
          <button className="btn btn-primary block">Save</button>
        </div>
       </div>
       
       


   </form>
      </div>
    



  );
};
export default JobTile;
