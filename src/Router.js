import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WrapperContext from './Context/WrapperContext';
import { getMonth, getWeek, getDay } from './util';

import Main from './Pages/Calendar';
import About from './Pages/About';
const Router = () => {
  console.log(getDay());
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/calendar" element={<Main />} />
        <Route exact path="/" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
