import React from "react";
import PropTypes from "prop-types";
import * as S from "./Month.styles";

import Day from "../Day/Day";

const Month = ({ month }) => {
  return (
    <S.Month>
      {month.map((row, index) => (
        <React.Fragment key={index}>
          {row.map((day, idx) => (
            <Day day={day.format("DD")} key={idx} />
          ))}
        </React.Fragment>
      ))}
    </S.Month>
  );
};

Month.propTypes = {
  month: PropTypes.func.isRequired,
};

export default Month;
