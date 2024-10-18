 import { ORDER_CREATE_REQUEST, ORDER_CREATE_SUCCESS,ORDER_CREATE_FAIL,
          ORDER_LIST_REQUEST,ORDER_LIST_SUCCESS,ORDER_LIST_FAIL,
          ORDER_DETAILS_REQUEST,ORDER_DETAILS_SUCCESS,ORDER_DETAILS_FAIL,
          ORDER_DELETE_FAIL,ORDER_DELETE_REQUEST,ORDER_DELETE_SUCCESS,
          ORDER_UPDATE_REQUEST,ORDER_UPDATE_FAIL,ORDER_UPDATE_SUCCESS,
          ORDER_LOG_DELETE_REQUEST,ORDER_LOG_DELETE_SUCCESS,ORDER_LOG_DELETE_FAIL,
          ORDER_LOG_REQUEST,ORDER_LOG_FAIL,ORDER_LOG_SUCCESS,
          ORDER_GD_STATUS_FAIL,ORDER_GD_STATUS_REQUEST,ORDER_GD_STATUS_SUCCESS,
          ORDER_QUANTITY_UPDATE_FAIL,ORDER_QUANTITY_UPDATE_SUCCESS,ORDER_QUANTITY_UPDATE_REQUEST,
        } from "../constants/orderConstants";
  const initialState= {
      loading:''
  };
  
  export const orderCreatteReducer = (state = initialState, action) => {
   
    switch (action.type) {
       case ORDER_CREATE_REQUEST :
             return {...state,loading:true}

        case ORDER_CREATE_SUCCESS:
        
                 return {...state,loading:false,error:false,success: 'Ordered  Succesfully'};
        case ORDER_CREATE_FAIL:
    
                 return {...state,loading:false, success:false,error:action.payload};
       
      default:
        return state;
    }
  };
  export const orderListReducer=(state={orders:[]},action)=>
  {
        switch(action.type)
          {
            case ORDER_LIST_REQUEST:
              return {...state,loading:true}
          
            case ORDER_LIST_SUCCESS:
                return {...state,loading:false,orders:action.payload};
            case ORDER_LIST_FAIL:
                return {...state,loading:false, error:action.payload};  
                default:
                    return state;         

    }
  }


  export const orderLogListReducer=(state={logs:[]},action)=>
  {
        switch(action.type)
          {
            case ORDER_LOG_REQUEST:
              return {...state,loading:true}
          
            case ORDER_LOG_SUCCESS:
                return {...state,loading:false,logs:action.payload};
            case ORDER_LOG_FAIL:
                return {...state,loading:false, error:action.payload};  
                default:
                    return state;         

    }
  }



  export const deleteOrderrReducer=(state={orders:[]},action)=>
    {

      switch(action.type)
      {
        case ORDER_DELETE_REQUEST:
          return {...state,loading:true}
      
    case ORDER_DELETE_SUCCESS:
          return {...state,loading:false,failError:false,error:false,success:true,orders:action.payload};
    case ORDER_DELETE_FAIL:
          return {...state,loading:false,failError:true, error:action.payload};  
        default:
            return state;         

}


    }


    export const deleteOrderLogReducer=(state={logs:[]},action)=>
    {

      switch(action.type)
      {
        case ORDER_LOG_DELETE_REQUEST:
          return {...state,loading:true}
      
    case ORDER_LOG_DELETE_SUCCESS:
          return {...state,loading:false, success:'Deleted Successfully',logs:action.payload};
    case ORDER_LOG_DELETE_FAIL:
          return {...state,loading:false, error:action.payload};  
        default:
            return state;         

}


    }







    export const updateOrderrReducer=(state={orders:[]},action)=>
    {

      switch(action.type)
      {
        case ORDER_UPDATE_REQUEST:
          return {...state,loading:true}
      
    case ORDER_UPDATE_SUCCESS:
          return {...state,loading:false, error:false, success:'Updated Successfully',orders:action.payload};
    case ORDER_UPDATE_FAIL:
          return {...state,loading:false, error:action.payload};  
        default:
            return state;         

}


    }


    export const updateOrderGdStatusReducer=(state={loading:''},action)=>
    {

      switch(action.type)
      {
        case ORDER_GD_STATUS_REQUEST:
          return {...state,loading:true,success:false}
      
    case ORDER_GD_STATUS_SUCCESS:
          return {...state,loading:false, success:true,order:action.payload};
    case ORDER_GD_STATUS_FAIL:
          return {...state,loading:false, error:action.payload};  
        default:
            return state;         

}


    }



    export const orderUpdateQuantityReducer = (state = { loading: '' }, action) => {
      switch (action.type) {
        case ORDER_QUANTITY_UPDATE_REQUEST:
          return { loading: true };
        case ORDER_QUANTITY_UPDATE_SUCCESS:
          return { loading: false, error:false,success:'updated Successfully',order: action.payload };
        case ORDER_QUANTITY_UPDATE_FAIL:
          return { loading: false, error: action.payload };
        default:
          return state;
      }
    };






   

  export const orderDetailsReducer = (state = { loading: true }, action) => {
    switch (action.type) {
      case ORDER_DETAILS_REQUEST:
        return { loading: true };
      case ORDER_DETAILS_SUCCESS:
        return { loading: false, order: action.payload };
      case ORDER_DETAILS_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
  
  