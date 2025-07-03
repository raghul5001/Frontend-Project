import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../Components/Home/Home";
import Homepg from "../Components/Homepg/Homepg";


const Routemain = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/homepg" element={<Homepg />} />
        </Routes>
      </Router>
    </div>
  );
};

export default Routemain;