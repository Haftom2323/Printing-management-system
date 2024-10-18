import React,{useEffect,useState} from "react";
import {useDispatch,useSelector} from 'react-redux';
import { listOrder } from "../../actions/orderAction";
import { listCustomerData } from "../../actions/customerAction";
import { Link } from "react-router-dom";
import Chart from 'react-apexcharts';
const DashBoard = () => {

     const dispatch = useDispatch();
    const orderList = useSelector((state) => state.orderlist);
    const {orders,loading,error}=orderList
    const customerLists = useSelector((state) => state.customerlist);;
    const {customers}=customerLists
   
    const gdFinished=orders.filter((order)=>order.graphicDesign.status==='completed')

    const prFinished=orders.filter((order)=>order.printing.status==='completed')
      
      
    const finFinished=orders.filter((order)=>order.finishing.status==='completed')
    const dlFinished=orders.filter((order)=>order.delivery.status==='completed')

    const phases=['graphic design','Printing','Finishing','Delivery']
    const series=[gdFinished.length,prFinished.length,finFinished.length,dlFinished.length]


    useEffect(()=> {
      dispatch(listOrder())
      dispatch(listCustomerData())
      },[dispatch])

  return (
      
    <div className="row"  style={{ marginTop: "10px",maxWidth:"900px" }}>
      <div className="col-lg-2">
        <div className="">
         
        </div>
      </div>
      <div className="col-lg-4">
        <div className="card card-body mb-4 shadow-sm">
          <article className="icontext">
            <span className="icon icon-sm rounded-circle alert-success">
              <i className="text-success fas fa-bags-shopping"></i>
            </span>
            <div className="text">
              <h6 className="mb-1">Total Orders</h6>
              <Link to={`morder`}><span>{orders.length}</span></Link>
            </div>
          </article>
        </div>
      </div>
      <div className="col-lg-4"  style={{ marginRight: "0.01px" }}>
        <div className="card card-body mb-4 shadow-sm">
          <article className="icontext">
            <span className="icon icon-sm rounded-circle alert-warning">
              <i className="text-warning fas fa-users"></i>
            </span>
            <div className="text">
              <h6 className="mb-1">Total Customers</h6>
              <Link to={`mcustomer`}><span>{customers.length}</span></Link>
            </div>
          </article>
        </div>
      </div>

     <div className="row" style={{ marginTop: "100px",maxWidth:"400px" }}>
     <div className="col-md-4">
        <div className="">
        </div>
      </div>
        <div className="col-md-6">
        <Chart 
            type="donut"
            width={900}
            height={ 330}
            series={series}

            options={{
             labels:phases,
             title:{
                text:"Completed orders",
               // align:"center",
             },

             plotOptions:{
             pie:{
                donut:{
                    labels:{
                        show:true,
                        total:{
                            // show:true,
                            // showAlways:true,
                            //  formatter: () => '343',
                            fontSize:30,
                            color: '#f90000',
                        }
                    }
                }
             }

             },

             dataLabels:{
                enabled:true,
             }
            }}
            
            />

        </div>



     </div>




    </div>
  );
};

export default DashBoard;
