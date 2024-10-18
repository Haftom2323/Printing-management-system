 import Axios from 'axios';
import { ORDER_CREATE_REQUEST,ORDER_CREATE_SUCCESS,ORDER_CREATE_FAIL,
        ORDER_UPDATE_REQUEST,ORDER_UPDATE_FAIL,ORDER_UPDATE_SUCCESS,
         ORDER_LIST_SUCCESS, ORDER_LIST_REQUEST, ORDER_LIST_FAIL,
         ORDER_DETAILS_REQUEST,ORDER_DETAILS_SUCCESS,ORDER_DETAILS_FAIL,
         ORDER_DELETE_FAIL,ORDER_DELETE_REQUEST,ORDER_DELETE_SUCCESS,
         ORDER_LOG_DELETE_REQUEST,ORDER_LOG_DELETE_SUCCESS,ORDER_LOG_DELETE_FAIL,
         ORDER_LOG_REQUEST,ORDER_LOG_FAIL,ORDER_LOG_SUCCESS,
         ORDER_GD_STATUS_FAIL,ORDER_GD_STATUS_REQUEST,ORDER_GD_STATUS_SUCCESS,
         ORDER_QUANTITY_UPDATE_FAIL,ORDER_QUANTITY_UPDATE_SUCCESS,ORDER_QUANTITY_UPDATE_REQUEST,
        
        } from '../constants/orderConstants';
   import {toast} from 'react-toastify';


