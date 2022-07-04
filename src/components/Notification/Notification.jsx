import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Notification.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';

const Notification = ({ children }) => {
  return (
    <S.Notification>
      <FontAwesomeIcon icon={faCircleExclamation} />
      {children}
    </S.Notification>
  );
};

Notification.propTypes = {
  children: PropTypes.string,
};

export default Notification;
