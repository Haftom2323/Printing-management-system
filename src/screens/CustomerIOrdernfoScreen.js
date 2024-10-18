import React from 'react'
import Sidebar from '../components/sidebar';
import Header from '../components/header';
import CustomerOrderInfo from '../components/order/customerorderinfo';

 const CustomerOrderInfoScreen = () => {
  return (
    
     <div className='nn'>
    <Sidebar />
    <main className="main-wrap">
      <Header />
    
      <section className="content-main">
  {/* <div className="content-header">
    <h2 className="content-title">Create Customer</h2>
  </div> */}

  <div className="order">
    <div className="body">
      <div className="row">
      {/* <div className="d-flex justify-content-center">
      <div
        className="spinner-border text-success"
        role="status"
        style={{ width: "30px", height: "30px" }}
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div> */}
    <CustomerOrderInfo />
      </div>
    </div>
  </div>
</section>
    </main>
    </div>
  )
}
export default CustomerOrderInfoScreen;
