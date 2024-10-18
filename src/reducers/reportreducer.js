import { REPORT_CREATE_REQUEST,REPORT_CREATE_SUCCESS,
    REPORT_CREATE_FAIL,REPORT_LIST_SUCCESS, } from "../constants/printingConstants";

    export const reportListReducer=(state={reports:[]},action)=>
  {
        switch(action.type)
          {
         case REPORT_CREATE_REQUEST:
              return {...state,loading:true}
         case REPORT_LIST_SUCCESS:
          return {...state,loading:false, reports:action.payload};  
        case REPORT_CREATE_SUCCESS:
             console.log('entered to store siccess')
              return {...state,loading:false,reports:action.payload};
        case REPORT_CREATE_FAIL:
              return {...state,loading:false, error:action.payload};  
            default:
                return state;         

    }
    
}