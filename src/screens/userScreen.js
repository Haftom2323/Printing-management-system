import React from 'react'
import Sidebar from '../components/sidebar';
import Header from '../components/header';
import CreateUser from '../components/user/createUser';
import { Link } from "react-router-dom";
 const UserScreen = () => {
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
            <Link to={`/muser`} className="text-success">
      user {sy} &nbsp;
            </Link>
            <Link to={`/user`} className="text-success">
           Create user
            </Link>
  </div>

  <div className="card shadow-sm">
        <div className="card-body">
        <div className="createUser">
      <div className="body">
        <div className="row">
        <CreateUser />
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
export default UserScreen;
