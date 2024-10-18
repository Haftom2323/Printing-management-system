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
  
   export const userRegisterReducer = (state = {}, action) => {
     switch (action.type) {
       case USER_REGISTER_REQUEST:
         return { loading: true };
       case USER_REGISTER_SUCCESS:
         return { loading: false,success:'User Created Successfully', userInfo: action.payload };
       case USER_REGISTER_FAIL:
         return { loading: false, error: action.payload };
       default:
         return state;
     }
   };
 
   export const resetEmailReducer = (state = {}, action) => {
    switch (action.type) {
      case RESET_EMAIL_REQUEST:
        return { loading: true };
      case RESET_EMAIL_SUCCESS:
        return { loading: false,success:'Link is Successfully sent to your Email', userInfo: action.payload };
      case RESET_EMAIL_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };

  export const resetPasswordReducer = (state = {}, action) => {
    switch (action.type) {
      case RESET_PASSWORD_REQUEST:
        return { loading: true,error:'',success:'' };
      case RESET_PASSWORD_SUCCESS:
        return { loading: false,success:true };
      case RESET_PASSWORD_FAIL:
        return { loading: false,success:false ,error: action.payload };
      default:
        return state;
    }
  };














   export const changePasswordReducer = (state = {}, action) => {
    switch (action.type) {
      case CHANGE_PASSWORD_REQUEST:
        return { loading: true };
      case CHANGE_PASSWORD_SUCCESS:
        return { loading: false,success:'Password Changed Successfully', changeInfo: action.payload };
      case CHANGE_PASSWORD_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };

  export const changeProfileReducer = (state = {}, action) => {
    switch (action.type) {
      case CHANGE_PROFILE_REQUEST:
        return { loading: true };
      case CHANGE_PROFILE_SUCCESS:
        return { loading: false,success:'Profile changed Successfully', changeInfo: action.payload };
      case CHANGE_PROFILE_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };



   export const userSigninReducer = (state = {}, action) => {
     switch (action.type) {
       case USER_SIGNIN_REQUEST:
         return { loading: true };
       case USER_SIGNIN_SUCCESS:
         return { loading: false, userInfo: action.payload };
       case USER_SIGNIN_FAIL:
         return { loading: false, error: action.payload };
       case USER_SIGNOUT:
         return {};
       default:
         return state;
     }
   };
  