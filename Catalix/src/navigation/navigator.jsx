import * as React from "react";
import Analitics from "../pages/analitics";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import Sidebar from "../component/sidebar/slidebar";

const Navigator = () => {
  return (
    <Router>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/analitics" element={<Analitics />} />
        </Routes>
      </Sidebar>
    </Router>
  );
};
export default Navigator;
