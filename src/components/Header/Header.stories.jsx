import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../../theme';
import Weekdays from './Weekdays';

export default {
  title: 'Calendar/Weekdays',
  component: Weekdays,
};

export const primary = () => (
  <ThemeProvider theme={theme}>
    <Weekdays height="7rem" />
  </ThemeProvider>
);
