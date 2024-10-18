import React ,{useState,useEffect}from 'react'
import Sidebar from '../sidebar';
import Header from '../header';
import {useDispatch,useSelector} from 'react-redux';
import { Link } from "react-router-dom";
import LoadingBox from '../loading';
import MessageBox from '../messageBox';
import Spinner from '../spinner';
import { useParams } from "react-router-dom";
import { detailsProduct,updateProduct } from '../../actions/stockAction';
import { listServiceType } from '../../actions/serviceTypeAction';  
const EditStock=(props)=> {

    let {_id}=useParams();
    const productDetail=useSelector((state)=>state.productdetail)
    console.log('detail order',productDetail)
    const {success,loading,error,product}=productDetail
    const serviceTypeList = useSelector((state) => state.listservicetype);
   
  const {serviceTypes}=serviceTypeList

    const [description,setDescription]=useState('')
    const [code, setServiceCode]=useState('')
    const [quantity,setQuantity]=useState('')
    const [unitPrice,setUnitPrice]=useState('')
    const[measurement,setMeasurment]=useState('')
    const [serviceType,setServiceType]=useState('') 
    const options = ['Kg', 'g','m'];
    const dispatch=useDispatch()
    
    const productUpdate = useSelector((state) => state.productupdate);
          const {
            loading: loadingUpdate,
            error: errorUpdate,
            success: successUpdate,
          } = productUpdate;


   
     useEffect(() => {
            console.log('entereed to useEfect')
              const load = async () => {
                try {
                  dispatch(detailsProduct(_id))
                  dispatch(listServiceType())
                      
                }
                catch(error)
                {


                }
                
            };
              load();
            
              }, []);


      useEffect(()=> {

            if(product) {

               
                setServiceCode(product.code)
                setDescription(product.description)
                setUnitPrice(product.unitPrice)
                setQuantity(product.quantity)
                setMeasurment(product.measurement)
                setServiceType(product.serviceType)
            }

        },[product])
      const submitHandler = (e) => {
        e.preventDefault();
        if (code) {
    
       dispatch(updateProduct({_id,code,description,unitPrice,quantity,measurement,serviceType}));
          
        } else {
          alert('code  and descrption is required');
        }
      };



  return (
    <div>


    
{loadingUpdate && <LoadingBox></LoadingBox>}
        {errorUpdate && <MessageBox variant="danger">{errorUpdate}</MessageBox>}
      
        {loading && <Spinner variant="success"></Spinner>}
        {error && <MessageBox variant="danger">{error}</MessageBox>}
        {successUpdate && <MessageBox variant="success">{successUpdate}</MessageBox>}
 
        {product &&
        <form onSubmit={submitHandler}>
        <div className='row'>
            <div className="col-md-4">
          <label htmlFor="code" className="form-label">
            Code
          </label>
          <input
            type="text"
            defaultValue={product.code}      
            className="form-control py-2"
            id="code"
            onChange={(e) => setServiceCode(e.target.value)}
          />
        </div>

           

                  <div className="col-md-4">
          <label htmlFor="code" className="form-label">
            Unit Price
          </label>
          <input
            type="text"
            defaultValue={product.unitPrice}
            className="form-control py-2"
            id="PRICE"
            onChange={(e) => setUnitPrice(e.target.value)}
          />
        </div>  


        { serviceTypes.length > 0  &&
      <div className="col-md-4">
        <label htmlFor="id" className="form-label">Service Type</label>
        <div className="col-lg-12 col-6 col-md-6">
              <select className="form-select" defaultValue={product.serviceType} onChange={(e) => setServiceType(e.target.value)}>
              <option value="" style={{fontFamily: "Times New Roman, Times, serif"}} > Select Service Type</option>
                    {serviceTypes.map((s, index) => {
                        return <option key={index} >
                            {s.name}
                        </option>
                      })}


              </select>
              
            </div>
      </div>

     }
             </div>

     <br></br>
   <div className='row'>

   <div className="col-md-4">
          <label htmlFor="quantity" className="form-label">
            Quantity
          </label>
          <input
            type="text"
            defaultValue={product.quantity}
            className="form-control py-2"
            id="qantity"
            onChange={(e) => setQuantity(e.target.value)}
          />
        </div>
        <div className="col-md-4">
        <label htmlFor="id" className="form-label">Measurment </label>
        <div className="col-lg-12 col-6 col-md-6">
        <select className="form-select form-control" defaultValue={product.measurement} onChange={(e) => setMeasurment(e.target.value)}>
        <option value="" style={{fontFamily: "Times New Roman, Times, serif"}} > Select Measurment</option>

               {options.map((option, index) => {
                   return <option key={index} >
                       {option}
                   </option>
                 })}


         </select>
              
            </div>


            
      </div>

      <div className="col-md-4">
          <label className="form-label">Description</label>
          <textarea
            defaultValue={product.description}
            className="form-control"
            rows="4"
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>


       

   </div>

  <div className='row'>
  <div className='col-md-4'>

  </div>
     
  <div className="col-md-3" style={{ marginTop: "1px"}}>
          <button className="btn btn-primary block">Save</button>
        </div>

    
      </div>
 
    <br></br>
    <div className='col-md-3'></div>
</form>
         





        

    }
    </div>
  )
}
export default EditStock