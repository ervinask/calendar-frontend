import React, { useState } from 'react';
import * as S from './ChangePassForm.styles';
import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button';
import SettingsInput from '../SettingsInput/SettingsInput';
import Notification from '../Notification/Notification';

const url = process.env.REACT_APP_BACK_URL;

const ChangePassForm = () => {
  const [changePassValues, updateChangePassValues] = useState();
  const [changePassError, setChangePassError] = useState();
  const navigate = useNavigate();

  const changePass = async (passData) => {
    try {
      const res = await fetch(`${url}v1/users/change-password`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify(passData),
      });

      const data = await res.json();

      if (data.err) {
        return setChangePassError(data.err);
      }

      if (!data) {
        return setChangePassError('Please insert data!');
      }

      setChangePassError(null);
      localStorage.removeItem('token');
      return navigate('/');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <S.ChangePassForm
        onSubmit={(e) => {
          e.preventDefault();
          changePass(changePassValues);
        }}
      >
        <S.Title>Change your password</S.Title>
        <SettingsInput
          type="password"
          label="Old Password:"
          handleChange={(value) => updateChangePassValues({ ...changePassValues, oldPassword: value })}
        />
        <SettingsInput
          type="password"
          label="New Password:"
          handleChange={(value) => updateChangePassValues({ ...changePassValues, newPassword: value })}
        />
        {changePassError && <Notification>{changePassError}</Notification>}
        <Button type="submit">Change password</Button>
      </S.ChangePassForm>
    </>
  );
};

ChangePassForm.propTypes = {};

export default ChangePassForm;
