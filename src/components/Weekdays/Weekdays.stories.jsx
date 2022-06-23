import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "../../theme";
import Weekdays from "./Weekdays";

export default {
  title: "Weekdays",
  component: Weekdays,
};

export const primary = () => (
  <ThemeProvider theme={theme}>
    <Weekdays />
  </ThemeProvider>
);
