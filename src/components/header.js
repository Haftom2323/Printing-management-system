import React ,{useState,useEffect}from 'react'
import {useDispatch,useSelector} from 'react-redux';
import { Link } from "react-router-dom";
import $ from "jquery";
import { signout } from "../actions/userAction";
const Header = () => {

 // const userSignin = useSelector((state) => state.userSignin);
   const userSignin=localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null

    const { userInfo } = userSignin;
   // const {profilePicture}=userSignin
   console.log('user Info',userSignin)
    const cart = useSelector((state) => state.cart);
   const {cartItems}=cart
   console.log('carts',cart)
   console.log('cccc',cartItems)
    
   //   console.log('profile user',userInfo.profilePicture)
    const dispatch=useDispatch()

    const signoutHandler = () => {
        dispatch(signout());
      };


  useEffect(() => {

     const toggle=()=> {

      $("[data-trigger]").on("click", function (e) {
        console.log('toglled nmb  bl bbvn omed')
      e.preventDefault();
      e.stopPropagation();
      var offcanvas_id = $(this).attr("data-trigger");
      $(offcanvas_id).toggleClass("show");
    });

    $(".btn-aside-minimize").on("click", function () {
        console.log('nnn')
      if (window.innerWidth < 768) {
        $("body").removeClass("aside-mini");
        $(".navbar-aside").removeClass("show");
      } else {
        // minimize sidebar on desktop
        $("body").toggleClass("aside-mini");
      }
    });
     }
    toggle()
 
  }, []);

  return (
    <header className="main-header navbar">
      
      <div className="col-nav">
        <button
          className="btn btn-icon btn-mobile me-auto"
          data-trigger="#offcanvas_aside"
        >
          <i className="md-28 fas fa-bars"></i>
        </button>
        <div className="cart-nav">
          { JSON.stringify(cartItems) !== '{}'  &&
          <li>
          <Link className="link-text" to="/cart" style={{marginRight:"100px"}}>Cart
                  {/* <span className="badgec"> </span> */}
              </Link>
          </li>
          }


        </div>
        <ul className="nav">  
         
           <li className="dropdown nav-item">
            <Link className="dropdown-toggle" data-bs-toggle="dropdown" to="#">
              {userSignin && (<img 
                className="img-xs rounded-circle"
                src={userSignin.profilePicture}
                alt={userSignin.username}
              />
              )
              }
            </Link>
            <div className="dropdown-menu dropdown-menu-end">
              <Link className="dropdown-item" to="/cprofile">
                Change Profile
              </Link>
              <Link className="dropdown-item" to="/cpassword">
                Change password
              </Link>
              <Link className="dropdown-item text-danger" to="#" onClick={signoutHandler}>
                Sign Out
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
