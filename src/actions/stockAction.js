import Axios from 'axios';
import {
  PRODUCT_CREATE_REQUEST,
  PRODUCT_CREATE_FAIL,
  PRODUCT_CREATE_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
  PRODUCT_UPDATE_REQUEST,
  PRODUCT_UPDATE_SUCCESS,
  PRODUCT_UPDATE_FAIL,
  PRODUCT_DELETE_REQUEST,PRODUCT_DELETE_FAIL,PRODUCT_DELETE_SUCCESS,
}  from '../constants/productConstants';
import {toast} from 'react-toastify';

 export const createProduct= (code,quantity,unitPrice,description,measurement,serviceType) => async (dispach)=>{
  const userInfo=localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null

      dispach({type:PRODUCT_CREATE_REQUEST ,payload: {code,quantity,unitPrice,description,measurement,serviceType}});
    
      try {
        const { data } = await Axios.post('https://printing-service.onrender.com/api/product/add', {code,quantity,unitPrice,description,measurement,serviceType},
        {     headers: {
          Authorization: "Bearer " + userInfo.token
      }
     })
          dispach({type:PRODUCT_CREATE_SUCCESS, payload:data})
      
      }
      catch(error) {
          
        dispach({type:PRODUCT_CREATE_FAIL,payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,})
      }
  };
  export const listProducts= () => async (dispach)=>{
   
    const userInfo=localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null

      dispach({type:PRODUCT_LIST_REQUEST});
  
      try {
          const {data}= await Axios.get('https://printing-service.onrender.com/api/product/getall', 
          {headers: {
            Authorization: "Bearer " + userInfo.token
        }
       })
    
          dispach({type:PRODUCT_LIST_SUCCESS, payload:data})
        
      }
      catch(error) {
          dispach({type:PRODUCT_LIST_FAIL,payload:
            error.response && error.response.data.message
              ? error.response.data.message
              : error.message,})
      
      }
  };

  
  export const detailsProduct=(productId)=>async (dispactch)=>
        {

          const userInfo=localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null

       
         dispactch({type:PRODUCT_DETAILS_REQUEST,payload:productId}) ;
         console.log({payload:productId})
          try
            {
              
        
         const { data } = await Axios.get(`https://printing-service.onrender.com/api/product/getone/${productId}`, 
         {headers: {
          Authorization: "Bearer " + userInfo.token
      }
     });
         
         dispactch({type:PRODUCT_DETAILS_SUCCESS,payload:data})

            }     
          catch(error)
          {
             dispactch({type:PRODUCT_DETAILS_FAIL,payload:error.response && error.response.data.message ?
              error.response.data.message:error.message
            });

          }
      }

      export const deleteProduct=(id)=> async(dispatch,getState)=> {

        const userInfo=localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null

        // const {userSignin: { userInfo }, } = getState();
        const { productlist: { products }, } = getState();
      
    
       dispatch({type:PRODUCT_DELETE_REQUEST})
        try {
         
          
          const { data } = await Axios.delete(`https://printing-service.onrender.com/api/product/delete/${id}`,
              {headers: {
            Authorization: "Bearer " + userInfo.token
        }
       });
            dispatch({type:PRODUCT_DELETE_SUCCESS,payload: products.filter((product) => product._id !== id)})
            toast.success('Service Deleted Sussefully')

        } catch (error) {
          dispatch({type:PRODUCT_DELETE_FAIL,payload:error.response && error.response.data.message ?
            error.response.data.message:error.message})
            let errorMessage=error.response && error.response.data.message ?
            error.response.data.message:error.message
            toast.error(errorMessage)
        }
    
      }

      export const updateProduct = (product) => async (dispatch, getState) => {
        const userInfo=localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null

        dispatch({ type: PRODUCT_UPDATE_REQUEST, payload: product });
        // const {
        //   userSignin: { userInfo },
        // } = getState();
        try {
          
          const data  = await Axios.put(`https://printing-service.onrender.com/api/product/update/${product._id}`,product,
          {     headers: {
            Authorization: "Bearer " + userInfo.token
        }
       }
          );
          console.log('service data',data)
   
          dispatch({ type: PRODUCT_UPDATE_SUCCESS, payload: data });
        } catch (error) {
          console.log('error from store',error)
          const message =
            error.response && error.response.data.message
              ? error.response.data.message
              : error.message;
          dispatch({ type: PRODUCT_UPDATE_FAIL, payload: message });
        }
      };
  