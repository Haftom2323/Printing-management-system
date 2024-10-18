import React, {useEffect,useState,useMemo } from 'react';
import {useSelector, useDispatch } from 'react-redux';
import Sidebar from '../components/sidebar'
import Header from '../components/header'
import { Link } from "react-router-dom";
import { listOrder } from '../actions/orderAction';
import { listServiceType, updateServiceType } from '../actions/serviceTypeAction';
import Spinner from '../components/spinner';
import MessageBox from '../components/messageBox'
import LoadingBox from '../components/loading';
import { getReport } from '../actions/reportAction';
  let pages = [];
 const MainReportScreen = () => {
  let sy='>';
   
    const [searchValue, setSearchValue] = useState('');
    const [data,setData]=useState([])
    let [UpdatedReports,setUpdatedReporet]=useState([])
    const dispatch = useDispatch();
    const reportList = useSelector((state) => state.reportlist);
    const {reports,loading,error}=reportList

    const serviceTypeList = useSelector((state) => state.listservicetype);
    const {serviceTypes}=serviceTypeList
  
    const [startDate,setStartDate]=useState('')
    const [endDate,setEndDate]=useState('')
    const [serviceType,setServiceType]=useState('')
    const [status,setStatus]=useState('')
    const [phase,setPhase]=useState('')

// states for pagination
      const [currentPage, setcurrentPage] = useState(1);
      const [itemsPerPage, setitemsPerPage] = useState(5);

      const [pageNumberLimit, setpageNumberLimit] = useState(5);
      const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(5);
      const [minPageNumberLimit, setminPageNumberLimit] = useState(0);

      const NumberOfPages=(itemsPerPage)=> {
        pages=[]
      for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
        pages.push(i);
        
      }
      return  pages
    }
    const pageNo = useMemo(()=>{
      return NumberOfPages(itemsPerPage)
    },[itemsPerPage,data])


     
  
       useEffect(()=> {
       const len= dispatch(listOrder())
       
          dispatch(listServiceType())
        },[])
        useEffect(()=>{

          if(reports)
             {
              setUpdatedReporet(reports)
              setData(reports)
             }
     
     
            },[reports])
     const searchHandler = (value) => {
          setSearchValue(value);
        };
      
     const setNoItemsPerPage=(numberOfItemPerPage)=> {

          setitemsPerPage(numberOfItemPerPage)
        
                      }
    
    const filterWparametr=()=> {
       dispatch(getReport({startDate,endDate,phase,serviceType,status}))

      console.log('fff',startDate,endDate,phase,serviceType,status)

     }

    const clearParametr=()=> {
        console.log('clicked me')
          setPhase('')
          setStartDate('')
          setEndDate('')
          setServiceType('')
          setStatus('')

    }
    // pagination

    const handleClick = (event) => {
      setcurrentPage(Number(event.target.id));
              };
    const handleNextbtn = () => {
      setcurrentPage(currentPage + 1);
  
      if (currentPage + 1 > maxPageNumberLimit) {
        setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
        setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
      }
    };
  
    const handlePrevbtn = () => {
      setcurrentPage(currentPage - 1);
  
      if ((currentPage - 1) % pageNumberLimit == 0) {
        setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
        setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
      }
    };
  
    let pageIncrementBtn = null;
    if (pages.length > maxPageNumberLimit) {
      pageIncrementBtn = <li onClick={handleNextbtn}> &hellip; </li>;
    }
  
    let pageDecrementBtn = null;
    if (minPageNumberLimit >= 1) {
      pageDecrementBtn = <li onClick={handlePrevbtn}> &hellip; </li>;
    }



    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    UpdatedReports = UpdatedReports.slice(indexOfFirstItem, indexOfLastItem);
    

    const renderPageNumbers = pageNo.map((number) => {
      if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
        return (
          <li
            key={number}
            id={number}
            onClick={handleClick}
            className={currentPage == number ? "active" : null}
          >
            {number}
          </li>
        );
      } else {
        return null;
      }
    });     


