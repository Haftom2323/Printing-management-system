import React, { useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
// import { useNavigate } from "react-router-dom";
import { signin } from '../../actions/userAction';
import LoadingBox from '../loading';
import MessageBox from '../messageBox';


const SigninScreen=(props)=> {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const userSignin = useSelector((state) => state.userSignin);
  console.log('user signin',userSignin)
  const { userInfo, loading, error } = userSignin;
  // const navigate = useNavigate();

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signin(username, password));
  };
  useEffect(() => {
    // change background color with a random color
    // const color = Math.floor(Math.random()*16777215).toString(16);
    // document.body.style.background = 'gray';
  });
   if(userInfo)
      {
       props.history.push('/D');
      }
  return (
    <div>
       <div>
        
       <form onSubmit={submitHandler} >


       <div
            className="modal signInForm"
            id="exampleModal"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
            style={{position: "relative", display: "block"}}
          >

     <div className="modal-dialog" role="document">
              <div className="modal-content border-0 shadow-sm">
                <br />
                <div className="modal-header border-bottom-0 m-auto" style={{marginTop:"0px"}}>
                  <h2 style={{color:"rgb(255, 0, 106)"}}>  </h2>

                  <div className="logo">
      <img style={{ height: "70px",width
      :'60px'}} src="../images/logopg.jpg" alt='Logo'/>
    </div>
                </div>
             

                <div className="modal-body">
                  <div className="row">
                    <div className="col-md-12">
                    {loading && <LoadingBox variant="success"></LoadingBox>}
                    {error && <MessageBox variant="danger">{error}</MessageBox>}
                    </div>
                  </div>
                   

                   <div className="row">
                    <div className="col-md-12">
                      <div className="form-group" >
                        <label htmlFor="exampleInput1" className="required">User Name</label>
                        <div className="input-group">
                          <span
                            className="input-group-addon bg-white border border-right-0 pt-2 px-2 text-muted rounded-right"
                          >
                            <i className="fas fa-user"></i>
                          </span>
                          <input
                            className="form-control border-left-0"
                            type="text"
                            onChange={(e) => setUserName(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <br></br>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group">
                        <label htmlFor="exampleInput1" className="required">Password</label>

                        <div className="input-group">
                          <span
                            className="input-group-addon bg-white border border-right-0 pt-2 px-2 text-muted rounded-left"
                          >
                            <i className="fas fa-key"></i>
                          </span>
                          <input
                            className="form-control border-left-0"
                            type="password"
                            onChange={(e) => setPassword(e.target.value)}
                            
                          />
                        </div>
                        <br />
                        <div className="form-text" style={{paddingLeft:"30px"}}>
                          <a  className="form-text">
                            <Link to={`/f`}>
                            <i className="fas fa-angle-right"></i>
                            Forgotten Password ?
                            </Link>
                          </a>
                        </div>

                    
                      </div>
                    </div>
                  </div>











                 
                </div>

                <div className="modal-footer d-inline small">
                  <div className="text-center">
                    <button  className="btn btn-primary block w-100" > 
                      <span>
                        {/* <span className="spinner-grow spinner-grow-sm"></span>
                        <span className="spinner-grow spinner-grow-sm"></span>
                        <span className="spinner-grow spinner-grow-sm"></span> */}
                        <span>Log In</span>
                        {/* <span className="spinner-grow spinner-grow-sm"></span>
                        <span className="spinner-grow spinner-grow-sm"></span>
                        <span className="spinner-grow spinner-grow-sm"></span> */}
                      </span>
                     
                    </button>
                  </div>
                </div>





   </div>
   </div>








          </div>







       </form>





       </div>
    </div>
  );
}
export default SigninScreen;