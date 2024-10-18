import React from 'react'
import Sidebar from '../components/sidebar';
import Header from '../components/header';
import CreateCustomer from '../components/customer/createCustomer';
import { Link } from "react-router-dom";
 const CustomerScreen = () => {
        let sy='>';
  return (
    
    <>
    <Sidebar />
    <main className="main-wrap">
      <Header />
    
      <section className="content-main">
  <div className="content-header">
  <Link to={`/D`} className="text-success">
      Dashboard {sy} &nbsp;
            </Link>
            <Link to={`/mcustomer`} className="text-success">
      Customer {sy} &nbsp;
            </Link>
            <Link to={`/customer`} className="text-success">
           Create Customer
            </Link>
  </div>

  <div className="card shadow-sm">
        <div className="card-body">
        <div className="jobtitle">
      <div className="body">
        <div className="row">
        <CreateCustomer />
        </div>
      </div>
    </div>
        </div>
        </div>
</section>
    </main>
  </>
  )
}
export default CustomerScreen;
