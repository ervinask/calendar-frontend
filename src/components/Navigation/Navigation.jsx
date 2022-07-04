import React, { useState } from 'react';
import PropTypes from 'prop-types';
import * as S from './Navigation.styles';
import { useNavigate } from 'react-router-dom';
import NavigationSec from '../NavigationSec/NavigationSec';
import NavItem from '../NavItem/NavItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faCalendar, faPlus, faGear, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import CreateEventForm from '../TextInput/CreateEventForm';
const Navigation = ({ navWidth, navHeight }) => {
  const navigate = useNavigate();
  const [event, setEvent] = useState(false);

  const logout = () => {
    localStorage.removeItem('token');
    return navigate('/login');
  };

  const createEvent = () => {
    setEvent(!event);
    console.log(event);
  };

  return (
    <S.Navigation width={navWidth} height={navHeight}>
      <NavigationSec background={(props) => props.theme.background.primary}>
        <NavItem>
          <FontAwesomeIcon icon={faPlus} color="#c9cbd1" onClick={() => createEvent()} />
        </NavItem>
        <NavItem>
          <FontAwesomeIcon icon={faCalendar} color="#c9cbd1" />
        </NavItem>
        <NavItem>
          <FontAwesomeIcon icon={faList} color="#c9cbd1" />
        </NavItem>
      </NavigationSec>
      <NavigationSec background={(props) => props.theme.background.quarterly}>
        <NavItem>
          <FontAwesomeIcon icon={faGear} color="#c9cbd1" />
        </NavItem>
        <NavItem>
          <FontAwesomeIcon icon={faArrowRightFromBracket} color="#c9cbd1" onClick={() => logout()} />
        </NavItem>
      </NavigationSec>
      {event && <CreateEventForm />}
    </S.Navigation>
  );
};

Navigation.propTypes = { navWidth: PropTypes.string.isRequired, navHeight: PropTypes.string.isRequired };

export default Navigation;
