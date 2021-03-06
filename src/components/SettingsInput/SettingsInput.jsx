import React from 'react';
import * as S from './SettingsInput.styles';
import PropTypes from 'prop-types';

const SettingsInput = ({ label, handleChange, type, placeholder }) => {
  return (
    <S.InputCon>
      <S.Label>{label}</S.Label>
      <S.Input id={label} type={type} placeholder={placeholder} onChange={(e) => handleChange(e.target.value)} />
    </S.InputCon>
  );
};

SettingsInput.propTypes = {
  label: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  type: PropTypes.oneOf(['text', 'password', 'email']),
  value: PropTypes.string,
};

export default SettingsInput;
