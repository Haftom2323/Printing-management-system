import {
    JOBTITLE_CREAT_REQUESTE ,
    JOB_CREATE_SUCCESS,
    JOB_CREATE_FAIL,
    JOB_LIST_FAIL,
    JOB_LIST_SUCCESS,
    JOB_LIST_REQUEST,
    JOB_DETAIL_REQUEST,
    JOB_DETAIL_FAIL,
    JOB_DETAIL_SUCCESS,
    JOB_UPDATE_REQUEST,
    JOB_UPDATE_SUCCESS,
    JOB_UPDATE_FAIL,
    JOB_DELETE_REQUEST,
    JOB_DELETE_SUCCESS,
    JOB_DELETE_FAIL,
}  from '../constants/jobTitleConstatnts';
  const initialState= {
      loading:''
  };
  
  export const JobTitleReducer = (state = initialState, action) => {
   
    switch (action.type) {
       case JOBTITLE_CREAT_REQUESTE :
             return {...state,loading:true}

        case JOB_CREATE_SUCCESS:
        
                 return {...state,loading:false,error:false,success: 'Job Title Created Succesfully'};
        case JOB_CREATE_FAIL:
    
                 return {...state,loading:false, success:false,error:action.payload};
       
      default:
        return state;
    }
  };
  export const deleterJobTitleReducer=(state={jobTitles:[]},action)=>
    {

      switch(action.type)
      {
        case JOB_DELETE_REQUEST:
          return {...state,loading:true}
      
    case JOB_DELETE_SUCCESS:
          return {...state,loading:false,failError:false, success:true,jobTitles:action.payload};
    case JOB_DELETE_FAIL:
          return {...state,loading:false,failError:true, error:action.payload};  
        default:
            return state;         

}


    }
  export const jobTitleListReducer=(state={jobTitles:[]},action)=>
  {
        switch(action.type)
          {
            case JOB_LIST_REQUEST:
              return {...state,loading:true}
          
        case JOB_LIST_SUCCESS:
              return {...state,loading:false,error:false,jobTitles:action.payload};
        case JOB_LIST_FAIL:
              return {...state,loading:false, error:action.payload};  
            default:
                return state;         

    }
  }

  export const jobTitleDetailsReducer=(state={job:{}, loading:true},action)=>
          {
           switch(action.type)
             {
                case JOB_DETAIL_REQUEST:
                   return {loading:true}
                case JOB_DETAIL_SUCCESS:
                  return {loading:false, job:action.payload}

                case JOB_DETAIL_FAIL:
                   return {loading:false,error:action.payload}
                default:
                  return state;

             }


          };
    export const jobTitleUpdateReducer = (state = {}, action) => {
            switch (action.type) {
              case JOB_UPDATE_REQUEST:
                return { loading: true };
              case JOB_UPDATE_SUCCESS:
                return { loading: false, success: 'Job Title Updated Successfully' };
              case JOB_UPDATE_FAIL:
                return { loading: false, error: action.payload };
              default:
                return state;
            }
          };