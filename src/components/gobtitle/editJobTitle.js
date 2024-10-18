import React ,{useState,useEffect}from 'react'
import {useDispatch,useSelector} from 'react-redux';
import { Link } from "react-router-dom";
import LoadingBox from '../loading';
import MessageBox from '../messageBox';
import Spinner from '../spinner';
import { useParams } from "react-router-dom";
import { detailsJobTitle } from '../../actions/jobTitleCreateAction';
import { updateJobTitle } from '../../actions/jobTitleCreateAction';
const  EditJobTitle=()=> {

  let {_id}=useParams();
  const jobDetail=useSelector((state)=>state.jobdetail)
  console.log('detail order',jobDetail)
  const {success,loading,error,job}=jobDetail

  const jobTitleUpdate = useSelector((state) => state.jobtittleupdate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = jobTitleUpdate;
console.log('errrrrrr',jobTitleUpdate)

  const [name,setName]=useState('')
  const [code,setJobTitleCode]=useState('')
  const [description,setDescription]=useState('')

   const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    if (name && description) {
        dispatch(updateJobTitle({_id,code,name,description}))
    
   // dispatch(createJobTitle(name,code,description));
      
    } else {
      alert('Name and descrption is required');
    }
};

          useEffect(() => {
                    console.log('entereed to useEfect')
                      const load = async () => {
                        try {
                          dispatch(detailsJobTitle(_id))
                          
                              
                        }
                        catch(error)
                        {


                        }
                        
                    };
                      load();
                    
                      }, []);


        useEffect(()=> {

              if(job) {

                  setDescription(job.description)
                  setName(job.name)
                  setJobTitleCode(job.code)
              }

          },[job])
    

  return (
    <div>

{loadingUpdate && <LoadingBox></LoadingBox>}
        {errorUpdate && <MessageBox variant="danger">{errorUpdate}</MessageBox>}
      
        {loading && <Spinner variant="success"></Spinner>}
        {error && <MessageBox variant="danger">{error}</MessageBox>}
        {successUpdate && <MessageBox variant="success">{successUpdate}</MessageBox>}
 
        {job &&

          
      <form onSubmit={submitHandler}>
       <div className='row'>
  
       <div className="col-md-4">
          <label htmlFor="job_name" className="form-label">
            Job Title Code
          </label>
          
          <input
            type="text"
            defaultValue={job.code}
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
            defaultValue={job.name}
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
             defaultValue={job.description}
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
        }



        
       
    </div>
  )
}
export default EditJobTitle
