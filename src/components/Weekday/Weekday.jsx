import React from "react";
import PropTypes from "prop-types";
import * as S from "./Weekday.styles";

const Weekday = ({ day }) => {
  return <S.Weekday>{day}</S.Weekday>;
};

Weekday.propTypes = {
  Weekday: PropTypes.number.isRequired,
};

export default Weekday;
