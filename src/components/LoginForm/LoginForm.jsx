import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import * as S from './LoginForm.styles';
import Button from '../Button/Button';
import Notification from '../Notification/Notification';
import UserInput from '../UserInput/UserInput';
import { Link } from 'react-router-dom';
import GlobalContext from '../../Context/GlobalContext';

const LoginForm = ({ handleSubmit, title }) => {
  const [loginValues, updateLoginValues] = useState();
  const { loginError } = useContext(GlobalContext);
  return (
    <>
      <S.LoginForm
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(loginValues);
        }}
      >
        {title && <S.FormTitle>{title}</S.FormTitle>}
        <UserInput
          handleChange={(email) => {
            updateLoginValues({ ...loginValues, email: email });
          }}
          type="email"
          placeholder="example@example.com"
          label="Email"
        ></UserInput>
        <UserInput
          handleChange={(password) => {
            updateLoginValues({ ...loginValues, password: password });
          }}
          type="password"
          placeholder="*********"
          label="Password"
        ></UserInput>
        {loginError && <Notification>{loginError}</Notification>}
        <Button type="submit">Login</Button>
        <S.Register>
          <Link to="/register">Create an account</Link>
        </S.Register>
      </S.LoginForm>
    </>
  );
};

LoginForm.propTypes = {
  handleSubmit: PropTypes.func,
};

export default LoginForm;
