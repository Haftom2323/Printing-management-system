import { PRODUCT_DETAILS_FAIL, PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS, PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,PRODUCT_CREATE_REQUEST,PRODUCT_CREATE_FAIL,
  PRODUCT_CREATE_SUCCESS,PRODUCT_UPDATE_REQUEST,PRODUCT_UPDATE_SUCCESS,
  PRODUCT_UPDATE_FAIL,PRODUCT_DELETE_REQUEST,PRODUCT_DELETE_FAIL,PRODUCT_DELETE_SUCCESS,
} from "../constants/productConstants";
 export const productReducer = (state={}, action) => {
   
    switch (action.type) {
      case PRODUCT_CREATE_REQUEST :
        return {...state,loading:true}

      case PRODUCT_CREATE_SUCCESS:
        
                 return {...state,loading:false,error:false,success: 'Service Created Successfully'};
      case PRODUCT_CREATE_FAIL:
     
                 return {...state,loading:false, success:false,error:action.payload};
             
      
      default:
        return state;
    }
  };


  export const deleteProductReducer=(state={products:[]},action)=>
  {

    switch(action.type)
    {
      case PRODUCT_DELETE_REQUEST:
          return {...state,loading:true}
    
      case PRODUCT_DELETE_SUCCESS:
          return {...state,loading:false,failError:false, success:true,products:action.payload};
     case PRODUCT_DELETE_FAIL:
            return {...state,loading:false,failError:true,success:false, error:action.payload};  
      default:
          return state;         

}


  }






  export const productListReducer=(state={products:[]},action)=>
  {
   switch(action.type)
    {
      case PRODUCT_LIST_REQUEST:
        console.log('r7')
               return {...state,loading:true}
      case PRODUCT_LIST_SUCCESS:
        console.log('r8')
               return {...state,mmm:'viva',loading:false,products:action.payload};
      case PRODUCT_LIST_FAIL:
        console.log('r9')
               return {...state,loading:false, error:action.payload};
      default:
          return state;         

    }
    
}

export const productDetailsReducer=(state={product:{}, loading:true},action)=>
          {
           switch(action.type)
             {
                case PRODUCT_DETAILS_REQUEST:
                   return {loading:true}
                case  PRODUCT_DETAILS_SUCCESS:
                  return {loading:false, product:action.payload}

                case PRODUCT_DETAILS_FAIL:
                   return {loading:false,error:action.payload}
                default:
                  return state;

             }



          };


          export const productUpdateReducer = (state = {}, action) => {
            switch (action.type) {
              case PRODUCT_UPDATE_REQUEST:
                return { loading: true };
              case PRODUCT_UPDATE_SUCCESS:
                return { loading: false, success: 'Service Updated Successfully' };
              case PRODUCT_UPDATE_FAIL:
                return { loading: false, error: action.payload };
              default:
                return state;
            }
          };   