import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from '../components/Navigation/Navigation';
import Body from '../components/Body/Body';
import GlobalContext from '../Context/GlobalContext';
import SearchCon from '../components/SearchCon/SearchCon';
import Header from '../components/Header/Header';

const DashBoard = () => {
  const navigate = useNavigate();
  const { setCreateEventModal } = useContext(GlobalContext);

  let navWidth = '4rem';
  let headerHeight = '6rem';

  useEffect(() => {
    getEvents();
  }, []);

  setCreateEventModal(false);

  const token = localStorage.getItem('token');
  if (!token) {
    return navigate('/login');
  }

  return (
    <Body>
      <Header headerHeight={headerHeight} title={'Dashboard'}></Header>
      <Navigation navWidth={navWidth} navHeight={`calc(100vh - ${headerHeight})`} />
      <SearchCon></SearchCon>
    </Body>
  );
};

export default DashBoard;
