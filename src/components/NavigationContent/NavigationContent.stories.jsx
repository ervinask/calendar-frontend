import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../../theme';
import NavigationContent from './NavigationContent';

export default {
  title: 'Calendar/NavigationContent',
  component: NavigationContent,
};

export const primary = () => (
  <ThemeProvider theme={theme}>
    <NavigationContent day="SUN" />
  </ThemeProvider>
);
