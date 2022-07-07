import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from '../components/Navigation/Navigation';
import Body from '../components/Body/Body';
import GlobalContext from '../Context/GlobalContext';
import Header from '../components/Header/Header';
import ChangePassForm from '../components/ChangePassForm/ChangePassForm';
import TwoColumnCon from '../components/TwoColumnCon/TwoColumnCon';
import Statistics from '../components/Statistics/Statistics';
import { useEffect } from 'react';

const Settings = () => {
  const navigate = useNavigate();
  const { setCreateEventModal } = useContext(GlobalContext);
  setCreateEventModal(false);

  const token = localStorage.getItem('token');

  useEffect(() => {
    if (!token) {
      return navigate('/');
    }
  });

  return (
    <Body>
      <Header title={'Settings'}></Header>
      <Navigation />
      <TwoColumnCon>
        <ChangePassForm />
        <Statistics />
      </TwoColumnCon>
    </Body>
  );
};

export default Settings;
