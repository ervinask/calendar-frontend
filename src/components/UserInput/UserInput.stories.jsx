import React from 'react';
import UserInput from './UserInput';
import { ThemeProvider } from 'styled-components';
import theme from '../../theme';

export default {
  title: 'UserInput',
  component: UserInput,
};

export const Primary = () => {
  return (
    <ThemeProvider theme={theme}>
      <UserInput label="Username" type="text" placeholder="example" handleChange={() => {}} />
    </ThemeProvider>
  );
};
