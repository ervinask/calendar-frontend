import React from 'react';
import PropTypes from 'prop-types';
import * as S from './FormSection.styles';

const FormSection = ({ children }) => {
  return <S.FormSection>{children}</S.FormSection>;
};

FormSection.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FormSection;
