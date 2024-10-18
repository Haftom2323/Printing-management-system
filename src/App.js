import "./App.css";
import "./Responsive.css"
import "./index.css"
import "./login.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import JobTitleScreen from "./screens/JobTitleScreen";
import EmployeeScreen from "./screens/EmployeeScreen";
import CustomerScreen from "./screens/CustomerScreen";
import ServiceTypeScreen from "./screens/ServiceTypeScreen";
import StockScreen from "./screens/stockScreen";
import OrderScreen from "./screens/OrderScreen";
import CustomerOrderInfoScreen from "./screens/CustomerIOrdernfoScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import MainOrderScreen from "./screens/MainOrderScreen";
import DetailOrderScreen from "./screens/DetailOrder";
import CartScreen from "./screens/CartScreen";
import MainJobScreen from "./screens/MainJobScreen";
import MainEmployeeScreen from "./screens/MainEmployeeScreen";
import MainCustomerScreen from "./screens/MainCustomerScreen";
import MainSettingScreen from "./screens/MainSettingScreen";
import MainUserScreen from "./screens/MainUserScreen";
import UserScreen from "./screens/userScreen";
import SigninScreen from "./components/user/signIn";
//  edit 
import MainStockScreen from "./screens/MainStockScreen";
import MainReportScreen from "./screens/MainReportScreen";
import EditCustomerScreen from "./screens/EditCustomerScreen";
import EditEmployeeScreen from "./screens/EditEmployeeScreen";
import EditStockScreen from "./screens/StockEditScreen";
import EditServiceTypeScreen from "./screens/EditServiceTypeScreen";
import EditJobTitleScreen from "./screens/EditJobTitleScreen";
import ChangeProfileScreen from "./screens/ChangeProfileScreen";
import ChangePasswordScreen from "./screens/ChangePasswordScreen";
import GraphicDesign from "./components/phase/graphoicDesign";
import DeliveryPhase from "./components/phase/deliveryPhase";
import PrintingPhase from "./components/phase/pringtinPhase";
import FinishingPhase from "./components/phase/finishingPhase";
import ForgottenPassword from "./components/user/forgottenPassword";
import ChangePassword from "./components/user/changePassword";
import ConfirmCode from "./components/user/confirmCode";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
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
      <Router>
        <Switch>
          <Route path="/" component={SigninScreen} exact />
          <Route path="/D" component={HomeScreen} />
          <Route path="/jobtitle" component={JobTitleScreen} />
          <Route path="/mainjob" component={MainJobScreen} />
          <Route path="/employee" component={EmployeeScreen} />
          <Route path="/memployee" component={MainEmployeeScreen} />
          <Route path="/user" component={UserScreen} />
          <Route path="/muser" component ={MainUserScreen} />
          <Route path="/cprofile" component ={ChangeProfileScreen} />
          <Route path='/cpassword' component={ChangePasswordScreen} />

          <Route path="/customer" component={CustomerScreen} />
          <Route path="/mcustomer" component={MainCustomerScreen}/>
          <Route path="/servicetype" component={ServiceTypeScreen} />
          <Route path="/mservicetype" component={MainSettingScreen} />
          <Route path="/stock" component={StockScreen} />
          <Route path="/mstock" component ={MainStockScreen} />
          <Route path="/customerinfo" component={CustomerOrderInfoScreen} />
          <Route path="/order" component={OrderScreen} />
          <Route path="/morder" component={MainOrderScreen} />
          <Route path="/placeorder" component={PlaceOrderScreen} />
          <Route path="/orderdetail/:_id" component={DetailOrderScreen} />
          <Route path="/cart" component={CartScreen} />
          <Route path='/mreport' component ={MainReportScreen} />

          <Route path="/editemployee/:_id" component={EditEmployeeScreen} />
          <Route path="/editservicetype/:_id" component={EditServiceTypeScreen} />
          <Route path="/editcustomer/:_id" component={EditCustomerScreen} />
          <Route path="/editjobtitle/:_id" component={EditJobTitleScreen} />
          <Route path="/editstock/:_id" component={EditStockScreen} />

          <Route path="/gphase/:_id" component ={GraphicDesign} />
          <Route path="/pphase/:_id" component ={PrintingPhase} />
          <Route path="/fphase/:_id" component ={FinishingPhase} />
          <Route path="/dphase/:_id" component ={DeliveryPhase} />

          <Route path="/f" component={ForgottenPassword} />
          <Route path="/reset_password/:activationToken?" component={ChangePassword} />
          <Route path="/confirm" component={ConfirmCode} />
          {/* />
          <Route path="*" component={NotFound} /> */} 
        </Switch>
      </Router>
    </>
        
    
   
  );
}

export default App;
