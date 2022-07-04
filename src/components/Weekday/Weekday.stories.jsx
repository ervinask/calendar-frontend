import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../../theme';
import Weekday from './Weekday';

export default {
  title: 'Calendar/Weekday',
  component: Weekday,
};

export const primary = () => (
  <ThemeProvider theme={theme}>
    <Weekday day="SUN" />
  </ThemeProvider>
);
