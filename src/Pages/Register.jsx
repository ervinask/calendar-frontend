import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import RegisterForm from '../components/RegisterForm/RegisterForm';
import FormSection from '../components/FormSection/FormSection';
import GlobalContext from '../Context/GlobalContext';

const Register = () => {
  const navigate = useNavigate();
  const { setRegisterError } = useContext(GlobalContext);

  const register = async (inputData) => {
    try {
      const res = await fetch('http://localhost:8080/v1/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(inputData),
      });

      const data = await res.json();

      if (data.err) {
        return setRegisterError(data.err);
      }

      if (!data) {
        return setRegisterError('Please insert data!');
      }

      setRegisterError(null);
      return navigate('/login');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <FormSection>
      <RegisterForm
        title={'Create an account'}
        handleSubmit={(data) =>
          register({
            email: data.email,
            name: data.name,
            password: data.password,
          })
        }
      />
    </FormSection>
  );
};

export default Register;
