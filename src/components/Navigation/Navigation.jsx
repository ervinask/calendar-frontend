import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import * as S from './Navigation.styles';
import { useNavigate } from 'react-router-dom';
import GlobalContext from '../../Context/GlobalContext';
import NavigationSec from '../NavigationSec/NavigationSec';
import NavItem from '../NavItem/NavItem';
import CreateEventForm from '../TextInput/CreateEventForm';

import { faList, faCalendar, faPlus, faGear, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';

const Navigation = ({ navWidth, navHeight }) => {
  const navigate = useNavigate();
  const { event, setEvent } = useContext(GlobalContext);

  const logout = () => {
    localStorage.removeItem('token');
    return navigate('/login');
  };

  const calendar = () => {
    return navigate('/calendar');
  };

  const dashboard = () => {
    return navigate('/dashboard');
  };

  const createEvent = () => {
    setEvent(!event);
  };

  return (
    <S.Navigation width={navWidth} height={navHeight}>
      <NavigationSec background={(props) => props.theme.background.primary}>
        <NavItem icon={faPlus} handleClick={() => createEvent()} />
        <NavItem icon={faCalendar} handleClick={() => calendar()} />
        <NavItem icon={faList} handleClick={() => dashboard()} />
      </NavigationSec>
      <NavigationSec background={(props) => props.theme.background.quarterly}>
        <NavItem icon={faGear} />
        <NavItem icon={faArrowRightFromBracket} handleClick={() => logout()} />
      </NavigationSec>
      {event && <CreateEventForm />}
    </S.Navigation>
  );
};

Navigation.propTypes = {
  navWidth: PropTypes.string.isRequired,
  navHeight: PropTypes.string.isRequired,
};

export default Navigation;
