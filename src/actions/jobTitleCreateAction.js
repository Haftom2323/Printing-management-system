import Axios from 'axios';
import {
    JOBTITLE_CREAT_REQUESTE ,
    JOB_CREATE_SUCCESS,
    JOB_CREATE_FAIL,
    JOB_LIST_REQUEST,
    JOB_LIST_SUCCESS,
    JOB_LIST_FAIL,
    JOB_DETAIL_REQUEST,
    JOB_DETAIL_SUCCESS,
    JOB_DETAIL_FAIL,
    JOB_UPDATE_REQUEST,
    JOB_UPDATE_SUCCESS,
    JOB_UPDATE_FAIL,
    JOB_DELETE_REQUEST,
    JOB_DELETE_SUCCESS,
    JOB_DELETE_FAIL,
}  from '../constants/jobTitleConstatnts';
import {toast} from 'react-toastify';


 export const createJobTitle= (name,code,description) => async (dispach)=>{
  const userInfo=localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null
    
   


      dispach({type:JOBTITLE_CREAT_REQUESTE ,payload: {name,code,description}});
      
      try {
        const { data } = await Axios.post('https://printing-service.onrender.com/api/job_title/add', {name,code,description},
        
        {     headers: {
          Authorization: "Bearer " + userInfo.token
      }
     }
        )
        
          
          dispach({type:JOB_CREATE_SUCCESS, payload:data})

        



          
      }
      catch(err) {
          // dispach({type:JOB_CREATE_FAIL,payload:err.message})
         
          dispach({type:JOB_CREATE_FAIL,payload:err.response && err.response.data.message
            ? err.response.data.message
            : err.message,})
          console.log(err)
          
      }
  };

  export const deleteJob=(id)=> async(dispatch,getState)=> {

    const userInfo=localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null
  
   
        
    // const {userSignin: { userInfo }, } = getState();
    const {  jobtitlelist: { jobTitles }, } = getState();
  

   dispatch({type:JOB_DELETE_REQUEST})
    try {
     
      
      const { data } = await Axios.delete(`https://printing-service.onrender.com/api/job_title/delete/${id}`,
      
      {     headers: {
        Authorization: "Bearer " + userInfo.token
    }
   }
      );
        dispatch({type:JOB_DELETE_SUCCESS, payload: jobTitles.filter((j) => j._id !== id)})
        toast.success('Department Deleted Sussefully')
    } catch (error) {
      dispatch({type:JOB_DELETE_FAIL,payload:error.response && error.response.data.message ?
        error.response.data.message:error.message})
        let errorMessage=error.response && error.response.data.message ?
        error.response.data.message:error.message
        toast.error(errorMessage)
    }

  }
  
  export const listJobTitle= () => async (dispach)=>{
    const userInfo=localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null
  
        dispach({type:JOB_LIST_REQUEST});
      
        try {
          let { data } = await Axios.get('https://printing-service.onrender.com/api/job_title/fetch',
          {     headers: {
            Authorization: "Bearer " + userInfo.token
        }
       }
          );
  
          dispach({type:JOB_LIST_SUCCESS, payload:data})
        
        }
        catch(err) {
     
            dispach({type:JOB_LIST_FAIL,payload:err.message})
         
        }
    };

    export const detailsJobTitle=(jobId)=>async (dispactch)=>

    {
      const userInfo=localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null

       dispactch({type:JOB_DETAIL_REQUEST,payload:jobId}) ;
   
        try
          {
            
      
       const { data } = await Axios.get(`https://printing-service.onrender.com/api/job_title/fetch/${jobId}`,
       {     headers: {
        Authorization: "Bearer " + userInfo.token
    }
   });
       
       dispactch({type:JOB_DETAIL_SUCCESS,payload:data})
  
          }     
        catch(error)
        {
          
           dispactch({type:JOB_DETAIL_FAIL,payload:error.response && error.response.data.message ?
            error.response.data.message:error.message
          });
  
        }
    }




    export const updateJobTitle = (job) => async (dispatch, getState) => {
      const userInfo=localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null

      dispatch({ type: JOB_UPDATE_REQUEST, payload: job });
      // const {
      //   userSignin: { userInfo },
      // } = getState();
      try {
        const { data } = await Axios.put(`https://printing-service.onrender.com/api/job_title/update/${job._id}`,job, {     headers: {
          Authorization: "Bearer " + userInfo.token
      }
     });
        dispatch({ type: JOB_UPDATE_SUCCESS, payload: data });
      } catch (error) {
        console.log('error from store',error)
        const message =
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message;
        dispatch({ type: JOB_UPDATE_FAIL, payload: message });
      }
    };