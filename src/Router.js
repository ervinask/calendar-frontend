import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Main from './Pages/Calendar';
import Register from './Pages/Register';
import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard';
import Settings from './Pages/Settings';
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/calendar" element={<Main />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
