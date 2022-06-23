import React from "react";
import PropTypes from "prop-types";
import * as S from "./Day.styles";

const Day = ({ day, children }) => {
  return (
    <S.Day>
      <S.Text>{day}</S.Text>
    </S.Day>
  );
};

Day.propTypes = {
  day: PropTypes.number.isRequired,
};

export default Day;
