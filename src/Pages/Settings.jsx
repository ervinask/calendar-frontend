import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from '../components/Navigation/Navigation';
import Body from '../components/Body/Body';
import GlobalContext from '../Context/GlobalContext';
import Header from '../components/Header/Header';
import ChangePassForm from '../components/ChangePassForm/ChangePassForm';
import { TwoColumnCon } from '../components/TwoColumnCon/TwoColumnCon.styles';
import SuccessModal from '../components/SuccessModal/SuccessModal';

const Settings = () => {
  const navigate = useNavigate();
  const { setCreateEventModal } = useContext(GlobalContext);
  const token = localStorage.getItem('token');
  setCreateEventModal(false);

  if (!token) {
    return navigate('/login');
  }

  return (
    <Body>
      <Header title={'Settings'}></Header>
      <Navigation />
      <TwoColumnCon>
        <ChangePassForm />
      </TwoColumnCon>
      <SuccessModal />
    </Body>
  );
};

export default Settings;
