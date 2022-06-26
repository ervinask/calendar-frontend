import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../../theme';
import Header from './Header';

export default {
  title: 'Header/Header',
  component: Header,
};

export const primary = () => (
  <ThemeProvider theme={theme}>
    <Header> ss</Header>
  </ThemeProvider>
);
