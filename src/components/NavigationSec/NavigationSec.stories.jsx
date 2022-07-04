import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../../theme';
import NavItem from '../NavItem/NavItem';
import NavigationSec from './NavigationSec';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faCalendar, faPlus, faGear, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';

export default {
  title: 'Navigation/NavigationSec',
  component: NavigationSec,
};

export const primary = () => (
  <ThemeProvider theme={theme}>
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
  </ThemeProvider>
);

export const secondary = () => (
  <ThemeProvider theme={theme}>
    <NavigationSec background={(props) => props.theme.background.quarterly}>
      <NavItem>
        <FontAwesomeIcon icon={faGear} color="#c9cbd1" />
      </NavItem>
      <NavItem>
        <FontAwesomeIcon icon={faArrowRightFromBracket} color="#c9cbd1" />
      </NavItem>
    </NavigationSec>
  </ThemeProvider>
);
