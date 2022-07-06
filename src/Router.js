import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Main from './Pages/Calendar';
import Register from './Pages/Register';
import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/calendar" element={<Main />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
