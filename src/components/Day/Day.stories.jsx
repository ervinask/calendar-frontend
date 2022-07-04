import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../../theme';
import dayjs from 'dayjs';
import Day from './Day';

export default {
  title: 'Calendar/Day',
  component: Day,
};

export const primary = () => (
  <ThemeProvider theme={theme}>
    <Day day={dayjs()} />
  </ThemeProvider>
);

export const secondary = () => (
  <ThemeProvider theme={theme}>
    <Day day={dayjs(2009, 4, 15)} />
  </ThemeProvider>
);
