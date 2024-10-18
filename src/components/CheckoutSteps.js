import React from 'react';
import { Link } from "react-router-dom";
export default function CheckoutSteps(props) {
  return (
    <div className="row checkout-steps">
      <div className={props.step1 ? 'active' : ''}><Link to='/customerinfo' >Customer Full Information</Link></div>
      <div className={props.step2 ? 'active' : ''}><Link to='/order'>Ordering</Link></div>
      <div className={props.step3 ? 'active' : ''}><Link to='/morder'>Place Order</Link></div>
      {/* <div className={props.step4 ? 'active' : ''}>Place Order</div> */}
    </div>
  );
}
