import React ,{useState,useEffect}from 'react'
import Sidebar from '../components/sidebar';
import {useDispatch,useSelector} from 'react-redux';
import Header from '../components/header';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Spinner from '../components/spinner'
import { useParams } from "react-router-dom";
import {detailsOrder,assignOrder } from '../actions/orderAction';
import { listEmployee } from '../actions/employeeAction';
// import { useNavigate } from "react-router-dom";
import { useHistory } from "react-router-dom";
import CloseModal from '../components/closeModal';
import ApproveModal from '../components/approveModal';
import { updateOrderQuantity } from '../actions/orderAction';
import LoadingBox from '../components/loading';
import MessageBox from '../components/messageBox';


 const DetailOrderScreen = (props) => {
      let {_id}=useParams();
      // const navigate = useNavigate();
      let history=useHistory()
       const detailOrder=useSelector((state)=>state.detailorder)
       const {success,loading,error,order}=detailOrder
       console.log('Detail order',detailOrder)

       const quantityUpdate=useSelector((state)=>state.orderquantityupdate)
       const {success:updateSuccess,loading:updateLoading,error:updateError,order:orderUpdate}=quantityUpdate

     
       const employeeList = useSelector((state) => state.employeelist); 
       const {employees}=employeeList
    


        const updateOr = useSelector((state) => state.updateorder);
        const {error:assignOrderError,loading:assignOrderLoading,success:assignOrderSuccess,orders:orderRoleAsign}=updateOr
        // const userSignin = useSelector((state) => state.userSignin);
   const userSignin=localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null

   const { userInfo } = userSignin;
  // const {profilePicture}=userSignin


       const [filteredEmployee,setFilteredEmployee]=useState([])
       const dispatch = useDispatch();
        const [show, setShow] = useState(false);
        var [phaseArray,setPhases]=useState([]);
        const handleClose = () => setShow(false);
        // const handleShow = () => setShow(true);
        const [status,setState]=useState('')
        const[squantity,setQuantity]=useState('')
        const [phase,setPhase]=useState('')
        const [modalTitle,setModalTitle]=useState('')
        const [assigned_to,setAsign]=useState('')
        const [comulativeLogs,setCumulativeLog]=useState([])
        const [phaseType,setphaseType]=useState('')
        const [showDeleteModal, setShowDeleteModal] = useState(false);
        const handleDeleteModalClose = () => setShowDeleteModal(false);
        
        const [showApproveModal,settApproveModal]=useState(false)
        const handleCloseApproveModal=()=> settApproveModal(false)
        const updatedOrderAprove=()=>
              {
                dispatch(detailsOrder(_id))
 
              }

        const approve=()=> {
              if(order.graphicDesign.status =='completed' || order.graphicDesign.status==='Not started')
               {
                  return
               }
             settApproveModal(true)

        }

       const clearLog=()=>{
            console.log('clear log')
       }

       const designPhaseClose=()=> {

             setShowDeleteModal(true)
             

          }

    const assigRole=async ()=> {
              let fullName=assigned_to.split(' ')
          let selectedUser=employees.filter((e)=>e.firstName===fullName[0] && e.lastName===fullName[1] && e.middleName===fullName[2])
          let username=selectedUser[0].username
         
           
         await dispatch(assignOrder ({_id,assigned_to,phase,username}));
         dispatch(detailsOrder(_id))
             setShow(false)
               }



       const updateQuantity=async()=> {
        
            let phase=''
           if(userSignin.jobTitleId==='Printing')
             {
               phase='PR'
             }
             else if (userSignin.jobTitleId==='Finishing')
             {
               phase='FN'
             }
             else
             {
                phase='DL'
             }

          let jobTitleId=userSignin.jobTitleId
          let quantity=Number(squantity)
           await dispatch(updateOrderQuantity({_id,phase,quantity,jobTitleId}))
           dispatch(detailsOrder(_id))

       }



   const handlePhase=(e)=> {
            setShow(true)
           if(e==="GD")
             {
              setPhase('GD')
              setModalTitle('Assign Employee From Graphic Designer')
              let filteredDepartment=employees.filter((e)=>e.jobTitleId=='Designer')
              setFilteredEmployee(filteredDepartment)
             }
             else if (e==="PR") {
              setPhase('PR')
               setModalTitle('Assign Employee from Prnting ')
              let filteredDepartment=employees.filter((e)=>e.jobTitleId=='Printing')
              setFilteredEmployee(filteredDepartment)

             }
             else if (e==="FN") {
              setPhase('FN')
              setModalTitle('Assign Employee From Finishing ')
              let filteredDepartment=employees.filter((e)=>e.jobTitleId=='Finishing')
              setFilteredEmployee(filteredDepartment)

            }
            else{
              
              setPhase('DL')
              setModalTitle('Assign Employee From Delivery ')
              let filteredDepartment=employees.filter((e)=>e.jobTitleId=='Delivery')
              setFilteredEmployee(filteredDepartment)
            }
            
            
       
   }


   useEffect(()=> {
    
    dispatch(detailsOrder(_id))
    dispatch(listEmployee())
    },[dispatch])        

    useEffect(()=> {
      if(order)
           {

        var allLogs=[]
           for(var i=0;i<order.printing.log.length;i++) {
               allLogs.push(order.printing.log[i])
           }

           for(var i=0;i<order.finishing.log.length;i++) {
            allLogs.push(order.finishing.log[i])

           }

                for(var i=0;i<order.delivery.log.length;i++) {
                  allLogs.push(order.delivery.log[i])
      
                 }
            
             
             setCumulativeLog(allLogs)    
                }
           
          

    },[order])







    const updatePhase=()=> {

      history.push(`/gphase/${_id}`);


         }

         console.log('all logs',comulativeLogs)


  
  const saveUpdate=()=> {
        

          
     dispatch(assignOrder({_id,phase,assigned_to}));

        // ,[dispatch,productId,qty]) 

  }

  return (
    
    <>
    <Sidebar />
    <main className="main-wrap">
      <Header />
    
    {showApproveModal &&
      <ApproveModal showApproveModal={showApproveModal} _id={_id} closeMe={handleCloseApproveModal} updatedOrderAprove={updatedOrderAprove} status={'close'}
></ApproveModal>
    }

    {showDeleteModal &&
      <CloseModal showDeleteModal={showDeleteModal} _id={_id} closeMe={handleDeleteModalClose} 
      // status={'close'} modalTitle={'Are sure you finished graphic design completely ? '}
></CloseModal>
    }
    

    



      {/* <Pagination isShow={isShow} clickMe={togleShow}/> */}

      <section className="content-main">
     

      <Modal  show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title >{modalTitle}</Modal.Title>
          {assignOrderLoading && <LoadingBox variant="success"></LoadingBox>}
        {/* {assignOrderError && <MessageBox variant="danger">{assignOrderError}</MessageBox>}
        {assignOrderSuccess && <MessageBox variant="success">{assignOrderSuccess}</MessageBox>}  */}
        </Modal.Header>
        <Modal.Body>
        <Form>
     

    <Form.Group>
      <Form.Label></Form.Label>
      <Form.Select defaultValue="Choose..." onChange={(e)=>setAsign(e.target.value
      )}>
      <option value=''> Assign Employee</option>
        {
    employees && 
         filteredEmployee.map((option, index) => {
           return <option key={index} >
           {option.firstName} {option.lastName} {option.middleName}
           </option>
         })
         }
      
      </Form.Select>
    </Form.Group>
   
 <br></br>
   
    </Form>
   
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={assigRole}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
      {loading && <Spinner variant="danger">{error}</Spinner>}

      <div className="card">
        <header className="card-header p-3 Header-green">
          <div className="row align-items-center ">
            <div className="col-lg-6 col-md-6">
              <span>
                <i className="far fa-calendar-alt mx-2"></i>
                 {order && 
                 <b className="text-white">Ordered Date: {new Date(order.cartItems.itemOrederedDate).toDateString()}</b>

                 }
              </span>
              <br />
                {order && <small className="text-white" style={{paddingLeft:'30px'}}>
                Order ID: {order._id}
              </small>

                }
            </div>

            
            <div className="col-lg-6 col-md-6 ms-auto d-flex justify-content-end align-items-center">

              {/* { (order && !order.graphicDesign.assigned_to) &&
                <p className='badge btn-success' onClick={updatePhase}> ASign To Next Phase</p>                
              } &nbsp; */}
              { (order && !order.graphicDesign.assigned_to)&& (userSignin.jobTitleId==='Supper-Admin' || userSignin.jobTitleId==='Admin') &&
                <p className='badge btn-success' onClick={()=>handlePhase('GD')} style={{marginTop:'15px'}}> Assign Graphic Designer</p>    
                
              } &nbsp;
              { (order && order.graphicDesign.status !=='completed')&&(userSignin.jobTitleId==='Designer') &&
                <p className='badge btn-danger' onClick={designPhaseClose} style={{marginTop:'15px'}}>Close</p>                 
              }&nbsp;

              






                     {(order && order.graphicDesign.assigned_to) && ((userSignin.jobTitleId==='Supper-Admin' ||userSignin.jobTitleId==='Admin') && order.graphicDesign.status =='completed') &&   <select
                className="form-select d-inline-block"
                style={{ maxWidth: "200px" }} onChange={(e)=>handlePhase(e.target.value)}
              >
                <option>Asign Employee</option>
                <option value={"PR"}>Printing</option>
                <option value={"FN"}>Finishing</option>
                <option value={"DL"}>Delivering</option>
              </select>
                     }
            </div>
          </div>



      




        </header>
        <div className='phase' style={{marginTop:'10px'}}>

        <div className="row mb-5 order-info-wrap">
      
      <div className="col-md-6 col-lg-4">
        <article className="icontext align-items-start">
          <span className="icon icon-sm rounded-circle alert-success">
            <i className="text-success fas fa-user"></i>
          </span>
          <div className="text">
            <h6 className="mb-1"><strong>Customer</strong></h6>
             { order &&
              <p className="mb-1">
              {order.customerAddress.fullName} <br />
              <a href={`mailto:user@example.com`}>{order.customerAddress.email}</a>
            </p>
             }
          </div>
        </article>
      </div>
      
      <div className="col-md-6 col-lg-4">
        <article className="icontext align-items-start">
          <span className="icon icon-sm rounded-circle alert-success">
            <i className="text-success fas fa-map-marker-alt"></i>
          </span>
          <div className="text">
            <h6 className="mb-1"><strong>Deliver to :</strong></h6>
              {order && 
                <p className="mb-1">
                {order.customerAddress.address} <br />
                {order.customerAddress.streetAdress} 
            </p>
              }
          </div>
        </article>
      </div>
      <div className="col-md-6 col-lg-4">
        <article className="icontext align-items-start">
          <span className="icon icon-sm rounded-circle alert-success">
            <i className="text-success fas fa-map-marker-alt"></i>
          </span>
          <div className="text">
            <h6 className="mb-1"><strong>Order Description</strong></h6>
              {order && 
                <h6 className="mb-1">
                {order.cartItems.description} <br />
                
            </h6>
              }
          </div>
        </article>
      </div>
    
  
   
    </div>


        </div>
      
      </div>
      {updateLoading && <LoadingBox variant="success"></LoadingBox>}
        {updateError && <MessageBox variant="danger">{updateError}</MessageBox>}
        {updateSuccess && <MessageBox variant="success">{updateSuccess}</MessageBox>}      

  
      <div className='row'>

      <div className="col-md-12 col-lg-6">
         
           <div className='row'>
          <div className='col-md-8'>

          {((userSignin.jobTitleId!=='Admin') && (userSignin.jobTitleId!=='Supper-Admin') && userSignin.jobTitleId !=='Designer') &&(userSignin.jobTitleId!=='Delivery')  && 
          
          <div className="input-group">
            <input
             
              type="number"
              className="form-control"
              placeholder="Enter Quantity"
              onChange={(e)=>setQuantity(e.target.value)}
              
            />&nbsp;

            <button className="btn btn-primary bg" type="button" onClick={updateQuantity}>Add
              {/* <i className="far fa-plus"></i> */}
            </button>
          </div>
          }
          </div>
          
           </div>

        <br></br>
      <table className="table">
        <thead>
          <tr>
            
          {(userSignin.jobTitleId==='Supper-Admin' || userSignin.jobTitleId==='Admin')  &&
          <th>Phase</th>
          } 
            <th>status</th>

            <th>Working Employee</th>
           {userSignin.jobTitleId!=='Designer' && <th>Fnished Quantity</th>} 
            { userSignin.jobTitleId!=='Designer' &&
              <th>Remaining Quantity</th>

            }
             {/* {(userSignin.jobTitleId==='Supper-Admin') &&
             <th className="text-end">Action</th>
             } */}

            

          </tr>
        </thead>
        {/* Table Data */}
        <tbody>
       {(order && userSignin.jobTitleId !=='Supper-Admin' ) && ( userSignin.jobTitleId !=='Admin') &&
        <tr>

            {userSignin.jobTitleId==='Designer'? <td style={(order.graphicDesign.status==='completed' ? {color:"green",fontWeight:"bold",fontFamily: "'Helvetica Neue', 'sans-serif'"}:{} )}>{order.graphicDesign.status}</td>:
             userSignin.jobTitleId==='Printing'?<td style={(order.printing.status==='completed' ? {color:"green",fontWeight:"bold",fontFamily: "'Helvetica Neue', 'sans-serif'"}:{} )}>{order.printing.status}</td>:
             userSignin.jobTitleId==='Finishing'?<td style={(order.finishing.status==='completed' ? {color:"green",fontWeight:"bold",fontFamily: "'Helvetica Neue', 'sans-serif'"}:{} )}>{order.finishing.status}</td>:
             <td style={(order.delivery.status==='completed' ? {color:"green",fontWeight:"bold",fontFamily: "'Helvetica Neue', 'sans-serif'"}:{} )}>{order.delivery.status}</td>

            }
          
            {userSignin.jobTitleId==='Designer'? <td>{order.graphicDesign.assigned_to}</td>:
             userSignin.jobTitleId==='Printing'?<td>{order.printing.assigned_to}</td>:
             userSignin.jobTitleId==='Finishing'?<td>{order.finishing.assigned_to}</td>:
             <td>{order.delivery.assigned_to}</td>

            }

            {userSignin.jobTitleId ==='Designer'? <td></td>:
             userSignin.jobTitleId==='Printing'?<td>{order.printing.quantity}</td>:
             userSignin.jobTitleId==='Finishing'?<td>{order.finishing.quantity}</td>:
             <td>{order.delivery.quantity}</td>

            }

            {userSignin.jobTitleId==='Designer'? <td></td>:
             userSignin.jobTitleId==='Printing'?<td>{order.cartItems.quantity-order.printing.quantity}</td>:
             userSignin.jobTitleId==='Finishing'?<td>{order.cartItems.quantity-order.finishing.quantity}</td>:
             <td>{order.cartItems.quantity-order.delivery.quantity}</td>

            }


           {userSignin.jobTitleId==='Supper-Admin' &&
            <td className="text-end">
              <div className="dropdown">
                <Link
                  to="#"
                  data-bs-toggle="dropdown"
                  className="btn btn-light"
                >
                  <i className="fas fa-ellipsis-h"></i>
                </Link>
                <div className="dropdown-menu">
                  
                  <Link className="dropdown-item text-success" to="#" onClick={approve}>
                    Approve
                  </Link>
                </div>
              </div>
            </td>
            
           }

        </tr>

      }


      {(order && (userSignin.jobTitleId==='Supper-Admin' || userSignin.jobTitleId==='Admin')) &&
   
        <>
        
        <tr 
        style={(order.graphicDesign.status !== 'completed' ? {backgroundColor:"gray"}: {backgroundColor:"green"})} 
                 onClick={approve} disabled="true" >
        <td>Designing</td>
         <td>{order.graphicDesign.status}</td>
         <td>{order.graphicDesign.assigned_to}</td>
         <td></td>
         <td></td>
        </tr>
        <tr>
        <td>Printing</td>
         <td style={(order.printing.status==='completed' ? {color:"green",fontWeight:"bold",fontFamily: "'Helvetica Neue', 'sans-serif'"}:{} )}>{order.printing.status}</td>
         <td>{order.printing.assigned_to}</td>
         <td>{order.printing.quantity}</td>
         <td>{order.cartItems.quantity-order.printing.quantity}</td>
        </tr>
        <tr>
        <td>Finishing</td>
         <td style={(order.finishing.status==='completed' ? {color:"green",fontWeight:"bold",fontFamily: "'Helvetica Neue', 'sans-serif'"}:{} )}>{order.finishing.status}</td>
         <td>{order.finishing.assigned_to}</td>
         <td>{order.finishing.quantity}</td>
         <td>{order.cartItems.quantity-order.finishing.quantity}</td>
        </tr>
        <tr>
        <td>Delivery</td>
         <td style={(order.delivery.status==='completed' ? {color:"green",fontWeight:"bold",fontFamily: "'Helvetica Neue', 'sans-serif'"}:{} )}>{order.delivery.status}</td>
         <td>{order.delivery.assigned_to}</td>
         <td>{order.delivery.quantity}</td>
         <td>{order.cartItems.quantity-order.delivery.quantity}</td>

        </tr>

</>
      }






        </tbody>
      </table>
    </div>
  






    <div className="col-md-12 col-lg-6">
        
             <h6>Order Logs</h6>
              <br></br>
       <table className="table">
        <thead>
          <tr>
          <th>Phase</th>
            <th>Date</th>
            <th>Quantity</th>
            
            {/* {userSignin.jobTitleId==='Supper-Admin' &&
            <th className="text-end">Action</th>
            } */}
          </tr>
        </thead>
        {/* Table Data */}
        <tbody>
          {comulativeLogs &&
            comulativeLogs.map((log,index)=> {

            return (

              <tr key={log._id}>
              <td>{log. phaseId}</td>
                <td>{new Date(log.date).toDateString()}</td>
                <td>{log.quantity}</td>
                 
             {/* {userSignin.jobTitleId==='Supper-Admin' &&
             
             <td className="text-end">
              <div className="dropdown">
                <Link
                  to="#"
                  data-bs-toggle="dropdown"
                  className="btn btn-light"
                >
                  <i className="fas fa-ellipsis-h"></i>
                </Link>
                <div className="dropdown-menu"> */}
                  
                  {/* <Link className="dropdown-item text-danger" to="#" onClick={approve}>
                    Delete
                  </Link> */}
                {/* </div>
              </div>
            </td>
             
             
             
             
             }  */}
                </tr>



            )




            })


          }


        </tbody>
      </table>
    </div>
  
      </div>
          



    </section>

    </main>
  </>
  )
}
export default DetailOrderScreen;
