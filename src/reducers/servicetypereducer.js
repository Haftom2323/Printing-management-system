import { SERVICE_TYPE_CREATE_REQUEST,SERVICE_TYPE_CREATE_SUCCESS,SERVICE_TYPE_CREATE_FAIL,
  SERVICE_TYPE_LIST_REQUEST,SERVICE_LIST_SUCCESS,SERVICE_TYPE_LIST_FAIL, SERVICE_TYPE_DETAIL_REQUEST, 
  SERVICE_TYPE_DETAIL_SUCCESS,SERVICE_TYPE_DETAIL_FAIL,
  SERVICE_UPDATE_FAIL,
  SERVICE_UPDATE_SUCCESS,
  SERVICE_DELETE_REQUEST,
  SERVICE_DELETE_SUCCESS,
  SERVICE_DELETE_FAIL,
  SERVICE_UPDATE_REQUEST,

} from '../constants/serviceTypeConstants';

   
  export const createServiceTypeReducer = (state={}, action) => {
   
    switch (action.type) {
      case SERVICE_TYPE_CREATE_REQUEST:
        return {...state,loading:true}

        case SERVICE_TYPE_CREATE_SUCCESS:
             
                 return {...state,loading:false,error:false,success: 'Service Type Created Succesfully'};
        case SERVICE_TYPE_CREATE_FAIL:
    
                 return {...state,loading:false, success:false,error:action.payload};
             
      
      default:
        return state;
    }
  };

  export const deleteServiceTypeReducer=(state={serviceTypes:[]},action)=>
  {

    switch(action.type)
    {
      case SERVICE_DELETE_REQUEST:
        return {...state,loading:true}
    
  case SERVICE_DELETE_SUCCESS:
        return {...state,loading:false, failError:false,error:false,success:true, serviceTypes:action.payload};
  case SERVICE_DELETE_FAIL:
        return {...state,loading:false,failError:true, success:false,error:action.payload};  
      default:
          return state;         

}


  }

  export const listServiceTypeReducer=(state={serviceTypes:[]},action)=>
  { 
    

        switch(action.type)
          {
        case SERVICE_TYPE_LIST_REQUEST:
              return {...state,loading:true}
            
              case SERVICE_LIST_SUCCESS:
                
              return {...state,loading:false,error:false,serviceTypes:action.payload};

        case SERVICE_TYPE_LIST_FAIL:
             
              return {...state,loading:false,error:action.payload};  
            default:
                return state;         

    }
  }


  export const serviceDetailsReducer=(state={service:{}, loading:true},action)=>
          {
           switch(action.type)
             {
                case SERVICE_TYPE_DETAIL_REQUEST:
                   return {loading:true}
                case SERVICE_TYPE_DETAIL_SUCCESS:
                    
                  return {loading:false, service:action.payload}

                case SERVICE_TYPE_DETAIL_FAIL:
                  console.log('can not reach this')
                   return {loading:false,error:action.payload}
                default:
                  return state;

             }


          };



  export const serviceTypeUpdateReducer = (state = {}, action) => {
            switch (action.type) {
              case SERVICE_UPDATE_REQUEST:
                return { loading: true };
              case SERVICE_UPDATE_SUCCESS:
                return { loading: false, success: 'Service Type  Updated Successfully' };
              case SERVICE_UPDATE_FAIL:
                return { loading: false, error: action.payload };
              default:
                return state;
            }
          };     