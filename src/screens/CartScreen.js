import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Sidebar from '../components/sidebar';
import Header from '../components/header';
import { removeFromCart } from '../actions/cartAction';

 const CartScreen = () => {
  
  const cart = useSelector((state) => state.cart);
   const {cartItems}=cart
   console.log('cccc',cartItems.length)

   const dispatch=useDispatch()

   const removeFromCartHandler = (id) => {
    // delete action
    dispatch(removeFromCart(id));
  };



  return (
    
    <>
    <Sidebar />
    <main className="main-wrap">
      <Header />
    
      <section className="content-main">
  <div className="content-header">
          
      <li>
              <div className="card card-body">
                <h5>Order Item</h5>
                <ul>
                   
                    <li key={cart.cartItems.uId}>
                      <div className="row">
                        <div>
                          {cart.cartItems.productName} &nbsp; &nbsp;  {cart.cartItems.quantity} x ETB&nbsp;{cart.cartItems.unitPrice} = ETB&nbsp;{cart.cartItems.quantity * cart.cartItems.unitPrice}
                        </div>
                        

                        <div>
                         
                        </div>
                      </div>
                    </li>
                 
                </ul>
              </div>
            </li>



      <div className='row'>

    <div className='col-md-4'>
    
    </div>
    <div className='col-md-4'>
      {JSON.stringify(cart.cartItems) !== '{}' && 
    <button 
                  
                  type="button" style={{cursor: "pointer"}}
                  onClick={() => removeFromCartHandler(cartItems.uId)}
                  className="btn btn-danger"
                  disabled= {JSON.stringify(cart.cartItems) === '{}'}
                >
                  Remove
                </button>
     }
    </div>

      </div>
            
              
            
              
            

  </div>

  <div className="customer">
    <div className="body">
      <div className="row">
    
      </div>
    </div>
  </div>
</section>
    </main>
  </>
  )
}
export default CartScreen;
