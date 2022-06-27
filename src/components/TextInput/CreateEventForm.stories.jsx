import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../../theme';
import CreateEventForm from './CreateEventForm';

export default {
  title: 'CreateEventForm',
  component: CreateEventForm,
};

export const Primary = () => (
  <ThemeProvider theme={theme}>
    <CreateEventForm />
  </ThemeProvider>
);
