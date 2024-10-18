import React from 'react'
import JobTile from '../components/gobtitle/JobTile'
import Sidebar from '../components/sidebar'
import Header from '../components/header'
import { Link } from "react-router-dom";
 const JobTitleScreen = () => {
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
            <Link to={`/mainjob`} className="text-success">
      Job Title {sy} &nbsp;
            </Link>
            <Link to={`#`} className="text-success">
           Create Job Title
            </Link>
     
    </div>
    <div className="card shadow-sm">
        <div className="card-body">
        <div className="jobtitle">
      <div className="body">
        <div className="row">
        <JobTile />
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

export default JobTitleScreen