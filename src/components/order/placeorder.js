
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CheckoutSteps from '../CheckoutSteps';
import { createOrder } from '../../actions/orderAction';
import LoadingBox from '../loading';
import MessageBox from '../messageBox';
 const Placeorder=()=> {

    const cart = useSelector((state) => state.cart);
    const { customerAddress } = cart;
    const orderCreate=useSelector((state)=>state.ordercreate)
    const {success,error,loading}=orderCreate
    
    // console.log(customerAddress)
    // const toPrice = (num) => Number(num.toFixed(2)); // 5.123 => "5.12" => 5.12
    // cart.itemsPrice = toPrice(
    //   cart.cartItems.reduce((a, c) => a + c.quantity * c.unitPrice, 0)
    // );
      cart.totalPrice=cart.cartItems.unitPrice * cart.cartItems.quantity
    // cart.shippingPrice = cart.itemsPrice > 100 ? toPrice(0) : toPrice(10);
    // cart.taxPrice = toPrice(0.15 * cart.itemsPrice);
    // cart.totalPrice = cart.itemsPrice + cart.taxPrice;
    // console.log('after changed', cart)
    const dispatch = useDispatch();
    const placeOrderHandler = () => {
      dispatch(createOrder(cart));
    };
  return (
    <div className='plceOrder'>
          <CheckoutSteps step1 step2 step3></CheckoutSteps>

          <div className="row top">
          {loading && <LoadingBox></LoadingBox>}
        {error && <MessageBox variant="danger">{error}</MessageBox>}
        {success && <MessageBox variant="success">{success}</MessageBox>}
        <div className="col-2">
          <ul>
            <li>
            <div className="col-md-6 col-lg-4">
        <article className="icontext align-items-start">
          <span className="icon icon-sm rounded-circle alert-success">
            <i className="text-success fas fa-user"></i>
          </span>
           {cart.customerAddress &&
            <div className="text">
            <h6 className="mb-1">Customer</h6>
            <p className="mb-1">
              {cart.customerAddress.firstName} {cart.customerAddress.lastName}<br />
              <a href={cart.customerAddress.email}>{cart.customerAddress.email}</a>
              <br></br>
            
            </p>
          </div>


           }
        </article>
      </div>
            </li>
            <li>
             


        <div className="col-md-6 col-lg-4">
        <article className="icontext align-items-start">
          <span className="icon icon-sm rounded-circle alert-success">
            <i className="text-success fas fa-map-marker-alt"></i>
          </span>
           {cart.customerAddress &&
            <div className="text">
            <h6 className="mb-1">Deliver to</h6>
            <p className="mb-1">
            {cart.customerAddress.address},
              <br />
              {cart.customerAddress.streetAdress}
              
            </p>
          </div>
           }
        </article>
      </div>

         </li>
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
          </ul>
        </div>
        <div className="col-1">
          <div className="card card-body">
            <ul>
              <li>
               
              </li>
              <li>
                <div className="row">
                  <div><strong>Total Item Price</strong></div>
                  <div>ETB&nbsp;{cart.totalPrice}</div>
                </div>
              </li>
              <li>
                
              </li>
              <li>
               
              </li>
                <div className='col-md-3'>

                <li>
              {JSON.stringify(cart.cartItems) !== '{}' && 
              <button
                  
                  type="button" style={{cursor: "pointer"}}
                  onClick={placeOrderHandler}
                  className="btn btn-primary block"
                  disabled= {JSON.stringify(cart.cartItems) === '{}'}
                >
                  Save
                </button>
              }
              </li>

                </div>
          
            </ul>
          </div>
        </div>
      </div>





    </div>
  )
}

export default Placeorder













