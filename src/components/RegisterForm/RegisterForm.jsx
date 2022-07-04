import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import * as S from './RegisterForm.styles';
import { Link } from 'react-router-dom';
import GlobalContext from '../../Context/GlobalContext';
import Button from '../Button/Button';
import UserInput from '../UserInput/UserInput';
import Notification from '../Notification/Notification';

const RegisterForm = ({ handleSubmit, title }) => {
  const [registerValues, updateRegisterValues] = useState();
  const { registerError } = useContext(GlobalContext);

  return (
    <>
      <S.RegisterForm
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(registerValues);
        }}
      >
        {title && <S.FormTitle>{title}</S.FormTitle>}
        <UserInput
          handleChange={(email) => {
            updateRegisterValues({ ...registerValues, email: email });
          }}
          type="email"
          placeholder="example@example.com"
          label="Email"
        ></UserInput>
        <UserInput
          handleChange={(name) => {
            updateRegisterValues({ ...registerValues, name: name });
          }}
          type="text"
          placeholder="example"
          label="Name"
        ></UserInput>
        <UserInput
          handleChange={(password) => {
            updateRegisterValues({ ...registerValues, password: password });
          }}
          type="password"
          placeholder="*********"
          label="Password"
        ></UserInput>
        {registerError && <Notification>{registerError}</Notification>}
        <Button type="submit">Register</Button>
        <S.Login>
          <Link to="/login">Already have an account?</Link>
        </S.Login>
      </S.RegisterForm>
    </>
  );
};

RegisterForm.propTypes = {
  handleSubmit: PropTypes.func,
  title: PropTypes.string,
};

export default RegisterForm;
