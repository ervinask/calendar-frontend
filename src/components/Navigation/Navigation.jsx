import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Navigation.styles';
import { NavigationSec } from '../NavigationSec/NavigationSec.styles';
import { NavItem } from '../NavItem/NavItem.styles';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faCalendar, faPlus, faGear, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';

const Navigation = ({ navWidth, handleClick }) => {
  return (
    <S.Navigation width={navWidth}>
      <NavigationSec background={(props) => props.theme.background.primary}>
        <NavItem>
          <FontAwesomeIcon icon={faPlus} color="#c9cbd1" />
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
          <FontAwesomeIcon icon={faArrowRightFromBracket} color="#c9cbd1" />
        </NavItem>
      </NavigationSec>
    </S.Navigation>
  );
};

Navigation.propTypes = {};

export default Navigation;
