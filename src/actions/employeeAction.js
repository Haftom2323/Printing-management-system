import Axios from 'axios';
import {
    EMPLOYEE_CREATE_FAIL,
    EMPLOYEE_CREATE_SUCCESS,
    EMPLOYEE_CREAT_REQUESTE, UPDATE_EMPLOYEE_REQUEST,
    EMPLOYEE_LIST_FAIL,UPDATE_EMPLOYEE_FAIL,
    EMPLOYEE_LIST_REQUEST, UPDATE_EMPLOYEE_SUCCESS,
    EMPLOYEE_LIST_SUCCESS,EMPLOYEE_DETAIL_REQUEST,
    EMPLOYEE_DETAIL_SUCCESS,EMPLOYEE_DETAIL_FAIL,
    EMPLOYEE_DELETE_FAIL,EMPLOYEE_DELETE_REQUEST,EMPLOYEE_DELETE_SUCCESS,
}  from '../constants/employeeConstants';
import {toast} from 'react-toastify';

 export const createEmployee= (firstName,middleName,lastName,phoneNumber,email,jobTitleId,address,remark,username,password) => async (dispach)=>{
  const userInfo=localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null
  

    dispach({type:EMPLOYEE_CREAT_REQUESTE ,payload: {firstName,middleName,lastName,phoneNumber,email,jobTitleId,address,remark,username,password}});
    
      try {
        const { data } = await Axios.post('https://printing-service.onrender.com/api/employee/add', {firstName,middleName,lastName,phoneNumber,email,jobTitleId,address,remark,username,password},{headers: {
          Authorization: "Bearer " + userInfo.token
      }
     })
          dispach({type:EMPLOYEE_CREATE_SUCCESS, payload:data})
          console.log('8')
      }
      catch(err) {
          dispach({type:EMPLOYEE_CREATE_FAIL,payload:err.message})
          console.log('9')
      }
  };

  export const listEmployee= () => async (dispach)=>{
    const userInfo=localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null

  
        dispach({type:EMPLOYEE_LIST_REQUEST});
      
        try {
          let { data } = await Axios.get('https://printing-service.onrender.com/api/employee/getall', {headers: {
            Authorization: "Bearer " + userInfo.token
        }
       });
            console.log('data at store',data)
  
          dispach({type:EMPLOYEE_LIST_SUCCESS, payload:data})
        
        }
        catch(error) {
          dispach({type:EMPLOYEE_LIST_FAIL,payload:error.response && error.response.data.message ?
            error.response.data.message:error.message})
            
        }
    };


    export const updateEmployee = (employee) => async (dispatch, getState) => {
      const userInfo=localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null

      dispatch({ type: UPDATE_EMPLOYEE_REQUEST, payload: employee });
      // const {
      //   userSignin: { userInfo },
      // } = getState();
      try {
        const { data } = await Axios.put(`https://printing-service.onrender.com/api/employee/update/${employee._id}`,employee,
        {     headers: {
          Authorization: "Bearer " + userInfo.token
      }
     });
        dispatch({ type: UPDATE_EMPLOYEE_SUCCESS, payload: data });
      } catch (error) {
        console.log('error from store',error)
        const message =
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message;
        dispatch({ type: UPDATE_EMPLOYEE_FAIL, payload: message });
      }
    };







    export const detailsEmployee=(employeeId)=>async (dispactch)=>

    {
      const userInfo=localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null

       dispactch({type:EMPLOYEE_DETAIL_REQUEST,payload:employeeId}) ;
     
        try
          {
            
      
       const { data } = await Axios.get(`https://printing-service.onrender.com/api/employee/getbyid/${employeeId}`,
       {     headers: {
        Authorization: "Bearer " + userInfo.token
          }
        });
       
       dispactch({type:EMPLOYEE_DETAIL_SUCCESS,payload:data})

          }     
        catch(error)
        {
           dispactch({type:EMPLOYEE_DETAIL_FAIL,payload:error.response && error.response.data.message ?
            error.response.data.message:error.message
          });

        }
    }



    export const deleteEmployee=(id)=> async(dispatch,getState)=> {

      const userInfo=localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null
  
      // const {userSignin: { userInfo }, } = getState();
      const {  employeelist: { employees }, } = getState();
    
  
     dispatch({type:EMPLOYEE_DELETE_REQUEST})
      try {
       
        
        const { data } = await Axios.delete(`https://printing-service.onrender.com/api/employee/delete/${id}`, {headers: {
          Authorization: "Bearer " + userInfo.token
      }
     });
          dispatch({type:EMPLOYEE_DELETE_SUCCESS,payload: employees.filter((e) => e._id !== id)})
          toast.success('Employee Deleted Sussefully')

      } catch (error) {
        dispatch({type:EMPLOYEE_DELETE_FAIL,payload:error.response && error.response.data.message ?
          error.response.data.message:error.message})
          let errorMessage=error.response && error.response.data.message ?
          error.response.data.message:error.message
          toast.error(errorMessage)
      }
  
    }
    



  
