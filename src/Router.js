import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import About from "./Pages/About";
import { getMonth } from "./util";
import Calendar from "./Pages/Calendar";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/calendar" element={<Calendar />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
