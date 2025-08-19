
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LandingPg from "./components/Landingpg";
import OurService from "./components/ourService";
import OurProcess from "./components/ourProcess";

function App() {
  return (
    
      <Router>
        <Routes>
          <Route path="/" element={<LandingPg />} />
          <Route path="/ourservice" element={<OurService />} />
          <Route path="/ourprocess" element={<OurProcess />} />
        </Routes>
      </Router>
   
  );
}

export default App;
