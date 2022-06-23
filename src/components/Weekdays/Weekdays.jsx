import React from "react";
import PropTypes from "prop-types";
import * as S from "./Weekdays.styles";
import Weekday from "../Weekday/Weekday";

const Weekdays = () => {
  const weekDaysNames = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  return (
    <S.Weekdays>
      {weekDaysNames.map((name) => (
        <Weekday day={name} />
      ))}
    </S.Weekdays>
  );
};

Weekdays.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Weekdays;
