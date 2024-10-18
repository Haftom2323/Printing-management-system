import React from 'react'
import Sidebar from "./../components/sidebar";
import Header from '../components/header';
import DashBoard from '../components/home/dashboard';
const HomeScreen = () => {
    return (
      <>
      <Sidebar  />
      <main className="main-wrap">
        <Header />
         <DashBoard />
      </main>
      
      </>
    );
  };
  
  export default HomeScreen;

