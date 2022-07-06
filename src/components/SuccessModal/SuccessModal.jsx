import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import * as S from './SuccessModal.styles';

const SuccessModal = ({}) => {
  return (
    <S.SuccessModal>
      <S.ModalCon>Password changed</S.ModalCon>
    </S.SuccessModal>
  );
};

export default SuccessModal;
