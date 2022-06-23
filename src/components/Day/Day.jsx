import React from "react";
import PropTypes from "prop-types";
import * as S from "./Day.styles";

const Day = ({ day, children, color }) => {
  function currentDay() {}

  return (
    <S.Day>
      <S.Text color={color}>{day.format("DD")}</S.Text>
      {children}
    </S.Day>
  );
};

Day.propTypes = {};

export default Day;
