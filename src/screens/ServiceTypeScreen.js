import React from 'react'
import CreateServiceType from '../components/servicetype/createService'
import Sidebar from '../components/sidebar'
import Header from '../components/header'
import { Link } from "react-router-dom";
 const ServiceTypeScreen = () => {
        let sy='>'
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
            <Link to={`/mservicetype`} className="text-success">
      Service Category {sy} &nbsp;
            </Link>
            <Link to={`#`} className="text-success">
           Create Service Type
            </Link>
    </div>

    <div className="serviceType">
    <div className="card shadow-sm">
        <div className="card-body">
        
      <div className="body">
        <div className="row">
        <CreateServiceType />
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

export default ServiceTypeScreen