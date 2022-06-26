import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WrapperContext from './Context/WrapperContext';
import { getMonth, getWeek, getDay } from './util';

import Main from './Pages/Calendar';
const Router = () => {
  console.log(getDay());
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/calendar" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
