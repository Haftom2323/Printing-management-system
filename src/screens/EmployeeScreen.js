import React from 'react'
import Sidebar from '../components/sidebar'
import Header from '../components/header'
import CreatEmployee from '../components/employee/createEmployee';
import { Link } from "react-router-dom";
const EmployeeScreen = () => {
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
            <Link to={`/memployee`} className="text-success">
      Employee {sy} &nbsp;
            </Link>
            <Link to={`/employee`} className="text-success">
           Create Employee
            </Link>
  </div>

  <div className="card shadow-sm">
        <div className="card-body">
        <div className="jobtitle">
      <div className="body">
        <div className="row">
        <CreatEmployee />
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
export default EmployeeScreen;
