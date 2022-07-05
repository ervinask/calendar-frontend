import React from 'react';
import NavItem from './NavItem';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

export default {
  title: 'Navigation/NavItem',
  component: NavItem,
};

export const primary = () => <NavItem icon={faCoffee} />;
