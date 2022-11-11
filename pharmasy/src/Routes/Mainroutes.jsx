import React from "react";
import { Routes, Route } from "react-router-dom";
import CartPage from "../pages/Cart/cartPage";

import HealthCarePage from "../pages/HealthCare/HealthCarePage";
import LabTestPage from "../pages/LabTest/LabTestPage";
import {Home} from "../LokeshPages/Home"
import SingleProductPage from "../pages/singleProductPage/SingleProductPage";
import ProductsPage from "../pages/productspage/productspage"
// import OrderMedicines from "../Pages/OrderMedicines/OrderMedicines";

// import RtpcrTest from "../Pages/RtpcrTest/RtpcrTest";
import { Navbar } from "../Prem/Nav_Components/Navbar";



const Mainroutes = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
    
        {/* <Route path="/orderMed" element={<OrderMedicines />} /> */}
        <Route path="/HealthCare" element={<HealthCarePage />} />
        <Route path="/cart" element={<CartPage />} />
       
        <Route path="/labtest" element={<LabTestPage />} />

        <Route path="/product" element={<ProductsPage />} />
        <Route path="/singleproduct" element={<SingleProductPage />} />
        
        {/* <Route path="/rtpcr" element={<RtpcrTest />} /> */}
      
       
        
      
      </Routes>
      
     
    </div>
  );
};

export default Mainroutes;
