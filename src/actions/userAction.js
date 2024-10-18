import Axios from 'axios';
import {
 
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_SIGNIN_FAIL,
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_SIGNOUT,CHANGE_PASSWORD_FAIL,
  CHANGE_PASSWORD_SUCCESS,CHANGE_PASSWORD_REQUEST,
  CHANGE_PROFILE_REQUEST,CHANGE_PROFILE_SUCCESS,
  CHANGE_PROFILE_FAIL,RESET_EMAIL_FAIL,RESET_EMAIL_REQUEST,
  RESET_EMAIL_SUCCESS,RESET_PASSWORD_FAIL,RESET_PASSWORD_SUCCESS,RESET_PASSWORD_REQUEST,
  

} from '../constants/userConstants';
export const register = (user) => async (dispatch) => {
  const userInfo=localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null

  dispatch({ type: USER_REGISTER_REQUEST, payload: user });
  try {
    const { data } = await Axios.post('https://printing-service.onrender.com/api/user/add', user, 
    {     headers: {
      Authorization: "Bearer " + userInfo.token
  }
 },
    {
      headers: {
       
          'Content-Type': 'multipart/form-data'
      }
    });
    dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
    dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
    localStorage.setItem('userInfo', JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const changePassword = (cData) => async (dispatch) => {
    
  const userInfo=localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null

  dispatch({ type: CHANGE_PASSWORD_REQUEST, payload: cData });
  
  try {
    const { data } = await Axios.put('https://printing-service.onrender.com/api/employee/change-password', cData, 
    {headers: {
      Authorization: "Bearer " + userInfo.token
  }
 });
   dispatch({ type: CHANGE_PASSWORD_SUCCESS, payload: data });
    
  } catch (error) {
    dispatch({
      type: CHANGE_PASSWORD_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};


export const changeProfile = (cData) => async (dispatch) => {
  const userInfo=localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null
  
  dispatch({ type: CHANGE_PROFILE_REQUEST, payload: cData });

  
  try {
    const { data } = await Axios.put('https://printing-service.onrender.com/api/employee/change-profile', cData,
       
    {     headers: {
      Authorization: "Bearer " + userInfo.token
  }
 },
    {
       headers: {
       
      'Content-Type': 'multipart/form-data'
  }});
   dispatch({ type: CHANGE_PROFILE_SUCCESS, payload: data });
    
  } catch (error) {
    dispatch({
      type: CHANGE_PROFILE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};


export const resetEmail = (email) => async (dispatch) => {
  dispatch({ type: RESET_EMAIL_REQUEST, payload: { email } });
  try {
    const { data } = await Axios.post('https://printing-service.onrender.com/api/employee/forgot-password', {email});
   dispatch({ type: RESET_EMAIL_SUCCESS, payload: data });
    
  } catch (error) {
    dispatch({
      type: RESET_EMAIL_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};


export const resetPassword = (activationToken,password) => async (dispatch) => {

  dispatch({ type: RESET_PASSWORD_REQUEST, payload: {activationToken,password } });
  try {
    const { data } = await Axios.post('https://printing-service.onrender.com/api/employee/reset-password', {activationToken,password});
   dispatch({ type: RESET_PASSWORD_SUCCESS, payload: data });
    
  } catch (error) {
    dispatch({
      type: RESET_PASSWORD_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};




















export const signin = (username, password) => async (dispatch) => {
  console.log('user name nnnnnnnnnn',username,password)
  dispatch({ type: USER_SIGNIN_REQUEST, payload: { username, password } });
  try {
    const { data } = await Axios.post('https://printing-service.onrender.com/api/employee/login', { username, password });
    localStorage.setItem('userInfo', JSON.stringify(data));
   dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
    console.log('cccccccccc',data)
    
  } catch (error) {
    dispatch({
      type: USER_SIGNIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const signout = () => (dispatch) => {
    localStorage.removeItem('userInfo');
    
    dispatch({ type: USER_SIGNOUT });
     document.location.href = '/';
  };