//end of utilites for Pagination





       


  return (


      <>
      <Sidebar />
      <main className="main-wrap">
        <Header />
      
        <section className="content-main">
        
        {error && <MessageBox variant="danger">{error}</MessageBox>}
        {loading && <LoadingBox></LoadingBox>}
      
        
        <div className="content-header">
       <Link to={`/D`} className="text-success">
      Dashboard {sy} &nbsp;
            </Link>
            <Link to={`/mainorder`} className="text-success">
      Orders  &nbsp;
            </Link>
            
     
    </div>
  
      <div className="mb-4 shadow-sm">
        <header className="bg-white">
          <div className="row gx-2 py-2" style={{marginLeft:"20px"}}>
           

            <div className="col-lg-2 col-6 col-md-3">
            <label>Start Date</label>
            <input
          
          className="form-control py-2"
          type="date"
          id="email"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        ></input>
            </div>
            <div className="col-lg-2 col-6 col-md-3">
            <label>End Date</label>
            <input
          
          className="form-control py-2"
          type="date"
          id="email"       
          value={endDate}
         onChange={(e) => setEndDate(e.target.value)}
        ></input>
            </div>
            {serviceTypes &&
              <div className="col-lg-2 col-6 col-md-3">
            <label>Category</label>
            <select className="form-select" value={serviceType} onChange={(e)=>setServiceType(e.target.value)}>
            <option value="" style={{fontFamily: "Times New Roman, Times, serif"}} > Select Service Type</option>
              {serviceTypes.map((serviceType, index) => {
                  return <option key={index} >
                      {serviceType.name}
                  </option>
                })}


        </select>
            </div>

            }
            <div className="col-lg-2 col-6 col-md-3">
            <label>Phase</label>
            <select className="form-select" value={phase}  onChange={(e)=>setPhase(e.target.value)}>
            <option value="" style={{fontFamily: "Times New Roman, Times, serif"}}> Select Phase</option>
              <option value="graphicDesign">Design Phase</option>
              <option value="printing">Printing Phase</option>
              <option value="finishing">Finishing Phase</option>
              <option value="delivery">Delivery Phase</option>


        </select>
            </div>


            {(phase==='printing' || phase==='finishing' || phase==='delivery')  &&
             
            <div className="col-lg-2 col-6 col-md-3">
            <label>Status</label>
              <select className="form-select" value={status} onChange={(e)=>setStatus(e.target.value)}>
              <option value="" style={{fontFamily: "Times New Roman, Times, serif"}}>Select Status</option>
              <option value="pending">Pending</option>
                <option value="completed">complited</option>
                <option value="partially completed">partially complited</option>
              
              </select>
            </div>
          }
          {phase==='graphicDesign' &&
             
             <div className="col-lg-2 col-6 col-md-3">
             <lable>Status</lable>
               <select className="form-select" onChange={(e)=>setStatus(e.target.value)}>
               <option value="" style={{fontFamily: "Times New Roman, Times, serif"}}>Select Status</option>
              
                 <option value="true">True</option>
                 <option value="false">False</option>
               
               </select>
             </div>
           }
            <div className="col-lg-2 col-6 col-md-3" style={{paddingTop:"20px"}}>
             <button className='btn btn-primary' style={{paddingRight:"10px",paddingLeft:"10px"}}><i className="fa fa-search" aria-hidden="true" onClick={filterWparametr}></i></button> 
              &nbsp;&nbsp;
             <button className="btn btn-danger" style={{paddingRight:"10px",paddingLeft:"10px"}}><i className="fas fa-undo" onClick={clearParametr}></i></button>
            </div>





            &nbsp;
           
          </div>
          {loading && <Spinner variant="success"></Spinner>}
        </header>
        <div className="">
          <div className="table-responsive">
          <table className="table">
         
          
      <thead>
        <tr>
        <th>#</th>
          <th>First Name</th>
          <th >Last Name</th>
          <th >Phone Number</th>
          <th >product Name</th>
          <th>Service Type</th>
          <th>Quantity</th>
          <th>Unit Price</th>
          <th>Total Price</th>
          <th>Ordered Date</th>
          <th>
            Action
          </th>
        </tr>
      </thead>

      
      
      <tbody>
      {
        UpdatedReports.map((r, index) => {
                    return (
                      <tr key= {r._id}>
                        <td>{index+1}</td>
                        <td>{r.customerAddress.firstName}</td>
                        <td>{r.customerAddress.lastName}</td>
                        <td>{r.customerAddress.phoneNumber}</td>
                        <td>{r.cartItems.productName}</td>
                        <td>{r.cartItems.serviceType}</td>
                        <td>{r.cartItems.quantity}</td>
                        <td>{r.cartItems.unitPrice}</td>
                       <td>{r.totalPrice}</td>
                       <td>{new Date(r.cartItems.itemOrederedDate).toDateString()}</td>
                        <td className="d-flex justify-content-end align-item-center">
                        <Link to={`/orderdetail/${r._id}`} className="text-success">
                            <i className="fas fa-eye"></i>&nbsp;&nbsp;
                          </Link>
                         
                        </td>
                      </tr>
                    )
                  })
                }
      </tbody>
     
    </table>
    
    <ul className="pageNumbers">

<div className='list1'>

<li>
             <span>Page {currentPage} &nbsp;</span>
             <span></span>
             { searchValue ? ( <span>&nbsp;From  {Math.ceil(UpdatedReports.length / itemsPerPage)} </span>):
         (<span>&nbsp;From  {Math.ceil(data.length / itemsPerPage)} </span>) }&nbsp;
          
         </li>
</div>
<div className='list2'>

<li>
       <button
         onClick={handlePrevbtn}
         disabled={currentPage == pages[0] ? true : false}
       >
         <i className="fa fa-angle-left" aria-hidden="true"> Previous</i>
       </button>
     </li>
           {pageDecrementBtn}
           {renderPageNumbers}
           {pageIncrementBtn}

     <li>
       <button
         onClick={handleNextbtn}
         disabled={currentPage == pages[pages.length - 1] ? true : false}
       >
         <i className="fa fa-angle-right" aria-hidden="true"> Next</i>
       </button>
     </li>


</div>
     
   </ul>
    

          </div>
        </div>
      </div>
    
   
  </section>
      </main>
    </>

    
  
  )
}


export default MainReportScreen