import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import * as S from './ChangePassForm.styles';
import { Link } from 'react-router-dom';
import GlobalContext from '../../Context/GlobalContext';
import Button from '../Button/Button';
import SettingsInput from '../SettingsInput/SettingsInput';
import Notification from '../Notification/Notification';

const ChangePassForm = ({}) => {
  const [changePassValues, updateChangePassValues] = useState();
  const [changePassError, setChangePassError] = useState();
  const [succesMessage, successMessage] = useState(false);

  const changePass = async (passData) => {
    try {
      const res = await fetch(`http://localhost:8080/v1/users/change-password`, {
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
      return setChangePassError('good');
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
