import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../../theme';

import Navigation from './Navigation';

export default {
  title: 'Navigation/Navigation',
  component: Navigation,
};

export const primary = () => (
  <ThemeProvider theme={theme}>
    <Navigation></Navigation>
  </ThemeProvider>
);
