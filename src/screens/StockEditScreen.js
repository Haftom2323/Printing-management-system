import React from 'react'
import Sidebar from '../components/sidebar';
import Header from '../components/header';
import EditStock from '../components/stock/editStock';
import { Link } from "react-router-dom";
 const EditStockScreen = () => {
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
            <Link to={`/mstock`} className="text-success">
      Service {sy} &nbsp;
            </Link>
            <Link to={`/stock`} className="text-success">
        Update Service
            </Link>
  </div>

  <div className="card shadow-sm">
        <div className="card-body">
        <div className="jobtitle">
      <div className="body">
        <div className="row">
        <EditStock />
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
export default EditStockScreen;
