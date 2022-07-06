import React from 'react';
import SearchBar from './SearchBar';
import { ThemeProvider } from 'styled-components';
import theme from '../../theme';

export default {
  title: 'SearchBar',
  component: SearchBar,
};

export const Primary = () => {
  return (
    <ThemeProvider theme={theme}>
      <SearchBar></SearchBar>
    </ThemeProvider>
  );
};
