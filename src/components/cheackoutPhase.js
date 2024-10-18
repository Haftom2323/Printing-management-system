import React from 'react';
import { Link } from "react-router-dom";
export default function CheackOutPhases(props) {
  return (
    <div className="row checkout-steps">
      <div className={props.step1 ? 'active' : ''}><Link to={`/gphase/${props._id}`} >Graphic Design</Link></div>
      <div className={props.step2 ? 'active' : ''}><Link to={`/pphase/${props._id}`}>Printing Phase</Link></div>
      <div className={props.step3 ? 'active' : ''}><Link to={`/fphase/${props._id}`}>Phinishing Phase</Link></div>
      <div className={props.step4 ? 'active' : ''}><Link to={`/dphase/${props._id}`}>Delivery Phase</Link></div>

      {/* <div className={props.step4 ? 'active' : ''}>Place Order</div> */}
    </div>
  );
}
