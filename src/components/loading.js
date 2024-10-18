import React from 'react';

export default function LoadingBox(props) {
  return (
    <div className="loading">
        <div className={`alert alert-${props.variant || 'info'}`}>
        <i className="fa fa-spinner fa-spin"></i> Requesting to Server...........
    </div>
           
          </div>
  );
}


        