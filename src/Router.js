import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Pages/Home';
import About from './Pages/About';
import Main from './Pages/Calendar';
import Navigation from './components/Navigation/Navigation';
import { Body } from './components/Body/Body.styles';

const Router = () => {
  return (
    <BrowserRouter>
      <Body>
        <Navigation />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/calendar" element={<Main />} />
        </Routes>
      </Body>
    </BrowserRouter>
  );
};

export default Router;
