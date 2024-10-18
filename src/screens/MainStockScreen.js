import React, {useEffect,useState,useMemo } from 'react';
import {useSelector, useDispatch } from 'react-redux';
import Sidebar from '../components/sidebar'
import Header from '../components/header'
import { Link } from "react-router-dom";
import { listProducts } from '../actions/stockAction';
import Spinner from '../components/spinner';
import MessageBox from '../components/messageBox';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import LoadingBox  from '../components/loading';
import { deleteProduct } from '../actions/stockAction';

   let pages = [];
 
 const MainStockScreen = () => {
    let sy='>';
    const [searchValue, setSearchValue] = useState("");
    const [data,setData]=useState([])
    let [updatedProducts,setUpdatedProduct]=useState([])
  
    const dispatch = useDispatch();
    const [_id,setId]=useState('')
    const productlist = useSelector((state) => state.productlist);
    const {products,loading,error}=productlist  

    const productDe = useSelector((state) => state.productdelete);
    const {loading:deleteLoading, error:deleteError,success,failError } = productDe 

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
     // states for pagination
    const [currentPage, setcurrentPage] = useState(1);
    const [itemsPerPage, setitemsPerPage] = useState(5);
  
    const [pageNumberLimit, setpageNumberLimit] = useState(5);
    const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(5);
    const [minPageNumberLimit, setminPageNumberLimit] = useState(0);
    
  
       useEffect(()=> {
        dispatch(listProducts())
        
        },[])

        useEffect(()=>{

          if(products)
             {
              setUpdatedProduct(products)
              setData(products)
             }
     
     
            },[products])

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

      const deleteHandler=(_id)=> {
        setShow(true)
        setId(_id)
      };



      const deleteItem=async ()=> {
         await dispatch(deleteProduct(_id))
         dispatch(listProducts())
         setShow(false)
      };
       //utilities for pagination
       const handleClick = (event) => {
        setcurrentPage(Number(event.target.id));
      };
      const setNoItemsPerPage=(numberOfItemPerPage)=> {

        setitemsPerPage(numberOfItemPerPage)
      
      }
      const searchHandler = (value) => {
        setSearchValue(value);
         const fiteredData= products.filter((p) => {
        return Object.keys(p).some((key) =>
          p[key]
            .toString()
            .toLowerCase()
            .includes(searchValue.toString().toLowerCase())
        );
      });     

       setUpdatedProduct(fiteredData)
      

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
       updatedProducts = updatedProducts.slice(indexOfFirstItem, indexOfLastItem);
      

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
            <Link to={`/mstock`} className="text-success">
      Product  &nbsp;
            </Link>
            
     
    </div>
    <Modal  show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title style={{paddingLeft:'90px'}}><i className='icon fa fa-exclamation-triangle' style={{color:'yellow'}}></i></Modal.Title>
          {deleteLoading && <LoadingBox></LoadingBox>}
        {deleteError && <MessageBox variant="danger">{deleteError}</MessageBox>}
        {success && <MessageBox variant="success">{success}</MessageBox>}
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
           
            <Link to={`/stock`} className="text-add">
            <button className='btn btn-primary' style={{paddingRight:"9px",paddingLeft:"9px"}}> <i className="fa fa-plus"></i></button>   
            </Link>
            </div>
          </div>
        </header>
        <div className="">
          <div className="table-responsive">
          <table className="table">
          
      <thead>
        <tr>
        <th>#</th>
          <th>Code</th>
          <th >Quantity</th>
          <th>Unit Price</th>
          <th>Service Category</th>
          <th >Measurment</th>
          <th >Description</th>
          <th>
            Action
          </th>
        </tr>
      </thead>

 
      
      <tbody>
      {
        updatedProducts.map((product, index) => {
                    return (
                      <tr key={product._id}>
                        <td>{index+1}</td>
                        <td>{product.code}</td>
                        <td>{product.quantity}</td>
                        <td>{product.unitPrice}</td>
                        <td>{product.serviceType}</td>
                        <td>{product.measurement}</td>
                        <td>{product.description}</td>
                        <td className="d-flex justify-content-end align-item-center">
                        {/* <Link to={`/productdetail`} className="text-success">
                            <i className="fas fa-eye"></i>&nbsp;&nbsp;
                          </Link> */}
                          <Link to={`/editstock/${product._id}`} className="text-success">
                            <i className="fas fa-pencil"></i>&nbsp;&nbsp;
                          </Link>
                          <Link to onClick={()=>deleteHandler(product._id)} className="text-danger">
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
             { searchValue ? ( <span>&nbsp;From  {Math.ceil(updatedProducts.length / itemsPerPage)} </span>):
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

export default MainStockScreen