import React, {useEffect,useState } from 'react';
import {useSelector, useDispatch } from 'react-redux';
import Sidebar from '../components/sidebar'
import Header from '../components/header'
import { Link } from "react-router-dom";
import { listEmployee } from '../actions/employeeAction';
import Spinner from '../components/spinner';
import MessageBox from '../components/messageBox';
import { partition } from '../utilty';
 let updatedEmployees=[]
 const MainUserScreen = () => {
    let sy='>';
    const [searchValue, setSearchValue] = useState("");
    const [NumberOfPerPage,setNumberOfPerPage]=useState(5)
    const[currentPage,setCurentPage]=useState(0)
    const {numberOfItems,setNumberOfItems}=useState(5)
  
    const dispatch = useDispatch();
    const employeeList = useSelector((state) => state.employeelist);
    const {employees,loading,error}=employeeList
   
     
  
       useEffect(()=> {
        dispatch(listEmployee())
        
        },[dispatch])

        const searchHandler = (value) => {
          setSearchValue(value);
        };
        const itemsPerPage=(e)=> {

          console.log('current page',currentPage,e)
          setCurentPage(e)
               console.log('upated',updatedEmployees)
          
               updatedEmployees=updatedEmployees/10

        }


          if(employees) {

           updatedEmployees = employees.filter((user) => {
              return Object.keys(user).some((key) =>
                user[key]
                  .toString()
                  .toLowerCase()
                  .includes(searchValue.toString().toLowerCase())
              );
            });
          }     





  return (


      <>
      <Sidebar />
      <main className="main-wrap">
        <Header />
      
        <section className="content-main">
        
        {error && <MessageBox variant="danger">{error}</MessageBox>}
        <div className="content-header">
       <Link to={`/D`} className="text-success">
      Dashboard {sy} &nbsp;
            </Link>
            <Link to={`/muser`} className="text-success">
      user  &nbsp;
            </Link>
            
     
    </div>
  
      <div className="mb-4 shadow-sm">
        <header className="bg-white">
          <div className="row gx-3 py-3">
            <div className="col-lg-4 col-md-4 me-auto">
              <input
                type="text"
                placeholder="Search..."
                className="form-control "
                onChange={(e)=>searchHandler(e.target.value)}
              />
            </div>
            <div className="col-lg-2 col-6 col-md-3">
              <select className="form-select" onChange={(e)=>itemsPerPage(e.target.value)}>
              <option value="5">5 /page</option>
                <option value="10">10 /page</option>
                <option value="20">20 /page</option>
                <option value="30">30 /page</option>
              </select>
            </div>
            &nbsp;
            <div className="col-lg-2 col-4 col-md-3">
           
            <Link to={`/user`} className="text-add">
            <button className='btn btn-primary btn-sml'> <i className="fa fa-plus"></i></button>  
            </Link>
            </div>
          </div>
        </header>
        <div className="card-body">
          <div className="table-responsive">
          <table className="table">
          
      <thead>
        <tr>
        <th>#</th>
          <th>First Name</th>
          <th >Last Name</th>
          <th >Phone Number</th>
          <th >Email</th>
          <th>Job Title</th>
          <th>
            Action
          </th>
        </tr>
      </thead>

      {loading && <Spinner></Spinner>}
      
      <tbody>
      {
        updatedEmployees.map((employee, index) => {
                    return (
                      <tr>
                        <td>{index+1}</td>
                        <td>{employee.firstName}</td>
                        <td>{employee.lastName}</td>
                        <td>{employee.phoneNumber}</td>
                        <td>{employee.email}</td>
                        <td>{employee.jobTitleId}</td>
                        <td className="d-flex justify-content-end align-item-center">
                        <Link to={`/orderdetail`} className="text-success">
                            <i className="fas fa-eye"></i>&nbsp;&nbsp;
                          </Link>
                          <Link to={`/orderdetail`} className="text-success">
                            <i className="fas fa-pencil"></i>&nbsp;&nbsp;
                          </Link>
                          <Link to={`/orderdetail`} className="text-danger">
                            <i className="fas fa-trash"></i>
                          </Link>
                        </td>
                      </tr>
                    )
                  })
                }
      </tbody>
     
    </table>
    

    <button variant="outline-warning"><i class="fa fa-angle-double-left" aria-hidden="true"> First</i></button>&nbsp;
              <button variant="outline-warning"><i class="fa fa-angle-left" aria-hidden="true"> Previous</i></button>&nbsp;
              <span class="current-page">
                <span>Page &nbsp;</span>
                <span></span>
                <span>&nbsp;From</span>&nbsp;
                <span>6</span>
            </span>


    <button variant="outline-warning"><i class="fa fa-angle-right" aria-hidden="true"> Next</i></button>&nbsp;
  <button variant="outline-warning"><i class="fa fa-angle-double-right" aria-hidden="true" > Last</i></button>

          </div>
        </div>
      </div>
    
   
  </section>
      </main>
    </>

    
  
  )
}

export default MainUserScreen