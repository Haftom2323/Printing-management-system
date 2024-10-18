import React from 'react'
import Sidebar from '../components/sidebar';
import Header from '../components/header';
import EditService from '../components/servicetype/editService';
import { Link } from "react-router-dom";
 const EditServiceTypeScreen = () => {
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
            <Link to={`/mservicetype`} className="text-success">
      Service Type {sy} &nbsp;
            </Link>
            <Link to={`#`} className="text-success">
           Update service Type
            </Link>
  </div>

  <div className="card shadow-sm">
        <div className="card-body">
        <div className="jobtitle">
      <div className="body">
        <div className="row">
        <EditService />
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
export default EditServiceTypeScreen;
