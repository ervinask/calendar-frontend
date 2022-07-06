import React from 'react';
import SettingsInput from './SettingsInput';
import { ThemeProvider } from 'styled-components';
import theme from '../../theme';

export default {
  title: 'SettingsInput',
  component: SettingsInput,
};

export const Primary = () => {
  return (
    <ThemeProvider theme={theme}>
      <SettingsInput type="text" placeholder="example" handleChange={() => {}} />
    </ThemeProvider>
  );
};
