import React from 'react';

const GlobalContext = React.createContext({
  monthIndex: 0,
  setMonthIndex: (index) => {},
  registerError: '',
  setRegisterError: (error) => {},
  loginError: '',
  setLoginError: (error) => {},
});

export default GlobalContext;
