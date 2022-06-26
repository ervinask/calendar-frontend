import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WrapperContext from './Context/WrapperContext';

import Main from './Pages/Calendar';
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/calendar" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
