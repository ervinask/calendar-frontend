import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../../theme';
import FormSection from './FormSection';

export default {
  title: 'FormSection',
  component: FormSection,
};

export const primary = () => (
  <ThemeProvider theme={theme}>
    <FormSection> ss</FormSection>
  </ThemeProvider>
);
