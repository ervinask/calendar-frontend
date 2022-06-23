import React from "react";
import PropTypes from "prop-types";
import * as S from "./Calendar.styles";
import Month from "../Month/Month";
import Weekdays from "../Weekdays/Weekdays";

const Calendar = ({ month }) => {
  return (
    <S.Calendar>
      <Weekdays />
      <Month month={month} />
    </S.Calendar>
  );
};

Calendar.propTypes = {};

export default Calendar;
