import { createStore, compose, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import { employeeReducer,deleteEmployeeReducer,employeeUpdateReducer} from './reducers/employereducer';
import { JobTitleReducer } from './reducers/jobtitlereducer';
import { customerReducer  ,customerDetailsReducer } from './reducers/customerreducer';
import { cartReducer } from './reducers/cartreducer';
import { customerListReducer,customerUpdateReducer,deleteCustomerReducer } from './reducers/customerreducer';
import { jobTitleListReducer,jobTitleDetailsReducer,deleterJobTitleReducer } from './reducers/jobtitlereducer';
import { listEmployeeReducer,employeeDetailsReducer } from './reducers/employereducer';
import { orderListReducer,orderCreatteReducer,orderDetailsReducer,deleteOrderrReducer, updateOrderrReducer,
          orderLogListReducer,deleteOrderLogReducer,updateOrderGdStatusReducer,orderUpdateQuantityReducer
             } from './reducers/orderreducer';
import { createServiceTypeReducer,listServiceTypeReducer,serviceDetailsReducer } from './reducers/servicetypereducer';
import { userSigninReducer,userRegisterReducer,changePasswordReducer,changeProfileReducer,resetEmailReducer,resetPasswordReducer} from './reducers/userreducer';
import { productReducer,productListReducer,productDetailsReducer,productUpdateReducer,deleteProductReducer} from './reducers/stockereduce';
import { reportListReducer } from './reducers/reportreducer';
import { jobTitleUpdateReducer } from './reducers/jobtitlereducer';
import { serviceTypeUpdateReducer,deleteServiceTypeReducer } from './reducers/servicetypereducer';

const initialState={
  // userSignin: {
  //   userInfo: localStorage.getItem('userInfo')
  //     ? JSON.parse(localStorage.getItem('userInfo'))
  //     : null,
  // },
  cart: {
    cartItems: localStorage.getItem('cartItems')
      ? JSON.parse(localStorage.getItem('cartItems'))
      : {},
  },
};




const reducer =combineReducers({
   jobtitle:JobTitleReducer,
   jobdetail:jobTitleDetailsReducer,
   jobtittleupdate:jobTitleUpdateReducer,
   deletejobtitle:deleterJobTitleReducer,
   employecreate:employeeReducer,
   employeedetail:employeeDetailsReducer,

   customerreducer:customerReducer,
   detailcustomer:customerDetailsReducer,
   deletecustomer:deleteCustomerReducer,
   createproduct:productReducer,
   productlist:productListReducer,
   productdetail:productDetailsReducer,
   productupdate:productUpdateReducer,
   productdelete:deleteProductReducer,
   reportlist:reportListReducer,
   cart:cartReducer,
   customerlist:customerListReducer,
   customerupdate:customerUpdateReducer,
   jobtitlelist:jobTitleListReducer,
   employeelist:listEmployeeReducer,
   employeeupdate:employeeUpdateReducer,
   employeedelete:deleteEmployeeReducer,
   orderlist:orderListReducer,
   updateorder:updateOrderrReducer,
   orderdelete:deleteOrderrReducer,
   orderquantityupdate:orderUpdateQuantityReducer,
   loglist:orderLogListReducer,
   logdelete:deleteOrderLogReducer,
   oredergdupdate:updateOrderGdStatusReducer,

    createservicetype:createServiceTypeReducer,
    listservicetype:listServiceTypeReducer,
    servicedetail:serviceDetailsReducer,
    deleteservice:deleteServiceTypeReducer,
    serviceupdate:serviceTypeUpdateReducer,
    ordercreate:orderCreatteReducer,
    detailorder:orderDetailsReducer,
    userSignin:userSigninReducer,
    userRegister: userRegisterReducer,
    changepassword:changePasswordReducer,
    changeprofile:changeProfileReducer,
    resetemail:resetEmailReducer,
    resetpassword:resetPasswordReducer,

   
})
  const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  console.log('10')
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);
export default store;

