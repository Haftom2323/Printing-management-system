import React, {useEffect,useState,useMemo } from 'react';
import {useSelector, useDispatch } from 'react-redux';
import Sidebar from '../components/sidebar'
import Header from '../components/header'
import { Link } from "react-router-dom";
import { listServiceType } from '../actions/serviceTypeAction';
import Spinner from '../components/spinner';
import MessageBox from '../components/messageBox';
import LoadingBox  from '../components/loading'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { deleteService } from '../actions/serviceTypeAction';

let pages = [];
 const MainSettingScreen = () => {
    let sy='>';
    const [searchValue, setSearchValue] = useState('');
   const [data,setData]=useState([])
   let [updatedSericeType,setUpdatedServiceType]=useState([])
    const [_id,setId]=useState('')
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const serviceTypeList = useSelector((state) => state.listservicetype);
   
  const {serviceTypes,loading,error}=serviceTypeList

  const deleteSe = useSelector((state) => state.deleteservice);
  const {loading:deleteLoading, error:deleteError,success,failError} = deleteSe
     
   
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
        dispatch(listServiceType())
        
        },[])

        useEffect(()=>{

          if(serviceTypes)
             {
              setUpdatedServiceType(serviceTypes)
              setData(serviceTypes)
             }
     
     
            },[serviceTypes])



            const deleteHandler=(_id)=> {

              setShow(true)
              setId(_id)
            };
      
            const deleteItem=async ()=> {
              
               await  dispatch(deleteService(_id))
               dispatch(listServiceType())
               setShow(false)
            };

            const searchHandler = (value) => {
              setSearchValue(value);
               const fiteredData= serviceTypes.filter((s) => {
              return Object.keys(s).some((key) =>
                s[key]
                  .toString()
                  .toLowerCase()
                  .includes(searchValue.toString().toLowerCase())
              );
            });     
    
             setUpdatedServiceType(fiteredData)
            
    
            };
    

            const setNoItemsPerPage=(numberOfItemPerPage)=> {

              setitemsPerPage(numberOfItemPerPage)
            
          

        }

      //utilities for pagination
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
      updatedSericeType = updatedSericeType.slice(indexOfFirstItem, indexOfLastItem);
      console.log('updated data service',updatedSericeType.length)


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
            <Link to={`/mservicetype`} className="text-success">
      Service Category  &nbsp;
            </Link>
            
     
    </div>
  
    <Modal  show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title style={{paddingLeft:'90px'}}><i className='icon fa fa-exclamation-triangle' style={{color:'yellow'}}></i></Modal.Title>
          {deleteLoading && <LoadingBox></LoadingBox>}
        {/* {deleteError && <MessageBox variant="danger">{deleteError}</MessageBox>} */}
        {/* {success && <MessageBox variant="success">{success}</MessageBox>} */}
        </Modal.Header>
        <Modal.Body style={{paddingLeft:'50px'}}>
        
        <h2><strong>Are You Sure?</strong></h2>
        <h4 style={{texAlign:'center'}}>This action can not be undone. Do you Want to Continue?</h4>

   

      
   
   

        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={deleteItem}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>


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
            {loading && <Spinner></Spinner>}
            <div className="col-lg-2 col-6 col-md-3">
              <select className="form-select" onChange={(e)=>setNoItemsPerPage(e.target.value)}>
              <option value="5">5 /page</option>
                <option value="10">10 /page</option>
                <option value="20">20 /page</option>
                <option value="30">30 /page</option>
              </select>
            </div>
            &nbsp;
            <div className="col-lg-2 col-4 col-md-3">
           
            <Link to={`/servicetype`} className="text-add">
            <button className='btn btn-primary' style={{paddingRight:"9px",paddingLeft:"9px"}}> <i className="fa fa-plus"></i></button>   
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
          <th>Name</th>
          <th >Code</th>
          <th >Unit Price</th>
          <th >Descriptin</th>
          <th>Defenite Price</th>
          <th>
            Action
          </th>
        </tr>
      </thead>

      
      <tbody>
      {
        updatedSericeType.map((s, index) => {
                    return (
                      <tr key={s._id}>
                        <td>{index+1}</td>
                        <td>{s.name}</td>
                        <td>{s.code}</td>
                        <td>{s.unitPrice}</td>
                        <td>{s.description}</td>
                        <td>{s.hasDefinedPrice.toString()}</td>
                        <td className="d-flex justify-content-end align-item-center">
                        {/* <Link to={`/orderdetail`} className="text-success">
                            <i className="fas fa-eye"></i>&nbsp;&nbsp;
                          </Link> */}
                          <Link to={`/editservicetype/${s._id}`} className="text-success">
                            <i className="fas fa-pencil"></i>&nbsp;&nbsp;
                          </Link>
                          <Link to onClick={()=>deleteHandler(s._id)} className="text-danger">
                            <i className="fas fa-trash"></i>
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
             { searchValue ? ( <span>&nbsp;From  {Math.ceil(updatedSericeType.length / itemsPerPage)} </span>):
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

export default MainSettingScreen