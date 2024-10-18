import { CUSTOMER_CREATE_REQUEST,CUSTOMER_LIST_REQUEST,
  CUSTOMER_LIST_SUCCESS,CUSTOMER_LIST_FAIL, CUSTOMER_CREATE_SUCCESS,
  CUSTOMER_CREATE_FAIL,CUSTOMER_DETAILS_REQUEST,CUSTOMER_DETAILS_SUCCESS,
  CUSTOMER_DETAILS_FAIL,CUSTOMER_UPDATE_REQUEST,CUSTOMER_UPDATE_FAIL, CUSTOMER_UPDATE_SUCCSESS,
  PRODUCT_UPDATE_RESET,CUSTOMER_DELETE_REQUEST,CUSTOMER_DELETE_FAIL,CUSTOMER_DELETE_SUCCESS,
      

} from "../constants/customerConstants";
   
  const initialState= {
    loading:''
};
  export const customerReducer = (state=initialState, action) => {
   
    switch (action.type) {
      case CUSTOMER_CREATE_REQUEST :
        return {...state,loading:true}

   case CUSTOMER_CREATE_SUCCESS:
   
            return {...state,loading:false,error:false,clear:true,success: 'Customer Created Successfully'};
   case CUSTOMER_CREATE_FAIL:

            return {...state,loading:false, success:false,error:action.payload};
  
 default:
   return state;
    }
    }


  export const customerListReducer=(state={customers:[]},action)=>
  {
        switch(action.type)
          {
            case CUSTOMER_LIST_REQUEST:
              return {...state,loading:true}
          
        case CUSTOMER_LIST_SUCCESS:
              return {...state,loading:false,error:false,customers:action.payload};
        case CUSTOMER_LIST_FAIL:
              return {...state,loading:false, error:action.payload};  
            default:
                return state;         

    }
    
}
export const customerUpdateReducer=(state={customers:[]},action)=>
   {
       

       switch(action.type) {
         
          case CUSTOMER_UPDATE_REQUEST:
            console.log('action type',action.type)
              return {...state,loading:true,loadingUpdate:true}
           case CUSTOMER_UPDATE_SUCCSESS:
            console.log('action type',action.type)
             return {...state,loading:false,loadingUpdate:false,success:'Customer Updated successfully'}  
            case CUSTOMER_UPDATE_FAIL:
               return {...state,loading:false,loadingUpdate:false,error:action.payload} 
               case PRODUCT_UPDATE_RESET:
                return {};   
            default:
              return state   
       }

   }
  

   export const deleteCustomerReducer=(state={customers:[]},action)=>
    {

      switch(action.type)
      {
        case CUSTOMER_DELETE_REQUEST:
          return {...state,loading:true}
      
    case CUSTOMER_DELETE_SUCCESS:
     
          return {...state,loading:false,failError:false,error:false,success:true,customers:action.payload};
    case CUSTOMER_DELETE_FAIL:
          return {...state,loading:false,failError:true,success:false,error:action.payload};  
        default:
            return state;         

}


    }





export const customerDetailsReducer=(state={customer:{}, loading:true},action)=>
          {
           switch(action.type)
             {
                case CUSTOMER_DETAILS_REQUEST:
                   return {loading:true}
                case  CUSTOMER_DETAILS_SUCCESS:
                  return {loading:false, customer:action.payload}

                case CUSTOMER_DETAILS_FAIL:
                   return {loading:false,error:action.payload}
                default:
                  return state;

             }


          };


 




  
  