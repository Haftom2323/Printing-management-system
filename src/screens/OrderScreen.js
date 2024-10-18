import React from 'react'
import Sidebar from '../components/sidebar';
import Header from '../components/header';
import CreateOrder from '../components/order/createorder';

 const OrderScreen = () => {
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
     
    <CreateOrder />
      </div>
    </div>
  </div>
</section>
    </main>
    </div>
  )
}
export default OrderScreen;
