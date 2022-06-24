import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../../theme';
import NavItem from './NavItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

export default {
  title: 'Navigation/NavItem',
  component: NavItem,
};

export const primary = () => (
  <NavItem>
    <FontAwesomeIcon icon={faCoffee} />
  </NavItem>
);