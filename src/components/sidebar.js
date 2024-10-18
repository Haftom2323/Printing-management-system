import React from 'react'
import { Link, NavLink } from "react-router-dom";
const Sidebar= ()=> {
    return (
    <div>
      <aside className="navbar-aside" id="offcanvas_aside">
        <div className="aside-top">
          <Link to="/D" className="brand-wrap">
            <img
              src="../images/logopg.jpg"
              style={{ height: "46" }}
              className="logo"
              alt="Yohana Printing Production"
            />
          </Link>
          <div>
            <button className="btn btn-icon btn-aside-minimize">
              <i className="text-muted fas fa-stream"></i>
            </button>
          </div>
        </div>

        <nav>
          <ul className="menu-aside">
            <li className="menu-item">
              <NavLink
                
                className="menu-link"
                to="/D"
                
              >
                <i className="icon fas fa-home fa-2xs"></i>
                <span className="text">Home</span>
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink
                
                className="menu-link"
                to="/mcustomer"
              >
                <i className="icon fas fa-user-friends"></i>
                <span className="text">Customers</span>
              </NavLink>
            </li>
          
            <li className="menu-item">
              <NavLink
                
                className="menu-link"
                to="/morder"
              >
                <i className="icon fas fa-bags-shopping"></i>
                <span className="text">Orders</span>
              </NavLink>
            </li>

            <li className="menu-item">
              <NavLink
                
                className="menu-link"
                to="/mainjob"
              >
                <i className="icon fas fa-list"></i>
                <span className="text">Department</span>
              </NavLink>
            </li>
           
            <li className="menu-item">
              <NavLink
                
                className="menu-link"
                to="/mservicetype"
              >
                <i className="icon fas fa-inventory"></i>
                <span className="text">Service Category</span>
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink
                
                className="menu-link"
                to="/memployee"
              >
                <i className="icon fas fa-staff"></i>
                <span className="text">Employee</span>
              </NavLink>
            </li>
          
            


            <li className="menu-item">
              <NavLink
                
                className="menu-link"
                to="/mstock"
              >
                <i className="icon fas fa-inventory"></i>
                <span className="text">Services</span>
              </NavLink>
            </li>
           
            <li className="menu-item">
              <NavLink
                
                className="menu-link"
                to="/mreport"
              >
                <i className="icon fa fa-file"></i>
                <span className="text">Report</span>
              </NavLink>
            </li>

        
          
          </ul>
          <br />
          <br />
        </nav>
      </aside>
    </div>
  )
}
export default Sidebar;
