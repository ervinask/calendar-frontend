import React from 'react';

const GlobalContext = React.createContext({
  monthIndex: 0,
  setMonthIndex: (index) => {},
  registerError: '',
  setRegisterError: (error) => {},
  loginError: '',
  setLoginError: (error) => {},
  event: '',
  setEvent: () => {},
  getEvent: [],
  setGetEvent: () => {},
});

export default GlobalContext;
