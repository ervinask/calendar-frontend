import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../../theme';
import { getMonth } from '../../util';
import Calendar from './Calendar';

export default {
  title: 'Calendar/Calendar',
  component: Calendar,
};

export const primary = () => (
  <ThemeProvider theme={theme}>
    <Calendar month={getMonth()} />
  </ThemeProvider>
);
