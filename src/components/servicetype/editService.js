import React ,{useState,useEffect}from 'react'
import Sidebar from '../sidebar';
import Header from '../header';
import {useDispatch,useSelector} from 'react-redux';
import { Link } from "react-router-dom";
import LoadingBox from '../loading';
import { updateJobTitle } from '../../actions/jobTitleCreateAction';
import MessageBox from '../messageBox';
import Spinner from '../spinner';
import { useParams } from "react-router-dom";
import { detailsServiceType, updateServiceType } from '../../actions/serviceTypeAction';

const  EditService=(props)=> {

  let {_id}=useParams();
  const serviceDetail=useSelector((state)=>state.servicedetail)
  console.log('detail order',serviceDetail)
  const {success,loading,error,service}=serviceDetail
  const serviceTypeUpdate = useSelector((state) => state.serviceupdate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = serviceTypeUpdate;
 console.log('cccccccccccccccccc',serviceTypeUpdate)

  const [name,setName]=useState('')
  const [description,setDescription]=useState('')
  const [code, setServiceCode]=useState('')
  const [hasDefinedPrice,setDefinedPrice]=useState('')
  const [unitPrice,setUnitPrice]=useState('')
  const dispatch = useDispatch();

  const options = ['true', 'false'];

    
    useEffect(() => {
      console.log('entereed to useEfect')
        const load = async () => {
          try {
            dispatch(detailsServiceType(_id))
            
                
          }
          catch(error)
          {


          }
          
      };
        load();
      
        }, []);




        useEffect(()=> {

          if(service) {

              setServiceCode(service.code)
              setName(service.name)
              setDefinedPrice(service.hasDefinedPrice)
              setUnitPrice(service.unitPrice)
              setDescription(service.description)
          }

      },[service])

    const submitHandler = (e) => {
      e.preventDefault();
      if (code && name) {
  
    dispatch(updateServiceType({_id,name,code,description,hasDefinedPrice,unitPrice}));
        
      } else {
        alert('Name and descrption is required');
      }
    };



  return (
    <div>

{loadingUpdate && <LoadingBox></LoadingBox>}
        {errorUpdate && <MessageBox variant="danger">{errorUpdate}</MessageBox>}
      
        {loading && <Spinner variant="success"></Spinner>}
        {error && <MessageBox variant="danger">{error}</MessageBox>}
        {successUpdate && <MessageBox variant="success">{successUpdate}</MessageBox>}
 
        {service &&

          <form onSubmit={submitHandler}>

<div className='row'>

<div className="col-md-4">
      <label htmlFor="sname" className="form-label">
        Service Type Name
      </label>
      <input
        type="text"
        defaultValue={service.name}
        placeholder="Type here"
        className="form-control py-2"
        id="sname"
        onChange={(e) => setName(e.target.value)}
      />
    </div>
    <div className="col-md-4">
      <label htmlFor="code" className="form-label">
        Code
      </label>
      <input
        type="text"
        defaultValue={service.code}
        placeholder="Type here"
        className="form-control py-2"
        id="code"
        onChange={(e) => setServiceCode(e.target.value)}
      />
    </div>

    <div className="col-md-4">
    <label htmlFor="id" className="form-label">Fixed Price </label>
    <div className="col-lg-12 col-6 col-md-6">
    <input class="form-check-input" type="radio"  value="true" onChange={(e)=>setDefinedPrice(e.target.value)}>
         </input>&nbsp;&nbsp;
         <label class="form-check-label" for="inlineRadio1">true</label>&nbsp;&nbsp;
         &nbsp;
           
           
         <input class="form-check-input" type="radio"  value="false" onChange={(e)=>setDefinedPrice(e.target.value)}>
         </input> &nbsp;&nbsp;
         <label class="form-check-label" for="inlineRadio1">false</label>
          
        </div>
  </div>

</div>

<br></br>
<div className='row'>
<div className="col-md-4">
      <label className="form-label">Description</label>
      <textarea
        defaultValue={service.description}
        className="form-control"
        rows="4"
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
    </div>
<div className="col-md-4"  style={{ marginTop: "30px" }}>
      <label htmlFor="code" className="form-label">
        Unit Price
      </label>
      <input
        type="text"
        defaultValue={service.unitPrice}
        className="form-control py-2"
        id="PRICE"
        onChange={(e) => setUnitPrice(e.target.value)}
      />
    </div>


    <div className="col-md-2" style={{ marginTop: "60px" }}>
      <button className="btn btn-primary block">Save</button>
    </div>
   
    
   
</div>

<br></br>
    <div className="" style={{marginLeft:"80px"}}>
    
    </div>

 </form>
      }
    </div>
  )
}
export default EditService