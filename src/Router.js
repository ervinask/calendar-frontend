import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Main from './Pages/Calendar';
import Register from './Pages/Register';
import Login from './Pages/Login';
import Home from './Pages/Home';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/calendar" element={<Main />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
