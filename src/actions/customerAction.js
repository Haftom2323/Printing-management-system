import Axios from 'axios';
import { CUSTOMER_CREATE_REQUEST,CUSTOMER_LIST_REQUEST,CUSTOMER_CREATE_FAIL,
  CUSTOMER_LIST_SUCCESS,CUSTOMER_LIST_FAIL, CUSTOMER_CREATE_SUCCESS,
  CUSTOMER_DETAILS_REQUEST,CUSTOMER_DETAILS_FAIL, CUSTOMER_DETAILS_SUCCESS,
  CUSTOMER_UPDATE_REQUEST,CUSTOMER_UPDATE_FAIL,CUSTOMER_UPDATE_SUCCSESS,
  CUSTOMER_DELETE_REQUEST,CUSTOMER_DELETE_SUCCESS,CUSTOMER_DELETE_FAIL,


} from "../constants/customerConstants";
import {toast} from 'react-toastify';


 export const createCustomer= (firstName,lastName,password,username,phoneNumber,homeNumber,email,tinNum,address,streetAdress,companyName) => async (dispach)=>{
    
  const userInfo=localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null
    
    dispach({type:CUSTOMER_CREATE_REQUEST ,payload: {firstName,lastName,password,username,phoneNumber,homeNumber,email,tinNum,address,streetAdress,companyName}});
       try {
        const { data } = await Axios.post('https://printing-service.onrender.com/api/customer/add',
         {firstName,lastName,password,username,phoneNumber,homeNumber,email,tinNum,address,streetAdress,companyName},
           {     headers: {
                 Authorization: "Bearer " + userInfo.token
             }
            }
         )
          
        dispach({type:CUSTOMER_CREATE_SUCCESS,payload:data})
        
       } catch (err) {
        dispach({type:CUSTOMER_CREATE_FAIL,payload:err.response && err.response.data.message
          ? err.response.data.message
          : err.message,})
       }

      
  };



  export const deleteCustomer=(id)=> async(dispatch,getState)=> {

    const userInfo=localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null
  
    // const {userSignin: { userInfo }, } = getState();
    const {  customerlist: { customers }, } = getState();
  

   dispatch({type:CUSTOMER_DELETE_REQUEST})
    try {
     
      
      const { data } = await Axios.delete(`https://printing-service.onrender.com/api/customer/delete/${id}`,
        {     headers: {
        Authorization: "Bearer " + userInfo.token
          }
       }
      );
        dispatch({type:CUSTOMER_DELETE_SUCCESS,payload: customers.filter((customer) => customer._id !== id)})
        toast.success('Customer Deleted Sussefully')
    } catch (error) {

      
      dispatch({type:CUSTOMER_DELETE_FAIL,payload:error.response && error.response.data.message ?
        error.response.data.message:error.message})
        let errorMessage=error.response && error.response.data.message ?
        error.response.data.message:error.message
        toast.error(errorMessage)
    }

  }

export const listCustomerData= () => async (dispach)=>{
  const userInfo=localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null


      dispach({type:CUSTOMER_LIST_REQUEST});
    
      try {
        let { data } = await Axios.get('https://printing-service.onrender.com/api/customer/getall',
        {     headers: {
           Authorization: "Bearer " + userInfo.token
             }
     }         
        );

        console.log('6','reached this one',data)
        
          dispach({type:CUSTOMER_LIST_SUCCESS, payload:data})
      
      }
      catch(err) {
          dispach({type:CUSTOMER_LIST_FAIL,payload:err.message})
          console.log('9')
      }
  };

  
  export const detailsCustomer=(customerId)=>async (dispactch)=>

  {
    const userInfo=localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null

     dispactch({type:CUSTOMER_DETAILS_REQUEST,payload:customerId}) ;
 
      try
        {
          
    
     const { data } = await Axios.get(`https://printing-service.onrender.com/api/customer/getbyid/${customerId}`,
              {     headers: {
                Authorization: "Bearer " + userInfo.token
               }
          }
     );
     
     dispactch({type:CUSTOMER_DETAILS_SUCCESS,payload:data})

        }     
      catch(error)
      {
         dispactch({type:CUSTOMER_DETAILS_FAIL,payload:error.response && error.response.data.message ?
          error.response.data.message:error.message
        });

      }
      // return {}
  }







export const UpdateCustomer=(customerInfo)=>async(dispactch)=> {

  const userInfo=localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null

 dispactch({type:CUSTOMER_UPDATE_REQUEST,payload:customerInfo})
    try {
    const {data}=await Axios.put(`https://printing-service.onrender.com/customer/update/${customerInfo._id}`,customerInfo,
    {headers: {
      Authorization: "Bearer " + userInfo.token
     }
    }
    )
    dispactch({type:CUSTOMER_UPDATE_SUCCSESS,payload:data})


    } catch (error) {
      dispactch({type:CUSTOMER_UPDATE_FAIL,payload:error.response && error.response.data.message ?
        error.response.data.message:error.message})
    }

}