import { CART_EMPTY } from '../constants/cartConstants';
export const createOrder = (order) => async (dispatch) => {
  const userInfo=localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null

    dispatch({ type: ORDER_CREATE_REQUEST, payload: order });
    console.log('order', order)
    try {
    
      const { data } = await Axios.post('https://printing-service.onrender.com/api/order/add', order,
      {     headers: {
        Authorization: "Bearer " + userInfo.token
    }
   });
       
      dispatch({ type: ORDER_CREATE_SUCCESS, payload: data.order });
      dispatch({ type: CART_EMPTY });
      localStorage.removeItem('cartItems');
    } catch (error) {
      dispatch({
        type: ORDER_CREATE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

  export const deleteOrder=(id)=> async(dispatch,getState)=> {

    const userInfo=localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null

    // const {userSignin: { userInfo }, } = getState();
    const {orderlist: { orders }, } = getState();
  

   dispatch({type:ORDER_DELETE_REQUEST})
     
    try {
     
      
      const { data } = await Axios.delete(`https://printing-service.onrender.com/api/order/delete/${id}`, 
        { headers: {
        Authorization: "Bearer " + userInfo.token
    }
   });
        dispatch({type:ORDER_DELETE_SUCCESS,payload: orders.filter((order) => order._id !== id)})
        toast.success('Order Deleted Sussefully')

    } catch (error) {
      dispatch({type:ORDER_DELETE_FAIL,payload:error.response && error.response.data.message ?
        error.response.data.message:error.message})
        let errorMessage=error.response && error.response.data.message ?
        error.response.data.message:error.message
        toast.error(errorMessage)
    }

  }


  export const updateOrder=(status)=> async (dispach)=>{
    const userInfo=localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null

   dispach({type:ORDER_UPDATE_REQUEST,payload:status})           
      try {
         const {data}=await Axios.put(`https://printing-service.onrender.com/api/order/${status._id}/updatestatus`,status, {headers: {
          Authorization: "Bearer " + userInfo.token
      }
     })
         dispach({ type: ORDER_UPDATE_SUCCESS, payload: data });
        
      } catch (error) {
        dispach({
          type: ORDER_UPDATE_FAIL,
          payload:
            error.response && error.response.data.message
              ? error.response.data.message
              : error.message,
        });
      }
  }

  export const assignOrder=(status)=> async (dispach)=>{
    const userInfo=localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null

    dispach({type:ORDER_UPDATE_REQUEST,payload:status})           
       try {
          const {data}=await Axios.put(`https://printing-service.onrender.com/api/order/${status._id}/assignrole`,status, 
          {headers: {
            Authorization: "Bearer " + userInfo.token
        }
       })
          dispach({ type: ORDER_UPDATE_SUCCESS, payload: data });
          toast.success('Employee Assigned Sussefully')


         
       } catch (error) {
         dispach({
           type: ORDER_UPDATE_FAIL,
           payload:
             error.response && error.response.data.message
               ? error.response.data.message
               : error.message,
         });
         let errorMessage=error.response && error.response.data.message ?
         error.response.data.message:error.message
         toast.error(errorMessage)
       }
   }





  export const updateOrderQuantity=(status)=> async (dispach)=>{
    const userInfo=localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null

    
    dispach({type:ORDER_QUANTITY_UPDATE_REQUEST,payload:status})           
       try {
          const {data}=await Axios.put(`https://printing-service.onrender.com/api/order/${status._id}/updatestatus`,status, 
          {headers: {
            Authorization: "Bearer " + userInfo.token
        }
       })
          console.log('I am from data',data)
          dispach({ type: ORDER_QUANTITY_UPDATE_SUCCESS, payload: data });
         
       } catch (error) {
         dispach({
           type: ORDER_QUANTITY_UPDATE_FAIL,
           payload:
             error.response && error.response.data.message
               ? error.response.data.message
               : error.message,
         });
       }
   }
 




  export const updateGdStatus=(status)=> async (dispach)=>{
    const userInfo=localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null

    dispach({type:ORDER_GD_STATUS_REQUEST,payload:status})           
       try {
          const {data}=await Axios.put(`https://printing-service.onrender.com/api/order/${status._id}/updatestatus`,status, 
          {headers: {
            Authorization: "Bearer " + userInfo.token
        }
       })
          dispach({ type: ORDER_GD_STATUS_SUCCESS, payload: data.order });

          toast.success('Yor Request for Aproval is sent Sussefully')

            
         
       } catch (error) {
         dispach({
           type: ORDER_GD_STATUS_FAIL,
           payload:
             error.response && error.response.data.message
               ? error.response.data.message
               : error.message,
         });

         let errorMessage=error.response && error.response.data.message ?
         error.response.data.message:error.message
         toast.error(errorMessage)
       }
   }








export const listOrder=()=>async(dispach)=> {
  const userInfo=localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null

      
  dispach({type:ORDER_LIST_REQUEST});
      
  try {
    let { data } = await Axios.get('https://printing-service.onrender.com/api/order/fetch', 
    {headers: {
      Authorization: "Bearer " + userInfo.token
  }
 });
     
    dispach({type:ORDER_LIST_SUCCESS, payload:data})
  
  }
  catch(err) {
      dispach({type:ORDER_LIST_FAIL,payload:err.response && err.response.data.message
        ? err.response.data.message
        : err.message,})
      
  }

}



export const listLogs=()=>async(dispach)=> {
  const userInfo=localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null

      
  dispach({type:ORDER_LOG_REQUEST});
      
  try {
    let { data } = await Axios.get('https://printing-service.onrender.com/api/order/fetch', 
    {headers: {
      Authorization: "Bearer " + userInfo.token
  }
 });
     
    dispach({type:ORDER_LOG_SUCCESS, payload:data})
  
  }
  catch(err) {
      dispach({type:ORDER_LOG_FAIL,payload:err.response && err.response.data.message
        ? err.response.data.message
        : err.message,})
      
  }

}

export const deleteLog=(id)=> async(dispatch,getState)=> {
  const userInfo=localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null


  
  // const {userSignin: { userInfo }, } = getState();
  const {loglis: { logs }, } = getState();


 dispatch({type:ORDER_LOG_DELETE_REQUEST})
   
  try {
   
    
    const { data } = await Axios.delete(`https://printing-service.onrender.com/api/order/delete/${id}`, 
    {headers: {
      Authorization: "Bearer " + userInfo.token
  }
 }
 );
      dispatch({type:ORDER_LOG_DELETE_FAIL,payload: logs.filter((log) => log._id !== id)})
  } catch (error) {
    dispatch({type:ORDER_LOG_DELETE_SUCCESS,payload:error.response && error.response.data.message ?
      error.response.data.message:error.message})
  }

}



  
export const detailsOrder = (orderId) => async (dispatch, getState) => {
  const userInfo=localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null

  dispatch({ type: ORDER_DETAILS_REQUEST, payload: orderId });

  try {
    const { data } = await Axios.get(`https://printing-service.onrender.com/api/order/fetch/${orderId}`, 
    {headers: {
      Authorization: "Bearer " + userInfo.token
  }
 });
    console.log('data obne',data)
    dispatch({ type: ORDER_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: ORDER_DETAILS_FAIL, payload: message });
  }
};