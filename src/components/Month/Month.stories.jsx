import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "../../theme";
import { getMonth } from "../../util";
import Month from "./Month";

export default {
  title: "Calendar/Month",
  component: Month,
};

export const primary = () => (
  <ThemeProvider theme={theme}>
    <Month month={getMonth()} />
  </ThemeProvider>
);
