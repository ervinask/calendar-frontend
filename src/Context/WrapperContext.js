import React, { useState } from 'react';
import GlobalContext from './GlobalContext';
import dayjs from 'dayjs';

export default function WrapperContext(props) {
  const [monthIndex, setMonthIndex] = useState(dayjs().month());
  const [registerError, setRegisterError] = useState(null);
  const [loginError, setLoginError] = useState(null);

  return (
    <GlobalContext.Provider
      value={{ monthIndex, setMonthIndex, registerError, setRegisterError, loginError, setLoginError }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
}
