// import Axios from 'axios';
import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,

  CART_SAVE_SHIPPING_ADDRESS

} from '../constants/cartConstants';



  export const addToCart = (itemData) => async (dispatch, getState) => {
     console.log('item',itemData)

    dispatch({type: CART_ADD_ITEM,payload:itemData});
    
      
    localStorage.setItem( 'cartItems',JSON.stringify(getState().cart.cartItems))
    };
  // };

  export const removeFromCart = () => (dispatch, getState) => {
    dispatch({ type: CART_REMOVE_ITEM, payload: {} });
    localStorage.setItem( 'cartItems',JSON.stringify(getState().cart.cartItems))
  };
  export const saveShippingAddress=(data)=>(dispatch)=> {
    dispatch({type:CART_SAVE_SHIPPING_ADDRESS,payload:data});
    localStorage.setItem('shippingAddress',JSON.stringify(data));

 }
