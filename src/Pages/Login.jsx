import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../components/LoginForm/LoginForm';
import FormSection from '../components/FormSection/FormSection';
import GlobalContext from '../Context/GlobalContext';

const url = process.env.REACT_APP_BACK_URL;

const Login = () => {
  const navigate = useNavigate();
  const { setLoginError } = useContext(GlobalContext);

  const login = async (inputData) => {
    try {
      const res = await fetch(`${url}v1/users/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(inputData),
      });

      const data = await res.json();

      if (data.err) {
        return setLoginError(data.err);
      }

      if (!data) {
        return setLoginError('Please insert data!');
      }

      localStorage.setItem('token', data.token);
      setLoginError(null);
      return navigate('/calendar');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <FormSection>
      <LoginForm title={'Log in'} handleSubmit={(data) => login(data)} />
    </FormSection>
  );
};

export default Login;
