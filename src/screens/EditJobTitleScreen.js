import React from 'react'
import Sidebar from '../components/sidebar';
import Header from '../components/header';
import EditJobTitle from '../components/gobtitle/editJobTitle';
import { Link } from "react-router-dom";
 const EditJobTitleScreen = () => {
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
            <Link to={`/mjobtittle`} className="text-success">
      Job Title {sy} &nbsp;
            </Link>
            <Link to={`/jobtitle`} className="text-success">
           Update Job Title
            </Link>
  </div>

  <div className="card shadow-sm">
        <div className="card-body">
        <div className="jobtitle">
      <div className="body">
        <div className="row">
        <EditJobTitle />
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
export default EditJobTitleScreen;
