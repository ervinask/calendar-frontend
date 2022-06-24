import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../../theme';
import Calendar from './Calendar';
import { getMonth } from '../../util';

export default {
  title: 'Calendar/Calendar',
  component: Calendar,
};

export const primary = () => (
  <ThemeProvider theme={theme}>
    <Calendar month={getMonth()} />
  </ThemeProvider>
);
