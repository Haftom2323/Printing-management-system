import { EMPLOYEE_CREAT_REQUESTE,
         EMPLOYEE_CREATE_SUCCESS,
         EMPLOYEE_CREATE_FAIL,
         EMPLOYEE_LIST_REQUEST,
         EMPLOYEE_LIST_SUCCESS,
         EMPLOYEE_LIST_FAIL,
         EMPLOYEE_DETAIL_FAIL,
         EMPLOYEE_DETAIL_REQUEST,
         EMPLOYEE_DETAIL_SUCCESS,
         EMPLOYEE_DELETE_FAIL,
         EMPLOYEE_DELETE_SUCCESS,
         EMPLOYEE_DELETE_REQUEST,
         UPDATE_EMPLOYEE_SUCCESS,
         UPDATE_EMPLOYEE_REQUEST,
         UPDATE_EMPLOYEE_FAIL,


} from "../constants/employeeConstants";
 
 
  
  export const employeeReducer = (state={}, action) => {
   
    switch (action.type) {
      case EMPLOYEE_CREAT_REQUESTE :
        return {...state,loading:true}

   case EMPLOYEE_CREATE_SUCCESS:
   
            return {...state,loading:false,error:false,success: 'Employee Created Successfully'};
   case EMPLOYEE_CREATE_FAIL:

            return {...state,loading:false, success:false,error:action.payload};
  
 default:
   return state;
    }
  };
  
  export const deleteEmployeeReducer=(state={employees:[]},action)=>
  {

    switch(action.type)
    {
      case EMPLOYEE_DELETE_REQUEST:
        return {...state,loading:true}
    
  case EMPLOYEE_DELETE_SUCCESS:
        return {...state,loading:false,error:false, failError:false,success:true,employees:action.payload};
  case EMPLOYEE_DELETE_FAIL:
        return {...state,loading:false,failError:true,success:false,error:action.payload};  
      default:
          return state;         

}


  }


  export const listEmployeeReducer=(state={employees:[]},action)=>
  {
        switch(action.type)
          {
            case EMPLOYEE_LIST_REQUEST:
              return {...state,loading:true}
          
        case EMPLOYEE_LIST_SUCCESS:
              return {...state,loading:false,error:false,employees:action.payload};
        case EMPLOYEE_LIST_FAIL:
              return {...state,loading:false, error:action.payload};  
            default:
                return state;         

    }
  }
  
  export const employeeDetailsReducer=(state={employee:{}, loading:true},action)=>
          {
           switch(action.type)
             {
                case EMPLOYEE_DETAIL_REQUEST:
                   return {loading:true}
                case EMPLOYEE_DETAIL_SUCCESS:
                  return {loading:false, employee:action.payload}

                case EMPLOYEE_DETAIL_FAIL:
                   return {loading:false,error:action.payload}
                default:
                  return state;

             }


          };

    export const employeeUpdateReducer = (state = {}, action) => {
            switch (action.type) {
              case UPDATE_EMPLOYEE_REQUEST:
                return { loading: true };
              case UPDATE_EMPLOYEE_SUCCESS:
                return { loading: false, success: 'Employee Updated Successfully' };
              case UPDATE_EMPLOYEE_FAIL:
                return { loading: false, error: action.payload };
              default:
                return state;
            }
          };