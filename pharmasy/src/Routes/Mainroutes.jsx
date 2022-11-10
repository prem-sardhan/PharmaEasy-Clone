import React from "react";
import { Routes, Route } from "react-router-dom";
import Cart from "../Pages/Cart/Cart";
import HealthCare from "../Pages/HealthCare/HealthCare";
import LabTest from "../Pages/LabTest/LabTest";


import OrderMedicines from "../Pages/OrderMedicines/OrderMedicines";
import RtpcrTest from "../Pages/RtpcrTest/RtpcrTest";
import { Navbar } from "../Prem/Nav_Components/Navbar";
import {Home} from "../LokeshPages/Home";


const Mainroutes = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
    
        <Route path="/orderMed" element={<OrderMedicines />} />
        <Route path="/HealthCare" element={<HealthCare />} />
        <Route path="/cart" element={<Cart />} />
       
        <Route path="/labtest" element={<LabTest />} />
        <Route path="/rtpcr" element={<RtpcrTest />} />
      
       
        
      
      </Routes>
     
    </div>
  );
};

export default Mainroutes;
