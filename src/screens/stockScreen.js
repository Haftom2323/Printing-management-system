import React from 'react'
import Sidebar from '../components/sidebar'
import Header from '../components/header'
import CreateStock from '../components/stock/createStock';
import { Link } from "react-router-dom";
const StockScreen = () => {
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
           Create Service
            </Link>
  </div>

  <div className="card shadow-sm">
        <div className="card-body">
        <div className="jobtitle">
      <div className="body">
        <div className="row">
        <CreateStock />
        </div>
      </div>
    </div>
        </div>
        </div>
</section>
    </main>
  </>
  );
};
export default StockScreen;
