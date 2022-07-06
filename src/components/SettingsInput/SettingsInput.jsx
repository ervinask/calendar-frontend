import React from 'react';
import * as S from './SettingsInput.styles';
import { faPen, faLock } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import { useState } from 'react';

const SettingsInput = ({ label, handleChange, type, placeholder }) => {
  return (
    <S.InputCon>
      <S.Label>{label}</S.Label>
      <S.Input id={label} type={type} placeholder={placeholder} onChange={(e) => handleChange(e.target.value)} />
    </S.InputCon>
  );
};

SettingsInput.propTypes = {
  handleChange: PropTypes.func.isRequired,
  type: PropTypes.oneOf(['text', 'password', 'email']),
  value: PropTypes.string,
};

export default SettingsInput;
