
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LandingPg from "./components/Landingpg";
import OurService from "./components/ourService";
import OurProcess from "./components/ourProcess";
import PartnerBrands from "./components/PartnerBrands";

import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";


function App() {
  return (
    
      <Router>
        <Routes>

          <Route path="/test"element={<PartnerBrands/>}/>
          <Route path="/" element={<LandingPg/>} />
          <Route path="/ourservice" element={<OurService />} />
          <Route path="/ourprocess" element={<OurProcess />} />
        </Routes>
      </Router>
   
  );
}

export default App;
