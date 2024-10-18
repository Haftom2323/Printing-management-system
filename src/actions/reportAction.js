import Axios from "axios";
import { REPORT_CREATE_REQUEST,REPORT_CREATE_SUCCESS,REPORT_CREATE_FAIL, REPORT_LIST_SUCCESS, } from "../constants/printingConstants";
export const getReport = (parametr) => async (dispatch) => {

  const userInfo=localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null

    dispatch({ type: REPORT_CREATE_REQUEST, payload: parametr });
    try {
      const { data } = await Axios.post('https://printing-service.onrender.com/api/order/orders', parametr,
      {     headers: {
        Authorization: "Bearer " + userInfo.token
    }
   });

      dispatch({ type: REPORT_LIST_SUCCESS, payload: data });
     
    
    } catch (error) {
      dispatch({
        type: REPORT_CREATE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };