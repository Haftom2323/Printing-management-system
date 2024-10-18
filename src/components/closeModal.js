import React, {useEffect,useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { detailsOrder, updateGdStatus } from '../actions/orderAction';
import MessageBox  from './messageBox';
import LoadingBox from './loading'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CloseModal = (props) => {

    const dispatch=useDispatch()
    
    const orderGdUpdate=useSelector((state)=>state.oredergdupdate)
   const {success,loading,error,order}=orderGdUpdate
   const detailOrder=useSelector((state)=>state.detailorder)
       const {orderu}=detailOrder

    const dshow=props.showDeleteModal
    const _id=props._id
    let phase='GD'
    const status='close'
    const closeModal=()=> {
        props.closeMe()
    }
    const save=async()=> {
        await dispatch(updateGdStatus({_id,status,phase}))
        dispatch(detailsOrder(_id))
        closeModal()
    }
    
         




  return (
    
    <Modal  show={dshow} onHide={closeModal}>
    <Modal.Header closeButton>
      <Modal.Title style={{paddingLeft:'90px'}}><i className='icon fa fa-exclamation-triangle' style={{color:'yellow'}}></i></Modal.Title>
      {loading && <LoadingBox></LoadingBox>}
    {error && <MessageBox variant="danger">{error}</MessageBox>}
    {success && <MessageBox variant="success">{success}</MessageBox>}
    </Modal.Header>
    <Modal.Body style={{paddingLeft:'50px'}}>
    
    <h2><strong>Are You Sure?</strong></h2>
    <h4 style={{texAlign:'center'}}>Completely finished the graphic design?</h4>
    <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
              />
              {/* Same as */}
              <ToastContainer />
    </Modal.Body>
    <Modal.Footer>
      <Button variant="danger" onClick={closeModal}>
        Close
      </Button>
      <Button variant="primary" onClick={save}>
        Save
      </Button>
    </Modal.Footer>
  </Modal>








  )
}
export default CloseModal