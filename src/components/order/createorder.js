import React, {useEffect,useState } from 'react';
import {useDispatch,useSelector} from 'react-redux';
import Axios from 'axios'
import { addToCart } from '../../actions/cartAction';
import CheckoutSteps from '../CheckoutSteps';
//import { useNavigate } from "react-router-dom";
import { useHistory } from "react-router-dom";
 const CreateOrder = () => {
      const dispatch = useDispatch();
      //const navigate = useNavigate();
      let history = useHistory();
      const [serviceData,setServiceDta]=useState('');
      const carts = useSelector((state) => state.cart);
      const userInfo=localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null

    
      let serviceTypeName=[]
      if(serviceData) {
       for(var i=0;i<serviceData.length;i++)
       {
       
       serviceTypeName.push(serviceData[i].name)
       }
 
      }
     useEffect(() => {

      
        const getServiceType=async()=> {
          try {
            var { data } = await Axios.get('https://printing-service.onrender.com/api/service_type/fetch',  {headers: {
              Authorization: "Bearer " + userInfo.token
          }
         });
             setServiceDta(data)

          } catch (err) {
            console.log('Error occured when fetching service Tyepe');
          }
        }
      
        // Call named function
        getServiceType();
     
      }, [dispatch]);

      

    // const paymentMetodes=['---> select <---','cash','transfer']
    const [serviceType,setServiceType]=useState('')
    const [productName,setServiceName]=useState('')
    const [unitPrice,setUnitPrice]=useState('')
    const [quantity,setQuantity]=useState('')
    const [itemOrederedDate,setDate]=useState('')
    const [description,setDescription]=useState('')
    // const [paymentMethode,setPaymentMethode]=useState('')
    // const [recieved,setRecieved]=useState('')
    // const [paymentDescription,setPaymentDescription]=useState('')

    
    
    
    
     const submitHandler = (e) => {
          const floatRandom = Math.random()
          let min=1000
          let max=99999
          const difference = max - min
          const random = Math.round(difference * floatRandom)
          const uId = random + min
            console.log(uId)
      e.preventDefault();
      
    
      dispatch(addToCart({serviceType,productName,unitPrice,quantity,description,uId}));
         history.push('/placeorder');
       
        
      
    };
      
  return (

   <div className='createStock'>
         <CheckoutSteps step1 step2></CheckoutSteps>
     
         <div className="card shadow-sm">
        <div className="card-body">
        <form onSubmit={submitHandler}>
            <div className='row'>
            <div className="col-md-4">
          <label htmlFor="code" className="form-label">
            service Type
          </label>
          <select className="form-select form-control" onChange={(e) => setServiceType(e.target.value)}>
          <option value="" style={{fontFamily: "Times New Roman, Times, serif"}} > Select Service Type</option>
               {serviceTypeName.map((option, index) => {
                   return <option key={index} >
                       {option}
                   </option>
                 })}


         </select>
        </div>

       

        <div className="col-md-4">
        <label htmlFor="lastname" className="form-label">Unit Price</label>
        <input
          
          className="form-control py-2"
          type="number"
          id="lastname"
          value={unitPrice}
          onChange={(e) => setUnitPrice(e.target.value)}
        ></input>
      </div>

      <div className="col-md-4">
        <label htmlFor="phonenumber" className="form-label">Qantity</label>
        <input
          
          className="form-control py-2"
          type="number"
          id="phonenumber"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        ></input>
      </div>
                 

             </div>

     <br></br>

     <div className='row'>

     <div className="col-md-4">
        <label htmlFor="name" className="form-label">
          Order Description
        </label>
        <textarea
          type="text"
  
          id="mname"
          className="form-control"
          rows='4'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      {/* <div className="col-md-4">
        <label htmlFor="email" className="form-label">Service Ordered Date</label>
        <input
          
          className="form-control py-2"
          type="date"
          id="email"
          value={itemOrederedDate}
          onChange={(e) => setDate(e.target.value)}
        ></input>
      </div> */}

      <div className='col-md-2'>
              <div className="grid y-2" style={{marginTop:"65px"}}>
          <button className="btn btn-primary block b">continue</button>
        </div>
</div>






     

      </div>
      <div className='col-md-2'>
              <div className="grid y-2" style={{marginTop:"80px"}}>
          
        </div>
</div>
      

  <br></br>

  
 </form>

        </div>
        </div>


     



   </div>

  );
};
export default CreateOrder;
