import Axios from 'axios';
import { SERVICE_TYPE_CREATE_REQUEST,SERVICE_TYPE_CREATE_SUCCESS,
        SERVICE_TYPE_CREATE_FAIL,SERVICE_TYPE_LIST_REQUEST,
        SERVICE_LIST_SUCCESS,SERVICE_TYPE_LIST_FAIL,
        SERVICE_TYPE_DETAIL_REQUEST,
        SERVICE_TYPE_DETAIL_SUCCESS,
        SERVICE_TYPE_DETAIL_FAIL,
        SERVICE_UPDATE_FAIL,
        SERVICE_UPDATE_SUCCESS,
        SERVICE_DELETE_REQUEST,
        SERVICE_DELETE_SUCCESS,
        SERVICE_DELETE_FAIL,
        SERVICE_UPDATE_REQUEST,

} from '../constants/serviceTypeConstants';
import {toast} from 'react-toastify';

 export const createServiceType= (name,code,hasDefinedPrice,unitPrice,description) => async (dispach)=>{
  const userInfo=localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null
    
   
      dispach({type:SERVICE_TYPE_CREATE_REQUEST ,payload: {name,code,hasDefinedPrice,unitPrice,description}});
       
      try {
        const { data } = await Axios.post('https://printing-service.onrender.com/api/service_type/add', {name,code,hasDefinedPrice,unitPrice,description},
        {     headers: {
          Authorization: "Bearer " + userInfo.token
      }
     }
        
        )
        
          dispach({type:SERVICE_TYPE_CREATE_SUCCESS, payload:data})
        
      }
      catch(err) {
          dispach({type:SERVICE_TYPE_CREATE_FAIL,payload:err.response && err.response.data.message
            ? err.response.data.message
            : err.message})
          
      }
  };

  export const deleteService=(id)=> async(dispatch,getState)=> {

    const userInfo=localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null
  
    // const {userSignin: { userInfo }, } = getState();
    const {  listservicetype: { serviceTypes }, } = getState();
  

   dispatch({type:SERVICE_DELETE_REQUEST})
    try {
     
      
      const { data } = await Axios.delete(`https://printing-service.onrender.com/api/service_type/delete/${id}`,
      
      {     headers: {
        Authorization: "Bearer " + userInfo.token
    }
   }
      );
        dispatch({type:SERVICE_DELETE_SUCCESS,payload: serviceTypes.filter((s) => s._id !== id)})
        toast.success('Serivice Type Deleted Sussefully')

    } catch (error) {
      
      dispatch({type:SERVICE_DELETE_FAIL,payload:error.response && error.response.data.message ?
        error.response.data.message:error.message})
        let errorMessage=error.response && error.response.data.message ?
        error.response.data.message:error.message
        toast.error(errorMessage)
    }

  }








  
  export const listServiceType= () => async (dispach)=>{
    const userInfo=localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null
        dispach({type:SERVICE_TYPE_LIST_REQUEST});
      
        try {
          let { data } = await Axios.get('https://printing-service.onrender.com/api/service_type/fetch',
          
          {headers: {
            Authorization: "Bearer " + userInfo.token
        }
       }
          
          );
       
          
          dispach({type:SERVICE_LIST_SUCCESS, payload:data})
        
        }
        catch(err) {
            dispach({type:SERVICE_TYPE_LIST_FAIL,payload:err.response && err.response.data.message
              ? err.response.data.message
              : err.message})
            
        }
    };



    export const detailsServiceType=(serviceId)=>async (dispactch)=>

    {
      const userInfo=localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null
     
       dispactch({type:SERVICE_TYPE_DETAIL_REQUEST,payload:serviceId}) ;
      
        try
          {
            
      
       const { data } = await Axios.get(`https://printing-service.onrender.com/api/service_type/fetch/${serviceId}`,
       
       {     headers: {
        Authorization: "Bearer " + userInfo.token
    }
   }
       );
       
            dispactch({type:SERVICE_TYPE_DETAIL_SUCCESS, payload:data})
          

          }     
        catch(error)
        {
           dispactch({type:SERVICE_TYPE_DETAIL_FAIL,payload:error.response && error.response.data.message ?
            error.response.data.message:error.message
          });

        }
    }


    export const updateServiceType = (serviceType) => async (dispatch, getState) => {
      const userInfo=localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null

      dispatch({ type: SERVICE_UPDATE_REQUEST, payload: serviceType });
      // const {
      //   userSignin: { userInfo },
      // } = getState();
      try {
        
        const data  = await Axios.put(`https://printing-service.onrender.com/api/service_type/update/${serviceType._id}`
        ,serviceType, {     headers: {
          Authorization: "Bearer " + userInfo.token
      }
     });
        console.log('service data',data)
 
        dispatch({ type: SERVICE_UPDATE_SUCCESS, payload: data });
      } catch (error) {
      
        const message =
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message;
        dispatch({ type: SERVICE_UPDATE_FAIL, payload: message });
      }
    };




    