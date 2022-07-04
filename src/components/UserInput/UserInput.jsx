import React from 'react';
import * as S from './UserInput.styles';

import PropTypes from 'prop-types';

const UserInput = ({ handleChange, type, placeholder, label }) => {
  return (
    <S.InputCon>
      <S.Label>{label}</S.Label>
      <S.Input type={type} placeholder={placeholder} onChange={(e) => handleChange(e.target.value)} />
    </S.InputCon>
  );
};

UserInput.propTypes = {
  handleChange: PropTypes.func.isRequired,
  type: PropTypes.oneOf(['text', 'password', 'email']),
  placeholder: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default UserInput;
