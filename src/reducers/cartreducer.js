import {
    CART_ADD_ITEM, CART_EMPTY, 
    CART_REMOVE_ITEM, 
    CART_SAVE_SHIPPING_ADDRESS,
    
    
  } from '../constants/cartConstants';
  const initialState= {
      cartItems:[],
  };
  
  export const cartReducer = (state = initialState, action) => {
   
    switch (action.type) {
      case CART_ADD_ITEM:
        console.log('the state at firstm is',action.payload);
       
        const item = action.payload;
      
          return { ...state, error: '', cartItems: action.payload };

        
        case CART_REMOVE_ITEM:
        return {
          ...state,
          error: '',
          cartItems: {},
        };
        case CART_SAVE_SHIPPING_ADDRESS:
            return {
              ...state,customerAddress:action.payload
            };
      
        case CART_EMPTY:
                return { ...state, error: '', cartItems: {} };          
      
      default:
        return state;
    }
  };
  